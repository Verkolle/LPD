package lv.lu.df.combop.solver;

import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.stream.Constraint;
import ai.timefold.solver.core.api.score.stream.ConstraintFactory;
import ai.timefold.solver.core.api.score.stream.ConstraintProvider;
import ai.timefold.solver.core.api.score.stream.Joiners;
import lv.lu.df.combop.domain.Vehicle;
import lv.lu.df.combop.domain.Visit;

import static ai.timefold.solver.core.api.score.stream.Joiners.equal;
public class StreamCalculator implements ConstraintProvider {
    @Override
    public Constraint[] defineConstraints(ConstraintFactory constraintFactory) {
        return new Constraint[] {
                capacityOverflow(constraintFactory),
                deliveryCongruity(constraintFactory),
                visitOutsideTw(constraintFactory),
                vehicleOutsideTw(constraintFactory),
                returnOutsideTw(constraintFactory),
                noEmployee(constraintFactory),
                tooManyEmployees(constraintFactory),
                visit2visit(constraintFactory),
                depot2visit(constraintFactory),
                visit2depot(constraintFactory),
                vehicleUsage(constraintFactory),
                visitTimeCost(constraintFactory),
                tooFewEmployees(constraintFactory)
        };
    }


    /** Hard kritēriji sākas šeit **/
    public Constraint capacityOverflow(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Visit.class)
                .join(Vehicle.class, equal(Visit::getVehicle, v -> v))
                .filter((visit, vehicle) ->
                        visit.getVolumeCollected() > vehicle.getCapacity())
                .penalize(HardSoftScore.ONE_HARD, (vi, ve) -> 100)
                .asConstraint("capacityOverflow");
    }

    public Constraint deliveryCongruity(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Visit.class)
                .join(Vehicle.class, equal(Visit::getVehicle, v -> v))
                .filter((visit, vehicle) ->
                        vehicle.getVisits().indexOf(visit.getOther()) == -1 ||
                        (visit.getVisitType() == Visit.VisitType.DELIVERY &&
                                vehicle.getVisits().indexOf(visit.getOther()) > vehicle.getVisits().indexOf(visit)))
                .penalize(HardSoftScore.ONE_HARD, (vi, ve) -> 500)
                .asConstraint("deliveryCongruity");
    }

    public Constraint visitOutsideTw(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Visit.class)
                .filter(visit -> visit.getDepartureTime() != null && visit.getDepartureTime() > visit.getTwFinish())
                .penalize(HardSoftScore.ONE_HARD, visit -> 1)
                .asConstraint("visitOutsideTw");
    }

    public Constraint vehicleOutsideTw(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Visit.class)
                .join(Vehicle.class, equal(Visit::getVehicle, v->v))
                .filter((visit, vehicle) -> visit.getDepartureTime() > vehicle.getTwFinish())
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("vehicleOutsideTw");
    }

    public Constraint returnOutsideTw(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Vehicle.class)
                .filter(vehicle -> !vehicle.getVisits().isEmpty())
                .join(Visit.class, Joiners.equal(v->v, Visit::getVehicle))
                .filter((vehicle, last) -> last.getNext() == null)
                .filter(((vehicle, last) -> last.getDepartureTime() +
                        last.getLocation().simpleTimeTo(vehicle.getDepot()) +
                        vehicle.getSrvFTime() > vehicle.getTwFinish()))
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("returnOutsideTw");
    }

    public Constraint noEmployee(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Vehicle.class)
                .filter(vehicle -> !vehicle.getVisits().isEmpty())
                .filter(vehicle -> vehicle.getEmployees().isEmpty())
                .penalize(HardSoftScore.ONE_HARD, ve -> 100)
                .asConstraint("noEmployee");
    }

    public Constraint tooManyEmployees(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Vehicle.class)
                .filter(vehicle -> !vehicle.getVisits().isEmpty())
                .filter(vehicle -> vehicle.getEmployees().size() > vehicle.getEmployeeCapacity())
                .penalize(HardSoftScore.ONE_HARD, ve -> 100)
                .asConstraint("tooManyEmployees");
    }


    /** Soft kritēriji sākas šeit **/
    public Constraint visit2visit(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Visit.class)
                .filter(visit -> visit.getNext() != null)
                .join(Vehicle.class, Joiners.equal(Visit::getVehicle, v->v))
                .penalize(HardSoftScore.ONE_SOFT, (visit, vehicle) ->
                        (int) Math.round(visit.getLocation().simpleDistanceTo(visit.getNext().getLocation())
                                * vehicle.getCostDistance() * 10))
                .asConstraint("visit2visit");
    }

    public Constraint depot2visit(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Visit.class)
                .filter(visit -> visit.getPrev() == null)
                .join(Vehicle.class, equal(Visit::getVehicle, v -> v))
                .penalize(HardSoftScore.ONE_SOFT, (visit, vehicle) ->
                        (int) Math.round(vehicle.getDepot().simpleDistanceTo(visit.getLocation()) * vehicle.getCostDistance() * 10))
                .asConstraint("depot2visit");
    }

    public Constraint visit2depot(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Visit.class)
                .filter(visit -> visit.getNext() == null)
                .join(Vehicle.class, equal(Visit::getVehicle, v -> v))
                .penalize(HardSoftScore.ONE_SOFT, (visit, vehicle) ->
                        (int) Math.round(visit.getLocation().simpleDistanceTo(vehicle.getDepot()) * vehicle.getCostDistance() * 10))
                .asConstraint("visit2depot");
    }

    public Constraint vehicleUsage(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Vehicle.class)
                .filter(vehicle -> !vehicle.getVisits().isEmpty())
                .penalize(HardSoftScore.ONE_SOFT, vehicle -> (int) Math.round(vehicle.getCostUsage() * 10))
                .asConstraint("vehicleUsage");
    }

    public Constraint visitTimeCost(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Visit.class)
                .penalize(HardSoftScore.ONE_SOFT, visit -> (int) Math.round(visit.getSrvTime()/1200))
                .asConstraint("visitTimeCost");
    }

    public Constraint tooFewEmployees(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Visit.class)
                .join(Vehicle.class, equal(Visit::getVehicle, v -> v))
                .filter((visit, vehicle) -> visit.getVolume() > 15)
                .filter((visit, vehicle) -> vehicle.getEmployees().size() < (int) Math.round(visit.getVolume()/10))
                .penalize(HardSoftScore.ONE_SOFT, (visit, vehicle) ->
                        (int) Math.round((visit.getVolume()-15) / vehicle.getEmployees().size()) * 10)
                .asConstraint("tooFewEmployees(");
    }
}

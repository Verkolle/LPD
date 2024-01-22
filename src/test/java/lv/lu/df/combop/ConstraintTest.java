package lv.lu.df.combop;

import ai.timefold.solver.test.api.score.stream.ConstraintVerifier;
import lv.lu.df.combop.domain.*;
import lv.lu.df.combop.solver.StreamCalculator;
import org.junit.jupiter.api.Test;

import java.util.List;
public class ConstraintTest {
    Employee EMPLOYEE = new Employee();
    Vehicle VEHICLE = new Vehicle();
    Visit VISIT1 = new Visit();
    Visit VISIT2 = new Visit();
    Location DEPOT = new Location(0.0,0.0,1.0);
    Location locVisit1 = new Location(4.0, 0.0,1.0);
    Location locVisit2 = new Location(4.0, 4.0,1.0);
    public ConstraintTest() {
        VISIT1.setVehicle(VEHICLE);
        VISIT1.setLocation(locVisit1);
        VISIT2.setVehicle(VEHICLE);
        VISIT2.setLocation(locVisit2);

        VISIT1.setNext(VISIT2);
        VISIT2.setPrev(VISIT1);
        VEHICLE.getVisits().addAll(List.of(VISIT1, VISIT2));
        VEHICLE.setDepot(DEPOT);
        VEHICLE.setCostDistance(1.0);
    }
    ConstraintVerifier<StreamCalculator, RoutingSolution> constraintVerifier = ConstraintVerifier.build(
            new StreamCalculator(), RoutingSolution.class, Vehicle.class, Visit.class);
}

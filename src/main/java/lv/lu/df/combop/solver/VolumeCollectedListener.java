package lv.lu.df.combop.solver;

import ai.timefold.solver.core.api.domain.variable.VariableListener;
import ai.timefold.solver.core.api.score.director.ScoreDirector;
import lv.lu.df.combop.domain.RoutingSolution;
import lv.lu.df.combop.domain.Visit;

public class VolumeCollectedListener implements VariableListener<RoutingSolution, Visit> {
    @Override
    public void beforeVariableChanged(ScoreDirector<RoutingSolution> scoreDirector, Visit visit) {

    }

    @Override
    public void afterVariableChanged(ScoreDirector<RoutingSolution> scoreDirector, Visit visit) {
        if (visit.getVehicle() == null) {
            scoreDirector.beforeVariableChanged(visit, "volumeCollected");
            visit.setVolumeCollected(0);
            scoreDirector.afterVariableChanged(visit, "volumeCollected");

            scoreDirector.beforeVariableChanged(visit, "arrivalTime");
            visit.setArrivalTime(null);
            scoreDirector.afterVariableChanged(visit, "arrivalTime");

        } else {
            Integer collected = visit.getPrev() != null ? visit.getPrev().getVolumeCollected() : 0;
            Integer arrival = visit.getPrev() != null && visit.getPrev().getArrivalTime() != null ?
                    visit.getPrev().getDepartureTime() + visit.getPrev().getLocation().simpleTimeTo(visit.getLocation()) :
                    visit.getVehicle().getTwStart() + visit.getVehicle().getSrvSTime() +
                            visit.getVehicle().getDepot().simpleTimeTo(visit.getLocation());


            Visit shadowVisit = visit;
            while (shadowVisit != null) {
                switch (shadowVisit.getVisitType()) {
                    case DELIVERY -> collected = collected - shadowVisit.getVolume();
                    case PICKUP -> collected = collected + shadowVisit.getVolume();
                }

                scoreDirector.beforeVariableChanged(shadowVisit, "volumeCollected");
                shadowVisit.setVolumeCollected(collected);
                scoreDirector.afterVariableChanged(shadowVisit, "volumeCollected");

                scoreDirector.beforeVariableChanged(shadowVisit, "arrivalTime");
                shadowVisit.setArrivalTime(arrival);
                scoreDirector.afterVariableChanged(shadowVisit, "arrivalTime");

                shadowVisit = shadowVisit.getNext();

                if (shadowVisit != null) {
                    arrival = shadowVisit.getPrev().getDepartureTime() +
                            shadowVisit.getPrev().getLocation().simpleTimeTo(shadowVisit.getLocation());
                }

            }
        }
    }

    @Override
    public void beforeEntityAdded(ScoreDirector<RoutingSolution> scoreDirector, Visit visit) {

    }

    @Override
    public void afterEntityAdded(ScoreDirector<RoutingSolution> scoreDirector, Visit visit) {

    }

    @Override
    public void beforeEntityRemoved(ScoreDirector<RoutingSolution> scoreDirector, Visit visit) {

    }

    @Override
    public void afterEntityRemoved(ScoreDirector<RoutingSolution> scoreDirector, Visit visit) {

    }
}

package lv.lu.df.combop.domain;

import ai.timefold.solver.core.api.domain.solution.*;
import ai.timefold.solver.core.api.domain.valuerange.CountableValueRange;
import ai.timefold.solver.core.api.domain.valuerange.ValueRangeFactory;
import ai.timefold.solver.core.api.domain.valuerange.ValueRangeProvider;
import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@PlanningSolution
@Getter @Setter @NoArgsConstructor
public class RoutingSolution {
    private static final Logger LOGGER = LoggerFactory.getLogger(RoutingSolution.class);

    private static final Integer HOUR = 3600;
    private static final Integer MAX_LON = 10;
    private static final Integer MAX_LAT = 10;
    private static final Integer MIN_LON = -10;
    private static final Integer MIN_LAT = -10;

    private String solutionId;
    @PlanningScore
    private HardSoftScore score;

    @PlanningEntityCollectionProperty
    private List<Vehicle> vehicleList = new ArrayList<>();

//    @ProblemFactProperty
//    @ValueRangeProvider(id = "employeeCount")
//    @JsonIdentityReference(alwaysAsId = false)
//    public CountableValueRange<Integer> getDelayRange() {
//        return ValueRangeFactory.createIntValueRange(1, 4);
//    }
//
//    private List<Employee> employeeList = new ArrayList<>();

    @ProblemFactCollectionProperty
    @ValueRangeProvider
    @JsonIdentityReference(alwaysAsId = false)
    private List<Visit> visitList = new ArrayList<>();

    @ProblemFactCollectionProperty
    private List<Location> locationList = new ArrayList<>();

    public void print() {
        this.getVehicleList().forEach(vehicle -> {
            LOGGER.info(vehicle.getRegNr() + "("+ vehicle.getCapacity() +")");
//            vehicle.getEmployees().forEach(employee -> {
//                LOGGER.info("     " + employee.getName() + " ");
//            });
            vehicle.getVisits().forEach(visit -> {
                LOGGER.info("     " + visit.getName() + " "
                        + visit.getVisitType() + " (" + visit.getVolume() + ")  " + visit.getVehicle().getRegNr()
                        + " col=" + visit.getVolumeCollected()
                        + " arrT=" + formatTime(visit.getArrivalTime())
                        + " depT=" + formatTime(visit.getDepartureTime())
                );
            });
        });
    }

    private static int problemId = 0;
    private static Integer getProblemId() { problemId++; return problemId;}

    public static RoutingSolution generateData() {
        RoutingSolution problem = new RoutingSolution();
        problem.setSolutionId(RoutingSolution.getProblemId().toString());

        Employee e1 = new Employee("1", "Jānis Bērziņš");
        Employee e2 = new Employee("2", "Pēteris Ozols");
        Employee e3 = new Employee("3", "Mārtiņš Liepa");
        Employee e4 = new Employee("4", "Artūrs Bērziņš");

        Location depotLoc = new Location(0.0, 0.0, 1.0);
        Location l1 = new Location(0.0, 1.0, 1.0);
        Location l2 = new Location(0.0, 3.0, 0.8);
        Location l3 = new Location(0.0, -4.0, 0.8);
        Location l4 = new Location(0.0, -3.0, 0.1);

        Vehicle v1 = new Vehicle();
        v1.setRegNr("AA0000");
        v1.setCapacity(25);
        v1.setDepot(depotLoc);
        v1.setTwStart(8 * HOUR);
        v1.setTwFinish(18 * HOUR);
        v1.setSrvSTime(600);
        v1.setSrvFTime(600);
        v1.setCostDistance(0.1);
        v1.setCostWorkTime(7.0);
        v1.setCostUsage(30.0);
        v1.setEmployeeCapacity(4);
        v1.setEmployees(List.of(e1, e2));

        Vehicle v2 = new Vehicle();
        v2.setRegNr("BB1111");
        v2.setCapacity(15);
        v2.setDepot(depotLoc);
        v2.setTwStart(10 * HOUR);
        v2.setTwFinish(20 * HOUR);
        v2.setSrvSTime(600);
        v2.setSrvFTime(600);
        v2.setCostDistance(0.1);
        v2.setCostWorkTime(7.0);
        v2.setCostUsage(30.0);
        v2.setEmployeeCapacity(2);
        v2.setEmployees(List.of(e3));


        Visit a1 = new Visit();
        a1.setName("Klients1");
        a1.setVolume(13);
        a1.setLocation(l1);
        a1.setSrvTime(100 * 60);
        a1.setTwStart(8 * HOUR);
        a1.setTwFinish(20 * HOUR);
        a1.setVisitType(Visit.VisitType.PICKUP);
        a1.setId("Klients1 "+ Visit.VisitType.PICKUP);

        Visit a2 = new Visit();
        a2.setName("Klients1");
        a2.setVolume(13);
        a2.setLocation(l2);
        a2.setSrvTime(120 * 60);
        a2.setTwStart(8 * HOUR);
        a2.setTwFinish(20 * HOUR);
        a2.setVisitType(Visit.VisitType.DELIVERY);
        a2.setId("Klients1 "+Visit.VisitType.DELIVERY);

        a1.setOther(a2);
        a2.setOther(a1);

        Visit a3 = new Visit();
        a3.setName("Klients2");
        a3.setVolume(20);
        a3.setLocation(l3);
        a3.setSrvTime(240 * 60);
        a3.setTwStart(6 * HOUR);
        a3.setTwFinish(18 * HOUR);
        a3.setVisitType(Visit.VisitType.PICKUP);
        a3.setId("Klients1 "+Visit.VisitType.DELIVERY);

        Visit a4 = new Visit();
        a4.setName("Klients2");
        a4.setVolume(20);
        a4.setLocation(l4);
        a4.setSrvTime(240 * 60);
        a4.setTwStart(6 * HOUR);
        a4.setTwFinish(18 * HOUR);
        a4.setVisitType(Visit.VisitType.DELIVERY);
        a4.setId("Klients1 "+Visit.VisitType.DELIVERY);

        a3.setOther(a4);
        a4.setOther(a3);


//        problem.getEmployeeList().addAll(List.of(e1, e2, e3, e4));
        problem.getVehicleList().addAll(List.of(v1, v2));
        problem.getLocationList().addAll(List.of(depotLoc, l1, l2, l3, l4));

        problem.getVisitList().addAll(List.of(a1, a2, a3, a4));

        return problem;
    }


    public static RoutingSolution generateData(int scale) { // scale number of clients
        RoutingSolution problem = new RoutingSolution();
        problem.setSolutionId(RoutingSolution.getProblemId().toString());

        Random random = new Random();
        Location depotLoc = new Location(MIN_LAT + (MAX_LAT - MIN_LAT) * random.nextDouble(),
                MIN_LON + (MAX_LON - MIN_LON) * random.nextDouble(), 0.5);

        // vehicles: scale / 3 + 1
        for (int i = 1; i <= scale / 3 + 1; i++) {
            Vehicle v1 = new Vehicle();
            v1.setRegNr("AA" + i);
            if (i <= (0.1 * scale)+1) {
                v1.setCapacity(30+random.nextInt(10));
            } else {
                v1.setCapacity(15 + random.nextInt(15));
            }
            v1.setTwStart(8 * HOUR);
            v1.setTwFinish(20 * HOUR);
            v1.setSrvSTime(300);
            v1.setSrvFTime(300);
            v1.setMaxWorkTime(HOUR * 10);
            //Location depotLoc = new Location(random.nextDouble(100), random.nextDouble(100));

            v1.setDepot(depotLoc);
            v1.setCostDistance(0.1);
            v1.setCostWorkTime(7.0);
            v1.setCostUsage(30.0);

            v1.setEmployeeCapacity(1+random.nextInt(4));
            for (int j = 1; j <= v1.getEmployeeCapacity(); j++) {
                Employee e = new Employee("V"+i+"E"+j, "V"+i+"E"+j);
                v1.getEmployees().add(e);
//                problem.getEmployeeList().add(e);
            }

            problem.getVehicleList().add(v1);
            problem.getLocationList().add(depotLoc);
        }

        for (int i = 1; i <= scale; i++) {
            Visit a1 = new Visit();
            a1.setName("Client" + i);

            if (i <= (0.1 * scale)) {
                a1.setVolume(21+random.nextInt(10));
            } else {
                a1.setVolume(1+random.nextInt(20));
            }

            a1.setVolume(random.nextInt(30));
            a1.setVisitType(Visit.VisitType.PICKUP);
            Location a1Loc = new Location(MIN_LAT + (MAX_LAT - MIN_LAT) * random.nextDouble(),
                    MIN_LON + (MAX_LON - MIN_LON) * random.nextDouble(), random.nextDouble()/2 + 0.5);
            a1.setLocation(a1Loc);
            a1.setSrvTime();
            a1.setTwStart(8 * HOUR + random.nextInt(HOUR * 2));
            a1.setTwFinish(22 * HOUR - random.nextInt(HOUR * 2));
            a1.setId("Klients" + i + " " + Visit.VisitType.PICKUP);

            Visit a2 = new Visit();
            a2.setName(a1.getName());
            a2.setVolume(a1.getVolume());
            a2.setVisitType(Visit.VisitType.DELIVERY);
            Location a2Loc = new Location(MIN_LAT + (MAX_LAT - MIN_LAT) * random.nextDouble(),
                    MIN_LON + (MAX_LON - MIN_LON) * random.nextDouble(), random.nextDouble()/2 + 0.5);
            a2.setLocation(a2Loc);
            a2.setSrvTime();
            a2.setSrvTime(600);
            a2.setTwStart(8 * HOUR + random.nextInt(HOUR * 2));
            a2.setTwFinish(22 * HOUR - random.nextInt(HOUR * 2));
            a2.setId("Klients" + i + " " + Visit.VisitType.DELIVERY);

            a1.setOther(a2);
            a2.setOther(a1);

            problem.getVisitList().add(a1);
            problem.getVisitList().add(a2);
            problem.getLocationList().add(a1Loc);
            problem.getLocationList().add(a2Loc);
        }

        return problem;
    }

    public static String formatTime(Integer timeInSeconds) {
        if (timeInSeconds != null) {
            long HH = timeInSeconds / 3600;
            long MM = (timeInSeconds % 3600) / 60;
            long SS = timeInSeconds % 60;
            return String.format("%02d:%02d:%02d", HH, MM, SS);
        } else return "null";
    }
}

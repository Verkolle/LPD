package lv.lu.df.combop.domain;

import java.util.ArrayList;
import java.util.List;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.core.api.domain.variable.PlanningListVariable;
import ai.timefold.solver.core.api.domain.variable.PlanningVariable;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@PlanningEntity
@Getter @Setter @NoArgsConstructor
@JsonIdentityInfo(scope = Vehicle.class,
        property = "regNr",
        generator = ObjectIdGenerators.PropertyGenerator.class)
public class Vehicle {
    // Būtiskākā mašīnas informācija
    private String regNr;
    private Integer capacity;
    private Location depot;

    // Lietas, kas var mainīties (cerams, ka man sanāks piedabūt Employees, lai strādātu) (っ °Д °;)っ
    @PlanningListVariable
    private List<Visit> visits = new ArrayList<>();

    // Es vēlējos mēģināt uztaisīt, ka arī Employee klases objektus varētu optimizēt, bet
    // Timefold izdod, ka "Defining multiple list variables across the model is currently not supported."
    private List<Employee> employees = new ArrayList<>();

    // Pēc tam arī pamēģināju sakombinēt ar skaitlisku Integer vērtību "employeeCount", jo pašlaik nav
    // implementēta nekāda atšķirība starp "Employee" klases objektiem, kas ietekmētu risinājumu atkarībā no
    // specifiski izvēlētā Employee, bet atkal saņēmu:
    // "Combining basic variables with list variables on a single planning entity is not supported." (。﹏。*)
    // Tāpēc palieku pie tīri manuālas Employee pielikšanas, kura ir ierobežota ar to, ka nevar būt 0, ja mašīna tiek
    // izmantota, kā arī darbiniekiem ir jāspēj normāli satilpt mašīnā (employeeCapacity).
//    @PlanningVariable(valueRangeProviderRefs = {"employeeCount"})
//    private Integer employeeCount;
    private Integer employeeCapacity;

    // Darba laika intervāli un apkopes laiki uzsākot un beidzot darbu
    private Integer twStart;
    private Integer twFinish;
    private Integer srvSTime;
    private Integer srvFTime;

    // Maksimālais darba ilgums
    private Integer maxWorkTime;

    // Darba, distances un citas izmaksas
    private Double costWorkTime;
    private Double costDistance;
    private Double costUsage;

    @Override
    public String toString() {
        return this.getRegNr();
    }
}

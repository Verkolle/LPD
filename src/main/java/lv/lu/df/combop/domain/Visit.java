package lv.lu.df.combop.domain;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.core.api.domain.variable.*;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lv.lu.df.combop.solver.VolumeCollectedListener;

@PlanningEntity
@Getter @Setter @NoArgsConstructor
@JsonIdentityInfo(scope = Visit.class,
        property = "id",
        generator = ObjectIdGenerators.PropertyGenerator.class)
public class Visit {
    // Būtiskākā apmeklējuma informācija
    public enum VisitType {PICKUP, DELIVERY}
    private String id;
    private String name;
    private Integer volume;
    private Location location;
    private VisitType visitType;

    @JsonIdentityReference(alwaysAsId = true)
    private Visit other;

    // Laika intervālu informācij
    private Integer srvTime;
    private Integer twStart;
    private Integer twFinish;

    public Visit(String name, Integer vol, Location loc, VisitType vType) {
        this.name = name;
        this.volume = vol;
        this.location = loc;
        this.visitType = vType;
    }

    // Atribūti, kas mainās risinot RoutingSolution
    @InverseRelationShadowVariable(sourceVariableName = "visits")
    @JsonIdentityReference(alwaysAsId = true)
    private Vehicle vehicle;

    @NextElementShadowVariable(sourceVariableName = "visits")
    @JsonIdentityReference(alwaysAsId = true)
    private Visit next;

    @PreviousElementShadowVariable(sourceVariableName = "visits")
    @JsonIdentityReference(alwaysAsId = true)
    private Visit prev;

    @ShadowVariable(variableListenerClass = VolumeCollectedListener.class, sourceVariableName = "vehicle")
    @ShadowVariable(variableListenerClass = VolumeCollectedListener.class, sourceVariableName = "prev")
    private Integer volumeCollected = 0;

    @PiggybackShadowVariable(shadowVariableName = "volumeCollected")
    private Integer arrivalTime = null;

    @JsonIgnore
    public Integer getDepartureTime() {
//        Integer modSrvTime = this.srvTime;
//        if (this.vehicle != null) {
//            if (this.vehicle.getEmployees() != null) {
//                modSrvTime = Math.max(Math.round(this.srvTime / this.vehicle.getEmployees().size()),
//                        Math.round(this.srvTime/5));
//            }
//        }
        return this.getArrivalTime() != null ?
                Math.max(this.getArrivalTime(), this.getTwStart()) + this.getSrvTime() :
                null;
    }


    public void setSrvTime() {
        this.srvTime = (int) Math.round(this.getLocation().getDiff() * this.getVolume() * 500);
    }

    @Override
    public String toString() {
        return this.getName() + " arrT=" + RoutingSolution.formatTime(this.getArrivalTime())
                + " depT=" + RoutingSolution.formatTime(this.getDepartureTime());
    }
}

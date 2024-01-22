package lv.lu.df.combop.domain;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//@PlanningEntity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@JsonIdentityInfo(scope = Employee.class,
        property = "name",
        generator = ObjectIdGenerators.PropertyGenerator.class)
public class Employee {
    private String employeeID;
    private String name;

    private Vehicle vehicle;

    public Employee(String employeeID, String name) {
        this.employeeID = employeeID;
        this.name = name;
    }
}

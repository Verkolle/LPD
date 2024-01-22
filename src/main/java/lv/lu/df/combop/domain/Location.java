package lv.lu.df.combop.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashMap;
import java.util.Map;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Location {
    private Double lat;
    private Double lon;
    private Double diff;
    private static Integer SPEED = 70; // km/h


//    public Location(Double lat, Double lon, Double diff) {
//        this.lat = lat;
//        this.lon = lon;
//        this.diff = diff;
//    }

//    @JsonIgnore
//    private Map<Location, Double> distanceMap = new HashMap<>();
//
//    @JsonIgnore
//    private Map<Location, Integer> timeMap = new HashMap<>();
//
//
//    public Double distanceTo(Location location) {
//        return this.distanceMap.get(location);
//    }
//
//    public Integer timeTo(Location location) {
//        return this.timeMap.get(location);
//    }

    public Double simpleDistanceTo(Location location) {
        return Math.sqrt(Math.pow(this.lat - location.lat, 2)
                + Math.pow(this.lon - location.lon,2));
    }

    public Integer simpleTimeTo(Location location) {
        return (int) Math.round((this.simpleDistanceTo(location)*5 / SPEED) * 3600);
    }
}

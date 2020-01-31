package fit.body.tms.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "@id")
public class Series extends BaseEntity{


    public static final Set<String> relatedListFields = Stream.of("id").collect(Collectors.toUnmodifiableSet());

    private Integer repetitions;
    private Integer weight;
    @Max(10)
    @Min(1)
    private Integer RPE;

    @ManyToOne
    @JoinColumn(name = "exercise_id")
    private Exercise exercise;

    public Integer getRepetitions() {
        return repetitions;
    }

    public void setRepetitions(Integer repetitions) {
        this.repetitions = repetitions;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public Integer getRPE() {
        return RPE;
    }

    public void setRPE(Integer RPE) {
        this.RPE = RPE;
    }

    public Exercise getExercise() {
        return exercise;
    }

    public void setExercise(Exercise exercise) {
        this.exercise = exercise;
    }
}

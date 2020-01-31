package fit.body.tms.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "@id")
public class TrainingDay {

    @Id
    @GeneratedValue(generator = "global-id")
    @GenericGenerator(name = "global-id", strategy = "fit.body.tms.entities.UI_IdGenerator")
    private String id;
    private String name;
    private String description;
    private Integer dayNumber;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "training_plan_id")
    private TrainingPlan trainingPlan;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "trainingDay", cascade = CascadeType.REMOVE)
    @Fetch(value = FetchMode.SUBSELECT)
    private List<TrainingDayExercise> trainingDayExercises;

    public TrainingDay() {
        this.trainingDayExercises = new ArrayList<>();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Optional<TrainingPlan> getTrainingPlan() {
        return Optional.ofNullable(trainingPlan);
    }

    public void setTrainingPlan(TrainingPlan trainingPlan) {
        this.trainingPlan = trainingPlan;
    }

    public List<TrainingDayExercise> getTrainingDayExercises() {
        return trainingDayExercises;
    }

    public void setTrainingDayExercises(List<TrainingDayExercise> trainingDayExercises) {
        this.trainingDayExercises = trainingDayExercises;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getDayNumber() {
        return dayNumber;
    }

    public void setDayNumber(Integer dayNumber) {
        this.dayNumber = dayNumber;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

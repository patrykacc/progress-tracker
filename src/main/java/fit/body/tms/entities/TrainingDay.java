package fit.body.tms.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import fit.body.tms.dtos.TrainingDayDTO;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "@id")
public class TrainingDay {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
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

    public TrainingDay(Long id) {
        this.id = id;
        this.trainingDayExercises = new ArrayList<>();
    }

    public TrainingDay(TrainingDayDTO trainingDayDTO) {
        this.id = trainingDayDTO.getId();
        this.name = trainingDayDTO.getName();
        this.dayNumber = trainingDayDTO.getDayNumber();
        this.description = trainingDayDTO.getDescription();
        trainingDayDTO.getTrainingPlan().ifPresent(trainingPlanDTO -> this.trainingPlan = new TrainingPlan(trainingPlanDTO.getId()));
        trainingDayDTO.getTrainingDayExercises().forEach(trainingDayExerciseDTO -> trainingDayExerciseDTO.setTrainingDay(trainingDayDTO));
        this.trainingDayExercises = trainingDayDTO.getTrainingDayExercises().stream().map(TrainingDayExercise::new).collect(Collectors.toList());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

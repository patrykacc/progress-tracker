package fit.body.tms.entities;

import fit.body.tms.dtos.TrainingDayDTO;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Entity
public class TrainingDay {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;

    @ManyToOne
    @JoinColumn(name = "training_plan_id")
    private TrainingPlan trainingPlan;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "trainingDay")
    @Fetch(value = FetchMode.SUBSELECT)
    private List<TrainingDayExercise> trainingDayExercises;

    public TrainingDay() {
    }

    public TrainingDay(TrainingDayDTO trainingDayDTO) {
        this.id = trainingDayDTO.getId();
        this.name = trainingDayDTO.getName();
        trainingDayDTO.getTrainingPlan().ifPresent(trainingPlanDTO -> this.trainingPlan = new TrainingPlan(trainingPlanDTO));
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
}

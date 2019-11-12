package fit.body.tms.dtos;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import fit.body.tms.entities.TrainingDay;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@JsonIdentityInfo(generator = ObjectIdGenerators.None.class, property = "id")
public class TrainingDayDTO {

    private Long id;
    private String name;
    private Integer dayNumber;
    private TrainingPlanDTO trainingPlan;
    private List<TrainingDTO> trainings;
    private List<TrainingDayExerciseDTO> trainingDayExercises;

    public TrainingDayDTO() {
        this.trainings = new ArrayList<>();
        this.trainingDayExercises = new ArrayList<>();
    }

    public TrainingDayDTO(TrainingDay trainingDay) {
        this.id = trainingDay.getId();
        this.name = trainingDay.getName();
        this.trainingDayExercises = trainingDay.getTrainingDayExercises().stream().map(TrainingDayExerciseDTO::new).collect(Collectors.toList());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Optional<TrainingPlanDTO> getTrainingPlan() {
        return Optional.ofNullable(trainingPlan);
    }

    public void setTrainingPlan(TrainingPlanDTO trainingPlan) {
        this.trainingPlan = trainingPlan;
    }

    public List<TrainingDTO> getTrainings() {
        return trainings;
    }

    public void setTrainings(List<TrainingDTO> trainings) {
        this.trainings = trainings;
    }

    public List<TrainingDayExerciseDTO> getTrainingDayExercises() {
        return trainingDayExercises;
    }

    public void setTrainingDayExercises(List<TrainingDayExerciseDTO> trainingDayExercises) {
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
}

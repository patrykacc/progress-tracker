package fit.body.tms.dtos;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import fit.body.tms.entities.TrainingDay;

import java.util.List;
import java.util.stream.Collectors;

@JsonIdentityInfo(generator = ObjectIdGenerators.None.class, property = "id")
public class TrainingDayDTO {

    private Long id;
    private TrainingPlanDTO trainingPlan;
    private List<UserDTO> users;
    private List<TrainingDTO> trainings;
    private List<TrainingDayExerciseDTO> trainingDayExercises;

    public TrainingDayDTO() {
    }

    public TrainingDayDTO(TrainingDay trainingDay) {
        this.id = trainingDay.getId();
        this.trainingPlan = new TrainingPlanDTO(trainingDay.getTrainingPlan());
        this.users = trainingDay.getUsers().stream().map(UserDTO::new).collect(Collectors.toList());
        this.trainings = trainingDay.getTrainings().stream().map(TrainingDTO::new).collect(Collectors.toList());
        this.trainingDayExercises = trainingDay.getTrainingDayExercises().stream().map(TrainingDayExerciseDTO::new).collect(Collectors.toList());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TrainingPlanDTO getTrainingPlan() {
        return trainingPlan;
    }

    public void setTrainingPlan(TrainingPlanDTO trainingPlan) {
        this.trainingPlan = trainingPlan;
    }

    public List<UserDTO> getUsers() {
        return users;
    }

    public void setUsers(List<UserDTO> users) {
        this.users = users;
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
}

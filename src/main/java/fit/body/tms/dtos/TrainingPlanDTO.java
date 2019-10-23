package fit.body.tms.dtos;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import fit.body.tms.entities.TrainingPlan;

import java.util.List;
import java.util.stream.Collectors;

@JsonIdentityInfo(generator = ObjectIdGenerators.None.class, property = "id")
public class TrainingPlanDTO {


    private Long id;
    private List<TrainingDayDTO> trainingDays;
    private UserDTO user;

    public TrainingPlanDTO() {
    }
    public TrainingPlanDTO(TrainingPlan trainingPlan) {
        this.id = trainingPlan.getId();
        this.trainingDays = trainingPlan.getTrainingDays().stream().map(TrainingDayDTO::new).collect(Collectors.toList());
        this.user = new UserDTO(trainingPlan.getUser());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<TrainingDayDTO> getTrainingDays() {
        return trainingDays;
    }

    public void setTrainingDays(List<TrainingDayDTO> trainingDays) {
        this.trainingDays = trainingDays;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }
}

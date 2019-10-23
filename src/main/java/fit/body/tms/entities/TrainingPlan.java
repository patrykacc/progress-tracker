package fit.body.tms.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import fit.body.tms.dtos.TrainingPlanDTO;

import javax.persistence.*;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class TrainingPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @OneToMany
    private List<TrainingDay> trainingDays;
    @ManyToOne
    private User user;

    public TrainingPlan() {
    }

    public TrainingPlan(TrainingPlanDTO trainingPlanDTO) {
        this.id = trainingPlanDTO.getId();
        this.trainingDays = trainingPlanDTO.getTrainingDays().stream().map(TrainingDay::new).collect(Collectors.toList());
        this.user = new User(trainingPlanDTO.getUser());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<TrainingDay> getTrainingDays() {
        return trainingDays;
    }

    public void setTrainingDays(List<TrainingDay> trainingDays) {
        this.trainingDays = trainingDays;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

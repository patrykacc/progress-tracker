package fit.body.tms.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import fit.body.tms.dtos.TrainingPlanDTO;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class TrainingPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String description;
    private Integer trainingDaysNumber;
    @OneToMany
    private List<TrainingDay> trainingDays;

    @ManyToOne
    private Person person;

    public TrainingPlan() {
        this.trainingDays = new ArrayList<>();
    }

    public TrainingPlan(TrainingPlanDTO trainingPlanDTO) {
        this.id = trainingPlanDTO.getId();
        this.trainingDays = trainingPlanDTO.getTrainingDays().stream().map(TrainingDay::new).collect(Collectors.toList());
        this.person = new Person(trainingPlanDTO.getUser());
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

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }
}

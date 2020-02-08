package fit.body.tms.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import fit.body.tms.repositories.TrainingPlanListener;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Entity
@EntityListeners(TrainingPlanListener.class)
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "@id")
public class TrainingPlan {

    @Id
    @GeneratedValue(generator = "global-id")
    @GenericGenerator(name = "global-id", strategy = "fit.body.tms.entities.UI_IdGenerator")
    private String id;
    private String name;
    private String description;
    private Integer trainingDaysCount;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "trainingPlan", cascade = CascadeType.REMOVE)
    @Fetch(value = FetchMode.SUBSELECT)
    private List<TrainingDay> trainingDays;

    @OneToOne
    @JoinColumn(name = "person_id")
    private Person person;

    public TrainingPlan() {
        this.trainingDays = new ArrayList<>();
    }

    public TrainingPlan(String id) {
        this.id = id;
        this.trainingDays = new ArrayList<>();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<TrainingDay> getTrainingDays() {
        return trainingDays;
    }

    public void setTrainingDays(List<TrainingDay> trainingDays) {
        this.trainingDays = trainingDays;
    }

    public Optional<Person> getPerson() {
        return Optional.ofNullable(person);
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getTrainingDaysCount() {
        return trainingDaysCount;
    }

    public void setTrainingDaysCount(Integer trainingDaysCount) {
        this.trainingDaysCount = trainingDaysCount;
    }
}

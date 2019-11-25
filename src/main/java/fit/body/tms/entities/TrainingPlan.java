package fit.body.tms.entities;

import fit.body.tms.dtos.TrainingPlanDTO;
import fit.body.tms.repositories.TrainingPlanListener;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Entity
@EntityListeners(TrainingPlanListener.class)
public class TrainingPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String description;
    private Integer trainingDaysNumber;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "trainingPlan", cascade = CascadeType.REMOVE)
    @Fetch(value = FetchMode.SUBSELECT)
    private List<TrainingDay> trainingDays;

    @ManyToOne
    private Person person;

    public TrainingPlan() {
        this.trainingDays = new ArrayList<>();
    }

    public TrainingPlan(Long id) {
        this.id = id;
        this.trainingDays = new ArrayList<>();
    }

    public TrainingPlan(TrainingPlanDTO trainingPlanDTO) {
        this.id = trainingPlanDTO.getId();
        this.name = trainingPlanDTO.getName();
        this.description = trainingPlanDTO.getDescription();
        this.trainingDays = trainingPlanDTO.getTrainingDays().stream().map(TrainingDay::new).collect(Collectors.toList());
        this.trainingDays.forEach(trainingDay -> trainingDay.setTrainingPlan(new TrainingPlan(this.getId())));
        trainingPlanDTO.getPerson().ifPresent(user -> this.person = new Person(user));
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

    public Integer getTrainingDaysNumber() {
        return trainingDaysNumber;
    }

    public void setTrainingDaysNumber(Integer trainingDaysNumber) {
        this.trainingDaysNumber = trainingDaysNumber;
    }
}

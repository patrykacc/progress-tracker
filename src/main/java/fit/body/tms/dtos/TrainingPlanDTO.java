package fit.body.tms.dtos;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import fit.body.tms.entities.TrainingPlan;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@JsonIdentityInfo(generator = ObjectIdGenerators.None.class, property = "id")
public class TrainingPlanDTO {

    private Long id;
    private String name;
    private String description;
    private List<TrainingDayDTO> trainingDays;
    private PersonDTO person;

    public TrainingPlanDTO() {
        trainingDays = new ArrayList<>();
    }

    public TrainingPlanDTO(TrainingPlan trainingPlan) {
        this.id = trainingPlan.getId();
        this.name = trainingPlan.getName();
        this.description = trainingPlan.getDescription();
        this.trainingDays = trainingPlan.getTrainingDays().stream().map(TrainingDayDTO::new).collect(Collectors.toList());
        trainingPlan.getPerson().ifPresent(person -> this.person = new PersonDTO(person));
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

    public Optional<PersonDTO> getPerson() {
        return Optional.ofNullable(person);
    }

    public void setPerson(PersonDTO person) {
        this.person = person;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

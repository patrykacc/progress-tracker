package fit.body.tms.dtos;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import fit.body.tms.entities.Person;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.List;


@JsonIdentityInfo(generator = ObjectIdGenerators.None.class, property = "id")
public class PersonDTO {

    public PersonDTO(Person person) {
        this.email = person.getEmail();
        this.id = person.getId();
        this.authority = person.getAuthority();
        this.firstName = person.getFirstName();
        this.lastName = person.getLastName();
    }

    @Email
    @NotBlank
    private String email;
    private Long id;
    @NotBlank
    private String authority;
    @NotBlank
    private String firstName;
    @NotBlank
    private String lastName;

    private List<TrainingDTO> trainings;

    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }

    public PersonDTO() {
    }

    public PersonDTO(Long id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return this.email;
    }

//    private TrainingPlan activeTrainingPlan;

    @Override
    public String toString() {
        return "User{" +
                "email='" + email + '\'' +
                ", id=" + id +
                ", authority='" + authority + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<TrainingDTO> getTrainings() {
        return trainings;
    }

    public void setTrainings(List<TrainingDTO> trainings) {
        this.trainings = trainings;
    }

    /*public TrainingPlan getActiveTrainingPlan() {
        return activeTrainingPlan;
    }

    public void setActiveTrainingPlan(TrainingPlan activeTrainingPlan) {
        this.activeTrainingPlan = activeTrainingPlan;
    }*/


}

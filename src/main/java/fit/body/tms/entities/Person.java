package fit.body.tms.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import fit.body.tms.dtos.PersonDTO;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;


@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Person {

    @Email
    @NotBlank
    private String email;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotBlank
    private String password;
    @NotBlank
    private String authority;
    @NotBlank
    private String firstName;
    @NotBlank
    private String lastName;

    public Person() {}
    public Person(Long id) {
        this.id = id;
    }
    public Person(PersonDTO personDTO) {
        this.email = personDTO.getEmail();
        this.id = personDTO.getId();
        this.authority = personDTO.getAuthority();
        this.firstName = personDTO.getFirstName();
        this.lastName = personDTO.getLastName();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return this.email;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "training_plan_id")
    private TrainingPlan activeTrainingPlan;

    @Override
    public String toString() {
        return "User{" +
                "email='" + email + '\'' +
                ", id=" + id +
                ", password='" + password + '\'' +
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

    public TrainingPlan getActiveTrainingPlan() {
        return activeTrainingPlan;
    }

    public void setActiveTrainingPlan(TrainingPlan activeTrainingPlan) {
        this.activeTrainingPlan = activeTrainingPlan;
    }
}

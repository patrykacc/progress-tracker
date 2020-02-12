package fit.body.tms.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import fit.body.tms.repositories.PersonListener;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import static org.hibernate.annotations.CascadeType.DETACH;


@Entity
@EntityListeners(PersonListener.class)
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "@id")
public class Person {

    @Email
    @NotBlank
    private String email;

    @Id
    @GeneratedValue(generator = "global-id")
    @GenericGenerator(name = "global-id", strategy = "fit.body.tms.entities.UI_IdGenerator")
    private String id;

    private String name;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    @NotBlank
    private String authority;
    @NotBlank
    private String firstName;
    @NotBlank
    private String lastName;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "active_training_plan_id")
    @Cascade(DETACH)
    private TrainingPlan activeTrainingPlan;

    public Person() {}
    public Person(String id) {
        this.id = id;
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

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public TrainingPlan getActiveTrainingPlan() {
        return activeTrainingPlan;
    }

    public void setActiveTrainingPlan(TrainingPlan activeTrainingPlan) {
        this.activeTrainingPlan = activeTrainingPlan;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

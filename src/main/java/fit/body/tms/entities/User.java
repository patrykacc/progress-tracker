package fit.body.tms.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import fit.body.tms.dtos.UserDTO;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.List;


@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class User {

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

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "user", cascade = CascadeType.ALL)
    @Fetch(FetchMode.SUBSELECT)
    private List<Training> trainings;

    public User() {}
    public User(Long id) {
        this.id = id;
    }
    public User(UserDTO DTO) {
        this.email = DTO.getEmail();
        this.id = DTO.getId();
        this.authority = DTO.getAuthority();
        this.firstName = DTO.getFirstName();
        this.lastName = DTO.getLastName();
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

    public List<Training> getTrainings() {
        return trainings;
    }

    public void setTrainings(List<Training> trainings) {
        this.trainings = trainings;
    }

    public TrainingPlan getActiveTrainingPlan() {
        return activeTrainingPlan;
    }

    public void setActiveTrainingPlan(TrainingPlan activeTrainingPlan) {
        this.activeTrainingPlan = activeTrainingPlan;
    }
}

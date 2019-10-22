package fit.body.tms.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.List;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class TrainingDay {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @JsonBackReference
    @ManyToOne
    private TrainingPlan trainingPlan;

    @JsonManagedReference
    @OneToMany
    private List<User> users;

    @JsonManagedReference("trainingDay-trainings")
    @OneToMany
    private List<Training> trainings;

    @JsonManagedReference("trainingDay-exercises")
    @OneToMany
    private List<TrainingDayExercise> trainingDayExercises;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}

package fit.body.tms.entities;

import javax.persistence.*;
import java.util.List;

@Entity
public class TrainingDay {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private TrainingPlan trainingPlan;

    @OneToMany
    private List<User> users;

    @OneToMany
    private List<Training> trainings;

    @OneToMany
    private List<TrainingDayExercise> trainingDayExercises;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}

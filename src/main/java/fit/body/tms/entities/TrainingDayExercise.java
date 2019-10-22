package fit.body.tms.entities;

import javax.persistence.*;

@Entity
public class TrainingDayExercise {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "training_day_id")
    private TrainingDay trainingDay;
}

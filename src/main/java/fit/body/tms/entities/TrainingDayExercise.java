package fit.body.tms.entities;

import fit.body.tms.dtos.TrainingDayExerciseDTO;

import javax.persistence.*;

@Entity
public class TrainingDayExercise {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "training_day_id")
    private TrainingDay trainingDay;

    public TrainingDayExercise() {}
    public TrainingDayExercise(TrainingDayExerciseDTO trainingDayExerciseDTO) {
        this.id = trainingDayExerciseDTO.getId();
        this.trainingDay = new TrainingDay(trainingDayExerciseDTO.getTrainingDay());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TrainingDay getTrainingDay() {
        return trainingDay;
    }

    public void setTrainingDay(TrainingDay trainingDay) {
        this.trainingDay = trainingDay;
    }
}

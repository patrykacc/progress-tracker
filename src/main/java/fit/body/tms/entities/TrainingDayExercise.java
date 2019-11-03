package fit.body.tms.entities;

import fit.body.tms.dtos.TrainingDayExerciseDTO;

import javax.persistence.*;

@Entity
public class TrainingDayExercise {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;

    @ManyToOne
    @JoinColumn(name = "training_day_id")
    private TrainingDay trainingDay;

    public TrainingDayExercise() {}

    public TrainingDayExercise(TrainingDayExerciseDTO trainingDayExerciseDTO) {
        this.id = trainingDayExerciseDTO.getId();
        this.name = trainingDayExerciseDTO.getName();
        this.trainingDay = new TrainingDay(trainingDayExerciseDTO.getTrainingDay().getId());
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

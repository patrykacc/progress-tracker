package fit.body.tms.dtos;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import fit.body.tms.entities.TrainingDayExercise;

@JsonIdentityInfo(generator = ObjectIdGenerators.None.class, property = "id")
public class TrainingDayExerciseDTO {

    private Long id;
    private TrainingDayDTO trainingDay;

    public TrainingDayExerciseDTO() {
    }

    public TrainingDayExerciseDTO(TrainingDayExercise trainingDayExercise) {
        this.id = trainingDayExercise.getId();
        this.trainingDay = new TrainingDayDTO(trainingDayExercise.getTrainingDay());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TrainingDayDTO getTrainingDay() {
        return trainingDay;
    }

    public void setTrainingDay(TrainingDayDTO trainingDay) {
        this.trainingDay = trainingDay;
    }
}

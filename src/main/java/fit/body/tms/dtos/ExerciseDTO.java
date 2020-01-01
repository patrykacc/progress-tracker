package fit.body.tms.dtos;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import fit.body.tms.entities.Exercise;

@JsonIdentityInfo(generator = ObjectIdGenerators.None.class, property = "id")
public class ExerciseDTO {

    private Long id;
    private String name;
    private Integer repetitions;
    private Integer series;
    private Double weight;

    public ExerciseDTO() {}

    public ExerciseDTO(Exercise exercise) {
        this.id = exercise.getId();
        this.name = exercise.getName();
        this.repetitions = exercise.getRepetitions();
        this.series = exercise.getSeries();
        this.weight = exercise.getWeight();
    }

    private TrainingDTO training;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getRepetitions() {
        return repetitions;
    }

    public void setRepetitions(Integer repetitions) {
        this.repetitions = repetitions;
    }

    public Integer getSeries() {
        return series;
    }

    public void setSeries(Integer series) {
        this.series = series;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public TrainingDTO getTraining() {
        return training;
    }

    public void setTraining(TrainingDTO training) {
        this.training = training;
    }
}

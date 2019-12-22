package fit.body.tms.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import fit.body.tms.dtos.ExerciseDTO;

import javax.persistence.*;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.None.class, property = "id")
public class Exercise {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private Integer repetitions;
    private Integer series;
    private Double weight;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "training_id")
    private Training training;

    public Exercise() {}
    public Exercise(ExerciseDTO exerciseDTO) {
        this.id = exerciseDTO.getId();
        this.name = exerciseDTO.getName();
        this.repetitions = exerciseDTO.getRepetitions();
        this.series = exerciseDTO.getSeries();
        this.weight = exerciseDTO.getWeight();
    }

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

    public Training getTraining() {
        return training;
    }

    public void setTraining(Training training) {
        this.training = training;
    }
}

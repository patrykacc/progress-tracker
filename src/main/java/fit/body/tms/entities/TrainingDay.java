package fit.body.tms.entities;

import fit.body.tms.dtos.TrainingDayDTO;

import javax.persistence.*;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Entity
public class TrainingDay {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @ManyToOne
    private TrainingPlan trainingPlan;
    @OneToMany
    private List<Person> people;
    @OneToMany
    private List<Training> trainings;
    @OneToMany
    private List<TrainingDayExercise> trainingDayExercises;

    public TrainingDay() {
    }

    public TrainingDay(TrainingDayDTO trainingDayDTO) {
        this.id = trainingDayDTO.getId();
        this.trainingPlan = new TrainingPlan(trainingDayDTO.getTrainingPlan());
        this.people = trainingDayDTO.getUsers().stream().map(Person::new).collect(Collectors.toList());
        this.trainings = trainingDayDTO.getTrainings().stream().map(Training::new).collect(Collectors.toList());
        this.trainingDayExercises = trainingDayDTO.getTrainingDayExercises().stream().map(TrainingDayExercise::new).collect(Collectors.toList());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Optional<TrainingPlan> getTrainingPlan() {
        return Optional.ofNullable(trainingPlan);
    }

    public void setTrainingPlan(TrainingPlan trainingPlan) {
        this.trainingPlan = trainingPlan;
    }

    public List<Person> getPeople() {
        return people;
    }

    public void setPeople(List<Person> people) {
        this.people = people;
    }

    public List<Training> getTrainings() {
        return trainings;
    }

    public void setTrainings(List<Training> trainings) {
        this.trainings = trainings;
    }

    public List<TrainingDayExercise> getTrainingDayExercises() {
        return trainingDayExercises;
    }

    public void setTrainingDayExercises(List<TrainingDayExercise> trainingDayExercises) {
        this.trainingDayExercises = trainingDayExercises;
    }
}

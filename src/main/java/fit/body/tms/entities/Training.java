package fit.body.tms.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import fit.body.tms.repositories.TrainingListener;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@Entity
@EntityListeners(TrainingListener.class)
@JsonIdentityInfo(generator = ObjectIdGenerators.None.class, property = "id")
public class Training {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Integer duration;
    private Integer volume;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate startDate;

    @JsonFormat(pattern = "HH:mm")
    @DateTimeFormat(iso = DateTimeFormat.ISO.TIME)
    private LocalTime startTime;

    @OneToMany(fetch = FetchType.EAGER,mappedBy = "training")
    private List<Exercise> exercises;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "person_id")
    private Person person;

    @ManyToOne
    @JoinColumn(name = "training_day_id")
    private TrainingDay trainingDay;

    public Training() {}

    /*public Training(TrainingDTO trainingDTO) {
        this.id = trainingDTO.getId();
        this.duration = trainingDTO.getDuration();
        this.volume = trainingDTO.getVolume();
        this.startDate = trainingDTO.getStartDate();
        this.startTime = trainingDTO.getStartTime();
        this.exercises = trainingDTO.getExercises().stream().map(Exercise::new).collect(Collectors.toList());
        trainingDTO.getUser().ifPresent(userDTO -> this.person = new Person(userDTO));
    }*/

    public Integer getVolume() {
        return volume;
    }

    public void setVolume(Integer volume) {
        this.volume = volume;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public List<Exercise> getExercises() {
        return exercises;
    }

    public void setExercises(List<Exercise> exercises) {
        this.exercises = exercises;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public Optional<TrainingDay> getTrainingDay() {
        return Optional.ofNullable(trainingDay);
    }

    public void setTrainingDay(TrainingDay trainingDay) {
        this.trainingDay = trainingDay;
    }
}

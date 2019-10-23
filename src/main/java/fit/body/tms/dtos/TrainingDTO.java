package fit.body.tms.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import fit.body.tms.entities.Training;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

@JsonIdentityInfo(generator = ObjectIdGenerators.None.class, property = "id")
public class TrainingDTO {

    private Long id;
    private Integer duration;
    private Integer volume;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate startDate;
    @JsonFormat(pattern = "HH:mm")
    @DateTimeFormat(iso = DateTimeFormat.ISO.TIME)
    private LocalTime startTime;
    private List<ExerciseDTO> exercises;
    private UserDTO user;
    private TrainingDayDTO trainingDay;

    public TrainingDTO() {}

    public TrainingDTO(Training training) {
        this.id = training.getId();
        this.duration = training.getDuration();
        this.volume = training.getVolume();
        this.startDate = training.getStartDate();
        this.startTime = training.getStartTime();
        this.exercises = training.getExercises().stream().map(ExerciseDTO::new).collect(Collectors.toList());
        this.user = new UserDTO(training.getUser());
        this.trainingDay = new TrainingDayDTO(training.getTrainingDay());
    }

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

    public List<ExerciseDTO> getExercises() {
        return exercises;
    }

    public void setExercises(List<ExerciseDTO> exercises) {
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

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }

    public TrainingDayDTO getTrainingDay() {
        return trainingDay;
    }

    public void setTrainingDay(TrainingDayDTO trainingDay) {
        this.trainingDay = trainingDay;
    }
}

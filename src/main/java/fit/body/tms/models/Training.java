package fit.body.tms.models;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Arrays;

@Entity
public class Training {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Integer duration;
    private LocalDateTime startTime;
    private LocalDateTime endTime;

    @OrderColumn
    @OneToMany
    private Exercise[] exercises;

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

    public Exercise[] getExercises() {
        return exercises;
    }

    public void setExercises(Exercise[] exercises) {
        this.exercises = exercises;
    }

    @Override
    public String toString() {
        return "Training{" +
                "id=" + id +
                ", duration=" + duration +
                ", startTime=" + startTime +
                ", endTime=" + endTime +
                ", exercises=" + Arrays.toString(exercises) +
                '}';
    }
}

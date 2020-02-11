package fit.body.tms.repositories;

import fit.body.tms.entities.Training;
import fit.body.tms.entities.Person;
import fit.body.tms.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import java.time.LocalDate;

public class TrainingListener {

    @Autowired
    private UserService userService;

    @PrePersist @PreUpdate
    public void setTrainingDefaults(Training training) {
        addCurrentUserRelation(training);
        if (training.getStartDate() == null) {
            training.setStartDate(LocalDate.now());
        }
        if (training.getDuration() == null) {
            training.setDuration(0);
        }
        if (training.getVolume() == null) {
            training.setVolume(0);
        }
        training.setName(training.getStartDate().toString());
        training.getTrainingDay().ifPresent(trainingDay -> {
            training.setName(training.getName() + " " + trainingDay.getName());
        });
    }

    private void addCurrentUserRelation(Training training) {
        if (training.getPerson() == null) {
            training.setPerson(new Person(UserService.getPrincipal().getId()));
        }
    }
}

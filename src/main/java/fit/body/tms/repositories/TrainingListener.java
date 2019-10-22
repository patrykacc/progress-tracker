package fit.body.tms.repositories;

import fit.body.tms.entities.Training;
import fit.body.tms.entities.User;
import fit.body.tms.services.UserService;

import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import java.time.LocalDate;

public class TrainingListener {


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
    }

    private void addCurrentUserRelation(Training training) {
        if (training.getUser() == null) {
            training.setUser(new User(UserService.getCurrentUserPrincipal().getId()));
        }
    }
}

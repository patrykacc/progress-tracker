package fit.body.tms.repositories;

import fit.body.tms.models.Training;

import javax.persistence.PrePersist;
import java.time.LocalDate;

public class PrePersistListener {


    @PrePersist
    public void setTrainingDefaults(Training training) {
        if (training.getStartDate() == null) {
            training.setStartDate(LocalDate.now());
        }
        if (training.getDuration() == null) {
            training.setDuration(0);
        }
        if (training.getVolume() == null) {
            training.setVolume(0);
        }
        System.out.println(training);
    }
}

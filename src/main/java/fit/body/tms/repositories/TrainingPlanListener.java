package fit.body.tms.repositories;

import fit.body.tms.entities.Person;
import fit.body.tms.entities.TrainingPlan;
import fit.body.tms.services.UserService;

import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

public class TrainingPlanListener {

    @PrePersist @PreUpdate
    public void setTrainingDefaults(TrainingPlan trainingPlan) {
        addCurrentUserRelation(trainingPlan);
    }

    private void addCurrentUserRelation(TrainingPlan trainingPlan) {
        trainingPlan.getPerson().ifPresentOrElse(null, () -> {trainingPlan.setPerson(new Person(UserService.getCurrentUserPrincipal().getId()));});
    }
}

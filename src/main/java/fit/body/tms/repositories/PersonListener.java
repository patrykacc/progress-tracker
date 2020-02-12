package fit.body.tms.repositories;

import fit.body.tms.entities.Person;

import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

public class PersonListener {

    @PrePersist
    @PreUpdate
    public void setTrainingDefaults(Person person) {
        person.setName(person.getFirstName() + " " + person.getLastName());
    }
}

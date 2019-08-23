package fit.body.tms.models;

import javax.persistence.*;

@Entity
public class TrainingDay {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Integer duration;

    @OrderColumn
    @OneToMany
    private Exercise[] exercises;
}

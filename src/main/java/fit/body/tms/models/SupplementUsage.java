package fit.body.tms.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

@Entity
public class SupplementUsage {

    @Id
    @GeneratedValue
    private Long id;
    private Integer dose;
    @ManyToOne
    private Supplement supplement;
    private LocalDateTime useDateTime;
    private String comments;


}

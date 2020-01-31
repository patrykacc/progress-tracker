package fit.body.tms.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "@id")
public class Exercise {

    @Id
    @GeneratedValue(generator = "global-id")
    @GenericGenerator(name = "global-id", strategy = "fit.body.tms.entities.UI_IdGenerator")
    private String id;
    private String name;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "training_id")
    private Training training;

    @OneToMany(fetch = FetchType.EAGER,mappedBy = "exercise", cascade = CascadeType.REMOVE)
    @Fetch(value = FetchMode.SUBSELECT)
    private List<Series> series;

    public Exercise() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Series> getSeries() {
        return series;
    }

    public void setSeries(List<Series> series) {
        this.series = series;
    }

    public Training getTraining() {
        return training;
    }

    public void setTraining(Training training) {
        this.training = training;
    }
}

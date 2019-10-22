package fit.body.tms.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public abstract class Supplement {

    enum UNIT {mg, ml, g}
    enum APPLICATION_METHOD {INJECTION, ORALLY}

    @Id
    @GeneratedValue
    private Long id;
    @OneToMany
    private List<SupplementUsage> supplementUsages;
    private String name;
    private UNIT unit;
    private APPLICATION_METHOD applicationMethod;

    public List<SupplementUsage> getSupplementUsages() {
        return supplementUsages;
    }

    public void setSupplementUsages(List<SupplementUsage> supplementUsages) {
        this.supplementUsages = supplementUsages;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public UNIT getUnit() {
        return unit;
    }

    public void setUnit(UNIT unit) {
        this.unit = unit;
    }

    public APPLICATION_METHOD getApplicationMethod() {
        return applicationMethod;
    }

    public void setApplicationMethod(APPLICATION_METHOD applicationMethod) {
        this.applicationMethod = applicationMethod;
    }
}

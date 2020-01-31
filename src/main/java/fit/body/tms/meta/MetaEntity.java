package fit.body.tms.meta;

import java.util.List;

public class MetaEntity {


    public MetaEntity() {
    }

    public MetaEntity(String apiName, String label, List<MetaFieldBase> fields) {
        this.apiName = apiName;
        this.label = label;
        this.fields = fields;
    }

    public String apiName;
    public String label;
    public List<MetaFieldBase> fields;
}

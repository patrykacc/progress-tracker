package fit.body.tms.meta;

import java.lang.reflect.Field;

public class MetaFieldBase {

    public MetaFieldBase() {
    }

    public MetaFieldBase(Field field, String label, String type) {
        this.apiName = field.getName();
        this.label = label;     //metaDescriptor.getLabel(objectType.getSimpleName() + "." + apiName).orElse(field.getName());
        this.type = type;       //determineFieldType(field);
    }

    public String apiName;
    public String label;
    public String type;
}
package fit.body.tms.meta;

import javax.persistence.OneToMany;
import java.lang.reflect.Field;
import java.lang.reflect.ParameterizedType;
import java.util.Collection;


public class MetaFieldList extends MetaFieldBase {

    public MetaFieldList(Field field, String label, String type) {
        super(field, label, type);
        this.childrenApiName = ((Class) ((ParameterizedType) field.getGenericType())
                .getActualTypeArguments()[0])
                .getSimpleName();
        this.parentRelationName = field.getAnnotation(OneToMany.class).mappedBy();
        try {
            this.relatedListFields = (Collection<?>) Class.forName(MetaDescriptor.ENTITIES_PACKAGE_NAME + childrenApiName).getField("relatedListFields").get(null);
        } catch (IllegalAccessException | NoSuchFieldException | ClassNotFoundException ignored) {
        }
    }

    public String childrenApiName;
    public String parentRelationName;
    public Collection<?> relatedListFields;
}

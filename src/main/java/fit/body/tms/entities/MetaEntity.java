package fit.body.tms.entities;

import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.ParameterizedType;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class MetaEntity {

    private final MetaDescriptor metaDescriptor;

    public MetaEntity(MetaDescriptor metaDescriptor, Class<?> type) {
        this.metaDescriptor = metaDescriptor;
        getDataFromType(type);
    }

    public MetaEntity(MetaDescriptor metaDescriptor, String id) throws ClassNotFoundException {
        this.metaDescriptor = metaDescriptor;
        getDataFromType(this.metaDescriptor.getObjectTypeFromId(id));
    }

    private void getDataFromType(Class<?> type) {
        this.fields = Arrays.stream(type.getDeclaredFields()).map((Field field) -> new MetaField(field, type)).collect(Collectors.toList());
        this.label = metaDescriptor.getLabel(type.getSimpleName()).orElse(type.getSimpleName());
        this.apiName = type.getSimpleName();
    }

    public String apiName;
    public String label;
    public List<MetaField> fields;

    public class MetaField {

        public MetaField(Field field, Class objectType) {
            this.apiName = field.getName();
            this.label = metaDescriptor.getLabel(objectType.getSimpleName() + "." + apiName).orElse(field.getName());
            this.type = determineFieldType(field);
        }

        public String apiName;
        public String label;
        public String type;
        public String childrenApiName;
        public String parentRelationName;
        public String referenceApiName;

        private String determineFieldType(Field field) {
            Class<?> type = field.getType();
            if (type == Integer.class) {
                return "NUMBER";
            } else if (type == String.class) {
                return "TEXT";
            } else if (type == LocalDate.class) {
                return "DATE";
            } else if (type == LocalTime.class) {
                return "TIME";
            } else {
                List<Annotation> annotations = Arrays.asList(field.getDeclaredAnnotations());
                if (annotations.stream().anyMatch(annotation -> annotation.annotationType() == Id.class)) {
                    return "ID";
                } else if (annotations.stream().anyMatch(annotation ->
                        annotation.annotationType() == ManyToOne.class || annotation.annotationType() == OneToOne.class)) {
                    this.referenceApiName = field.getType().getSimpleName();
                    return "REFERENCE";
                } else if (annotations.stream().anyMatch(annotation -> annotation.annotationType() == OneToMany.class)) {
                    this.childrenApiName = ((Class) ((ParameterizedType) field.getGenericType())
                            .getActualTypeArguments()[0])
                            .getSimpleName();
                    this.parentRelationName = field.getAnnotation(OneToMany.class).mappedBy();
                    return "LIST";
                }
            }
            return field.getType().getSimpleName().toUpperCase();
        }
    }
}

package fit.body.tms.meta;

import fit.body.tms.entities.UI_IdGenerator;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.*;
import java.util.stream.Collectors;

@Component
public class MetaDescriptor {

    public final static String ENTITIES_PACKAGE_NAME = "fit.body.tms.entities.";
    private Map<String, String> prefixToEntityName;

    final private MessageSource messageSource;

    public MetaDescriptor(MessageSource messageSource, EntityManagerFactory entityManagerFactory) {
        this.messageSource = messageSource;
        prefixToEntityName = entityManagerFactory.getMetamodel().getEntities()
                .stream().collect( Collectors.toMap(
                        entityType -> UI_IdGenerator.getCapitalsFromString(entityType.getName()),
                        entityType -> entityType.getJavaType().getName()
                ));

    }

    public Class<?> getObjectTypeFromId(String id) throws ClassNotFoundException {
        String prefix = id.split("-")[0];
        String objectType = prefixToEntityName.get(prefix);
        return Class.forName(objectType);
    }

    public MetaEntity describe(Class<?> type) {
        MetaEntity metaEntity = getMetaEntity(type);

        return metaEntity;
    }

    public MetaEntity describe(String type) throws ClassNotFoundException {
        Class<?> classType = Class.forName(String.format("%s%s", ENTITIES_PACKAGE_NAME, type));
        return getMetaEntity(classType);
    }

    public MetaEntity describe(Object id) throws ClassNotFoundException {
        return getMetaEntity(getObjectTypeFromId((String)id)); //// TODO UGLY-UGLY WORKAROUND WITH METHOD OVERLOAD, UNTIL ID CLASS WILL BE IMPLEMENTED
    }

    private MetaEntity getMetaEntity(Class<?> type) {
        MetaEntity metaEntity = new MetaEntity();
        metaEntity.fields = Arrays.stream(
                type.getSuperclass().getDeclaredFields()).map((Field field) -> getMetaField(field, type)).collect(Collectors.toList()
        );
        metaEntity.fields.addAll(Arrays.stream(
                type.getDeclaredFields()).map((Field field) -> getMetaField(field, type)).collect(Collectors.toList()
        ));
        metaEntity.label = getLabel(type.getSimpleName()).orElse(type.getSimpleName());
        metaEntity.apiName = type.getSimpleName();
        return metaEntity;
    }

    private MetaFieldBase getMetaField(Field field, Class<?> entityType) {
        String label = getLabel(entityType.getSimpleName() + "." + field.getName()).orElse(field.getName());
        Class<?> type = field.getType();
        if (type == Integer.class) {
            return new MetaFieldBase(field, label,  "NUMBER");
        } else if (type == String.class) {
            return new MetaFieldBase(field, label,  "TEXT");
        } else if (type == LocalDate.class) {
            return new MetaFieldBase(field, label,  "DATE");
        } else if (type == LocalTime.class) {
            return new MetaFieldBase(field, label,  "TIME");
        } else {
            List<Annotation> annotations = Arrays.asList(field.getDeclaredAnnotations());
            if (annotations.stream().anyMatch(annotation -> annotation.annotationType() == Id.class)) {
                return new MetaFieldBase(field, label,  "ID");
            } else if (annotations.stream().anyMatch(annotation ->
                    annotation.annotationType() == ManyToOne.class || annotation.annotationType() == OneToOne.class)) {
                return new MetaFieldBase(field, label,  "REFERENCE");
            } else if (annotations.stream().anyMatch(annotation -> annotation.annotationType() == OneToMany.class)) {
                return new MetaFieldList(field, label,  "LIST");
            }
        }
        return null;
    }

    private Optional<String> getLabel(String code) {
        return Optional.ofNullable(messageSource.getMessage(code, null, null, Locale.getDefault()));
    }
}


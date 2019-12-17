package fit.body.tms.entities;

import org.springframework.context.MessageSource;
import org.springframework.stereotype.Component;

import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class Descriptor {

    public Descriptor(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    private Optional<String> getLabel(String code) {
        return Optional.ofNullable(messageSource.getMessage(code, null, null, Locale.getDefault()));
    }

    final private MessageSource messageSource;

    public MetaEntity describe(Class type) {
        return new MetaEntity(type);
    }

    public class MetaEntity {

        public MetaEntity(Class type) {
            this.fields = Arrays.stream(type.getDeclaredFields()).map((Field field) -> new MetaField(field, type)).collect(Collectors.toList());
            this.label = getLabel(type.getSimpleName()).orElse("No label for object: " + type.getSimpleName());
            this.apiName = type.getSimpleName();
        }

        public String apiName;
        public String label;
        public List<MetaField> fields;
    }

    public class MetaField {

        public MetaField(Field field, Class objectType) {
            this.apiName = field.getName();
            this.label = getLabel(objectType.getSimpleName() + "." + apiName).orElse("No label for field: " + field.getName());
            this.type = determineFieldType(field);
        }

        public String apiName;
        public String label;
        public String type;

        private String determineFieldType(Field field) {
            Class<?> type = field.getType();
            if (type == Integer.class) {
                return "NUMBER";
            }
            else if (type == String.class) {
                return "TEXT";
            } else {
                List<Annotation> annotations = Arrays.asList(field.getDeclaredAnnotations());
                if (annotations.stream().anyMatch(annotation -> annotation.annotationType() == Id.class)) {
                    return "ID";
                } else if (annotations.stream().anyMatch(annotation -> annotation.annotationType() == ManyToOne.class)) {
                    return "REFERENCE";
                } else if (annotations.stream().anyMatch(annotation -> annotation.annotationType() == OneToMany.class)) {
                    return "LIST";
                }
            }
            return field.getType().getSimpleName().toUpperCase();
        }
    }
}


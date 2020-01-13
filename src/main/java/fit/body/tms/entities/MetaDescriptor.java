package fit.body.tms.entities;

import org.springframework.context.MessageSource;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManagerFactory;
import java.util.Locale;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class MetaDescriptor {

    private final static String ENTITIES_PACKAGE_NAME = "fit.body.tms.entities";
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

    public Optional<String> getLabel(String code) {
        return Optional.ofNullable(messageSource.getMessage(code, null, null, Locale.getDefault()));
    }

    public String getObjectTypeByPrefix(String prefix) {
        return prefixToEntityName.get(prefix);
    }

    public Class<?> getObjectTypeFromId(String id) throws ClassNotFoundException {
        String prefix = id.split("-")[0];
        String objectType = prefixToEntityName.get(prefix);
        return Class.forName(String.format("%s.%s", ENTITIES_PACKAGE_NAME, objectType));
    }

    public MetaEntity describe(Class<?> type) {
        return new MetaEntity(this, type);
    }

    public MetaEntity describe(String type) throws ClassNotFoundException {
        Class<?> classType = Class.forName(String.format("%s.%s", ENTITIES_PACKAGE_NAME, type));
        return new MetaEntity(this, classType);
    }

    public MetaEntity describe(Object id) throws ClassNotFoundException {
        return new MetaEntity(this, (String)id); //// TODO UGLY-UGLY WORKAROUND WITH METHOD OVERLOAD, UNTIL ID CLASS WILL BE IMPLEMENTED
    }
}


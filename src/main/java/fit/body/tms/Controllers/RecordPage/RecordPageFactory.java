package fit.body.tms.Controllers.RecordPage;

import fit.body.tms.meta.MetaDescriptor;
import fit.body.tms.meta.MetaEntity;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.persistence.EntityManager;

@Service
public class RecordPageFactory {

    final EntityManager entityManager;
    final MetaDescriptor metaDescriptor;

    public RecordPageFactory(EntityManager entityManager, MetaDescriptor metaDescriptor) {
        this.entityManager = entityManager;
        this.metaDescriptor = metaDescriptor;
    }

    public RecordPage getRecordPageByObjectId(String id) throws ClassNotFoundException {
        String contextPath = ServletUriComponentsBuilder.fromCurrentContextPath().build().toUriString();
        Class<?> type = metaDescriptor.getObjectTypeFromId(id);
        Object record = entityManager.find(type, id);
        MetaEntity metaEntity = metaDescriptor.describe(type);
        Resource<Object> resource = new Resource<>(record);
        resource.add(new Link(String.format("%s/api/%s/%s", contextPath, type.getSimpleName(), id),"self"));
        return new RecordPage(metaEntity, resource);
    }

    public RecordPage getRecordPageByObjectType(String objectType) throws ClassNotFoundException {
        MetaEntity metaEntity = metaDescriptor.describe(objectType);
        return new RecordPage(metaEntity);
    }

}

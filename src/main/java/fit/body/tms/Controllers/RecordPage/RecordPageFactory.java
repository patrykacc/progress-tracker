package fit.body.tms.Controllers.RecordPage;

import fit.body.tms.entities.MetaDescriptor;
import fit.body.tms.entities.MetaEntity;
import org.springframework.stereotype.Service;

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
        Class<?> type = metaDescriptor.getObjectTypeFromId(id);
        Object record = entityManager.find(type, id);
        MetaEntity metaEntity = metaDescriptor.describe(type);
        return new RecordPage(metaEntity, record);
    }

    public RecordPage getRecordPageByObjectType(String objectType) throws ClassNotFoundException {
        MetaEntity metaEntity = metaDescriptor.describe(objectType);
        return new RecordPage(metaEntity);
    }

}

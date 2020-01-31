package fit.body.tms.Controllers.RecordPage;

import fit.body.tms.meta.MetaEntity;
import org.springframework.hateoas.Resource;

public class RecordPage {

    private MetaEntity metaEntity;
    private Resource<?> resource;

    public MetaEntity getMetaEntity() {
        return metaEntity;
    }

    public void setMetaEntity(MetaEntity metaEntity) {
        this.metaEntity = metaEntity;
    }

    public Resource<?> getRecord() {
        return resource;
    }

    public void setRecord(Resource<?> record) {
        this.resource = record;
    }



    public RecordPage(MetaEntity metaEntity, Resource<?> record)  {
        this.metaEntity = metaEntity;
        this.resource = record;
    }

    public RecordPage(MetaEntity metaEntity)  {
        this.metaEntity = metaEntity;
    }
}

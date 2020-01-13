package fit.body.tms.Controllers.RecordPage;

import fit.body.tms.entities.MetaEntity;

public class RecordPage {

    private MetaEntity metaEntity;
    private Object record;

    public RecordPage(MetaEntity metaEntity, Object record)  {
        this.metaEntity = metaEntity;
        this.record = record;
    }

    public RecordPage(MetaEntity metaEntity)  {
        this.metaEntity = metaEntity;
    }
}

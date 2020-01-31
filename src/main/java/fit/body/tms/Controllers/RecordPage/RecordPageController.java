package fit.body.tms.Controllers.RecordPage;

import fit.body.tms.meta.MetaDescriptor;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@BasePathAwareController
@RequestMapping(value = "/recordPage")
public class RecordPageController {

    final MetaDescriptor metaDescriptor;
    final RecordPageFactory recordPageFactory;

    public RecordPageController(MetaDescriptor metaDescriptor, RecordPageFactory recordPageFactory) {
        this.metaDescriptor = metaDescriptor;
        this.recordPageFactory = recordPageFactory;
    }

    @GetMapping("/type/{objectType}")
    public RecordPage getByType(@Valid @PathVariable String objectType) throws ClassNotFoundException {
        return recordPageFactory.getRecordPageByObjectType(objectType);
    }

    @GetMapping("/id/{id}")
    public RecordPage getById(@Valid @PathVariable String id) throws ClassNotFoundException {
        return recordPageFactory.getRecordPageByObjectId(id);
    }
}

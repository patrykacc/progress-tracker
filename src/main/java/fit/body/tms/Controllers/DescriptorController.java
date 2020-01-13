package fit.body.tms.Controllers;

import fit.body.tms.entities.MetaDescriptor;
import fit.body.tms.entities.MetaEntity;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@BasePathAwareController
@RequestMapping(value = "/metaDescriptor")
public class DescriptorController {


    final MetaDescriptor metaDescriptor;

    public DescriptorController(MetaDescriptor metaDescriptor) {
        this.metaDescriptor = metaDescriptor;
    }

    @GetMapping("/type/{objectType}")
    public MetaEntity getByType(@Valid @PathVariable String objectType) throws ClassNotFoundException {
        return metaDescriptor.describe(objectType);
    }

    @GetMapping("/id/{id}")
    public MetaEntity getById(@Valid @PathVariable String id) throws ClassNotFoundException {
        return metaDescriptor.describe(id);
    }
}

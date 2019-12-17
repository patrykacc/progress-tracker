package fit.body.tms.Controllers;

import fit.body.tms.entities.Descriptor;
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

    private final static String ENTITIES_PACKAGE_NAME = "fit.body.tms.entities";
    final Descriptor descriptor;

    public DescriptorController(Descriptor descriptor) {
        this.descriptor = descriptor;
    }

    @GetMapping("/{objectType}")
    public Descriptor.MetaEntity get(@Valid @PathVariable String objectType) throws ClassNotFoundException {
        return descriptor.describe(Class.forName(String.format("%s.%s", ENTITIES_PACKAGE_NAME, objectType)));
    }
}

package fit.body.tms.Controllers;

import fit.body.tms.entities.EntityDescriptor;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.util.StringUtils;
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
    final EntityDescriptor entityDescriptor;

    public DescriptorController(EntityDescriptor entityDescriptor) {
        this.entityDescriptor = entityDescriptor;
    }

    @GetMapping("/{objectType}")
    public EntityDescriptor.MetaEntity get(@Valid @PathVariable String objectType) throws ClassNotFoundException {
        return entityDescriptor.describe(
                Class.forName(String.format("%s.%s", ENTITIES_PACKAGE_NAME, StringUtils.capitalize(objectType)))
        );
    }
}

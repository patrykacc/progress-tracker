package fit.body.tms.Controllers.Authentication;

import fit.body.tms.models.UserPrincipal;
import fit.body.tms.security.JwtTokenProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@BasePathAwareController
@CrossOrigin
@RequestMapping("/token")
public class TokenController {

    private static final Logger logger = LoggerFactory.getLogger(JwtTokenProvider.class);

    @GetMapping("/check")
    public void checkJwtTokenValidity() {
        logger.info("JWT token is valid");
    }
}
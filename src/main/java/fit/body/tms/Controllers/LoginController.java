package fit.body.tms.Controllers;

import fit.body.tms.models.User;
import fit.body.tms.services.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value = "/login")
public class LoginController {

    UserService userService;

    @ResponseBody
    @RequestMapping(path = "/register", method = RequestMethod.POST)
    public User login(User user) {
        return null;
    }
}

package fit.body.tms.Controllers;

import fit.body.tms.models.User;
import fit.body.tms.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @ResponseBody
    @RequestMapping(path = "/register", method = RequestMethod.POST)
    public User registerNewUser(@RequestBody User newUser) {
        return userService.saveUser(newUser);
    }

    @ResponseBody
    @RequestMapping(path = "/getAll", method = RequestMethod.GET)
    public List<User> getAllUsers() {
        return userService.getAll();
    }



}

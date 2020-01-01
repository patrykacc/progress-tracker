package fit.body.tms.Controllers;

import fit.body.tms.dtos.UserDTO;
import fit.body.tms.entities.User;
import fit.body.tms.services.UserService;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.util.stream.Collectors.toList;

@RestController
@BasePathAwareController
@RequestMapping(value = "/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @ResponseBody
    @RequestMapping(path = "/register", method = RequestMethod.POST)
    public UserDTO registerNewUser(@RequestBody User newUser) {
        return new UserDTO(userService.save(newUser));
    }

    @ResponseBody
    @RequestMapping(path = "/getAll", method = RequestMethod.GET)
    public List<UserDTO> getAllUsers() {
        return userService.getAll().stream().map(UserDTO::new).collect(toList());
    }


}

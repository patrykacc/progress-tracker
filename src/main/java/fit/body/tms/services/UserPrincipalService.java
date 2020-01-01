package fit.body.tms.services;

import fit.body.tms.entities.User;
import fit.body.tms.entities.UserPrincipal;
import fit.body.tms.repositories.UserRepository;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserPrincipalService implements UserDetailsService {

    private final UserRepository userRepository;

    public UserPrincipalService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserPrincipal loadUserByUsername(String username) throws UsernameNotFoundException {
        return new UserPrincipal(userRepository.findByEmail(username));
    }

    public UserPrincipal loadUserById(Long userId) {
        User u = userRepository.findById(userId).orElse(null);
        if (u == null) {
            return null;
        }
        return new UserPrincipal(u);
    }

    public Boolean userExistsById(Long userId) {
        return userRepository.existsById(userId);
    }
}

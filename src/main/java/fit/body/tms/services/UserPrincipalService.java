package fit.body.tms.services;

import fit.body.tms.models.UserPrincipal;
import fit.body.tms.repositories.UserRepository;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class UserPrincipalService implements UserDetailsService {

    private final UserRepository userRepository;

    public UserPrincipalService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserPrincipal loadUserByUsername(String username) throws UsernameNotFoundException {
        return new UserPrincipal(userRepository.findByUsername(username));
    }

    public UserPrincipal loadUserById(Long userId) {
        return new UserPrincipal(Objects.requireNonNull(userRepository.findById(userId).orElse(null)));
    }

    public Boolean userExistsById(Long userId) {
        return userRepository.existsById(userId);
    }
}

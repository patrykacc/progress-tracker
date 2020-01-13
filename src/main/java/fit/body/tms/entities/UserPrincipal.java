package fit.body.tms.entities;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import java.util.Collection;
import java.util.Collections;

public class UserPrincipal implements UserDetails {

    @Id
    @GeneratedValue
    private String id;
    @NotBlank
    private String email;
    @NotBlank
    private String password;
    @NotBlank
    private Authority grantedAuthority;

    public UserPrincipal(@NotBlank String email, @NotBlank String password, @NotBlank String grantedAuthority) {
        this.email = email;
        this.password = password;
        this.grantedAuthority = new Authority(grantedAuthority);
    }

    public UserPrincipal(Person person) {
        this.id = person.getId();
        this.email = person.getEmail();
        this.password = person.getPassword();
        this.grantedAuthority = new Authority(person.getAuthority());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(this.grantedAuthority);
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}

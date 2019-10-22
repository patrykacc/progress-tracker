package fit.body.tms.models;

import org.springframework.security.core.GrantedAuthority;

import javax.validation.constraints.NotBlank;

public class Authority implements GrantedAuthority {

    enum AUTHORITY {ADMIN, STANDARD}

    private AUTHORITY authority;

    Authority(@NotBlank String authority) {
        this.authority = AUTHORITY.valueOf(authority);
    }

    @Override
    public String getAuthority() {
        return this.authority.name();
    }
}

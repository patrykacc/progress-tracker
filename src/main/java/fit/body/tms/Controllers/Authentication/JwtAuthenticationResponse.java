package fit.body.tms.Controllers.Authentication;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class JwtAuthenticationResponse {
    private String accessToken;
    private String tokenType = "Bearer";

    @JsonCreator
    public JwtAuthenticationResponse(@JsonProperty("accessToken") String accessToken, @JsonProperty("tokenType")String tokenType) {
        this.accessToken = accessToken;
        this.tokenType = tokenType;
    }

    JwtAuthenticationResponse(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }
}

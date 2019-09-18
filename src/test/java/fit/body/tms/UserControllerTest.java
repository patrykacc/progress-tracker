package fit.body.tms;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;
import com.fasterxml.jackson.databind.ObjectWriter;
import fit.body.tms.Controllers.Authentication.JwtAuthenticationResponse;
import fit.body.tms.Controllers.Authentication.LoginRequest;
import fit.body.tms.Controllers.Authentication.SignUpRequest;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    public void getAllUsersBeingUnAuthorizedTest() throws Exception {
        this.mockMvc.perform(get("/api/user/getAll"))
                .andDo(print())
                .andExpect(status().isUnauthorized());
    }
    @Test
    public void registerNewUserAndLoginTest() throws Exception {
        ObjectWriter objectWriter = new ObjectMapper().writer().withDefaultPrettyPrinter();
        ObjectReader objectReader = new ObjectMapper().readerFor(JwtAuthenticationResponse.class);
        this.mockMvc.perform(post("/api/auth/signup").contentType(MediaType.APPLICATION_JSON)
                .content(objectWriter.writeValueAsString(new SignUpRequest(
                "Test User",
                "Test User",
                "test@us.er",
                "123456"
        ))))
                .andDo(print())
                .andExpect(status().isCreated());

        MvcResult result = this.mockMvc.perform(post("/api/auth/signin").contentType(MediaType.APPLICATION_JSON)
                .content(objectWriter.writeValueAsString(new LoginRequest(
                "Test User",
                "123456"
        ))))
                .andDo(print())
                .andExpect(status().isOk()).andReturn();
        JwtAuthenticationResponse jwtAuthenticationResponse = (JwtAuthenticationResponse)objectReader.readValue(result.getResponse().getContentAsString());

        this.mockMvc.perform(get("/api/user/getAll").header("Authorization", jwtAuthenticationResponse.getTokenType() + " " + jwtAuthenticationResponse.getAccessToken()))
                .andDo(print())
                .andExpect(status().isOk());
    }
}

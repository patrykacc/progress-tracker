package fit.body.tms;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;


@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class PersonControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    public void getAllUsersBeingUnAuthorizedTest() throws Exception {
        /*this.mockMvc.perform(get("/api/user/getAll"))
                .andDo(print())
                .andExpect(status().isUnauthorized());*/
    }
    @Test
    public void registerNewUserAndLoginTest() throws Exception {
        /*ObjectWriter objectWriter = new ObjectMapper().writer().withDefaultPrettyPrinter();
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
                "test@us.er",
                "123456"
        ))))
                .andDo(print())
                .andExpect(status().isOk()).andReturn();
        JwtAuthenticationResponse jwtAuthenticationResponse = (JwtAuthenticationResponse)objectReader.readValue(result.getResponse().getContentAsString());

        this.mockMvc.perform(get("/api/trainings/getAll").header("Authorization", jwtAuthenticationResponse.getTokenType() + " " + jwtAuthenticationResponse.getAccessToken()))
                .andDo(print())
                .andExpect(status().isOk());*/
    }
}

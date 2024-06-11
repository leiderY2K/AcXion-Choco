package org.example.acxionchocobackend.Controllers.Requests;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.Length;

@Data
@Builder
@AllArgsConstructor
public class RegisterRequest {

    @Length(min = 7, max = 12, message = "El numero de documento debe tener entre 7 y 12 caracteres")
    @JsonProperty("idUser")
    private String idUser;

    @JsonProperty("idDocTypeFk")
    private String idDocTypeFk;

    @JsonProperty("role")
    private String role;

    @Length(min = 3, message = "El nombre debe tener minimo 3 caracteres")
    @JsonProperty("firstName")
    private String firstName;

    @Length(min = 4, message = "El apellido debe tener minimo 4 caracteres")
    @JsonProperty("lastName")
    private String lastName;

    @Length(min = 14, message = "El correo electronico no es valido")
    @Email
    @JsonProperty("email")
    private String email;

    @Length(min = 6, message = "La contraseña debe tener un minimo de 6 caracteres")
    @JsonProperty("password")
    private String password;

    @Length(min = 10, max = 10, message = "El numero de telefono debe tener 10 caracteres")
    @NotBlank()
    @JsonProperty("phone")
    private String phone;
}
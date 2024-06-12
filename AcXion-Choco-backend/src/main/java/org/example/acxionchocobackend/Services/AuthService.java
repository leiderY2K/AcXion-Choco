package org.example.acxionchocobackend.Services;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.example.acxionchocobackend.Controllers.Requests.LoginRequest;
import org.example.acxionchocobackend.Controllers.Requests.RegisterRequest;
import org.example.acxionchocobackend.Controllers.Responses.AuthResponse;
import org.example.acxionchocobackend.Persistence.Entity.Documenttype;
import org.example.acxionchocobackend.Persistence.Entity.Role;
import org.example.acxionchocobackend.Persistence.Entity.User;
import org.example.acxionchocobackend.Persistence.Repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {

    @Autowired
    private final IUserRepository userRepository;

    @Autowired
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public AuthResponse login(LoginRequest request) {
        Optional<User> user = userRepository.findByEmail(request.getMail());
        if (user.isPresent() && passwordEncoder.matches(request.getPassword(), user.get().getPassword())) {

            String role = user.get().getRoles().stream()
                    .findFirst()
                    .map(Role::getIdRole)
                    .orElse("UNKNOWN");

            return AuthResponse.builder()
                    .message("Login successful")
                    .mail(request.getMail())
                    .role(role)
                    .build();
        } else {
            return AuthResponse.builder()
                    .message("Invalid email or password")
                    .build();
        }
    }

    @Transactional
    public AuthResponse register(RegisterRequest request) {
        // Verifica si el usuario ya existe
        if (userRepository.existsByEmail(request.getEmail())) {
            return AuthResponse.builder()
                    .message("¡El usuario ya existe!")
                    .build();
        }
        Documenttype documenttype = Documenttype.builder()
                .idDocType(request.getIdDocTypeFk())
                .descDocType(getDescriptionForDocType(request.getIdDocTypeFk()))
                .build();

        String roleString = (request.getRole() == null || request.getRole().isEmpty()) ? "EST" : request.getRole();
        Role role = Role.builder()
                .idRole(roleString)
                .descRole(getDescriptionForRole(roleString))
                .build();

        // Crea una lista de roles con el objeto Role
        List<Role> roles = Collections.singletonList(role);
        // Crea una nueva instancia de User
        User newUser = User.builder()
                .userId(request.getIdUser())
                .documentType(documenttype)
                .roles(roles)
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .phone(request.getPhone())
                .password(passwordEncoder.encode(request.getPassword())) // Encripta la contraseña
                .build();

        // Guarda el nuevo usuario en la base de datos
        userRepository.save(newUser);
        //integrado ya
        return AuthResponse.builder()
                .message("El registro fue exitoso")
                .build();
    }

    private String getDescriptionForRole(String role) {
        switch (role) {
            case "ADM":
                return "Administrador";
            case "EST":
                return "Estudiante";
            case "MON":
                return "Monitor";
            case "PRO":
                return "Profesor";
            default:
                return "Descripción no disponible";
        }


    }

    private String getDescriptionForDocType(String idDocTypeFk) {
        switch (idDocTypeFk) {
            case "CC":
                return "Cédula de Ciudadanía";
            case "TI":
                return "Tarjeta de Identidad";
            case "RC":
                return "Registro Civil";
            default:
                return "Descripción no disponible";
        }
    }


}

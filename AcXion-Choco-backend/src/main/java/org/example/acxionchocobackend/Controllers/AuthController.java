package org.example.acxionchocobackend.Controllers;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.example.acxionchocobackend.Controllers.Requests.LoginRequest;
import org.example.acxionchocobackend.Controllers.Requests.RegisterRequest;
import org.example.acxionchocobackend.Controllers.Responses.AuthResponse;
import org.example.acxionchocobackend.Services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@Controller
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }

    @PostMapping(value = "register")
    public ResponseEntity<AuthResponse> register(@RequestBody @Validated RegisterRequest request) {
        AuthResponse response = authService.register(request);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}

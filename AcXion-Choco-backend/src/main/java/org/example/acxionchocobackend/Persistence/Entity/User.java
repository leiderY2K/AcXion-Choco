package org.example.acxionchocobackend.Persistence.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "USER")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class User {

    @Id
    @Column(name = "IDUSER")
    private String userId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "FK_IDDOCTYPE", referencedColumnName = "IDDOCTYPE")
    private Documenttype documentType;

    @Column(name = "FIRSTNAME", nullable = false)
    private String firstName;

    @Column(name = "LASTNAME", nullable = false)
    private String lastName;

    @Column(name = "EMAIL", nullable = false)
    private String email;

    @Column(name = "PASSWORD", nullable = false)
    private String password;

    @Column(name = "PHONE", nullable = false)
    private String phone;

    @ManyToMany(
            fetch = FetchType.LAZY
    )
    @JoinTable(
            name = "USER_ROLE",
            joinColumns = {
                    @JoinColumn(name = "IDUSER", referencedColumnName = "IDUSER"),
                    @JoinColumn(name = "FK_IDDOCTYPE", referencedColumnName = "FK_IDDOCTYPE")
            },
            inverseJoinColumns = @JoinColumn(name = "IDROLE", referencedColumnName = "IDROLE")
    )
    private List<Role> roles;

}

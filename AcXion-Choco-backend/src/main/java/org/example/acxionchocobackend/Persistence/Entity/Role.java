package org.example.acxionchocobackend.Persistence.Entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "ROLE")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Role {

    @Id
    @Column(name = "IDROLE")
    private String idRole;

    @Column(name="DESCROLE")
    private String descRole;

    @ManyToMany(mappedBy = "roles")
    private List<User> users;


}

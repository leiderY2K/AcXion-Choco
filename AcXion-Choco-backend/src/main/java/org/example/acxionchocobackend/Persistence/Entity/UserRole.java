package org.example.acxionchocobackend.Persistence.Entity;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Entity
@Table(name = "USER_ROLE")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class UserRole implements Serializable {

    @EmbeddedId
    private UserRoleId userRoleId;
}

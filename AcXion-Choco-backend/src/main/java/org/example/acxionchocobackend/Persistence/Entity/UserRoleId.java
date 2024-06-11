package org.example.acxionchocobackend.Persistence.Entity;

import jakarta.persistence.AttributeOverride;
import jakarta.persistence.AttributeOverrides;
import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Embeddable
@AttributeOverrides({
        @AttributeOverride(
                name = "idUser",
                column = @Column(name = "IDUSER")
        ),
        @AttributeOverride(
                name = "idDocType",
                column = @Column(name = "FK_IDDOCTYPE")
        ),
        @AttributeOverride(
                name = "idRole",
                column = @Column(name = "IDROLE")
        )
})
public class UserRoleId implements Serializable {
    private String UserId;

    private String DocTypeId;

    private String RoleId;
}

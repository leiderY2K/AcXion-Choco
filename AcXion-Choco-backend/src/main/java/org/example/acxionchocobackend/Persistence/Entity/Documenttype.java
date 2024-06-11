package org.example.acxionchocobackend.Persistence.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "DOCUMENTTYPE")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Documenttype {

    @Id
    @Column(name = "IDDOCTYPE", nullable = false)
    private String idDocType;

    @Column(name = "DESCDOCTYPE", nullable = false)
    private String descDocType;

}

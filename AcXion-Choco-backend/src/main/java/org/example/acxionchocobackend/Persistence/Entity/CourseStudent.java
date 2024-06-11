package org.example.acxionchocobackend.Persistence.Entity;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "COURSE_STUDENT")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class CourseStudent {

    @EmbeddedId
    private CourseStudentId courseStudentId;
}

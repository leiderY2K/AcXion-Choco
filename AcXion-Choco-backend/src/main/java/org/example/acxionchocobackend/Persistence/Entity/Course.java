package org.example.acxionchocobackend.Persistence.Entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "COURSE")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Course {

    @Id
    @Column(name = "IDCOURSE")
    private String idCourse;

    @Column(name = "COURSENAME", nullable = false)
    private String courseName;

    @Column(name = "COURSEDESCRIPTION", nullable = false)
    private String courseDescription;

    @Column(name = "COURSEHOURS", nullable = false)
    private String courseHours;

    @Column(name = "PROFESSORNAME", nullable = false)
    private String professor;

    @Column(name = "MONITORNAME", nullable = false)
    private String monitor;

    @Column(name = "SEATCOUNT", nullable = false)
    private Integer seatCount;

    @Column(name = "ISAVAILABLE", nullable = false)
    private Boolean isAvailable;

    @Column(name = "SCHEDULE", nullable = false)
    private String schedule;

}

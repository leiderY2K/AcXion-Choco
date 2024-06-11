-- Insertar datos en DOCUMENTTYPE
INSERT INTO `ACXIONCHOCODATABASE`.`DOCUMENTTYPE` (`IDDOCTYPE`, `DESCDOCTYPE`) VALUES ('CC', 'Cédula de Ciudadanía');
INSERT INTO `ACXIONCHOCODATABASE`.`DOCUMENTTYPE` (`IDDOCTYPE`, `DESCDOCTYPE`) VALUES ('TI', 'Tarjeta de Identidad');

-- Insertar datos en ROLE
INSERT INTO `ACXIONCHOCODATABASE`.`ROLE` (`IDROLE`, `DESCROLE`) VALUES ('EST', 'Estudiante');
INSERT INTO `ACXIONCHOCODATABASE`.`ROLE` (`IDROLE`, `DESCROLE`) VALUES ('PRO', 'Profesor');
INSERT INTO `ACXIONCHOCODATABASE`.`ROLE` (`IDROLE`, `DESCROLE`) VALUES ('MON', 'Monitor');
INSERT INTO `ACXIONCHOCODATABASE`.`ROLE` (`IDROLE`, `DESCROLE`) VALUES ('ADM', 'Administrador');

-- Insertar datos en USER
INSERT INTO `ACXIONCHOCODATABASE`.`USER` (`IDUSER`, `FK_IDDOCTYPE`, `FIRSTNAME`, `LASTNAME`, `EMAIL`, `PASSWORD`, `PHONE`) VALUES ('1234567890', 'CC', 'Juan', 'Pérez', 'juan.perez@example.com', 'password123', '3001234567');
INSERT INTO `ACXIONCHOCODATABASE`.`USER` (`IDUSER`, `FK_IDDOCTYPE`, `FIRSTNAME`, `LASTNAME`, `EMAIL`, `PASSWORD`, `PHONE`) VALUES ('2345678901', 'CC', 'María', 'Gómez', 'maria.gomez@example.com', 'password123', '3101234567');
INSERT INTO `ACXIONCHOCODATABASE`.`USER` (`IDUSER`, `FK_IDDOCTYPE`, `FIRSTNAME`, `LASTNAME`, `EMAIL`, `PASSWORD`, `PHONE`) VALUES ('3456789012', 'CC', 'Luis', 'Martínez', 'luis.martinez@example.com', 'password123', '3201234567');
INSERT INTO `ACXIONCHOCODATABASE`.`USER` (`IDUSER`, `FK_IDDOCTYPE`, `FIRSTNAME`, `LASTNAME`, `EMAIL`, `PASSWORD`, `PHONE`) VALUES ('4567890123', 'CC', 'Ana', 'Rodríguez', 'ana.rodriguez@example.com', 'password123', '3301234567');
INSERT INTO `ACXIONCHOCODATABASE`.`USER` (`IDUSER`, `FK_IDDOCTYPE`, `FIRSTNAME`, `LASTNAME`, `EMAIL`, `PASSWORD`, `PHONE`) VALUES ('5678901234', 'CC', 'Carlos', 'López', 'carlos.lopez@example.com', 'password123', '3401234567');
INSERT INTO `ACXIONCHOCODATABASE`.`USER` (`IDUSER`, `FK_IDDOCTYPE`, `FIRSTNAME`, `LASTNAME`, `EMAIL`, `PASSWORD`, `PHONE`) VALUES ('6789012345', 'CC', 'Sofía', 'García', 'sofia.garcia@example.com', 'password123', '3501234567');
INSERT INTO `ACXIONCHOCODATABASE`.`USER` (`IDUSER`, `FK_IDDOCTYPE`, `FIRSTNAME`, `LASTNAME`, `EMAIL`, `PASSWORD`, `PHONE`) VALUES ('7890123456', 'TI', 'Miguel', 'Hernández', 'miguel.hernandez@example.com', 'password123', '3601234567');
INSERT INTO `ACXIONCHOCODATABASE`.`USER` (`IDUSER`, `FK_IDDOCTYPE`, `FIRSTNAME`, `LASTNAME`, `EMAIL`, `PASSWORD`, `PHONE`) VALUES ('8901234567', 'TI', 'Laura', 'Ramírez', 'laura.ramirez@example.com', 'password123', '3701234567');
INSERT INTO `ACXIONCHOCODATABASE`.`USER` (`IDUSER`, `FK_IDDOCTYPE`, `FIRSTNAME`, `LASTNAME`, `EMAIL`, `PASSWORD`, `PHONE`) VALUES ('9012345678', 'TI', 'Daniel', 'Torres', 'daniel.torres@example.com', 'password123', '3801234567');
INSERT INTO `ACXIONCHOCODATABASE`.`USER` (`IDUSER`, `FK_IDDOCTYPE`, `FIRSTNAME`, `LASTNAME`, `EMAIL`, `PASSWORD`, `PHONE`) VALUES ('0123456789', 'TI', 'Isabella', 'Vargas', 'isabella.vargas@example.com', 'password123', '3901234567');

-- Insertar datos en USER_ROLE
INSERT INTO `ACXIONCHOCODATABASE`.`USER_ROLE` (`IDUSER`, `FK_IDDOCTYPE`, `IDROLE`) VALUES ('1234567890', 'CC', 'EST');
INSERT INTO `ACXIONCHOCODATABASE`.`USER_ROLE` (`IDUSER`, `FK_IDDOCTYPE`, `IDROLE`) VALUES ('2345678901', 'CC', 'PRO');
INSERT INTO `ACXIONCHOCODATABASE`.`USER_ROLE` (`IDUSER`, `FK_IDDOCTYPE`, `IDROLE`) VALUES ('3456789012', 'CC', 'MON');
INSERT INTO `ACXIONCHOCODATABASE`.`USER_ROLE` (`IDUSER`, `FK_IDDOCTYPE`, `IDROLE`) VALUES ('4567890123', 'CC', 'ADM');
INSERT INTO `ACXIONCHOCODATABASE`.`USER_ROLE` (`IDUSER`, `FK_IDDOCTYPE`, `IDROLE`) VALUES ('5678901234', 'CC', 'EST');
INSERT INTO `ACXIONCHOCODATABASE`.`USER_ROLE` (`IDUSER`, `FK_IDDOCTYPE`, `IDROLE`) VALUES ('6789012345', 'CC', 'PRO');
INSERT INTO `ACXIONCHOCODATABASE`.`USER_ROLE` (`IDUSER`, `FK_IDDOCTYPE`, `IDROLE`) VALUES ('7890123456', 'TI', 'MON');
INSERT INTO `ACXIONCHOCODATABASE`.`USER_ROLE` (`IDUSER`, `FK_IDDOCTYPE`, `IDROLE`) VALUES ('8901234567', 'TI', 'ADM');
INSERT INTO `ACXIONCHOCODATABASE`.`USER_ROLE` (`IDUSER`, `FK_IDDOCTYPE`, `IDROLE`) VALUES ('9012345678', 'TI', 'EST');
INSERT INTO `ACXIONCHOCODATABASE`.`USER_ROLE` (`IDUSER`, `FK_IDDOCTYPE`, `IDROLE`) VALUES ('0123456789', 'TI', 'PRO');


-- Insertar datos en COURSE
INSERT INTO `ACXIONCHOCODATABASE`.`COURSE` 
(`IDCOURSE`, `COURSENAME`, `COURSEDESCRIPTION`, `COURSEHOURS`, `PROFESSORNAME`, `SEATCOUNT`, `ISAVAILABLE`, `SCHEDULE`, `MONITORNAME`) VALUES 
('C001', 'Introducción a la Programación', 'Curso básico de programación en Python', 40, 'Carlos López', 30, 1, 'Lunes y Miércoles 8:00-10:00 AM', 'Juan Pérez'),
('C002', 'Bases de Datos', 'Fundamentos de bases de datos relacionales', 50, 'María Gómez', 25, 1, 'Martes y Jueves 10:00-12:00 AM', 'Ana Rodríguez'),
('C003', 'Desarrollo Web', 'Desarrollo de aplicaciones web con HTML, CSS y JavaScript', 60, 'Luis Martínez', 20, 1, 'Lunes y Miércoles 2:00-4:00 PM', 'Sofía García'),
('C004', 'Redes de Computadoras', 'Principios de redes de computadoras y protocolos', 45, 'Ana Rodríguez', 30, 1, 'Martes y Jueves 4:00-6:00 PM', 'Miguel Hernández'),
('C005', 'Algoritmos y Estructuras de Datos', 'Estructuras de datos y algoritmos fundamentales', 50, 'Carlos López', 25, 1, 'Viernes 8:00-12:00 AM', 'María Gómez'),
('C006', 'Ingeniería de Software', 'Conceptos y prácticas en ingeniería de software', 40, 'Laura Ramírez', 20, 1, 'Lunes y Miércoles 10:00-12:00 AM', 'Luis Martínez'),
('C007', 'Seguridad Informática', 'Fundamentos de seguridad en sistemas de información', 45, 'Daniel Torres', 25, 1, 'Martes y Jueves 2:00-4:00 PM', 'Ana Rodríguez'),
('C008', 'Inteligencia Artificial', 'Introducción a la inteligencia artificial y machine learning', 50, 'Isabella Vargas', 30, 1, 'Lunes y Miércoles 4:00-6:00 PM', 'Carlos López'),
('C009', 'Computación en la Nube', 'Conceptos y prácticas de computación en la nube', 60, 'Miguel Hernández', 20, 1, 'Viernes 2:00-6:00 PM', 'Sofía García'),
('C010', 'Desarrollo de Aplicaciones Móviles', 'Desarrollo de aplicaciones móviles para Android e iOS', 50, 'Laura Ramírez', 25, 1, 'Martes y Jueves 8:00-10:00 AM', 'Daniel Torres');

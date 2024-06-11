import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Typography, Box, Grid } from '@mui/material';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(CategoryScale);

const Statistics = () => {
  // Datos de ejemplo (reemplazar con datos reales de tu API)
  const courseData = [
    { id: 'A', name: 'Bases de Datos', students: 30, completionRate: 70, averageGrade: 85 },
    { id: 'B', name: 'Patrones de Diseño', students: 45, completionRate: 20, averageGrade: 78 },
    { id: 'C', name: 'Cloud Computing', students: 20, completionRate: 50, averageGrade: 92 },
    { id: 'D', name: 'Introduccion a la programación', students: 35, completionRate: 80, averageGrade: 88 },
  ];

  // Extraer datos para los gráficos
  const courseLabels = courseData.map(course => course.name);
  const studentData = courseData.map(course => course.students);
  const completionData = courseData.map(course => course.completionRate);
  const averageGradeData = courseData.map(course => course.averageGrade);

  // Datos para los gráficos de Chart.js
  const studentsPerCourseData = {
    labels: courseLabels,
    datasets: [
      {
        label: 'Estudiantes por Curso',
        data: studentData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)', 
      },
    ],
  };

  const completionRateData = {
    labels: courseLabels,
    datasets: [
      {
        data: completionData,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const averageGradeChartData = {
    labels: courseLabels,
    datasets: [
      {
        label: 'Calificación Promedio',
        data: averageGradeData,
        borderColor: '#FF6384',
        fill: false,
      },
    ],
  };

  return (
    <div style={{ padding: 20 }}> 
      <Typography variant="h4" gutterBottom align="center">
        Estadísticas de Cursos
      </Typography>

      <Grid container spacing={3}> 
        <Grid item xs={12} md={6}>
          <Box sx={{ height: 400 }}> 
            <Bar data={studentsPerCourseData} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ height: 400 }}> 
            <Pie data={completionRateData} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ height: 400 }}> 
            <Line data={averageGradeChartData} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Statistics;


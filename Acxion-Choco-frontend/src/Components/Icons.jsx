import { Box, CardContent, Card, Typography, CardMedia} from '@mui/material';
import imgs from "/src/img/imagenes.js";

const Icons = () => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', height: '100vh', justifyContent: 'space-around', alignContent: 'space-around', p: 2,  gap: 4 }}>
            <Card sx={{ width: 300, height: 350 }}>
                <CardContent>
                    <Typography variant="h6">Neil deGrasse Tyson </Typography>
                    <CardMedia component="img" height="140" image={imgs[10]} alt="Neil deGrasse Tyson " />
                    <Typography variant="body2" sx={{ textAlign: 'justify' }}>Astrofísico y divulgador científico afroamericano de renombre, ha realizado importantes investigaciones en astrofísica y se ha dedicado a acercar la ciencia al público general mediante libros, programas de televisión y redes sociales.</Typography>
                </CardContent>
            </Card>
            <Card sx={{ width: 400, height: 350 }}>
                <CardContent>
                    <Typography variant="h6">Elijah McCoy</Typography>
                    <CardMedia component="img" height="140" image={imgs[11]} alt="Elijah McCoy" />
                    <Typography variant="body2" sx={{ textAlign: 'justify' }}>Fue un ingeniero e inventor afroamericano que realizó importantes contribuciones en el campo de la ingeniería mecánica, especialmente en el desarrollo de sistemas de lubricación para máquinas de vapor.</Typography>
                </CardContent>
            </Card>
            <Card sx={{ width: 400, height: 350 }}>
                <CardContent>
                    <Typography variant="h6">Emmett Chappelle</Typography>
                    <CardMedia component="img" height="140" image={imgs[12]} alt=" Emmett Chappelle" />
                    <Typography variant="body2" sx={{ textAlign: 'justify' }}>Es un bioquímico afroamericano conocido por sus contribuciones a la NASA, incluyendo el desarrollo de métodos para detectar vida extraterrestre y el estudio de la bioluminiscencia en organismos marinos.</Typography>
                </CardContent>
            </Card>
            <Card sx={{ width: 200, height: 150 }}>
                <CardContent>
                    <Typography variant="body1">Monumento al renacimiento africano</Typography>
                    <CardMedia component="img" height="140" image={imgs[13]} alt="monumento al renacimiento africano" />
                </CardContent>
            </Card>
            <Card sx={{ width: 250, height: 300 }}>
                <CardContent>
                    <Typography variant="body1">George Washington Carver</Typography>
                    <CardMedia component="img" height="140" image={imgs[14]} alt="George Washington Carver" />
                    <Typography variant="body2" sx={{ textAlign: 'justify' }}>Fue un científico, botánico y educador afroamericano reconocido por su trabajo pionero en la agricultura y el desarrollo de productos derivados del maní.</Typography>
                </CardContent>
            </Card>
            <Card sx={{ width: 300, height: 500 }}>
                <CardContent>
                    <Typography variant="body1">Mae jeminson </Typography>
                    <CardMedia component="img" height="140" image={imgs[15]} alt="Mae jeminson" />
                    <Typography variant="body2" sx={{ textAlign: 'justify' }}>Fue la primera mujer afroamericana en viajar al espacio. Antes de convertirse en astronauta, se destacó como médica e ingeniera.</Typography>
                </CardContent>
            </Card>
            <Card sx={{ width: 300, height: 350 }}>
                <CardContent>
                    <Typography variant="body1">Shirley Ann Jackson</Typography>
                    <CardMedia component="img" height="140" image={imgs[16]} alt="Shirley Ann Jackson" />
                    <Typography variant="body2" sx={{ textAlign: 'justify' }}>Es una física teórica estadounidense que ha llevado a cabo investigaciones pioneras en semiconductores y ha ocupado cargos destacados en instituciones académicas y gubernamentales, incluyendo la presidencia del Instituto Politécnico Rensselaer.</Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Icons;
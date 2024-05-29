import { Box, CardContent, Card, Typography, CardMedia} from '@mui/material';
import imgs from "/src/img/imagenes.js";

const Icons = () => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', height: '100vh', justifyContent: 'space-around', alignContent: 'space-around', p: 2 }}>
            <Card sx={{ width: 300, height: 200 }}>
                <CardContent>
                    <Typography variant="h6">Neil deGrasse Tyson </Typography>
                    <CardMedia component="img" height="140" image={imgs[10]} alt="Neil deGrasse Tyson " />
                </CardContent>
            </Card>
            <Card sx={{ width: 400, height: 250 }}>
                <CardContent>
                    <Typography variant="h6">Elijah McCoy</Typography>
                    <CardMedia component="img" height="140" image={imgs[11]} alt="Elijah McCoy" />
                </CardContent>
            </Card>
            <Card sx={{ width: 500, height: 300 }}>
                <CardContent>
                    <Typography variant="h6">Emmett Chappelle</Typography>
                    <CardMedia component="img" height="140" image={imgs[12]} alt=" Emmett Chappelle" />
                </CardContent>
            </Card>
            <Card sx={{ width: 200, height: 150 }}>
                <CardContent>
                    <Typography variant="body1"></Typography>
                    <CardMedia component="img" height="140" image={imgs[13]} alt=" Emmett Chappelle" />
                </CardContent>
            </Card>
            <Card sx={{ width: 250, height: 300 }}>
                <CardContent>
                    <Typography variant="body1">Dr. Shirley Ann Jackson</Typography>
                    <CardMedia component="img" height="140" image={imgs[14]} alt=" Emmett Chappelle" />
                </CardContent>
            </Card>
            <Card sx={{ width: 300, height: 450 }}>
                <CardContent>
                    <Typography variant="body1">Mae jeminson </Typography>
                    <CardMedia component="img" height="140" image={imgs[15]} alt=" Emmett Chappelle" />
                </CardContent>
            </Card>
            <Card sx={{ width: 300, height: 450 }}>
                <CardContent>
                    <Typography variant="body1">Emmett Chappelle  </Typography>
                    <CardMedia component="img" height="140" image={imgs[16]} alt=" Emmett Chappelle" />
                </CardContent>
            </Card>
        </Box>
    );
};

export default Icons;
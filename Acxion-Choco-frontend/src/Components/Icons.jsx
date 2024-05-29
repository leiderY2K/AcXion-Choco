import { Box, CardContent, Card, Typography } from '@mui/material';

const Icons = () => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', height: '100vh', justifyContent: 'space-around', alignContent: 'space-around', p: 2 }}>
            <Card sx={{ width: 300, height: 400 }}>
                <CardContent>
                    <Typography variant="h6">Sección 1</Typography>
                </CardContent>
            </Card>
            <Card sx={{ width: 400, height: 150 }}>
                <CardContent>
                    <Typography variant="h6">Sección 2</Typography>
                </CardContent>
            </Card>
            <Card sx={{ width: 500, height: 300 }}>
                <CardContent>
                    <Typography variant="h6">Sección Principal</Typography>
                </CardContent>
            </Card>
            <Card sx={{ width: 200, height: 150 }}>
                <CardContent>
                    <Typography variant="body1">Sección 3</Typography>
                </CardContent>
            </Card>
            <Card sx={{ width: 250, height: 300 }}>
                <CardContent>
                    <Typography variant="body1">Sección 4</Typography>
                </CardContent>
            </Card>
            <Card sx={{ width: 300, height: 450 }}>
                <CardContent>
                    <Typography variant="body1">Sección 5</Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Icons;
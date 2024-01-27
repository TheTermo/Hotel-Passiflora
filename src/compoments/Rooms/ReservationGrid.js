import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import {Link} from "react-router-dom";
import roomsData from './roomsData';

export default function ImgMediaCard() {
    return (
        <Container style={{ marginTop: '5%', marginBottom:'5%'}}>
            <h1 style={{ marginBottom: '5%'}}>Dostępne Pokoje:</h1>
            <Grid container spacing={3}>
                {roomsData.map((room) => (
                    <Grid key={room.id} item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 445 }}>
                                <Link key={room.id} to={`/room/${room.id}`} style={{ textDecoration: 'none', color: 'black'}}>
                                    {room.images.length > 0 && room.images.map((image, i) => (
                                        i === 0 && (
                                            <CardMedia
                                                component="img"
                                                alt="room"
                                                height="140"
                                                key={i}
                                                image={image}
                                            />
                                        )
                                    ))}
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {room.roomType}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {room.description}
                                        </Typography>
                                    </CardContent>
                                </Link>
                            </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
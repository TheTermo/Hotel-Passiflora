import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AboutImg from "../../../images/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg";
import { Container, Grid } from '@mui/material';
import {Link} from "react-router-dom";
export default function ImgMediaCard() {

    const roomsData = [
        {
            id: 1,
            title: 'Pokój jednoosobowy',
            description: 'Znajduje się w nim sypialnia z łóżkiem o pojedynczym rozmiarze oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja, a oczywiście również WiFi.'
        },
        {
            id: 2,
            title: 'Pokój dwuosobowy',
            description: '2 Znajduje się w nim sypialnia z łóżkiem o pojedynczym rozmiarze oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja, a oczywiście również WiFi.'
        },
        {
            id: 3,
            title: 'Pokój dwuosobowy',
            description: '3 Znajduje się w nim sypialnia z łóżkiem o pojedynczym rozmiarze oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja, a oczywiście również WiFi.'
        },
        {
            id: 4,
            title: 'Pokój dwuosobowy',
            description: '4 Znajduje się w nim sypialnia z łóżkiem o pojedynczym rozmiarze oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja, a oczywiście również WiFi.'
        },
        {
            id: 5,
            title: 'Pokój dwuosobowy',
            description: '5 Znajduje się w nim sypialnia z łóżkiem o pojedynczym rozmiarze oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja, a oczywiście również WiFi.'
        },
        {
            id: 6,
            title: 'Pokój dwuosobowy',
            description: '6 Znajduje się w nim sypialnia z łóżkiem o pojedynczym rozmiarze oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja, a oczywiście również WiFi.'
        }
        ];
    return (
        <Container style={{ marginTop: '5%', marginBottom:'5%'}}>
            <h1 style={{ marginBottom: '5%'}}>Dostępne Pokoje:</h1>
            <Grid container spacing={3}>
                {roomsData.map((room) => (
                    <Grid key={room.id} item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 445 }}>
                                <Link to={`/room${room.id}`} style={{ textDecoration: 'none', color:'black' }}>
                                    <CardMedia
                                        component="img"
                                        alt="room"
                                        height="140"
                                        image={AboutImg}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {room.title}
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
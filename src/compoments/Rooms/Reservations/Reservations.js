import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AboutImg from "../../../images/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg";
import { Grid } from '@mui/material';
import "./Reservation.scss";
import {Link} from "react-router-dom";
export default function ImgMediaCard() {
    return (
        <div className="zGrid">
            <h2>Dostępne Pokoje:</h2><br/>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={4}>
                    <Link to="/room1" style={{ textDecoration: 'none' }}><Card sx={{ maxWidth: 345 }}><CardMedia
                            component="img"
                            alt="room"
                            height="140"
                            image={AboutImg}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Pokój jednoosobowy
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Znajduje się w nim sypialnia z łóżkiem o pojedynczym rozmiarze oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja, a oczywiście również WiFi.
                            </Typography>
                        </CardContent>
                    </Card></Link>
                </Grid>
                <Grid item xs={4}>
                    <Link to="/room1" style={{ textDecoration: 'none' }}><Card sx={{ maxWidth: 345 }}><CardMedia
                        component="img"
                        alt="room"
                        height="140"
                        image={AboutImg}
                    />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Pokój jednoosobowy
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Znajduje się w nim sypialnia z łóżkiem o pojedynczym rozmiarze oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja, a oczywiście również WiFi.
                            </Typography>
                        </CardContent>
                    </Card></Link>
                </Grid>
                <Grid item xs={4}>
                    <Link to="/room1" style={{ textDecoration: 'none' }}><Card sx={{ maxWidth: 345 }}><CardMedia
                        component="img"
                        alt="room"
                        height="140"
                        image={AboutImg}
                    />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Pokój jednoosobowy
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Znajduje się w nim sypialnia z łóżkiem o pojedynczym rozmiarze oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja, a oczywiście również WiFi.
                            </Typography>
                        </CardContent>
                    </Card></Link>
                </Grid>

                <Grid item xs={4}>
                    <Link to="/room1" style={{ textDecoration: 'none' }}><Card sx={{ maxWidth: 345 }}><CardMedia
                        component="img"
                        alt="room"
                        height="140"
                        image={AboutImg}
                    />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Pokój jednoosobowy
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Znajduje się w nim sypialnia z łóżkiem o pojedynczym rozmiarze oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja, a oczywiście również WiFi.
                            </Typography>
                        </CardContent>
                    </Card></Link>
                </Grid>
                <Grid item xs={4}>
                    <Link to="/room1" style={{ textDecoration: 'none' }}><Card sx={{ maxWidth: 345 }}><CardMedia
                        component="img"
                        alt="room"
                        height="140"
                        image={AboutImg}
                    />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Pokój jednoosobowy
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Znajduje się w nim sypialnia z łóżkiem o pojedynczym rozmiarze oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja, a oczywiście również WiFi.
                            </Typography>
                        </CardContent>
                    </Card></Link>
                </Grid>
                <Grid item xs={4}>
                    <Link to="/room1" style={{ textDecoration: 'none' }}><Card sx={{ maxWidth: 345 }}><CardMedia
                        component="img"
                        alt="room"
                        height="140"
                        image={AboutImg}
                    />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Pokój jednoosobowy
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Znajduje się w nim sypialnia z łóżkiem o pojedynczym rozmiarze oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja, a oczywiście również WiFi.
                            </Typography>
                        </CardContent>
                    </Card></Link>
                </Grid>
            </Grid>
         </div>
    );
}
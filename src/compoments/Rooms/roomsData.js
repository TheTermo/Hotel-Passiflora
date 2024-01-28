import Image1 from "../../images/img1.jpg";
import Image2 from "../../images/img2.jpg";
import Image3 from "../../images/img3.jpg";
import Image4 from "../../images/img4.jpg";
import Image5 from "../../images/img5.jpg";
import Image6 from "../../images/img6.jpg";
import Room1 from "../../images/room1.jpg";
import Room2 from "../../images/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg";
import Room3 from "../../images/visualsofdana-T5pL6ciEn-I-unsplash.jpg";
import Room4 from "../../images/room4.jpg";
import Room5 from "../../images/room5.jpg";
import Room6 from "../../images/room6.jpg";

const roomsData = [
    {
        id:1,
        roomType:"Pokój Jednoosobowy",
        maxGuests: 1,
        roomSize: 18,
        bedSize: "Jednoosobowe",
        privateBathroom: 1,
        roomPrice: 80,
        images: [Room1,Image1, Image2, Image3],
        description: "Pokój jednoosobowy jest zarezerwowany tylko dla jednego gościa. Znajduje się w nim sypialnia z łóżkiem o pojedynczym rozmiarze oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja, i oczywiście również WiFi."
    },
    {
        id:2,
        roomType:"Pokój jednoosobowy Deluxe",
        maxGuests: 1,
        roomSize: 25,
        bedSize: "Jednoosobowe duże",
        privateBathroom: 1,
        roomPrice: 120,
        images: [Room2,Image4,Image5,Image6],
        description: "Pokój jednoosobowy typu Deluxe jest przeznaczony wyłącznie dla jednego gościa. Znajduje się w nim sypialnia z łóżkiem o rozmiarze małego podwójnego oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja oraz oczywiście WiFi."
    },
    {
        id:3,
        roomType:"Pokój dwuosobowy",
        maxGuests: "2 -3",
        roomSize: 34,
        bedSize: "Dwuosobowe",
        privateBathroom: 1,
        roomPrice: 180,
        images: [Room3,Image1,Image2,Image3],
        description: "Pokój dwuosobowy jest przeznaczony dla dwóch lub trzech gości.  Znajduje się w nim sypialnia z łóżkiem o rozmiarze podwójnym oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja oraz oczywiście WiFi."
    },
    {
        id:4,
        roomType:"Pokój dwuosobowy Deluxe",
        maxGuests: "2 - 3",
        roomSize: 41,
        bedSize: "Dwuosobowe wielkie",
        privateBathroom: 1,
        roomPrice: 240,
        images: [Room4,Image1,Image2,Image3],
        description: "Pokój dwuosobowy typu Deluxe jest przeznaczony dla dwóch lub trzech gości. Znajduje się w nim sypialnia z łóżkiem o rozmiarze Queen oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja oraz oczywiście WiFi."
    },
    {
        id:5,
        roomType:"Pokój dwuosobowy z dwoma łóżkami",
        maxGuests: "2 - 4",
        roomSize: 51,
        bedSize: "Dwuosobowe",
        privateBathroom: 1,
        roomPrice: 300,
        images: [Room5,Image1,Image2,Image3],
        description: "Pokój dwuosobowy z dwoma łóżkami jest przeznaczony dla 2-4 gości. Znajduje się w nim sypialnia z dwoma łóżkami o rozmiarze podwójnym oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja oraz oczywiście WiFi."
    },
    {
        id:6,
        roomType:"Pokój dwuosobowy Deluxe z dwoma łóżkami",
        maxGuests: "2 - 4",
        roomSize: 59,
        bedSize: "Dwuosobowe wielkie",
        privateBathroom: 2,
        roomPrice: 360,
        images: [Room6,Image1,Image2,Image3],
        description: "Pokój dwuosobowy typu Deluxe z dwoma łóżkami jest przeznaczony dla 2-4 gości. Znajduje się w nim sypialnia z dwoma łóżkami o rozmiarze Queen oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja oraz oczywiście WiFi."
    },
];
export default roomsData;
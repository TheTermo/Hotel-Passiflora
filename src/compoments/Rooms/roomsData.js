import Image1 from "../../images/img1.jpg";
import Image2 from "../../images/img2.jpg";
import Image3 from "../../images/img3.jpg";
import Image4 from "../../images/img4.jpg";
import Image5 from "../../images/img5.jpg";
import Image6 from "../../images/img6.jpg";

const roomsData = [
    {
        id:1,
        roomType:"Pokój Jednoosobowy",
        maxGuests: 1,
        roomSize: 18,
        bedSize: "Jednoosobowe",
        privateBathroom: 1,
        roomPrice: 80,
        images: [Image1, Image2, Image3],
        description: "Pokój jednoosobowy jest zarezerwowany tylko dla jednego gościa. Znajduje się w nim sypialnia z łóżkiem o pojedynczym rozmiarze oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja, a oczywiście również WiFi."
    },
    {
        id:2,
        roomType:"Pokój Dwuosobowy",
        maxGuests: 2,
        roomSize: 28,
        bedSize: "Dwuosobowe",
        privateBathroom: 1,
        roomPrice: 180,
        images: [Image4,Image5,Image6],
        description: "Pokój DWUOSOBOWY jest zarezerwowany tylko dla jednego gościa. Znajduje się w nim sypialnia z łóżkiem o pojedynczym rozmiarze oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja, a oczywiście również WiFi."
    },
    {
        id:3,
        roomType:"Pokój 3",
        maxGuests: 2,
        roomSize: 28,
        bedSize: "Dwuosobowe",
        privateBathroom: 1,
        roomPrice: 180,
        images: [Image1,Image2,Image3],
        description: "Pokój DWUOSOBOWY jest zarezerwowany tylko dla jednego gościa. Znajduje się w nim sypialnia z łóżkiem o pojedynczym rozmiarze oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja, a oczywiście również WiFi."
    },
    {
        id:4,
        roomType:"Pokój 4",
        maxGuests: 2,
        roomSize: 28,
        bedSize: "Dwuosobowe",
        privateBathroom: 1,
        roomPrice: 180,
        images: [Image1,Image2,Image3],
        description: "Pokój DWUOSOBOWY jest zarezerwowany tylko dla jednego gościa. Znajduje się w nim sypialnia z łóżkiem o pojedynczym rozmiarze oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja, a oczywiście również WiFi."
    },
    {
        id:5,
        roomType:"Pokój 5",
        maxGuests: 2,
        roomSize: 28,
        bedSize: "Dwuosobowe",
        privateBathroom: 1,
        roomPrice: 180,
        images: [Image1,Image2,Image3],
        description: "Pokój DWUOSOBOWY jest zarezerwowany tylko dla jednego gościa. Znajduje się w nim sypialnia z łóżkiem o pojedynczym rozmiarze oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja, a oczywiście również WiFi."
    },
    {
        id:6,
        roomType:"Pokój 6",
        maxGuests: 2,
        roomSize: 28,
        bedSize: "Dwuosobowe",
        privateBathroom: 1,
        roomPrice: 180,
        images: [Image1,Image2,Image3],
        description: "Pokój DWUOSOBOWY jest zarezerwowany tylko dla jednego gościa. Znajduje się w nim sypialnia z łóżkiem o pojedynczym rozmiarze oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja, a oczywiście również WiFi."
    },
];

export default roomsData;
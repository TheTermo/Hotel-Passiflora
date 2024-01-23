import Image1 from "../../images/img1.jpg";
import Image2 from "../../images/img2.jpg";
import Image3 from "../../images/img3.jpg";
import Image4 from "../../images/img4.jpg";
import Image5 from "../../images/img5.jpg";
import Image6 from "../../images/img6.jpg";
import "./galleryGrip.scss"
import {useState} from "react";
import CloseIcon from '@mui/icons-material/Close';

function GalleryGrip  () {
    let data = [
        {id: 1, imgSrc: Image1,},
        {id: 2, imgSrc: Image2,},
        {id: 3, imgSrc: Image3,},
        {id: 4, imgSrc: Image4,},
        {id: 5, imgSrc: Image5,},
        {id: 6, imgSrc: Image6,},
    ];
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) =>{
         setTempImgSrc(imgSrc);
         setModel(true);
    }
    return(
            <>
                <h1 className="gallery-title">Zdjęcia:</h1>
                <div className={model? "model open" : "model"}>
                    <img alt="img" src={tempimgSrc}/>
                    <CloseIcon onClick={()=> setModel(false)} />
                </div>
                <div className="gallery">
                    {data.map((item, index)=>{
                        return(
                            <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                                <img alt="img1" src={item.imgSrc} style={{width:'100%'}}/>
                            </div>
                        )
                    })}
                </div>
            </>
    )
}
export default GalleryGrip;
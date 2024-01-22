import Image1 from "../../images/eddi-aguirre-ZAVHbpOn4Jk-unsplash.jpg";
import Image2 from "../../images/eddi-aguirre-ZAVHbpOn4Jk-unsplash.jpg";
import "./galleryGrip.scss"
import {useState} from "react";

function GalleryGrip  () {
    let data = [
        {id: 1, imgSrc: Image1,},
        {id: 2, imgSrc: Image2,},
        {id: 3, imgSrc: Image1,},
        {id: 4, imgSrc: Image2,},
        {id: 5, imgSrc: Image2,},
        {id: 6, imgSrc: Image2,},
    ];
    const [model, setModel] = useState(false)
    const [tempingSrc, setTempImgSrc] = useState('')
    const getImg = (imgSrc) =>{
         setTempImgSrc(imgSrc);
         setModel(true);
    }
    return(
            <>
                <div className={model? "model open" : "model"}>
                    <img alt="img" src={tempingSrc}/>
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
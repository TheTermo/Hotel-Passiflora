import Pokoj1 from "../../images/visualsofdana-T5pL6ciEn-I-unsplash.jpg"
import Pokoj2 from "../../images/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg"
import "./descriptionHotel.scss"
const DescriptionHotel = () => {
    return(
        <div className="description">
            <h1>Witaj w Hotel Passiflora</h1>
            <p className="spaceP">Nasz hotel łączy w sobie elegancję, komfort i niezapomniane doświadczenia</p>

            <div className="first-des">
                <div className="des-text">
                    <h2>Nasz hotel</h2>
                    <p>to miejsce gdzie luksus spotyka się z gościnnością. Nasz zespół zadba o to, aby każdy gość poczuł się wyjątkowo, a nasze unikalne udogodnienia i wysokie standardy obsługi sprawią, że Twój pobyt będzie niezapomniany. Odkryj nasze przestronne pokoje i apartamenty, urządzone z dbałością o najdrobniejsze detale. Każdy z naszych eleganckich pokoi oferuje spektakularny widok na morze. To idealne miejsce do relaksu po dniu pełnym wrażeń.Nasza restauracja serwuje wykwintne dania przygotowywane z lokalnych, świeżych składników. Bar zaprasza na kreatywne drinki i przekąski w przyjemnej atmosferze. Doświadcz niezapomnianych smaków podczas pobytu.</p>
                </div>

                <div className="image">
                    <img alt="img" src={Pokoj1}/>
                    <img alt="img" src={Pokoj2}/>
                </div>
            </div>
        </div>
    );
};
export default DescriptionHotel;
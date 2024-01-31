import './Testimonials.scss'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-material-ui-carousel'
import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"
import img4 from "../../images/img4.jpg"
import img5 from "../../images/img5.jpg"
import img6 from "../../images/img6.jpg"
import {Paper} from '@mui/material'

export default function Testimonials() {
    const items = [
        {
            name: "Luksus i Komfort w Jednym Miejscu",
            description: "Zapewniamy niezapomniany pobyt, gdzie luksus spotyka się z komfortem. Nasze pokoje są urządzone w elegancki sposób, abyś czuł się jak w domu z dodatkiem wyjątkowej atmosfery",
            image: img1
        },
        {
            name: "Luksus i Komfort w Jednym Miejscu",
            description: "Zapewniamy niezapomniany pobyt, gdzie luksus spotyka się z komfortem. Nasze pokoje są urządzone w elegancki sposób, abyś czuł się jak w domu z dodatkiem wyjątkowej atmosfery",
            image: img2
        },
        {
            name: "Odkryj Siłę Relaksu w Naszym Spa",
            description: "Przyjedź do naszego hotelu i doświadcz prawdziwego relaksu w naszym ekskluzywnym spa. Oddaj się chwilom błogiego odpoczynku i regeneracji z dala od codziennego zgiełku.",
            image: img3
        },
        {
            name: "Odkryj Siłę Relaksu w Naszym Spa",
            description: "Przyjedź do naszego hotelu i doświadcz prawdziwego relaksu w naszym ekskluzywnym spa. Oddaj się chwilom błogiego odpoczynku i regeneracji z dala od codziennego zgiełku.!",
            image: img4
        },
        {
            name: "Wyjątkowe Doświadczenie Kulinarne na Każdą Pory Dnia",
            description: "Nasza restauracja oferuje nie tylko wyjątkowe dania, ale także niepowtarzalne doświadczenie kulinarne. Od śniadania po kolację, zasmakuj różnorodności smaków w eleganckim otoczeniu",
            image: img5
        },
        {
            name: "Wyjątkowe Doświadczenie Kulinarne na Każdą Pory Dnia",
            description: "HNasza restauracja oferuje nie tylko wyjątkowe dania, ale także niepowtarzalne doświadczenie kulinarne. Od śniadania po kolację, zasmakuj różnorodności smaków w eleganckim otoczeniu",
            image: img6
        },
    ]
    return (
        <Container fluid>
            <Carousel>
                {items.map((item, i) => (
                    <Item key={i} item={item}/>
                ))}
            </Carousel>
        </Container>
    )
}

function Item(props) {
    return (
        <Paper className="item-container">
            <img src={props.item.image} alt={props.item.name}/>
            <div className="overlay"></div>
            <div className="content">
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
            </div>
        </Paper>
    )
}
import  { Component} from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.MenuItems = [
            {
                title: "Strona Główna",
                url: '/',
                cName: "nav-links"
            },
            {
                title: "Rezerwacje",
                url: '/rezerwacje',
                cName: "nav-links"
            },
            {
                title: "Galeria",
                url: '/galeria',
                cName: "nav-links"
            },
            {
                title: "Kontakt",
                url: '/kontakt',
                cName: "nav-links"
            }
        ];
    }

    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItem">
                <h1 className="navbar-logo">Hotel Passiflora</h1>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fa fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {this.MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
export default Navbar;
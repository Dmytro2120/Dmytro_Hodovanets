import { Component } from "react";
import Nav from "../Nav/Nav";

export default class Header extends Component {
    render() {
        return(
            <div className="header__text">
                <h1>Navigete</h1>
                <Nav/>
            </div>
        )
    }
}
import { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css"; 

export default class Nav extends Component {
    render() {
        return(
            <div className={styles.container}>
                <ul className={styles.list__container}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/people/?page=1">People</NavLink> </li>
                </ul>
        
            </div>
        )
    }
}
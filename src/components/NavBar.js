import React, { Component } from "react";
import './NavBar.css';


class NavBar extends Component {

    render() {

        return (
            <div className="navbar">
                <a id="Home" href="/" className=" active-link"
                    className={"navbar-button button home " + (this.props.page === "Home" ? 'active-link' : '')}>
                    Home</a>
                <p className="title center">{this.props.title}</p>
                <a id="Moodivities" href="/moodivities"
                    className={"navbar-button button moodivities " + (this.props.page === "Moodivities" ? 'active-link' : '')}>
                    Moodivities</a>
            </div>
        );
    }
}

export default NavBar;
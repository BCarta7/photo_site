import React, { useState } from "react";
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom";
import Navigation from './Nav'

const Header = () => {
    return (
        <>
        <div className="static">
            <h1 className="text-center">HEADER</h1>
            <Navigation />
        </div>
        </>
    )
}
export default Header
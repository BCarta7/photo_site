import React, { useState } from "react";
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <>
            <div>
                <Nav className="flex justify-evenly text-center">
                    <NavItem>
                        <NavLink to="/">Portfolio</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contact">Contact</NavLink>
                    </NavItem>
                </Nav>
            </div>
        </>
    )
}
export default Navigation
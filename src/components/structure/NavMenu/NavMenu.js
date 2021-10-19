import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { JwtHandler } from "../../../local-storage/jwt-handler";

const StyledMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #effffa;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-101%)")};
    height: 100vh;
    text-align: left;
    padding: 0rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;

    @media (max-width: 320px) {
        width: 100%;
    }

    a {
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: #0d0c1d;
        text-decoration: none;
        transition: color 0.3s linear;

        @media (max-width: 576px) {
            font-size: 1.5rem;
            text-align: center;
        }

        &:hover {
            color: #343078;
        }
    }
    z-index: 9;
`;

const Menu = ({ open, setOpen }) => {
    const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid());
    useEffect(() => {
        const handleOnJwtChange = () => {
            setIsLogged(JwtHandler.isJwtValid());
        };
        window.addEventListener("onJwtChange", handleOnJwtChange);
        return () => {
            window.removeEventListener("onJwtChange", handleOnJwtChange);
        };
    }, []);

    return (
        <StyledMenu open={open}>
            <Link to="/" onClick={() => setOpen(!open)}>
                <span role="img" aria-label="about us">
                    💁🏻‍♂️
                </span>
                Home
            </Link>
            <Link to="/game/new" onClick={() => setOpen(!open)}>
                <span role="img" aria-label="price">
                    💸
                </span>
                New Game
            </Link>
            <Link to="/profiles" onClick={() => setOpen(!open)}>
                <span role="img" aria-label="price">
                    💸
                </span>
                Profiles
            </Link>
            <Link
                to={isLogged ? "/logout" : "/login"}
                onClick={() => setOpen(!open)}
            >
                <span role="img" aria-label="contact">
                    📩
                </span>
                {isLogged ? "Logout" : "Login"}
            </Link>
        </StyledMenu>
    );
};

const StyledBurger = styled.button`
    position: absolute;
    top: 5%;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
        }

        :nth-child(2) {
            opacity: ${({ open }) => (open ? "0" : "1")};
            transform: ${({ open }) =>
                open ? "translateX(20px)" : "translateX(0)"};
        }

        :nth-child(3) {
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
        }
    }
`;

const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
};

const NavMenu = () => {
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();

    const useOnClickOutside = (ref, handler) => {
        React.useEffect(() => {
            const listener = (event) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);

            return () => {
                document.removeEventListener("mousedown", listener);
            };
        }, [ref, handler]);
    };
    return (
        <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
        </div>
    );
};

export default NavMenu;

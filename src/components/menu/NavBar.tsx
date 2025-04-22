'use client'

import React, {HTMLAttributeAnchorTarget, useState} from "react";

type NavBarProps = {
    className?: string;
    children?: React.ReactNode;
}

type NavBarItemProps = {
    href?: string;
    active?: boolean;
    className?: string;
    children?: React.ReactNode;
    target ?: HTMLAttributeAnchorTarget
    onClick?: ()=> void;
}

type NavBarDropdownProps = {
    title: string;
    className?: string;
    children?: React.ReactNode;
    active?: boolean;
}

const Item =(props: NavBarItemProps) => {
    const classActive = "text-primary underline bg-primary text-white";
    const classNotActive = "text-primary";
    return (
        <li className={`
        ${props.className || "hover:text-primary hover:bg-secondary rounded h-3 cursor-pointer flex items-center justify-center p-5  "}
        ${props.active?classActive:classNotActive}
        `}
        onClick={props.onClick}>
            <a
                className={``}
                href={props.href}
                target={props.target}
            >
                {props.children}
            </a>
        </li>
    );
};

const Dropdown = ({ title, className, children, active }: NavBarDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const classActive = "text-primary underline";
    const classNotActive = "text-primary";

    return (
        <li className="relative group">
            <button
                className={`
                    ${className || "hover:text-primary hover:bg-secondary rounded h-3 cursor-pointer flex items-center justify-center p-5"}
                    ${active ? classActive : classNotActive}
                `}
                onMouseOver={() => setIsOpen(true)}
                onMouseLeave={() => {
                    setTimeout(()=>{
                        setIsOpen(false)
                    }, 600)
                }}
                aria-expanded={isOpen}
            >
                {title}
                <svg
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            <ul className={`
                absolute left-0 mt-2 w-52 text-center bg-white rounded-md shadow-lg py-0 z-10
                ${isOpen ? 'block' : 'hidden'}
                group-hover:block transition-all duration-200
            `}
                onMouseLeave={() => setIsOpen(false)}
            >
                {children}
            </ul>
        </li>
    );
};


const NavBar = (props: NavBarProps) => {
    return (
        <nav className={`${props.className || 'bg-secondary flex flex-row'}`}>
                {props.children}
        </nav>
    )
}

NavBar.Item = Item;
NavBar.Dropdown = Dropdown;

export const MENU_HEIGHT = 90;

export default NavBar;
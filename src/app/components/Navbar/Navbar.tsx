"use client"
import Link from 'next/link';
import FlowerPot from '../FlowerPot/FlowerPot';
import style from './navbar.module.scss';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { motion } from 'framer-motion';


interface INavbar {
    active?: string;
}

function Navbar() {
    const router = usePathname();
    console.log(router);

    const links = [
        {
            id: 1,
            name: "me",
            url: "/about",
            title: "about me"
        },
        {
            id: 2,
            name: "university",
            url: "/university",
            title: "university"
        },
        {
            id: 3,
            name: "portfolio",
            url: "/portfolio",
            title: "portfolio"
        },
        {
            id: 4,
            name: "blog",
            url: "/blog",
            title: "brain dump"
        }
    ]
    const title = links.filter(({url}) => {
        return router === url;
    })

    return (
        <nav className={style.navbar}>
            <div className={style.title}>
                <Link href={title[0].url}>
                    <h1>{title[0].title}</h1>
                    <div className={style.rectangle}/>
                </Link>
            </div>

            <ul className={style.items}>
                {links.map(({id, name, url}) => {
                    return <li className={classNames(style.items__item, router === url ? style.items__item__selected : null)} key={id}>
                        <Link href={url}>
                            {name}
                        </Link>
                    </li>
                })}
                    <FlowerPot width={55} height={55}/>
            </ul>
        </nav>
    )
}

export default Navbar;
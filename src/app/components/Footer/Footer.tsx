import Link from 'next/link';
import style from './footer.module.scss';

function Footer() {

    const socials = [
        {
            name: 'Linkedin',
            url: "https://www.linkedin.com/in/vibhor-gautam/",
            id: 1
        },
        {
            name: 'Email',
            url: "mailto:vibgofficial@gmail.com",
            id: 2
        },
        {
            name: 'Instagram',
            url: "https://www.instagram.com/vibbyridge",
            id: 3
        },
        {
            name: 'YouTube',
            url: "https://www.youtube.com/channel/UCaokqBc5dglz6RnbFvmxclA",
            id: 4
        },
        {
            name: 'Spotify',
            url: "https://open.spotify.com/user/31qrke3qciivp47kshezhsz2g4ee?si=55380e67ff884c09",
            id: 5
        }

    ]
    return (
        <div className={style.footer}>
            <p>Built by Vibhor Gautam</p>
            <nav>
                <ul className={style.items}>
                    {socials.map(({name, url, id}) => {
                        return (
                            <li className={style.item} key={id}>
                                <Link href={url} target="_blank">
                                    {name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Footer;
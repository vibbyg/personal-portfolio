'use client'
import { useRouter } from "next/navigation";
import style from './about.module.scss';
import Image from "next/image";
import me from '../../../../public/assets/nostalgicpo.jpeg';
import GithubLogo from "../../../../public/assets/GithubLogo";
import InstagramLogo from "../../../../public/assets/InstagramLogo";
import LinkedinLogo from "../../../../public/assets/LinkedinLogo";
import YoutubeLogo from "../../../../public/assets/YoutubeLogo";
import Link from "next/link";

function About() {
    const router = useRouter();

    const social_links = {
        github: "https://github.com/vibbyg",
        instagram: "https://www.instagram.com/vibbyridge",
        youtube: "https://www.youtube.com/channel/UCaokqBc5dglz6RnbFvmxclA",
        linkedin: "https://www.linkedin.com/in/vibhor-gautam/"
    }

    return(
        <div className={style.container}>
            <div className={style.profile}>
                    <Image className={style.clip_profile} src={me} alt="test" />
                    <h3 className={style.profile__text}>Vibhor / vii • bor /</h3>
                    <h3 className={style.profile__text}>CS @ UWaterloo</h3>
                    <div className={style.profile__socials}>
                        <Link href={social_links.github} target="_blank">
                            <GithubLogo />
                        </Link>
                        <Link href={social_links.instagram} target="_blank">
                            <InstagramLogo />
                        </Link>
                        <Link href={social_links.youtube} target="_blank">
                            <YoutubeLogo />
                        </Link>
                        <Link href={social_links.linkedin} target="_blank">
                            <LinkedinLogo />
                        </Link>
                    </div>
            </div>
            <div className={style.content}>
                testing 2
            </div>
        </div>
    )
}

export default About;
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
import Accordian from "../../components/Accordian/Accordian";

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
                    <h4 className={style.profile__text}>Vibhor / vii • bor /</h4>
                    <h4 className={style.profile__text}>CS @ UWaterloo</h4>
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
                <h3 className={style.content__text}>
                    I’m Vibhor, a 3rd-year <span className={style.content__text__compsci}>Computer Science</span> student at the University of Waterloo. <br />
                    I enjoy <span className={style.content__text__creating}>creating</span> things, whether they be experiences, projects, or videos.
                </h3>
                <br />
                <br />
                <h3 className={style.content__text}>
                    Click below for random fun facts about me:
                </h3>
            </div>
        </div>
    )
}

export default About;
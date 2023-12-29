'use client'
import { useRouter } from "next/navigation";
import style from './about.module.scss';
import Image from "next/image";
import me from '../../../../public/assets/flowerpotbg3.png';
import GithubLogo from "../../../../public/assets/GithubLogo";
import InstagramLogo from "../../../../public/assets/InstagramLogo";
import LinkedinLogo from "../../../../public/assets/LinkedinLogo";
import YoutubeLogo from "../../../../public/assets/YoutubeLogo";
import Link from "next/link";
import { animate, motion } from 'framer-motion';
// import Accordion from "../../components/Accordian/Accordion";
import classNames from "classnames";
import finances from "../../../../public/assets/finances2023_sankey.svg";

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
                <h3 className={classNames(style.content__text)}>
                    I’m Vibhor, a 3rd-year <span className={style.content__text__compsci}>Computer Science</span> student at the University of Waterloo.
                    Currently, I'm working as a <span style={{textDecoration: 'underline', fontWeight: 500}}>Software Developer Intern</span> @ <span style={{textDecoration: 'underline', fontWeight: 500}}>KindWorks.AI</span>.
                    <br />
                    <br />
                    I enjoy <span className={style.content__text__creating}>creating</span> things - creating <span className={style.videos}>videos</span>, 
                    creating <span className={style.projects}>projects</span>, and most importantly, creating <span className={style.experiences}>experiences</span>.
                </h3>
                <br />
                <br />
                <h3 className={style.content__text}>
                    Click below for random fun facts about me:
                </h3>
                <br />
                {/* <Accordion header="Shower thoughts that keep me in the shower">
                    <h4>🤨  How does a microwave heat up my leftover pizza? </h4>
                    <br />
                    <h4>🧐  Why does 3 am feel more like the middle of the night than midnight?</h4>
                    <br />
                    <h4>🤔  What are snails even trying to do</h4>
                </Accordion> */}
                <br />
                {/* <Image src={finances} alt="finances"/> */}
            </div>
        </div>
    )
}

export default About;
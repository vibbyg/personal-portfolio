'use client'
import { useRouter } from "next/navigation";

function About() {
    const router = useRouter();

    return(
        <div>
            <h1>About</h1>
            <button onClick={() => {router.replace('/')}}>Home</button>
        </div>
    )
}

export default About;
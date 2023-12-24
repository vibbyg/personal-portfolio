'use client'
import { useRouter } from "next/navigation";

function Portfolio() {
    const router = useRouter();

    return(
        <div>
            <h1>Portfolio</h1>
            <button onClick={() => {router.replace('/')}}>Home</button>
        </div>
    )
}

export default Portfolio;
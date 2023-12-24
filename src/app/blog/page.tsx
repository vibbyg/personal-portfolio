'use client'
import { useRouter } from "next/navigation";

function Blog() {
    const router = useRouter();

    return(
        <div>
            <h1>Blog</h1>
            <button onClick={() => {router.replace('/')}}>Home</button>
        </div>
    )
}

export default Blog;
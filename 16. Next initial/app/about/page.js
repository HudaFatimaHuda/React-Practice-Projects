// this is /about route 

import Link from "next/link"

function page() {
  return (
    <main>
        <p>
            <Link href='/'>Home</Link>
        </p>
        <h1>About US</h1>
        <p>
            <Link href='/blog'>Blogs</Link>
        </p>
    </main>
  )
}

export default page

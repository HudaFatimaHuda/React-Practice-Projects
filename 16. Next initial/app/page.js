// this is a server component
// all the logs will be displayed in the terminal
// if we visit this link first time, the content will be rendered on server
// but to avoid downloading again and again, this page will be rendered in the browser by using client side code
import Link from "next/link";

// its a '/' page
export default function Home() {
  console.log("Executed");
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="about">About Us</Link>
      </p>
    </main>
  );
}

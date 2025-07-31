import Link from "next/link";

export default function Meals() {
    return (
      <main style={{ color: 'white', textAlign: 'center' }}>
      <p>
        <Link href='/'>Home</Link>
      </p>
        <h1>
          Meals for you
        </h1>
        <p>
            <Link href='/meals/share'>Share Meals</Link>
            <Link href='/meals/1'>First Meal</Link>
        </p>
        <p>
            <Link href='/community'>Community</Link>
        </p>
      </main>
    );
  }
  
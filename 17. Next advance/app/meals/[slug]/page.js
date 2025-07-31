import Link from "next/link";

export default function MealItem({params}) {
    return (
      <main style={{ color: 'white', textAlign: 'center' }}>
      <p>
        <Link href='/'>Home</Link>
      </p>
      <p>
        <Link href='/meals'>Back</Link>
      </p>
        <h1>
          This is meal Item is {params.slug}
        </h1>
      </main>
    );
  }
  
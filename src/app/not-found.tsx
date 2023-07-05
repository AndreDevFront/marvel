import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>404- Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View{" "}
        <Link href="/" style={{ color: "red" }}>
          all Heroes
        </Link>
      </p>
    </div>
  );
}

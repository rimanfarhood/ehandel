import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 py-10 w-full">
      <div className="max-w-6xl mx-auto text-center text-sm space-y-2">
        <p>© {new Date().getFullYear()} Acvarello. All rights reserved.</p>
        <p>
          Kontakt:{" "}
          <a href="mailto:info@acvarello.se" className="underline" target="_blank">
            info@acvarello.se
          </a>
        </p>
        <p><Link href="https://www.instagram.com/acvarello.se/" className="hover:underline italic" target="_blank">
        Instagram
        </Link>
        </p>
      </div>
    </footer>
  );
};
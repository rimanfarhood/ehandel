import Link from "next/link";

export default function Contact() {
  return (
    <main className="flex flex-col items-center px-6 py-16 max-w-4xl mx-auto space-y-16">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl d">Kontakta Nivellé</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Vill du veta mer om mina verk, planerade utställningar eller köpa en
          tavla? Hör gärna av dig!
        </p>
      </section>

      {/* Optional Contact Form */}
      <section className="w-full max-w-md mx-auto">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Ditt namn"
            className="border border-black-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Din email"
            className="border border-black-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            placeholder="Ditt meddelande"
            rows={5}
            className="border border-black-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
          <label className="flex items-center space-x-2">
            <input type="checkbox" required />
            <span className="text-sm text-gray-600">
              Jag godkänner att mina uppgifter används för att besvara mitt
              meddelande. Läs mer i{" "}
              <a href="/privacy" className="underline">
                Integritetspolicyn
              </a>
              .
            </span>
          </label>
          <button
            type="submit"
            className="bg-black text-white rounded px-6 py-3 hover:bg-gray-800 transition"
          >
            Skicka meddelande
          </button>
        </form>
      </section>

      {/* Contact Info */}
      <section className="space-y-6 w-full text-center">
        <div>
          <h2 className="text-2xl">Email</h2>
          <p>
            <a href="mailto:info@acvarello.se" className="underline text-black">
              info@acvarello.se
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-2xl">Telefon</h2>
          <p>
            <a href="tel:+46739565729" className="underline text-black">
              073-956 57 29
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

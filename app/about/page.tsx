import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="flex flex-col items-center px-6 py-16 max-w-6xl mx-auto space-y-20">

      {/* Header Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl ">Om Nivellé Novéira</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Här kan du berätta kort om vem du är, din konstnärliga vision, eller varför du målar.
        </p>
      </section>

      {/* Background / Childhood */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        {/* Text */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl">Min bakgrund</h2>
          <p>
            (Infoga här: Berätta om din uppväxt, barndomsminnen eller något som formade dig som konstnär.)
          </p>
          <p>
            (Exempel: Hur du började måla, tidiga inspirationskällor, erfarenheter som påverkat din stil.)
          </p>
        </div>
        {/* Bild */}
        <div className="md:w-1/2 rounded-xl overflow-hidden shadow-md">
          <Image 
            src="/images/your-childhood.jpg" 
            alt="Barndomsfoto / inspiration" 
            width={600} 
            height={400} 
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Artistic Journey */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-8">
        {/* Text */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl">Min konstresa</h2>
          <p>
            (Infoga här: Berätta om din , projekt du arbetat med, tekniker du älskar, hur du skapar dina verk.)
          </p>
          <p>
            (Exempel: Varför du målar för känsla snarare än resultat, hur färg, drag och pigment styr dig.)
          </p>
        </div>
        {/* Bild */}
        <div className="md:w-1/2 rounded-xl overflow-hidden shadow-md">
          <Image 
            src="/images/art-process.jpg" 
            alt="Konstprocess" 
            width={600} 
            height={400} 
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Philosophy / Values */}
      <section className="space-y-4 text-center">
        <h2 className="text-2xl">Min konstfilosofi</h2>
        <p>
          (Infoga här: Berätta kort om vad din konst står för, dina värderingar, varför du målar på ditt sätt.)
        </p>
        <p>
          (Exempel: “Varje målning är en liten del av mitt sinne och mina känslor.”)
        </p>
      </section>

      {/* Optional Gallery / Highlight */}
      <section className="space-y-4">
        <h2 className="text-2xl text-center">Några favoriter</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Image src="/images/clown.png" alt="Clown" width={300} height={300} className="object-cover rounded shadow-md" />
          <Image src="/images/lila.jpg" alt="Lila" width={300} height={300} className="object-cover rounded shadow-md" />
          <Image src="/images/splash.png" alt="Splash" width={300} height={300} className="object-cover rounded shadow-md" />
          <Image src="/images/öga.png" alt="Öga" width={300} height={300} className="object-cover rounded shadow-md" />
        </div>
      </section>

      {/* Contact / Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl">Vill du veta mer?</h2>
        <p>Kontakta mig gärna om du vill veta mer om mina verk eller planerade utställningar.</p>
        <Link href="/contact" className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
          Kontakta mig
        </Link>
      </section>

    </main>
  );
}

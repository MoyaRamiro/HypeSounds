import { Link } from "@remix-run/react";
import NavBar from "./navBar";

const LobbyWithoutUser = () => (
  <div className="relative h-screen overflow-hidden justify-center text-white bg-[#000100]">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover "
    >
      <source src="/background.webm" type="video/webm" />
      Tu navegador no soporta el tag de video.{" "}
    </video>

    <div className="flex flex-col h-full text-white">
      <header className="grid grid-cols-2 gap-4 z-30 mx-auto w-full h-fit justify-between px-12 py-4">
        <NavBar />
      </header>

      <section className="z-30 max-w-3xl mx-auto mt-48">
        <div className="px-4 mx-auto max-w-screen-xl text-center  bg-[#000000bd] rounded-lg p-8">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight">
            Make a Difference, Create a Legacy
          </h1>
          <p className="text-lg font-normal">
            ¿Te imaginas un lugar donde puedas monetizar tu música sin
            preocuparte por el marketing, la protección de derechos o la
            necesidad de firmar con una disquera para obtener financiamiento?
            Únete a nuestro equipo, envíanos tu talento y nosotros nos
            encargaremos del resto.
          </p>
        </div>

        <div className="flex flex-col space-y-4 my-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Link to={"/lobby#start"}>
            <button
              type="button"
              className="text-black font-bold bg-white hover:bg-slate-300 focus:ring-4 rounded-lg text-sm h-10 w-60"
            >
              Start
            </button>
          </Link>
        </div>
      </section>

      <footer className="fixed bottom-0 left-0 w-full px-5 py-4 shadow flex items-center justify-between">
        <span>
          © {new Date().getFullYear()} Hype Sounds. All rights reserved
        </span>
        <img
          className="flex flex-wrap items-center h-20 rounded-lg"
          src="/googlePlayImage.webp"
          alt="Google Play Advice"
        />
      </footer>
    </div>
  </div>
);

export default LobbyWithoutUser;

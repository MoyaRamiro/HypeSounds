import { Link } from "@remix-run/react";
import { useEffect } from "react";
import NavBar from "~/components/navBar";

export default function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection)
          window.history.replaceState(null, "", `#${visibleSection.target.id}`);
      },
      { threshold: 0.6 }
    );

    document
      .querySelectorAll("section")
      .forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <NavBar />

      <section
        className="min-h-screen flex flex-col justify-between items-center text-white"
        id="start"
      >
        <div className="container flex flex-col text-white space-y-6 mt-48">
          <div className="flex flex-wrap justify-between w-48">
            <img src="/logo.webp" alt="logo" />
          </div>

          <h1 className="max-w-48">MONETIZAR TU MUSICA NUNCA FUE TAN FACIL</h1>

          <h2 className="text-2xl font-bold">INICIO</h2>

          <b>Una solución todo en uno para monetizar tu música</b>

          <p className="max-w-xl">
            Nuestra misión es ayudar a los creadores de música de todos los
            niveles a crecer y comenzar a lograr sus objetivos a través de las
            herramientas y oportunidades que te ofrecemos
          </p>

          <button
            type="button"
            className="flex items-center justify-center my-3 py-3 px-10 w-56 h-10 bg-white text-black rounded"
          >
            <b>Enviar solicitud</b>
          </button>
        </div>

        <div className="w-full flex justify-center pb-5">
          <Link to="#team" className="border-none animate-bounce">
            <img className="w-8" src="/arrows.webp" alt="arrow" />
          </Link>
        </div>
      </section>

      <section
        className="min-h-screen flex flex-col justify-between items-center text-white"
        id="team"
      >
        <div className="container flex flex-col text-white space-y-6 mt-48">
          <div className="flex flex-wrap justify-between w-48">
            <img src="/logo.webp" alt="logo" />
          </div>

          <h1 className="max-w-48">GOD GANG<br/>RECORDS</h1>

          <h2 className="text-2xl font-bold">EQUIPO</h2>

          <b>Una solución todo en uno para monetizar tu música</b>

          <p className="max-w-xl">
            PRODUCTORES: Creadores de contenido. (Ganancia x beat) <br/>
            ING DE MEZCLA Y MASTERING: Mejorar el contenido con calidad de la industria (Ganancias x pago mensual x servicio)<br/>
            EQUIPO DE GESTION: Administra el negocio (Ganancias x pago mensual x servicio)<br/>
            EQUIPO DE MARKETING: Promueve el negocio para expandirlo y hayan cada vez mas usuarios (Ganancias x pago mensual x servicio)<br/>
          </p>

          <button
            type="button"
            className="flex items-center justify-center my-3 py-3 px-10 w-56 h-10 bg-white text-black rounded"
          >
            <b>Enviar solicitud</b>
          </button>
        </div>

        <div className="w-full flex justify-center pb-5">
          <Link to="#partners" className="border-none animate-bounce">
            <img className="w-8" src="/arrows.webp" alt="arrow" />
          </Link>
        </div>
      </section>

      <section
        className=" min-h-screen flex flex-col justify-between items-center text-white"
        id="partners"
      >
        <div className="container flex flex-col text-white space-y-6 mt-48">
          <div className="flex flex-wrap justify-between w-48">
            <img src="/logo.webp" alt="logo" />
          </div>

          <h1 className="max-w-48">MONETIZAR TU MUSICA NUNCA FUE TAN FACIL</h1>

          <h2 className="text-2xl font-bold">SOCIOS</h2>

          <b>Una solución todo en uno para monetizar tu música</b>

          <p className="max-w-xl">
            LISTADO DE SOCIOS COLABORANDO CON LA PAGINA (artistas y productores)
          </p>

          <button
            type="button"
            className="flex items-center justify-center my-3 py-3 px-10 w-56 h-10 bg-white text-black rounded"
          >
            <b>Enviar solicitud</b>
          </button>
        </div>

        <div className="w-full flex justify-center pb-5">
          <Link to="#characteristics" className="border-none animate-bounce">
            <img className="w-8" src="/arrows.webp" alt="arrow" />
          </Link>
        </div>
      </section>

      <section
        className="min-h-screen flex flex-col justify-between items-center text-white"
        id="characteristics"
      >
        <div className="container flex flex-col text-white space-y-6 mt-48">
          <div className="flex flex-wrap justify-between w-48">
            <img src="/logo.webp" alt="logo" />
          </div>

          <h1 className="max-w-48">MONETIZAR TU MUSICA NUNCA FUE TAN FACIL</h1>

          <h2 className="text-2xl font-bold">CARACTERISTICAS</h2>

          <b>Una solución todo en uno para monetizar tu música</b>

          <p className="max-w-xl">
            Nuestra misión es ayudar a los creadores de música de todos los
            niveles a crecer y comenzar a lograr sus objetivos a través de las
            herramientas y oportunidades que te ofrecemos
          </p>

          <button
            type="button"
            className="flex items-center justify-center my-3 py-3 px-10 w-56 h-10 bg-white text-black rounded"
          >
            <b>Enviar solicitud</b>
          </button>
        </div>

        <div className="w-full flex justify-center pb-5">
          <Link to="#start" className="border-none animate-bounce">
            <img className="w-8 rotate-180" src="/arrows.webp" alt="arrow" />
          </Link>
        </div>
      </section>
    </>
  );
}

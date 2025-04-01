import { useAuth0 } from "@auth0/auth0-react";
import SideNav from "~/components/sideNav";

export default function Index() {
  const { user } = useAuth0();

  return (
    <section className="min-h-screen w-full h-full bg-gradient-to-b from-black via-purple-900 to-black text-white ">
      <SideNav />

      <div className="ml-80">
        <h1 className="pr-4 py-4 w-full text-3xl font-semibold">Feed</h1>

        <div
          id="default-carousel"
          className="relative w-full flex justify-center mb-5"
        >
          <div className="relative h-56 overflow-hidden rounded-3xl md:h-96 z-1 border w-11/12 items-center">
            <div className="duration-700 ease-in-out z-1" data-carousel-item>
              <img
                src="discordLogo.webp"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
                alt="..."
              />
            </div>
          </div>

          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full pl-32 group"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path stroke="currentColor" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>

          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full pr-32  group"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path stroke="currentColor" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3 justify-center rounded-lg backdrop-blur-md py-4 my-3 mr-5">
          {["Mi Perfil", "Mis MP3", "Mis compras"].map((title, index) => (
            <button
              key={index}
              type="button"
              className="pl-6 pr-40 py-6 bg-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-950 text-white rounded-lg transition-all duration-300 text-left shadow-md"
            >
              <p className="font-bold mb-1">{title}</p>
              <p className="text-sm">
                {title === "Mi Perfil"
                  ? `¡Bienvenido a HypeSounds ${user?.name}, entra a ver los datos de tu perfil!`
                  : title === "Mis MP3"
                  ? "Comparte y administra tu musica"
                  : "Administra tus compras"}
              </p>
            </button>
          ))}
        </div>

        <div className="placements my-10">
          <h1 className="w-full text-3xl font-semibold">Placements</h1>
          <div className="grid grid-cols-2 gap-2">
            <p className="pb-3 text-sm">
              HypeSounds© optimiza tu flujo de trabajo y te brinda acceso
              instantáneo a oportunidades de colocación con los principales
              artistas y sellos discográficos.
            </p>

            <div className="flex justify-end pr-5 space-x-3">
              <button className="transition-transform transform hover:scale-150">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full ">
                  <svg
                    className="w-4 h-4 text-white dark:text-white rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path stroke="currentColor" d="M5 1 1 5l4 4" />
                  </svg>
                </span>
              </button>

              <button className="transition-transform transform hover:scale-150">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
                  <svg
                    className="w-4 h-4 text-white dark:text-white rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path stroke="currentColor" d="m1 9 4-4-4-4" />
                  </svg>
                </span>
              </button>

              <button type="button">
                <p className="px-5 hover:underline"> Ver Todos</p>
              </button>
            </div>
          </div>

          <li className="placements-data">
            <div className="placementContainer">
              <img className="placementImage" alt="placementImage" />
              <div className="placement-info">
                <p className="typeOfPlacement"></p>
                <p className="nameOfPlacement"></p>
                <p className="discography"></p>
                <p className="timeLeft"></p>
              </div>
            </div>
          </li>
        </div>

        <div className="SoundPacksEtc my-10">
          <h1 className="w-full text-3xl font-semibold">
            SoundPacks, Drumkits, etc.
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <p className="pb-3 text-sm">
              Explora nuestra biblioteca de sonidos, que incluye opciones tanto
              libres de derechos y con derechos de autor, seleccionadas y
              producidas por nuestro reconocido productor GrowBeatz.
            </p>

            <div className="flex justify-end pr-5 space-x-3">
              <button className="transition-transform transform hover:scale-150">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
                  <svg
                    className="w-4 h-4 text-white dark:text-white rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path stroke="currentColor" d="M5 1 1 5l4 4" />
                  </svg>
                </span>
              </button>

              <button className="transition-transform transform hover:scale-150">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
                  <svg
                    className="w-4 h-4 text-white dark:text-white rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path stroke="currentColor" d="m1 9 4-4-4-4" />
                  </svg>
                </span>
              </button>

              <button type="button">
                <p className="px-5 hover:underline"> Ver Todos</p>
              </button>
            </div>
          </div>

          <li className="soundPacksData">
            <div className="soundPackCointainer">
              <img alt="soundPackImage" className="soundPackImage" />
              <div className="soundPack-info">
                <p></p>
                <button type="button" className="bg-red-950">
                  Download
                </button>
              </div>
            </div>
          </li>
        </div>

        <div className="servicios my-10">
          <h3 className="w-full text-3xl font-semibold">Servicios</h3>

          <div className="grid grid-cols-2 gap-2">
            <p className="pb-3 text-sm">
              Accede a cursos especializados en diversas áreas de la producción
              musical y descubre nuevas formas de conectar con la industria.
            </p>

            <div className="flex justify-end pr-5 space-x-3">
              <button className="transition-transform transform hover:scale-150">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
                  <svg
                    className="w-4 h-4 text-white dark:text-white rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path stroke="currentColor" d="M5 1 1 5l4 4" />
                  </svg>
                </span>
              </button>

              <button className="transition-transform transform hover:scale-150">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full">
                  <svg
                    className="w-4 h-4 text-white dark:text-white rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path stroke="currentColor" d="m1 9 4-4-4-4" />
                  </svg>
                </span>
              </button>

              <button type="button">
                <p className="px-5 hover:underline"> Ver Todos</p>
              </button>
            </div>
          </div>

          <li className="services-data">
            <div className="serviceContainer">
              <img alt="imageService" className="services-image" />

              <div className="serviceInfo">
                <p className="serviceName"></p>
                <p className="serviceDescription"></p>
              </div>

              <button type="button" className="bg-red-950">
                Comprar
              </button>
            </div>
          </li>
        </div>
      </div>
    </section>
  );
}

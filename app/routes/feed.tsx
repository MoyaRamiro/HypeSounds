import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import SideNav from "~/components/sideNav";
import placementsData from "~/dataJSON/placements.json";

export default function Index() {
  const { user } = useAuth0();
  const [placements, setPlacements] = useState({});

  useEffect(() => {
    setPlacements(placementsData);
    console.log(placementsData);

    const date = updateCountdown(placementsData[0].endDate);
    console.log(date);
  }, []);

  const updateCountdown = (targetDate: string) => {
    const now = new Date();
    const target = new Date(targetDate);
    const diff = target.getTime() - now.getTime();

    if (diff <= 0) {
      return "Expired";
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    return `${days} días, ${hours} horas, ${minutes} minutos`;
  };

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
                src="bienvenidos.webp"
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
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
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
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
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

        <div className="placements my-16 px-6">
          <h1 className="text-4xl font-bold text-white mb-4">Placements</h1>

          <div className="md:flex justify-between items-center mb-6">
            <p className="text-gray-300 max-w-2xl">
              HypeSounds© optimiza tu flujo de trabajo y te brinda acceso
              instantáneo a oportunidades de colocación con los principales
              artistas y sellos discográficos.
            </p>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <button className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-transform transform hover:scale-110">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 6 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="currentColor" d="M5 1 1 5l4 4" />
                </svg>
              </button>

              <button className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-transform transform hover:scale-110">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 6 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke="currentColor" d="m1 9 4-4-4-4" />
                </svg>
              </button>

              <button type="button">
                <p className="text-white hover:underline px-4">Ver Todos</p>
              </button>
            </div>
          </div>

          <ul className="placements-data flex flex-wrap gap-4 list-none">
            {placementsData
              .sort((a, b) => a.followers - b.followers)
              .map((placement) => (
                <li
                  key={placement.id}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 w-fit"
                >
                  <img
                    src={placement.image}
                    alt="placement"
                    className="w-52 h-80 object-cover"
                  />
                  <div className="p-3 text-white w-52 min-h-[110px]">
                    <p className="text-xs text-purple-300">{placement.genre}</p>
                    <p className="text-sm font-bold">{placement.name}</p>
                    <p className="text-xs text-gray-300">{placement.label}</p>
                    <p className="text-[11px] text-gray-400 mt-1">
                      {updateCountdown(placement.endDate)}
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        <div className="SoundPacksEtc my-10">
          <h1 className="w-full text-3xl font-semibold">
            SoundPacks, Drumkits, etc.
          </h1>
          <div className="grid grid-cols-2 gap-2">
            <p className="pb-3 text-sm">
              Explora nuestra biblioteca de sonidos, que incluye opciones tanto
              libres de derechos y con derechos de autor
            </p>

            <div className="flex justify-end pr-5 space-x-3">
              <button className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-transform transform hover:scale-110">
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

              <button className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-transform transform hover:scale-110">
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
              <button className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-transform transform hover:scale-110">
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

              <button className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-transform transform hover:scale-110">
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

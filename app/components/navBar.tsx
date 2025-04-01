import { useAuth0 } from "@auth0/auth0-react";
import { Link, useLocation } from "@remix-run/react";

const NavBar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full text-white grid grid-cols-4 gap-4 p-7 z-30">
      {location.pathname === "/" ? (
        <div className="w-24">
          <img src="/logo.webp" alt="logo" />
        </div>
      ) : (
        <Link to={"/"}>
          <button type="button" className="bg-none border-none ">
            <img
              src="/back.webp"
              alt=""
              className="w-24 hover:scale-110 transition-transform duration-300"
            />
          </button>
        </Link>
      )}

      <ul className="flex col-span-2 font-semibold justify-between">
        {[
          { name: "INICIO", hash: "/lobby#start" },
          { name: "TEAM", hash: "/lobby#team" },
          { name: "SOCIOS", hash: "/lobby#partners" },
          { name: "CARACTERISTICAS", hash: "/lobby#characteristics" },
        ].map(({ name, hash }) => (
          <li key={hash} className="md:px-4">
            <Link to={hash} className="group">
              <p className=" text-white group-hover:text-blue-500 group-hover:border-b-2 group-hover:border-blue-500">
                {name}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={isAuthenticated ? () => logout() : () => loginWithRedirect()}
        type="button"
        className="justify-self-end content-center"
      >
        <p className="text-white hover:text-blue-500 hover:border-b-2 hover:border-blue-500">
          {isAuthenticated ? "Cerrar Sesión" : "Iniciar Sesión"}
        </p>
      </button>
    </nav>
  );
};

export default NavBar;

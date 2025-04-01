import { useAuth0 } from "@auth0/auth0-react";

const SideNav = () => {
  const { user, logout, isLoading } = useAuth0();

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };

  return (
    <nav className="fixed left-0 top-0 w-72 h-screen bg-black text-white p-6 flex flex-col justify-between shadow-xl border-r border-purple-500">
      <div className="mb-6">
        <h2 className="text-4xl font-bold text-center text-[#FB4FEF] drop-shadow-lg">
          HypeSounds©
        </h2>
      </div>

      <div className="flex items-center space-x-2 bg-[#1a1a1a] p-4 rounded-lg shadow-lg border border-[#FB4FEF]">
        {!isLoading ? (
          <div className="flex space-x-2">
            <img
              src="/logo.webp"
              alt={user?.name || "User Avatar"}
              className="w-12 h-12 rounded-full hover:scale-110 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <p className="font-bold text-lg text-[#FB4FEF]">
                {user?.name ? truncateText(user?.name, 12) : ""}
              </p>
              <p className="text-gray-400 text-sm">
                {user?.email ? truncateText(user?.email, 16) : ""}
              </p>
            </div>
          </div>
        ) : (
          <p>LOADING ...</p>
        )}
      </div>

      <div className="mt-6 space-y-2 flex-1">
        <h6 className="text-[#FB4FEF] uppercase text-sm">Main</h6>
        <button className="w-full bg-[#2a2a2a] hover:bg-[#FB4FEF] py-1.5 rounded-md text-left pl-4 transition-all">
          Feed
        </button>
        <button className="w-full bg-[#2a2a2a] hover:bg-[#FB4FEF] py-1.5 rounded-md text-left pl-4 transition-all">
          Placements
        </button>
        <button className="w-full bg-[#2a2a2a] hover:bg-[#FB4FEF] py-1.5 rounded-md text-left pl-4 transition-all">
          Market Place
        </button>

        <h6 className="text-[#FB4FEF] uppercase text-sm mt-4">Profile</h6>
        <button className="w-full bg-[#2a2a2a] hover:bg-[#FB4FEF] py-1.5 rounded-md text-left pl-4 transition-all">
          Profile
        </button>
        <button className="w-full bg-[#2a2a2a] hover:bg-[#FB4FEF] py-1.5 rounded-md text-left pl-4 transition-all">
          Mis mp3
        </button>
        <button className="w-full bg-[#2a2a2a] hover:bg-[#FB4FEF] py-1.5 rounded-md text-left pl-4 transition-all">
          Mis compras
        </button>
        <button className="w-full bg-[#2a2a2a] hover:bg-[#FB4FEF] py-1.5 rounded-md text-left pl-4 transition-all">
          Historial
        </button>

        <h6 className="text-[#FB4FEF] uppercase text-sm mt-4">Más...</h6>
        <button className="w-full bg-[#2a2a2a] hover:bg-[#FB4FEF] py-1.5 rounded-md text-left pl-4 transition-all">
          Resources
        </button>
        <button className="w-full bg-[#2a2a2a] hover:bg-[#FB4FEF] py-1.5 rounded-md text-left pl-4 transition-all">
          Configuración
        </button>
        <button className="w-full bg-[#2a2a2a] hover:bg-[#FB4FEF] py-1.5 rounded-md text-left pl-4 transition-all">
          Support
        </button>
        <button
          className="w-full bg-red-600 hover:bg-red-500 py-1.5 rounded-md text-left pl-4 transition-all"
          onClick={() => logout()}
        >
          Cerrar Sesión
        </button>
      </div>

      <div className="mt-6 grid grid-cols-4 gap-2">
        <img className="h-10" src="/youtubeLogo.webp" alt="YouTube" />
        <img className="h-10" src="/instagramLogo.webp" alt="Instagram" />
        <img className="h-10" src="/discordLogo.webp" alt="Discord" />
        <img className="h-10" src="/beatstarsLogo.webp" alt="BeatStars" />
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        <p>© 2023 Hype Sounds.</p>
        <p>All rights reserved.</p>
      </div>
    </nav>
  );
};

export default SideNav;

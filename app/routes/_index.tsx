import { useAuth0 } from "@auth0/auth0-react";
import type { MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import LobbyWithoutUser from "~/components/lobbyWithoutUser";

export const meta: MetaFunction = () => {
  return [
    { title: "HypeSounds" },
    { name: "description", content: "Welcome to HypeSounds!" },
  ];
};

export default function Index() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/feed");
    }
  }, [isAuthenticated, navigate]);

  return <LobbyWithoutUser />;
}

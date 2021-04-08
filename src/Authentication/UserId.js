import { useAuth0 } from "@auth0/auth0-react";

export const useAuthId = () => {
  const { user } = useAuth0();
  return user.sub.split("auth0|")[1];
};

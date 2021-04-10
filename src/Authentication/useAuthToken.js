import { useAuth0 } from "@auth0/auth0-react";

export const useAuthToken = () => {
  const { getAccessTokenSilently } = useAuth0();
  let token = getAccessTokenSilently();
  return token;
};

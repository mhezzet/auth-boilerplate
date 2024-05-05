import { useCurrentUser } from "./use-current-user";

export const useCurrentRole = () => useCurrentUser()?.role;

import { makeVar } from "@apollo/client";

export const sessionData = makeVar({
  isAuthenticated: false,
  user: undefined,
  theme: "light",
});

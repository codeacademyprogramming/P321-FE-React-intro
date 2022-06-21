import { createContext, useContext } from "react";

const USER = {
  firstName: "Mubariz",
  lastName: "Mayilzade",
  birthdate: "11.03.2003",
  gender: "male",
  degree: "bachelor",
  profession: "software developer",
  height: {
    value: "176",
    unit: "cm",
  },
};

export const UserContext = createContext(USER);

export const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ user: USER }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

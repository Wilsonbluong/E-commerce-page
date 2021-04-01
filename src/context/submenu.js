import React, { useState, useContext } from "react";
import sublinks from "../components/Submenu/data";

const SubmenuContext = React.createContext();

export const SubmenuProvider = ({ children }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  //const [page, setPage] = useState({ page: "", links: [] });

  const openSubmenu = (text, coordinates) => {
    //const page = sublinks.find((sublink) => sublink.page === text);
    //setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <SubmenuContext.Provider
      value={{
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        location,
        //page,
      }}
    >
      {children}
    </SubmenuContext.Provider>
  );
};

// custom hook
// now we do not have to import useContext where
// this context is being used
export const useGlobalContext = () => {
  return useContext(SubmenuContext);
};

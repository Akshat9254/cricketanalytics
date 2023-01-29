import { createContext, useEffect, useState } from "react";
import { battingData } from "../data";
import axios from "axios";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [openers, setOpeners] = useState([]);
  const [middleorders, setMiddleorders] = useState([]);
  const [finishers, setFinishers] = useState([]);
  const [allrounders, setAllrounders] = useState([]);

  const handleChangeSelectedPlayer = (data, selectedIds) => {
    const selectedIdsSet = new Set(selectedIds);
    setSelectedPlayers(() =>
      battingData.filter((player) => selectedIdsSet.has(player.id))
    );
  };

  const getOpeners = async () => {
    const { data } = await axios.get("/openers");

    setOpeners(data);
  };
  const getMiddleorder = async () => {
    const { data } = await axios.get("/middleorder");

    setMiddleorders(data);
  };
  const getFinishers = async () => {
    const { data } = await axios.get("/finishers");

    setFinishers(data);
  };
  const getAllrounders = async () => {
    const { data } = await axios.get("/allrounder");

    setAllrounders(data);
  };

  useEffect(() => {
    switch (tabIndex) {
      case 0:
        getOpeners();
        break;

      case 1:
        getMiddleorder();

      case 2:
        getFinishers();

      case 3:
        getAllrounders();

      default:
        break;
    }
  }, [tabIndex]);

  return (
    <AppContext.Provider
      value={{
        selectedPlayers,
        handleChangeSelectedPlayer,
        tabIndex,
        setTabIndex,
        openers,
        middleorders,
        finishers,
        allrounders,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

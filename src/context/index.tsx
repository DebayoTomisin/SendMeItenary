import React, { useState, useContext, createContext } from "react";

type Props = {
  children?: React.ReactNode;
};

const AppStateContext = createContext(null);

const initialState = {
  selectedItems: [],
  subTotalPrice: 0,
};

export const AppProvider = ({ children }: Props) => {
  const [selectedItems, setSelectedItems] = useState(
    initialState.selectedItems
  );
  const [subTotalPrice, setSubTotalPrice] = useState(
    initialState.subTotalPrice
  );

  return (
    <AppStateContext.Provider
      value={{
        initialState,
        selectedItems,
        setSelectedItems,
        subTotalPrice,
        setSubTotalPrice,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);

import React, {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

type Props = {
  children?: React.ReactNode;
};

type appContextType = {
  selectedItems: any;
  subTotalPrice: number;
  setSelectedItems?: Dispatch<SetStateAction<any[]>>;
  setSubTotalPrice?: Dispatch<SetStateAction<number>>;
};

const initialState = {
  selectedItems: [],
  subTotalPrice: 0,
};

const AppStateContext = createContext<appContextType>(initialState);

export const AppProvider = ({ children }: Props) => {
  const [selectedItems, setSelectedItems] = useState<any>(
    initialState.selectedItems
  );
  const [subTotalPrice, setSubTotalPrice] = useState<number>(
    initialState.subTotalPrice
  );

  return (
    <AppStateContext.Provider
      value={{
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

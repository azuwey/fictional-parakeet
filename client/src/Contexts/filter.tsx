import React, { createContext, useState, PropsWithChildren } from "react";

interface Filter {
  companyName: string;
  selectedCityIndex: number;
  selectedSpecialties: number[];
}

export const FilterContext = createContext<[Filter, React.Dispatch<React.SetStateAction<Filter>>]>([
  {
    companyName: '',
    selectedCityIndex: 0,
    selectedSpecialties: []
  },
  () => {
    throw new Error('FilterContext cannot be used without FilterContextProvider!');
  }
]);

export function FilterContextProvider({ children }: PropsWithChildren<{}>) {
  const filterState = useState<Filter>({
    companyName: '',
    selectedCityIndex: 0,
    selectedSpecialties: []
  });

  return (
    <FilterContext.Provider value={filterState}>
      {children}
    </FilterContext.Provider>
  );
}

import React, { useContext } from "react";
import Header from "./Components/Header";
import { FilterContext } from "./Contexts/filter";
import Filter from "./Domain/Filter";
import { useCities } from "./hooks/useCities";
import { CompanyList } from "./Domain/CompanyList";

export default function App() {
  const [filter] = useContext(FilterContext);
  const [{ data }] = useCities()

  return (
    <>
      <Header cityName={data?.cities ? data.cities[filter.selectedCityIndex].name : '...'} />
      <main className="h-screen max-w-7xl mx-auto px-8 pt-40">
        <aside className="fixed top-40 left-auto w-72 pr-16 pt-6">
          <nav className="pb-6 border-b border-gray-200 space-y-6">
            <Filter />
          </nav>
        </aside>
        <div className="ml-72 w-auto py-6">
          <CompanyList />
        </div>
      </main>
    </>
  );
}

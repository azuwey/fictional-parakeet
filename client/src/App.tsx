import React, { useContext } from "react";
import Header from "./Components/Header";
import { FilterContext } from "./Contexts/filter";
import Filter from "./Filter";

const SPECIALTIES = [
  "Specialty 1",
  "Specialty 2",
  "Specialty 3",
  "Specialty 4",
]

const CITIES = [
  "City 1",
  "City 2",
  "City 3",
  "City 4",
]

export default function App() {
  const [filter] = useContext(FilterContext);

  return (
    <>
      <Header cityName={CITIES[filter.selectedCityIndex]} />
      <main className="h-screen max-w-7xl mx-auto px-8 pt-40">
        <aside className="fixed top-40 left-auto w-72 pr-16 pt-6">
          <nav className="pb-6 border-b border-gray-200 space-y-6">
            <Filter cities={CITIES} specialties={SPECIALTIES} />
          </nav>
        </aside>
        <div className="ml-72 w-auto h-[500vh] pt-6">{JSON.stringify(filter)}</div>
      </main>
    </>
  );
}

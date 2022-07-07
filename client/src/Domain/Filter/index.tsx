import React from "react";
import CompanyNameFilter from "./CompanyNameFilter";
import CityFilter from "./CityFilter";
import SpecialtiesFilter from "./SpecialtiesFilter";

export default function Index() {
  return (
    <>
      <section aria-labelledby="search-bar" className="pb-6 border-b border-gray-200">
        <CompanyNameFilter />
      </section>
      <section aria-labelledby="city-selector" className="pb-6 border-b border-gray-200">
        <CityFilter />
      </section>
      <section aria-labelledby="specialties-selector">
        <span className="font-semibold text-gray-900">Specialties</span>
        <SpecialtiesFilter />
      </section>
    </>
  )
}
import React, { useContext } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { FilterContext } from "./Contexts/filter";
import Dropdown from "./Components/Dropdown";
import Select from "./Components/Select";
import Input from "./Components/Input";

interface Props {
  cities: string[];
  specialties: string[];
}

export default function Filter({ cities, specialties }: Props) {
  const [_, setFilter] = useContext(FilterContext);

  return (
    <>
      <section aria-labelledby="search-bar" className="pb-6 border-b border-gray-200">
        <Input
          startAdornment={<SearchIcon className="h-4 w-4 fill-black" />}
          placeholder="Search"
          type="search"
          onChange={(event) => setFilter((prevState) => ({ ...prevState, companyName: event.target.value }))}
        />
      </section>
      <section aria-labelledby="city-selector" className="pb-6 border-b border-gray-200">
        <Dropdown
          options={cities}
          onSelect={(selectedCityIndex) => setFilter((prevState) => ({ ...prevState, selectedCityIndex }))}
        />
      </section>
      <section aria-labelledby="specialties-selector">
        <span className="font-semibold text-gray-900">Specialties</span>
        <Select
          options={specialties}
          onChange={(selectedSpecialties) => setFilter((prevState) => ({ ...prevState, selectedSpecialties }))}
        />
      </section>
    </>
  )
}
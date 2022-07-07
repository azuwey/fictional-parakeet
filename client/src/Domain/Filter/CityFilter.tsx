import React, { useContext } from "react";
import { FilterContext } from "../../Contexts/filter";
import { useCities } from "../../hooks/useCities";
import Dropdown from "../../Components/Dropdown";

export default function CityFilter() {
  const [_, setFilter] = useContext(FilterContext);
  const [{ data, fetching, error }] = useCities();

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <Dropdown
      options={data?.cities.map(({ name }) => name) ?? []}
      onSelect={(selectedCityIndex) => setFilter((prevState) => ({ ...prevState, selectedCityIndex }))}
    />
  )
}
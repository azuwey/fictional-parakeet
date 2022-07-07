import React, { useContext } from "react";
import { FilterContext } from "../../Contexts/filter";
import { useSpecialties } from "../../hooks/useSpecialties";
import Select from "../../Components/Select";

export default function SpecialtiesFilter() {
  const [_, setFilter] = useContext(FilterContext);
  const [{ data, fetching, error }] = useSpecialties();

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <Select
      options={data?.specialties.map(({ name }) => name) ?? []}
      onChange={(selectedSpecialties) => setFilter((prevState) => ({ ...prevState, selectedSpecialties }))}
    />
  )
}
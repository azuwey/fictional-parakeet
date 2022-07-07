import React, { useContext } from "react";
import { FilterContext } from "../../Contexts/filter";
import { useCompanies } from "../../hooks/useCompanies";

export function CompanyList() {
  const [filter] = useContext(FilterContext);
  const [{ data, fetching, error }] = useCompanies({
    name: filter.companyName !== '' ? filter.companyName : undefined,
    cityId: filter.selectedCityIndex + 1, // The ID needs to be increased by one because we ignore the ids in the dropdown
    specialtyIds: filter.selectedSpecialties.length !== 0
      ? filter.selectedSpecialties.map((selectedSpecialty) => selectedSpecialty + 1) // Same reason here except we ignore it in the select
      : undefined
  });

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <ul>
      {data?.companies.map((company) => (
        <li key={`company_${company.name.replaceAll(' ', '').toLowerCase()}`}>
          {company.name} {company.city.name} {company.specialties.map(({ name }) => name)} {company.logoUrl}
        </li>
      ))}
    </ul>
  );
}
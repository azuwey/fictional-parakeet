import React, { useContext } from "react";
import { FilterContext } from "../../Contexts/filter";
import { useCompanies } from "../../hooks/useCompanies";
import Badge from "../../Components/Badge";

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
    <div className="grid grid-cols-3 gap-y-10 gap-x-6">
      {data?.companies.map((company) => (
        <div
          key={`company_${company.name.replaceAll(' ', '').toLowerCase()}`}
           className="border-2 bg-gray-200 rounded-lg"
        >
          <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img
              src={company.logoUrl}
              alt={`${company.name}'s logo`}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <h3 className="px-2 mt-4 text-base text-gray-600">{company.name}</h3>
          <div className="grid grid-cols-2 gap-y-2 gap-x-2 p-2">
            {company.specialties.map(({ name }) => (
              <Badge label={name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
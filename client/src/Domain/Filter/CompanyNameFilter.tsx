import React, { useContext } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { FilterContext } from "../../Contexts/filter";
import Input from "../../Components/Input";

export default function CompanyNameFilter() {
  const [_, setFilter] = useContext(FilterContext);

  return (
    <Input
      startAdornment={<SearchIcon className="h-4 w-4 fill-black" />}
      placeholder="Search"
      type="search"
      onChange={(event) => setFilter((prevState) => ({ ...prevState, companyName: event.target.value }))}
    />
  )
}
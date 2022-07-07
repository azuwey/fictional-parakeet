import { useQuery } from "urql";

interface CitiesQuery {
  cities: {
    name: string
  }[];
}

const CitiesQueryDocument = `
  query {
    cities {
      name
    }
  }
`;

export function useCities() {
  return useQuery<CitiesQuery>({
    query: CitiesQueryDocument,
  });
}

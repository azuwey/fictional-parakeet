import { useQuery } from "urql";

interface SpecialtiesQuery {
  specialties: {
    name: string
  }[];
}

const SpecialtiesQueryDocument = `
  query {
    specialties {
      name
    }
  }
`;

export function useSpecialties() {
  return useQuery<SpecialtiesQuery>({
    query: SpecialtiesQueryDocument,
  });
}

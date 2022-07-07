import { useQuery } from "urql";

interface CompaniesQuery {
  companies: {
    name: string;
    logoUrl: string;
    city: {
      name: string;
    };
    specialties: {
      name: string;
    }[];
  }[];
}

interface CompaniesQueryVariables {
  name?: string
  cityId?: number
  specialtyIds?: number[]
}

const CompaniesQueryDocument = `
  query ($name: String, $cityId: Int, $specialtyIds: [Int!]) {
    companies (name: $name, cityId: $cityId, specialtyIds: $specialtyIds) {
      name
      logoUrl
      city {
        name
      }
      specialties {
        name
      }
    }
  }
`;

export function useCompanies(variables?: CompaniesQueryVariables) {
  return useQuery<CompaniesQuery>({
    query: CompaniesQueryDocument,
    variables
  });
}

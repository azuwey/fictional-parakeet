import {
  createCompanyCityLoader,
  createCompanySpecialtyListLoader,
} from '../companies/loaders';

export interface GraphQLContext {
  company: {
    specialtyListLoader: ReturnType<typeof createCompanySpecialtyListLoader>;
    cityLoader: ReturnType<typeof createCompanyCityLoader>;
  };
}

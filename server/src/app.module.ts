import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { GraphQLContext } from './types/graphql-context.type';
import { CitiesModule } from './cities/cities.module';
import { CompaniesModule } from './companies/companies.module';
import {
  createCompanyCityLoader,
  createCompanySpecialtyListLoader,
} from './companies/loaders';
import { SpecialtiesModule } from './specialties/specialties.module';
import { CompaniesService } from './companies/companies.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'client', 'dist'),
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [CompaniesModule],
      inject: [CompaniesService],
      useFactory: (companiesService: CompaniesService) => ({
        driver: ApolloDriver,
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        context: (): GraphQLContext => ({
          company: {
            specialtyListLoader:
              createCompanySpecialtyListLoader(companiesService),
            cityLoader: createCompanyCityLoader(companiesService),
          },
        }),
      }),
    }),
    MikroOrmModule.forRoot(),
    CitiesModule,
    CompaniesModule,
    SpecialtiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

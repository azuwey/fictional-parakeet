import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { faker } from '@faker-js/faker';
import { City } from '../cities/entities/city.entity';
import { Specialty } from '../specialties/entities/specialty.entity';
import { Company } from '../companies/entities/company.entity';

const CITY_COUNT = 50;
const COMPANY_COUNT = 1000;
const SPECIALTIES = ['Excavation', 'Plumbing', 'Electrical'];

export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const specialties = SPECIALTIES.map((specialty) =>
      em.create(Specialty, {
        name: specialty,
      }),
    );

    const cities = new Array<City>(CITY_COUNT).fill(undefined).map(() =>
      em.create(City, {
        name: faker.address.cityName(),
      }),
    );

    for (let i = 0; i < COMPANY_COUNT; ++i) {
      em.create(Company, {
        name: faker.company.companyName(1),
        logoUrl: faker.image.imageUrl(250, 250, 'technics', true),
        city: this._chooseRandom(cities, 1)[0],
        specialties: this._chooseRandom(specialties, 2),
      });
    }
  }

  _chooseRandom(arr: unknown[], num = 1): typeof arr {
    const res = [];

    for (let i = 0; i < num; ++i) {
      const random = Math.floor(Math.random() * arr.length);
      if (res.indexOf(arr[random]) !== -1) {
        continue;
      }

      res.push(arr[random]);
    }

    return res;
  }
}

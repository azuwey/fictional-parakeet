import { Migration } from '@mikro-orm/migrations';

export class Migration20220705204017 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `specialty` (`id` integer not null primary key autoincrement, `name` text not null);');

    this.addSql('create table `city` (`id` integer not null primary key autoincrement, `name` text not null);');

    this.addSql('create table `company` (`id` integer not null primary key autoincrement, `name` text not null, `logo_url` text not null, `city_id` integer not null, constraint `company_city_id_foreign` foreign key(`city_id`) references `city`(`id`) on update cascade);');
    this.addSql('create index `company_city_id_index` on `company` (`city_id`);');

    this.addSql('create table `company_specialties` (`company_id` integer not null, `specialty_id` integer not null, constraint `company_specialties_company_id_foreign` foreign key(`company_id`) references `company`(`id`) on delete cascade on update cascade, constraint `company_specialties_specialty_id_foreign` foreign key(`specialty_id`) references `specialty`(`id`) on delete cascade on update cascade, primary key (`company_id`, `specialty_id`));');
    this.addSql('create index `company_specialties_company_id_index` on `company_specialties` (`company_id`);');
    this.addSql('create index `company_specialties_specialty_id_index` on `company_specialties` (`specialty_id`);');
  }

}

import { Migration } from '@mikro-orm/migrations';

export class Migration20220705143855 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `specialty` (`id` integer not null primary key autoincrement, `name` text not null);');

    this.addSql('create table `company` (`id` integer not null primary key autoincrement, `name` text not null, `logo_url` text not null, `city` text not null);');

    this.addSql('create table `company_specialties` (`company_id` integer not null, `specialty_id` integer not null, constraint `company_specialties_company_id_foreign` foreign key(`company_id`) references `company`(`id`) on delete cascade on update cascade, constraint `company_specialties_specialty_id_foreign` foreign key(`specialty_id`) references `specialty`(`id`) on delete cascade on update cascade, primary key (`company_id`, `specialty_id`));');
    this.addSql('create index `company_specialties_company_id_index` on `company_specialties` (`company_id`);');
    this.addSql('create index `company_specialties_specialty_id_index` on `company_specialties` (`specialty_id`);');
  }

}

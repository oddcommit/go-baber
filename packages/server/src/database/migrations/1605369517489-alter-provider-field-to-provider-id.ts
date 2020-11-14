import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AlterProviderFieldToProviderId1605369517489
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('APPOINTMENTS', 'provider');
    await queryRunner.addColumn(
      'APPOINTMENTS',
      new TableColumn({
        name: 'provider_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'APPOINTMENTS',
      new TableForeignKey({
        name: 'AppointmentProvider',
        columnNames: ['provider_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'USERS',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('APPOINTMENTS', 'AppointmentProvider');
    await queryRunner.dropColumn('APPOINTMENTS', 'provider_id');
    await queryRunner.addColumn(
      'APPOINTMENTS',
      new TableColumn({
        name: 'provider',
        type: 'varchar',
      }),
    );
  }
}

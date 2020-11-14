import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addAvatarFieldToUsers1605378348901 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'USERS',
      new TableColumn({
        name: 'avatar',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('USERS', 'avatar');
  }
}

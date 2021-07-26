import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexModule } from 'nest-knexjs';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'postgresql',
        version: '5.7',
        useNullAsDefault: true,
        connection: {
          host: '127.0.0.1',
          port: 5432,
          user: 'test-user',
          password: '',
          database: 'test-db',
        },
      },
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

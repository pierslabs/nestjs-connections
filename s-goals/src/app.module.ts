import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PgoalsModule } from './pgoals/pgoals.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'remind',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PgoalsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

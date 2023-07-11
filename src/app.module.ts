import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { IndexModules } from './modules';
import { PublicationModule } from './modules/publication/publication.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    IndexModules,
    PublicationModule],
})
export class AppModule {}

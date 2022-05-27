import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityService } from './city/cityService';
import { CityRepository } from './city/cityRepository';
import { join } from 'path';
import { CityResolver } from './city/city.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'apps/zip-code-lookup/src/graphql.ts'),
      },
    })
  ],
  controllers: [AppController],
  providers: [AppService, CityService, CityRepository, CityResolver],
})
export class AppModule {}

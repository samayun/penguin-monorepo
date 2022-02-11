import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pet.entity';

import { PetsController } from './pets.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Pet])],
    controllers: [PetsController],
})
export class PetsModule {}

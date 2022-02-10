import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetRepository } from './pet.repository';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';

@Module({
    imports: [TypeOrmModule.forFeature([PetRepository])],
    controllers: [PetsController],
    providers: [PetsService],
})
export class PetsModule {}

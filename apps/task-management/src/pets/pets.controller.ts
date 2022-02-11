import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Pet } from './pet.entity';

import { response } from '@/app.module';
import { Controller, Get } from '@nestjs/common';

@Controller('pets')
export class PetsController {
    // constructor(private readonly petService: PetsService) {}

    constructor(
        @InjectRepository(Pet)
        private readonly petsRepository: MongoRepository<Pet>,
    ) {}

    @Get('/')
    async getAllPets() {
        return response(await this.petsRepository.find(), 'Get all pets');
    }
}

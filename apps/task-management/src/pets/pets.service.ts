import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from './pet.entity';
import { PetRepository } from './pet.repository';

@Injectable()
export class PetsService {
    constructor(
        @InjectRepository(PetRepository)
        private readonly petRepository: PetRepository,
    ) {}

    async getAllPets(): Promise<Pet[]> {
        return this.petRepository.find();
    }
}

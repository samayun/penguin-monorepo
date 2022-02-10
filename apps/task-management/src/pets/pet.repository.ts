import { Pet } from './pet.entity';
import { EntityRepository, MongoRepository } from 'typeorm';

@EntityRepository(Pet)
export class PetRepository extends MongoRepository<Pet> {}

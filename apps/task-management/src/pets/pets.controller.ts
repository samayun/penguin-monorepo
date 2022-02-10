import { response } from '@/app.module';
import { Controller, Get } from '@nestjs/common';
import { PetsService } from './pets.service';

@Controller('pets')
export class PetsController {
    constructor(private readonly petService: PetsService) {}
    @Get('/')
    async getAllPets() {
        return response(await this.petService.getAllPets(), 'Get all pets');
    }
}

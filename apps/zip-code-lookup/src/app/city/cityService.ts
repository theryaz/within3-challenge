import { Injectable } from '@nestjs/common';
import { City } from '../../graphql';
import { CityRepository } from './cityRepository';

@Injectable()
export class CityService{
	constructor(
		private cityRepository: CityRepository,
	){}
	async findAll(): Promise<City[]>{
		return this.cityRepository.findAll();
	}
	async findOneByZipCode(zipcode: string): Promise<City | null>{
		return await this.cityRepository.findOneByZipCode(zipcode);
	}
}
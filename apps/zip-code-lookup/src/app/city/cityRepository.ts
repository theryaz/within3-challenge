import { Injectable } from '@nestjs/common';
import { City } from '../../graphql';
import { Cities } from './zipcodelookup';

@Injectable()
export class CityRepository {
	private static Cities = Cities;
	async findAll(): Promise<City[]> {
		return CityRepository.Cities;
	}
	async findOneByZipCode(zipcode: string): Promise<City | null> {
		const city = CityRepository.Cities.find(city => city.ZipCode === zipcode);
		if (city === undefined) {
			return null;
		}
		return city;
	}
}
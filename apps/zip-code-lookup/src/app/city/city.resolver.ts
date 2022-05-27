import { HttpException, HttpStatus } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { City } from "../../graphql";
import { CityService } from "./cityService";
import { Cities } from './zipcodelookup';

@Resolver('City')
export class CityResolver {
	constructor(private cityService: CityService){}
	private Cities: City[] = Cities;
	@Query()
	async city(@Args('zipcode') zipcode: string) {
		const city = await this.cityService.findOneByZipCode(zipcode);
		if(city === null){
			throw new HttpException("NotFound", HttpStatus.NOT_FOUND);
		}
		return city;
	}
}
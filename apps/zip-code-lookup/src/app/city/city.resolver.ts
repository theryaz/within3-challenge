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
		return this.cityService.findOneByZipCode(zipcode);
	}
}
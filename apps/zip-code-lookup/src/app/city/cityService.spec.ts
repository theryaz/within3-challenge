import { Test } from '@nestjs/testing';
import { CityService } from './cityService';
import { CityRepository } from './cityRepository';

describe('CityService', () => {
	let service: CityService;
	let mockRepository: CityRepository;

	beforeAll(async () => {
		const app = await Test.createTestingModule({
			providers: [CityService, CityRepository],
		}).compile();

		mockRepository = app.get<CityRepository>(CityRepository);
		service = app.get<CityService>(CityService);
	});

	describe('findOneByZipCode', () => {
		const mockCity = {
			ZipCode: "123456",
			City: "Wonderland",
			County: "Wonder County"
		};
		it('should return a city by zipcode', async () => {
			jest.spyOn(mockRepository, 'findOneByZipCode').mockImplementation(async () => mockCity);
			const city = await service.findOneByZipCode("123456");
			expect(city).toEqual({
				ZipCode: "123456",
				City: "Wonderland",
				County: "Wonder County"
			});
		});
		it('should return a null when no city is found', async () => {
			jest.spyOn(mockRepository, 'findOneByZipCode').mockImplementation(async () => null);
			const city = await service.findOneByZipCode("1234567");
			expect(city).toEqual(null);
		});
	});
});

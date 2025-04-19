import { Test, TestingModule } from '@nestjs/testing';
import { SpecialPriceService } from './special-price.service';

describe('SpecialPriceService', () => {
  let service: SpecialPriceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpecialPriceService],
    }).compile();

    service = module.get<SpecialPriceService>(SpecialPriceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

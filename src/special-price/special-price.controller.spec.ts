import { Test, TestingModule } from '@nestjs/testing';
import { SpecialPriceController } from './special-price.controller';
import { SpecialPriceService } from './special-price.service';

describe('SpecialPriceController', () => {
  let controller: SpecialPriceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecialPriceController],
      providers: [SpecialPriceService],
    }).compile();

    controller = module.get<SpecialPriceController>(SpecialPriceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

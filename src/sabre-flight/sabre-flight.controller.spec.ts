import { Test, TestingModule } from '@nestjs/testing';
import { SabreFlightController } from './sabre-flight.controller';
import { SabreFlightService } from './sabre-flight.service';

describe('SabreFlightController', () => {
  let controller: SabreFlightController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SabreFlightController],
      providers: [SabreFlightService],
    }).compile();

    controller = module.get<SabreFlightController>(SabreFlightController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

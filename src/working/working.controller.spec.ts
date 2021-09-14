import { Test, TestingModule } from '@nestjs/testing';
import { MockConfigService } from '../config-service/config.testutils';
import { WorkingController } from './working.controller';

describe('WorkingController', () => {
  let controller: WorkingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkingController],
      providers: [
        {
          provide: 'ConfigService',
          useValue: new MockConfigService(),
        },
      ],
    }).compile();

    controller = module.get<WorkingController>(WorkingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

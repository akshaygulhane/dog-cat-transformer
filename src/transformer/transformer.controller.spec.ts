import { Test, TestingModule } from '@nestjs/testing';
import { Request } from 'express';
import { TransformerController } from './transformer.controller';
import { TransformerService } from './transformer.service';

describe('TransformerController', () => {
  let transformerController: TransformerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TransformerController],
      providers: [TransformerService],
    }).compile();

    transformerController = app.get<TransformerController>(TransformerController);
  });

  describe('transformer', () => {

    it('controller should be defined', () => {
      expect(transformerController).toBeDefined();
    });

    it('should return valid output on valid input', () => {
      const request = {
        body: {
          "test": "dog"
        }
      } as Request;
      const expectedOutput = {
        "test": "cat"
      }
      expect(transformerController.transformInput(request)).toEqual(expectedOutput);
    });

    it('should return empty object on empty input', () => {
      const request = {
        body: {}
      } as Request;
      const expectedOutput = {};
      expect(transformerController.transformInput(request)).toEqual(expectedOutput);
    });

    it('should return valid output on nested object', () => {
      const request = {
        body: {
          "input": "A quik brown dog jumped over a bulldog. ",
          "test": "A quik brown dog jumped over a bulldog. ",
          "dog": "bulldog",
          "uyt": {
            "dog": "hullgod"
          }
        }
      } as Request;
      const expectedOutput = {
        "input": "A quik brown cat jumped over a bulldog. ",
        "test": "A quik brown cat jumped over a bulldog. ",
        "cat": "bulldog",
        "uyt": {
          "cat": "hullgod"
        }
      }
      expect(transformerController.transformInput(request)).toEqual(expectedOutput);
    });

  });
});

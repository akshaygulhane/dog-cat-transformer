import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TransformerModule } from './../src/transformer/transformer.module';

describe('TransformerController (e2e)', () => {
    let app: INestApplication;
    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [TransformerModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/transform (POST))', () => {
        return request(app.getHttpServer())
            .post('/transform')
            .send({ input: "dog" })
            .expect(200)
            .expect({
                input: "cat"
            });
    });

    it('/transform (POST)) with empty object input', () => {
        return request(app.getHttpServer())
            .post('/transform')
            .send({})
            .expect(200)
            .expect({});
    });

})

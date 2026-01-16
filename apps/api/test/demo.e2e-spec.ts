import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('DemoController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }));
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/demo-requests (POST) - Success with Dummy Captcha', () => {
    return request(app.getHttpServer())
      .post('/demo-requests')
      .send({
        name: 'E2E Test User',
        email: 'e2e@test.com',
        phone: '11999999999',
        companyName: 'E2E Corp',
        employees: '50',
        captchaToken: '1x00000000000000000000AA', // Always Pass Dummy Token
      })
      .expect(201)
      .expect((res) => {
        expect(res.body.id).toBeDefined();
        expect(res.body.name).toEqual('E2E Test User');
        expect(res.body.status).toEqual('PENDENTE');
      });
  });

  it('/demo-requests (POST) - Fail without Captcha', () => {
    return request(app.getHttpServer())
      .post('/demo-requests')
      .send({
        name: 'Bot User',
        email: 'bot@test.com',
        phone: '11999999999',
        companyName: 'Bot Corp',
        employees: '1000',
      })
      .expect(400); // Bad Request (ValidationPipe or custom check)
  });

  // Skipped: "Always Pass" Dummy Secret Key validates ANY token as true.
  // To test failure, we would need to inject the "Always Fail" secret key.
  // it('/demo-requests (POST) - Fail with Invalid Captcha', async () => { ... });
});
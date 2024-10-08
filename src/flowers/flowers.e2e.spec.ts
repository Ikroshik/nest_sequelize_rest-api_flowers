import { INestApplication, ValidationPipe } from "@nestjs/common"
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "../app.module";
import * as request from "supertest"

describe('FlowersConroller (e2e)', () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleMixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule]
        }).compile()

        app = moduleMixture.createNestApplication()
        app.useGlobalPipes(new ValidationPipe())
        await app.init()
    })

    it('/flowers (GET)', () => {
        return request(app.getHttpServer()).get('/flowers')
        .expect(200)
        .expect([
            {
                "id": 1,
                "name": "Роза",
                "color": "Белая",
                "price": 12,
                "createdAt": "2024-10-04T13:12:28.195Z",
                "updatedAt": "2024-10-04T13:12:28.195Z"
            },
            {
                "id": 2,
                "name": "Мак",
                "color": "Красный",
                "price": 11,
                "createdAt": "2024-10-04T13:13:28.899Z",
                "updatedAt": "2024-10-04T13:13:28.899Z"
            },
            
        ])
    })

    it('/flowers (POST)', () => {
        return request(app.getHttpServer())
        .post('/flowers')
        .send({
            name: 'Подсолнух',
            color: 'Жёлтый',
            price: 8
        })
        .expect(201)
        .expect(response => {
            console.log(response.body)
            return response.body.name === "Подсолнух"
        })
    })

    afterAll(async () => {
        await app.close()
    })
})
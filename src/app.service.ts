import { Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

@Injectable()
export class AppService {
    // client - обычный бекэнд, обычный клиент
    private client: ClientProxy


    // Описываем клиента
    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: 'localhost',
                port: 8877,
            }
        })
    }

    sendMessage() {
        this.client.emit('message', 'New order #2342!')
    }
}
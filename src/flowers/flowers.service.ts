import { Injectable } from '@nestjs/common';

@Injectable()
export class FlowersService {
    findAll() {
        return [{
            name: 'Rose',
            color: 'Red',
            price: 5
        },
        {
            name: 'Mac',
            color: 'Red',
            price: 3
        },
        {
            name: 'Tullip',
            color: 'Yellow',
            price: 7
        },
        ]
    }
}

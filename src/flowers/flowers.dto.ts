import { ApiProduces, ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator'

export class CreateFlowersDto {
    @IsString()
    @ApiProperty({
        example: "Ilya",
        required: true
    })
    name: string;

    @IsString()
    @ApiProperty({
        example: "red",
        required: true
    })
    color: string;

    @IsNumber()
    @ApiProperty({
        example: 5,
        required: true
    })
    price: number;
}

export type TFlowersUpdateDto = Partial<CreateFlowersDto>
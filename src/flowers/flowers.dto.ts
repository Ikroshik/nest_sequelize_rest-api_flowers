import { IsString, IsNumber, IsNotEmpty } from 'class-validator'

export class CreateFlowersDto {
    @IsString()
    name: string;

    @IsString()
    color: string;

    @IsNumber()
    price: number;
}

export type TFlowersUpdateDto = Partial<CreateFlowersDto>
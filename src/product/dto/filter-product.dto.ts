import { Transform } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class FilterProductDTO {
    @IsOptional()
    @IsString()
    @Transform(({ value }) => value.toLowerCase().trim())
    categori: string;

    @IsOptional()
    @IsNumber()
    proveedorId: number;

    @IsOptional()
    @IsString()
    @Transform(({ value }) => value.toLowerCase().trim())
    nameProduct: string;

    @IsOptional()
    @IsNumber()
    @Min(1, { message: "The cursor must have a value of 1 for pagination" })
    cursor: number;

    @IsOptional()
    @IsBoolean()
    cheapperPrice: boolean;
    
    // Método isEmpty revisado
    isEmpty(): boolean {
        // Aquí revisamos si todos los valores de las propiedades son undefined, null o cadenas vacías
        return !(
            this.categori ||
            this.proveedorId ||
            this.nameProduct ||
            this.cursor ||
            this.cheapperPrice !== undefined // Para cheapperPrice, verificamos que no sea undefined
        );
    }
}
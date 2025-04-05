import { NotFoundException } from "@nestjs/common"

export function verifiExist(valor,msg){
    if(!valor) throw new NotFoundException(msg,' not Found'); 
}
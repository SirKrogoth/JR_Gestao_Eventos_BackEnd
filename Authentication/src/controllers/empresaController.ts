import { Request, Response } from 'express';
import { iEmpresa } from '../models/interfaces/iEmpresa';
import { StatusCodes } from 'http-status-codes';
import repository from '../models/repository/empresaRepository';
import { v4 as uuidv4 } from 'uuid';

async function add(req: Request, res: Response, next: any){
    try {
        const empresa = req.body as iEmpresa;
        empresa.codigo = uuidv4();
        const result = await repository.add(empresa);
        
        res.status(StatusCodes.OK).json(result);

    } catch (error) {
        console.log(error);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

export default {
    add
}
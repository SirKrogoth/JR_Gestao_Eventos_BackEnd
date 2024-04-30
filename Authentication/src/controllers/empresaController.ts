import { Request, Response } from 'express';
import { iEmpresa } from '../models/interfaces/iEmpresa';
import { StatusCodes } from 'http-status-codes';
import repository from '../models/repository/empresaRepository';

async function add(req: Request, res: Response, next: any){
    try {
        const empresa = req.body as iEmpresa;
        const result = await repository.add(empresa);
        empresa.id = result.id;
        res.status(StatusCodes.OK).json(empresa);

    } catch (error) {
        console.log(error);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

export default {
    add
}
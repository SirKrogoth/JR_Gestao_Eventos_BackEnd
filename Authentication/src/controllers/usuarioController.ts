import { Request, Response } from 'express';
import iUsuario from '../models/interfaces/iUsuarios';
import usuariosRepository from '../models/repository/usuariosRepository';
import { v4 as uuidv4 } from 'uuid';
import { StatusCodes } from 'http-status-codes';

async function add(req: Request, res: Response, next: any){
    try {
        const usuario = req.body as iUsuario;
        usuario.codigo = uuidv4();

        const result = await usuariosRepository.add(usuario);
        
        result.senha = '';
        res.status(201).json(result).end();
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

export default{ 
    add
}
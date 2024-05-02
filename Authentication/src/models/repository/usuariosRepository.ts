import usuarioModel from '../models/usuarioModel';
import iUsuarios from '../interfaces/iUsuarios';

function add(usuario: iUsuarios){
    return usuarioModel.create(usuario);
}

export default{
    add
}
import empresaModel, { iEmpresaModel } from "../models/empresaModel";
import { iEmpresa } from "../interfaces/iEmpresa";

function add(empresa: iEmpresa){
    return empresaModel.create(empresa);
}

export default {
    add
}
export interface DtoClienteFornecedor {
    id?: number;
    nome: string;
    cpf_cnpj: string;
    ie: string;
    tipo: string;
    id_endereco?: number;    
    id_contato?: number;
}
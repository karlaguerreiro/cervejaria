export interface  Insumo {
  nome: string ;
  //valor: string;
  dataCompra: string;
  precoUnit: number;
  unidMedida: string;
  //fornecedor : Fornecedor;
}

// TODO> Criar um DTO para cada tabela do banco de dados.
export interface  DtoInsumo {
  nome: string ;
  dataCompra: string;
  precoUnit: number;
  unidMedida: string;
  idFornecedor: number;
  validade: string;
}
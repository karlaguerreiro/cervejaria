export interface  Insumo {
  nome: string ;
  //valor: string;
  dataCompra: string;
  precoUnit: Number;
  unidMedida: string;
  //fornecedor : Fornecedor;
}


export interface  DtoInsumo {
  nome: string ;
  dataCompra: string;
  precoUnit: Number;
  unidMedida: string;
  idFornecedor: Number;
  validade: string;
}
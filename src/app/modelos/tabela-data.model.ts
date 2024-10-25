// src/app/models/tabela-data.model.ts

export interface DebitCostCenter {
  CostCenter: string;
  Quantity: number;
  Amount: number;
  Billed: boolean;
  Error: string;
  AmountFormatted: string;
}

export interface TabelaData {
  ProductId: string;
  AccountDate: string;
  Description: string;
  CostCenterCredit: string;
  UnitValue: number;
  DebitCostCenters: DebitCostCenter[];
  TotalQuantity: number;
  BilledTotalQtd: number;
  UnitValueFormatted: string;
  TotalAmountFormatted: string;
  TotalAmountBilledFormatted: string;
}

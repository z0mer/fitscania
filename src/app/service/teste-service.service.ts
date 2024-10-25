import { Injectable } from '@angular/core';
import { TabelaData } from '../modelos/tabela-data.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TesteServiceService {

  constructor() { }

  testeTabela(pagina: number): Observable<TabelaData[]> {

    const response: TabelaData[] = [
      {
        "ProductId": "1003",
        "AccountDate": "/Date(-62135586000000)/",
        "Description": "POWER BI WORKSPACE PREMIU",
        "CostCenterCredit": "3092",
        "UnitValue": 165,
        "DebitCostCenters": [
          {
            "CostCenter": "3010",
            "Quantity": 1,
            "Amount": 165,
            "Billed": true,
            "Error": "",
            "AmountFormatted": "165,00"
          },
        ],
        "TotalQuantity": 146,
        "BilledTotalQtd": 127,
        "UnitValueFormatted": "131,00",
        "TotalAmountFormatted": "19.126,00",
        "TotalAmountBilledFormatted": "16.637,00"
      },
    ];
    return of (response);
  }
}

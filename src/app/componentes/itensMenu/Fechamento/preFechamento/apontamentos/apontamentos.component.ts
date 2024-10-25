import { Component, OnInit } from '@angular/core';
import { TabelaData } from 'src/app/modelos/tabela-data.model';
import { TesteServiceService } from 'src/app/service/teste-service.service';

@Component({
  selector: 'app-apontamentos',
  templateUrl: './apontamentos.component.html',
  styleUrls: ['./apontamentos.component.css']
})
export class ApontamentosComponent implements OnInit {
  tabelaDados: TabelaData[] = [];
  paginaAtual: number = 1;

  constructor(private testeService: TesteServiceService) { }

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.testeService.testeTabela(this.paginaAtual).subscribe(
      (dados: TabelaData[]) => {
        this.tabelaDados = dados;
        console.log(this.tabelaDados);
      },
      (erro) => {
        console.error('Erro ao carregar dados da tabela:', erro);
      }
    );
  }

  converterData(data: string): string {
    const timestamp = parseInt(data.replace(/\/Date\((\-?\d+)\)\//, '$1'), 10);
    const date = new Date(timestamp);
    return isNaN(date.getTime()) ? 'Data Inválida' : date.toLocaleDateString();
  }
}

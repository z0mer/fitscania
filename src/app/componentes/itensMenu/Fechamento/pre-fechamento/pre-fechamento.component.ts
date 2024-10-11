import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-fechamento',
  templateUrl: './pre-fechamento.component.html',
  styleUrls: ['./pre-fechamento.component.css']
})
export class PreFechamentoComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {

  }
}

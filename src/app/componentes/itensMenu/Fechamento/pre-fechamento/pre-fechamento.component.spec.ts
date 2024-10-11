import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreFechamentoComponent } from './pre-fechamento.component';

describe('PreFechamentoComponent', () => {
  let component: PreFechamentoComponent;
  let fixture: ComponentFixture<PreFechamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreFechamentoComponent]
    });
    fixture = TestBed.createComponent(PreFechamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

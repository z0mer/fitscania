import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtmComponent } from './mtm.component';

describe('MtmComponent', () => {
  let component: MtmComponent;
  let fixture: ComponentFixture<MtmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MtmComponent]
    });
    fixture = TestBed.createComponent(MtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

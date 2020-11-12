import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoDocComponent } from './listar-tipo-doc.component';

describe('ListarTipoDocComponent', () => {
  let component: ListarTipoDocComponent;
  let fixture: ComponentFixture<ListarTipoDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTipoDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipoDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipoDocComponent } from './add-tipo-doc.component';

describe('AddTipoDocComponent', () => {
  let component: AddTipoDocComponent;
  let fixture: ComponentFixture<AddTipoDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipoDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTipoDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

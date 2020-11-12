import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTipoDocComponent } from './update-tipo-doc.component';

describe('UpdateTipoDocComponent', () => {
  let component: UpdateTipoDocComponent;
  let fixture: ComponentFixture<UpdateTipoDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTipoDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTipoDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

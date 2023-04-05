import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseServicesComponent } from './warehouse-services.component';

describe('WarehouseServicesComponent', () => {
  let component: WarehouseServicesComponent;
  let fixture: ComponentFixture<WarehouseServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

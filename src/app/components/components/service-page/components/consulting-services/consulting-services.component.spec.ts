import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingServicesComponent } from './consulting-services.component';

describe('ConsultingServicesComponent', () => {
  let component: ConsultingServicesComponent;
  let fixture: ComponentFixture<ConsultingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultingServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

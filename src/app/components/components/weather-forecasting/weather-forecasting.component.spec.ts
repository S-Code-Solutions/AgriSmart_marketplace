import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastingComponent } from './weather-forecasting.component';

describe('WeatherForecastingComponent', () => {
  let component: WeatherForecastingComponent;
  let fixture: ComponentFixture<WeatherForecastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherForecastingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherForecastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

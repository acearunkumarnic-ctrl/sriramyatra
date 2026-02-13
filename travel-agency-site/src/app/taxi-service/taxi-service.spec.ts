import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiService } from './taxi-service';

describe('TaxiService', () => {
  let component: TaxiService;
  let fixture: ComponentFixture<TaxiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxiService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxiService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

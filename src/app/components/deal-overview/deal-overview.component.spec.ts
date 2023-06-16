import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealOverviewComponent } from './deal-overview.component';

describe('DealOverviewComponent', () => {
  let component: DealOverviewComponent;
  let fixture: ComponentFixture<DealOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

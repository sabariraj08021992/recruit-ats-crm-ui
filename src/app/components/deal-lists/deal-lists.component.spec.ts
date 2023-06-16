import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealListsComponent } from './deal-lists.component';

describe('DealListsComponent', () => {
  let component: DealListsComponent;
  let fixture: ComponentFixture<DealListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

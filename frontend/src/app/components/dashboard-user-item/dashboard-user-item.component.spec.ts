import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserItemComponent } from './dashboard-user-item.component';

describe('DashboardUserItemComponent', () => {
  let component: DashboardUserItemComponent;
  let fixture: ComponentFixture<DashboardUserItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardUserItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnapingNavigationPage } from './snaping-navigation.page';

describe('SnapingNavigationPage', () => {
  let component: SnapingNavigationPage;
  let fixture: ComponentFixture<SnapingNavigationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SnapingNavigationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

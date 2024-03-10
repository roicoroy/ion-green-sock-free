import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreativeAnimationPage } from './creative-animation.page';

describe('CreativeAnimationPage', () => {
  let component: CreativeAnimationPage;
  let fixture: ComponentFixture<CreativeAnimationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreativeAnimationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

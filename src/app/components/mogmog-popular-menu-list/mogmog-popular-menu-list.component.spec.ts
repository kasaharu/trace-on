import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MogmogPopularMenuListComponent } from './mogmog-popular-menu-list.component';

describe('MogmogPopularMenuListComponent', () => {
  let component: MogmogPopularMenuListComponent;
  let fixture: ComponentFixture<MogmogPopularMenuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MogmogPopularMenuListComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MogmogPopularMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

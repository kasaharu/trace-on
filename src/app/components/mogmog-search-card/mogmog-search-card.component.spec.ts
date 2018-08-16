import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MogmogSearchCardComponent } from './mogmog-search-card.component';

describe('MogmogSearchCardComponent', () => {
  let component: MogmogSearchCardComponent;
  let fixture: ComponentFixture<MogmogSearchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MogmogSearchCardComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MogmogSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

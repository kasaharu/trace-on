import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MogmogHeaderComponent } from './mogmog-header.component';

describe('MogmogHeaderComponent', () => {
  let component: MogmogHeaderComponent;
  let fixture: ComponentFixture<MogmogHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MogmogHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MogmogHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

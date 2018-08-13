import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MogmogComponent } from './mogmog.component';
import { MogmogHeaderComponent } from '../mogmog-header/mogmog-header.component';

describe('MogmogComponent', () => {
  let component: MogmogComponent;
  let fixture: ComponentFixture<MogmogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MogmogComponent, MogmogHeaderComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MogmogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

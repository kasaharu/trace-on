import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MogmogCoverImageComponent } from './mogmog-cover-image.component';

describe('MogmogCoverImageComponent', () => {
  let component: MogmogCoverImageComponent;
  let fixture: ComponentFixture<MogmogCoverImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MogmogCoverImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MogmogCoverImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MogmogComponent } from './mogmog.component';
import { MogmogHeaderComponent } from '../mogmog-header/mogmog-header.component';
import { MogmogCoverImageComponent } from '../mogmog-cover-image/mogmog-cover-image.component';

describe('MogmogComponent', () => {
  let component: MogmogComponent;
  let fixture: ComponentFixture<MogmogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MogmogComponent, MogmogHeaderComponent, MogmogCoverImageComponent],
      imports: [FontAwesomeModule],
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

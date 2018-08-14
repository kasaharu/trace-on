import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MogmogCoverImageComponent } from './mogmog-cover-image.component';

describe('MogmogCoverImageComponent', () => {
  let component: MogmogCoverImageComponent;
  let fixture: ComponentFixture<MogmogCoverImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MogmogCoverImageComponent ],
      imports: [FontAwesomeModule],
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

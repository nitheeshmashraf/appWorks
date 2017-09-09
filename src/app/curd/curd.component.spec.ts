import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CURDComponent } from './curd.component';

describe('CURDComponent', () => {
  let component: CURDComponent;
  let fixture: ComponentFixture<CURDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CURDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CURDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

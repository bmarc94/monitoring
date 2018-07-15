import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsCreateComponent } from './parents-create.component';

describe('ParentsCreateComponent', () => {
  let component: ParentsCreateComponent;
  let fixture: ComponentFixture<ParentsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

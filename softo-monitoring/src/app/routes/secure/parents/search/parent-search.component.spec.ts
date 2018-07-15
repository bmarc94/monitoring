import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsSearchComponent } from './parent-search.component';

describe('ParentsSearchComponent', () => {
  let component: ParentsSearchComponent;
  let fixture: ComponentFixture<ParentsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

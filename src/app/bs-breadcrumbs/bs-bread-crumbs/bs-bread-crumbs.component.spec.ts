import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsBreadCrumbsComponent } from './bs-bread-crumbs.component';

describe('BsBreadCrumbsComponent', () => {
  let component: BsBreadCrumbsComponent;
  let fixture: ComponentFixture<BsBreadCrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsBreadCrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsBreadCrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

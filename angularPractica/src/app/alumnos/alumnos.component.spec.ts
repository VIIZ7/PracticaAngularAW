import { ComponentFixture, TestBed } from '@angular/core/testing';

import { alumnosComponent } from './alumnos.component';

describe('AlumnosComponent', () => {
  let component: alumnosComponent;
  let fixture: ComponentFixture<alumnosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [alumnosComponent]
    });
    fixture = TestBed.createComponent(alumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

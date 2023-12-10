import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmpComponent } from './new-emp.component';

describe('NewEmpComponent', () => {
  let component: NewEmpComponent;
  let fixture: ComponentFixture<NewEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewEmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInfoComponent } from './add-edit-info.component';

describe('AddEditInfoComponent', () => {
  let component: AddEditInfoComponent;
  let fixture: ComponentFixture<AddEditInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaturesListComponent } from './creatures-list.component';

describe('CreaturesListComponent', () => {
  let component: CreaturesListComponent;
  let fixture: ComponentFixture<CreaturesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreaturesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaturesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

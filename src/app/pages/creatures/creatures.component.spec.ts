import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaturesComponent } from './creatures.component';

describe('CreaturesComponent', () => {
  let component: CreaturesComponent;
  let fixture: ComponentFixture<CreaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

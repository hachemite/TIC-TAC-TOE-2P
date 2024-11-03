import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiToggleComponent } from './ai-toggle.component';

describe('AiToggleComponent', () => {
  let component: AiToggleComponent;
  let fixture: ComponentFixture<AiToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

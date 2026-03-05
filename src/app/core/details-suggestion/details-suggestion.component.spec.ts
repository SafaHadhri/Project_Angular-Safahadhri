import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSuggestionComponent } from './details-suggestion.component';

describe('DetailsSuggestionComponent', () => {
  let component: DetailsSuggestionComponent;
  let fixture: ComponentFixture<DetailsSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsSuggestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

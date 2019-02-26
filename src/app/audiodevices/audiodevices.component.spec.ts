import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiodevicesComponent } from './audiodevices.component';

describe('AudiodevicesComponent', () => {
  let component: AudiodevicesComponent;
  let fixture: ComponentFixture<AudiodevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AudiodevicesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiodevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

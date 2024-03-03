import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalNetworksComponent } from './global-networks.component';

describe('GlobalNetworksComponent', () => {
  let component: GlobalNetworksComponent;
  let fixture: ComponentFixture<GlobalNetworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalNetworksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

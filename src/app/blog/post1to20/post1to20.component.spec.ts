import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post1to20Component } from './post1to20.component';

describe('Post1to20Component', () => {
  let component: Post1to20Component;
  let fixture: ComponentFixture<Post1to20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Post1to20Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Post1to20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

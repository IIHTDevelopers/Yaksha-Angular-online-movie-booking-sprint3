import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { db } from 'src/assets/movie-db';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

import { BookShowComponent } from './book-show.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieTicketComponent } from '../movie-ticket/movie-ticket.component';
import { By } from '@angular/platform-browser';
import { Ticket } from '../models/titcket';

describe('BookShowComponent', () => {
  let component: BookShowComponent;
  let fixture: ComponentFixture<BookShowComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookShowComponent, BreadcrumbComponent, MovieTicketComponent],
      imports: [ReactiveFormsModule, RouterTestingModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BookShowComponent);
    component = fixture.componentInstance;

    component.bookingForm = new FormGroup({
      "email": new FormControl("demo.test@gmail.com"),
      "mobile": new FormControl("9879879879"),
      "seats": new FormControl("2")
    });

    fixture.detectChanges();
  });
  describe("boundary", () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

});

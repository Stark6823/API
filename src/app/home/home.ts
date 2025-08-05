import { Component } from '@angular/core';
import { DummyService } from '../dummy.service';
import { CommonModule } from '@angular/common';


@Component({
     standalone: true,
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
 
})
export class HomeComponent {
  constructor(private dummyService: DummyService) {}
  showTicketData = false;
  ticketData: any[] = [];
  ticketError: string = '';
  //function
  
  showTrackTicketData(event: Event) {
    event.preventDefault();
    this.showTicketData = false;
    this.ticketError = '';

    this.dummyService.getDummyData().subscribe({
      next: (data: any) => {
        this.ticketData = data;
        this.showTicketData = true;
      },
      error: (error: any) => {
        this.ticketError = 'Failed to load data.';
        this.showTicketData = true;
        console.error('API error:', error);
      },
    });
  }
}

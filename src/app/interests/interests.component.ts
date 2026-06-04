import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent implements OnInit {
  interests: any[] = [];

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.cvService.getInterests().subscribe((data: any) => {
      this.interests = data;
    });
  }
}

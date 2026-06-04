import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent implements OnInit {

  projects: any[] = [];

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.cvService.getWorkExperience().subscribe((data: any) => {
      this.projects = data;
    });
  }
}

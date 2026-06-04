import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  education: any[] = [];

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.cvService.getEducation().subscribe((data: any) => {
      this.education = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {

  skills: any[] = [];

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.cvService.getSkills().subscribe((data: any) => {
      this.skills = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent implements OnInit {
  languages: any[] = [];

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.cvService.getLanguages().subscribe((data: any) => {
      this.languages = data;
    });
  }
}

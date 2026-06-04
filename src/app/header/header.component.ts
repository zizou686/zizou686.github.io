import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  cv: any;

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
this.cvService.getHeader().subscribe((data: any) => {
  this.cv = data;
});
  }
}

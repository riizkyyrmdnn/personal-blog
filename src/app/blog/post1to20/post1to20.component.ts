import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-post1to20',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './post1to20.component.html',
  styleUrl: './post1to20.component.css'
})
export class Post1to20Component implements OnInit {
  blogTitle: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.blogTitle = params.get('title');
    })
  }

  reverseFormatTitle(urlTitle: string): string {
    return urlTitle
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  }
}

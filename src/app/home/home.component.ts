import { Component } from '@angular/core';
import { BlogPost } from '../app-interface';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  posts = [
    {
      id: 1,
      title: '"Hell" Tutorial in Programming: Understanding and Overcoming It',
      description: '"Tutorial hell" is an informal term that programmers use to describe situations where they feel trapped in a maze of confusing,  incomplete, or overly complex tutorials,  guides, or documentation. This often happens when:',
      date: 'Jan 8, 2024',
      datetime: '2020-01-08',
      category: { title: 'Programming', href: '#' },
    },
    {
      id: 2,
      title: 'Lightweight JavaScript Framework Recommendations for Pure Front-End Web',
      description: 'Do you want to create a website with a lightweight javascript framework to create a pure front end web browser? I help provide a lightweight JavaScript framework recommendation for that. The choice of framework depends largely on the needs of your project, but here are some options that are often considered lightweight and suitable for small to medium-sized projects in my opinion:',
      date: 'jan 10, 2024',
      datetime: '2020-01-10',
      category: { title: 'Programming', href: '#' },
    },
    {
      id: 3,
      title: 'What is a Front End Developer and How to Become a Front End Developer?',
      description: 'A front-end developer is a professional who is responsible for building the appearance and user interaction of a website or application. Simply put, they are the people behind the visual appearance we see when visiting a website, from the layout, colors, to the attractive animations.',
      date: 'jan 10, 2024',
      datetime: '2020-01-10',
      category: { title: 'Programming', href: '#' },
    },
  ] as BlogPost[]

  postId(index: number, post: BlogPost): number {
    return post.id
  }

  blogTitle(title: string): string {
    return `blog/${title.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/ /g, '-')}`
  }
}

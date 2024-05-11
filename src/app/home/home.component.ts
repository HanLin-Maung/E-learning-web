import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( 
    private heroService: HeroService,
    private title: Title,
    private meta: Meta
  ) { 
      this.title.setTitle('CodingIzFan');
      this.meta.updateTag({name:'description', content:'watch online courses'})
    };

  categories: any[] = [];

  ngOnInit(): void {
    // this.checkDarkMode();
    this.getCategories();
  }

  getCategories(){
    this.heroService.getAllCategories().subscribe((result) => {
      
      console.log(result);
      this.categories = result.results;
    });
  }

  // toggleDarkMode(): void {
  //   const darkMode = localStorage.getItem('dark-mode');
  //   if (darkMode === 'disabled' || !darkMode) {
  //     this.enableDarkMode();
  //   } else {
  //     this.disableDarkMode();
  //   }
  // }

  // enableDarkMode(): void {
  //   document.body.classList.add('dark');
  //   localStorage.setItem('dark-mode', 'enabled');
  // }

  // disableDarkMode(): void {
  //   document.body.classList.remove('dark');
  //   localStorage.setItem('dark-mode', 'disabled');
  // }

  // checkDarkMode(): void {
  //   const darkMode = localStorage.getItem('dark-mode');
  //   if (darkMode === 'enabled') {
  //     this.enableDarkMode();
  //   }
  // }

  // toggleProfile(): void {
  //   const profile = document.querySelector('.header .flex .profile');
  //   profile?.classList.toggle('active');
  // }

  // toggleSearch(): void {
  //   const search = document.querySelector('.header .flex .search-form');
  //   search?.classList.toggle('active');
  // }

  // toggleSidebar(): void {
  //   const sidebar = document.querySelector('.side-bar');
  //   const body = document.body;
  //   sidebar?.classList.toggle('active');
  //   body.classList.toggle('active');
  // }

  // closeSidebar(): void {
  //   const sidebar = document.querySelector('.side-bar');
  //   const body = document.body;
  //   sidebar?.classList.remove('active');
  //   body.classList.remove('active');
  // }

}


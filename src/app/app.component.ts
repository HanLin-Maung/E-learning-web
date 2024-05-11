import { Component, OnInit, ViewChild,  } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'online-course';

  constructor(
    private observer: BreakpointObserver
    ) { }

    ngOnInit(): void {
      
    }

  @ViewChild(MatSidenav) 
  sidenav!: MatSidenav;

  ngAfterViewInit() {
    this.observer.observe(["(max-width: 800px"]).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = "over";
        this.sidenav.close();
      } else {
        this.sidenav.mode = "side";
        this.sidenav.open();
      }
    });
  }

}

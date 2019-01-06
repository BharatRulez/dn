import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  collapsed = true;
     toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
     }
     w3_open() {
      document.getElementById("mySidebar").style.display = "block";
      document.getElementById("myOverlay").style.display = "block";
    }w3_close() {
      document.getElementById("mySidebar").style.display = "none";
      document.getElementById("myOverlay").style.display = "none";
    }


}

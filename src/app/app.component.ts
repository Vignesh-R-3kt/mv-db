import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mvdb';
  navbg: any;

  @HostListener('document:scroll') scrollOver() {

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbg = {
        background: '#1f1f1f'
      }
    } else {
      this.navbg = {
      }
    }
  }
}

import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
  imports: [IonicModule, CommonModule]
})
export class InfoPage {
  constructor(private router: Router) {}
  goBack() {
    this.router.navigate(['/home']);
  }
  goDetails(){
    this.router.navigate(['/details']);
  }
}
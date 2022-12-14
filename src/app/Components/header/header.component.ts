import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logoSrc!: string;

  constructor() { }

  ngOnInit(): void {
    /**
     * Lien vers le logo de Localib
     */
    this.logoSrc = "./assets/localib.png";
  }

}

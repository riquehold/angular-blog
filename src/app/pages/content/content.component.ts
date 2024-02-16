import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://www.sibgoiania.org/midia/2021/02/2021-02-21_121_Salmo84-A-casa-do-coracao.jpg"
  contentTitle: string = "Habitando na Casa de Deus: Salmos 84.1-4"
  contentDescription: string = "eaes rapeize isso é um teste emmmm"

  constructor() { }

  ngOnInit(): void {
  }

}

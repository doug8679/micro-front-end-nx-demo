import { Component, OnInit } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';

@Component({
  selector: 'tps-mfe-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  copy : string[] = [];

  constructor() { }

  ngOnInit(): void {
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 10,
        min: 4
      },
      wordsPerSentence: {
        max: 20,
        min: 5
      }
    });

    let i;
    for (i=0; i<5; i++) {
      this.copy.push(lorem.generateParagraphs(1));
    }
  }

}

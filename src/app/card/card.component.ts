import { Component, Input } from '@angular/core';

interface ICardInput {
  isBuy: boolean,
  buyPrice?: string,
  imgHeader: string,
  textHeader: string,
  textNumbers: string,
  textParagraph: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {
  @Input() cardInput:ICardInput;

  constructor() { }

}

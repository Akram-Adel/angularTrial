import { Component } from '@angular/core';

interface ICardInput {
  isBuy: boolean,
  buyPrice?: string,
  imgHeader: string,
  textHeader: string,
  textNumbers: string,
  textParagraph: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  cardInputs:ICardInput[] = [
    {
    isBuy: true,
    buyPrice: '$7.50 / ton',
    imgHeader: 'kariba redd+-zimbabwe',
    textHeader: 'Reduced Emissions from Deforestation and Degradation',
    textNumbers: '957,842 lbs. offset',
    textParagraph: 'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.'
    },
    {
      isBuy: false,
      imgHeader: 'kariba redd+-zimbabwe',
      textHeader: 'Reduced Emissions from Deforestation and Degradation',
      textNumbers: '957,842 lbs. offset',
      textParagraph: 'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.'
    },
    {
      isBuy: false,
      imgHeader: 'kariba redd+-zimbabwe',
      textHeader: 'Reduced Emissions from Deforestation and Degradation',
      textNumbers: '957,842 lbs. offset',
      textParagraph: 'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.'
    },
    {
      isBuy: false,
      imgHeader: 'kariba redd+-zimbabwe',
      textHeader: 'Reduced Emissions from Deforestation and Degradation',
      textNumbers: '957,842 lbs. offset',
      textParagraph: 'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.'
    },
    {
      isBuy: false,
      imgHeader: 'kariba redd+-zimbabwe',
      textHeader: 'Reduced Emissions from Deforestation and Degradation',
      textNumbers: '957,842 lbs. offset',
      textParagraph: 'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.'
    },
    {
      isBuy: true,
      buyPrice: '$7.50 / ton',
      imgHeader: 'kariba redd+-zimbabwe',
      textHeader: 'Reduced Emissions from Deforestation and Degradation',
      textNumbers: '957,842 lbs. offset',
      textParagraph: 'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.'
    },
    {
      isBuy: false,
      imgHeader: 'kariba redd+-zimbabwe',
      textHeader: 'Reduced Emissions from Deforestation and Degradation',
      textNumbers: '957,842 lbs. offset',
      textParagraph: 'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.'
    },
    {
      isBuy: true,
      buyPrice: '$7.50 / ton',
      imgHeader: 'kariba redd+-zimbabwe',
      textHeader: 'Reduced Emissions from Deforestation and Degradation',
      textNumbers: '957,842 lbs. offset',
      textParagraph: 'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.'
    },
  ]
}

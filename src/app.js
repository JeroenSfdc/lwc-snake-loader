import { api, LightningElement } from "lwc";
//TODO: Fetch language-specific label

export default class App extends LightningElement {

  @api locale;
  @api startIndex
  @api endIndex;
  snakeMessage;
  
  connectedCallback() {
    this.startIndex = 0;
    this.endIndex = 10;
    this.snakeMessage = `${this.startIndex} ouf of ${this.endIndex}`;
  }

}

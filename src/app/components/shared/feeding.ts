import { Time } from "@angular/common";

export class Feeding {
  id: string;
  time: Date;
  duration: number;
  constructor() {
    this.id = "";
    this.time = new Date();
    this.duration = 0;
  }
}

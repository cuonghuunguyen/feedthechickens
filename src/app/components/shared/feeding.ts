import { Time } from "@angular/common";

function padZero(a: number) {
  return a.toString().padStart(2, "0");
}

export class Feeding {
  id: string;
  time: string;
  duration: number;
  loop: boolean;
  fed: boolean;
  constructor() {
    const today = new Date();
    console.log(today);

    const todayString = `${today.getFullYear()}-${padZero(
      today.getMonth() + 1
    )}-${padZero(today.getDate())}T${padZero(today.getHours())}:${padZero(
      today.getMinutes()
    )}`;

    this.id = "";
    this.time = todayString;
    this.duration = 1;
    this.loop = false;
    this.fed = false;
  }
}

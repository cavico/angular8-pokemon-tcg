import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.scss']
})
export class EnergyComponent {

  @Input() data: string;

  constructor() { }

}

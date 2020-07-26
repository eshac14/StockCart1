import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-optionlist',
  templateUrl: './optionlist.component.html',
  styleUrls: ['./optionlist.component.css']
})
export class OptionlistComponent implements OnInit {
  selected:any;
filtered :any;
    stat = [
        { value:"Automobiles",id:"123" },
        { value: "Banking", id:"12" },
        { value: "Financial Services" ,id:"45"},
        { value: "Information Technology",id:"56" },
        { value: "Energy - Oil & Gas",id:"57" }];

    status = ['Select Status', 'Automobiles', 'Banking', 'Financial Services', 'Information Technology', 'Energy - Oil & Gas'];



  constructor() { }

  ngOnInit(): void {
  }
  onOptionsSelected() {
    console.log(this.selected); 
    this.filtered = this.stat.filter(t=>t.value ==this.selected);

  }


}

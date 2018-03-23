import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges{
  came= false;
  @Input() contact;
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      console.log('------', this.contact)
    },2000)
  }
  ngOnChanges(e){
    console.log(e, 'from cardcomponent')
    if(e.contact.currentValue!=undefined){
      this.came = true;
    }
  }
}

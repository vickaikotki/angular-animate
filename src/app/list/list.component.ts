import { Component, OnInit, trigger, state, style, transition, animate  } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('paragraphState', [
      state('none', style({
        'display': 'none',
        'height': '0px'

      })),
      state('block', style({
        'display': 'block',
        'height': '50px'
      })),
      transition( 'none <=> block', animate('40ms ease-in-out'))

    ])
  ]
})
export class ListComponent implements OnInit {
  selectedPar;
  displayStates: string[] = [];


  obj = [
    {
      question: 'what\'s your name?',
      anwser: 'Wiki'
     },
    {
    question: 'how old are you?',
    anwser: '25'
    },
    {
      question: 'what\'s your favorite color?',
      anwser: 'green'
    }

  ];



  constructor() {

  }

  ngOnInit() {
    for (const item of this.obj) {
      this.displayStates.push('none');

    }
  }

  // displayParState(index) {
  //   this.displayState === 'none' ? this.displayState = 'block' : this.displayState = 'none';
  // }

  onClick(index) {
    this.displayStates[index] === 'none' ? this.displayStates[index] = 'block' : this.displayStates[index] = 'none' ;

    // this.selectedPar = document.querySelector('#answer_' + index);
    // console.log(this.selectedPar);
    // console.log(this.selectedPar.value);
    // displayState === 'none' ? displayState = 'block' : displayState = 'none';
    // console.log(displayState);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  emailForm:FormGroup;

  constructor() { 
    this.emailForm = new FormGroup({
      userName : new FormControl('', Validators.required),
      userMessage : new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {}

}

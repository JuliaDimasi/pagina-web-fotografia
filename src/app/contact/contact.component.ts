import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopUpConfirmedComponent } from '../pop-up-confirmed/pop-up-confirmed.component';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  emailForm:FormGroup;

  constructor(private modalService: NgbModal) { 
    this.emailForm = new FormGroup({
      userName : new FormControl('', Validators.required),
      userMessage : new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {}
 
  openPopUpConfirmed(){
    this.modalService.open(PopUpConfirmedComponent,{
      size: 'md', backdrop: 'static'
    })
  }

}


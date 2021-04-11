import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pop-up-confirmed',
  templateUrl: './pop-up-confirmed.component.html',
  styleUrls: ['./pop-up-confirmed.component.scss']
})
export class PopUpConfirmedComponent implements OnInit {

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  cerrar(){
    this.modal.close()
  }

}

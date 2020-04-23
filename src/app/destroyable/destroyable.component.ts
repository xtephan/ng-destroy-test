import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-destroyable',
  templateUrl: './destroyable.component.html',
  styleUrls: ['./destroyable.component.css']
})
export class DestroyableComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    this.ngOnDestroy = () => {
      console.log('this.ngOnDestroy called');
    };
  }

  ngOnDestroy(): void {
    console.log('DestroyableComponent.ngOnDestroy called');
  }
}

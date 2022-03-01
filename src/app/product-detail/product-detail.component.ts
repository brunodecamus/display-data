import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSampleComponent } from '../dialog-sample/dialog-sample.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogSampleComponent, {
      width: '98vw', //sets width of dialog
      height: '70vh', //sets width of dialog
      maxWidth: '100vw', //overrides default width of dialog
      maxHeight: '100vh', //overrides default height of dialog
      disableClose: true //disables closing on clicking outside box. You will need to make a dedicated button to close
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result after close : ${result}`);
    });
  }

  ngOnInit(): void {
  }

}

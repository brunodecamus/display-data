import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit(): void {
  }

  //@ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'CarbonCarbonCarbonCarbonCarbonCarbonCarbonCarbonCarbonCarbonCarbonCarbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'NitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogenNitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen ', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
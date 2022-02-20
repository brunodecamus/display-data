import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RandomUserService } from '../services/random-user.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  displayedColumns2: string[] = ['gender', 'title', 'first', 'last', 'email', 'picture'];



  dataSource2 = new MatTableDataSource<any>([]);

  constructor(
    public randomUserService: RandomUserService
  ) { }

  ngOnInit(): void {
    console.info('init');
    console.info(this.randomUserService.test());

    this.dataSource2.data = [{ mail: 'dd' }];


    this.randomUserService.getPosts().subscribe(
      (data: any) => {
        console.info(data);

        const tmp: any[] = [];
        for (let index = 0; index < data.results.length; index++) {
          const element = data.results[index];
          console.info('- element:', element);

          tmp.push(element)
        }
        this.dataSource2.data = tmp;
        console.info('dataSource2:', this.dataSource2.data);
      },
      (error) => { console.error(error); }
    );

    console.info('dataSource2:', this.dataSource2);
    console.info('end');
  }


  ngAfterViewInit() {
    console.info('init');
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
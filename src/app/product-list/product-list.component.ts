import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RandomUserService } from '../services/random-user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  displayedColumns2: string[] = ['gender', 'title', 'first', 'last', 'email', 'picture'];
  dataSource2 = new MatTableDataSource<PeriodicElement>([]);

  panelOpenState = false;

  constructor(
    public randomUserService: RandomUserService
  ) { }

  ngOnInit(): void {
    console.info('init');
    console.info(this.randomUserService.test());
    this.dataSource2.data = [];
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
    this.dataSource2.paginator = this.paginator;
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
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 6, name: 'CarbonCarbonCarbdfgndfngvfdjgndfngkjdfnb df X', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Oxdfngf, g tjgh treh erg idfg ldf lkdfnvn blkjdfn bkldfbdbdfbk ndfen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen X', weight: 15.9994, symbol: 'O' },
  { position: 8, name: 'Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen Oxygen X', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
];
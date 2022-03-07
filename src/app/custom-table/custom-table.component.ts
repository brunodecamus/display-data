import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RandomUserService } from '../services/random-user.service';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

  persons = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['title', 'first', 'last', 'street', 'city', 'state', 'postcode', 'country', 'email', 'cell', 'phone', 'age', 'date', 'username', 'password', 'sha1', 'uuid'];

  constructor(
    public randomUserService: RandomUserService
  ) { }

  ngOnInit(): void {

    this.randomUserService.getRandomUsers(20).subscribe(
      value => {
        console.log('value: ', value);
        console.log('value.results: ', value.results);
        this.persons.data = value.results;
        value.results.forEach((person: any) => {
          console.info(person);
        });
      }
    );
  }

  applyFilter1(value: string) {
    console.log('applyFilter:', value);
    this.persons.filter = value.trim().toLowerCase();

  }

  applyFilter2(value: any) {
    console.log('applyFilter:');
    console.log(value);
  }

}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Candidate } from '../Models/Candidate';
import { CandidateService } from '../Services/candidate.service';

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
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent implements OnInit {

  displayedColumns: string[] = ['serialnumber', 'firstName', 'lastName', 'phoneNumber', 'address', 'resume', 'actions'];
  dataSource: MatTableDataSource<Candidate>;
  CANDIDATE_DATA: Candidate[] = [

  ];
  constructor(private candidateService: CandidateService) {
    this.dataSource = new MatTableDataSource<Candidate>();
    this.CANDIDATE_DATA = this.candidateService.getCandidateData();
  }

  ngOnInit(): void {
    this.dataSource.data = this.CANDIDATE_DATA;
  }
  ngOnChanges() {
    //this.dataSource.data = this.CANDIDATE_DATA;
  }
  removeCandidate(serial: Candidate) {
    console.log(serial.serialnumber);
    this.candidateService.removecandidate(serial);
    this.dataSource.data= this.CANDIDATE_DATA;
  }



}

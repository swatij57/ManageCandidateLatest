import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../Services/candidate.service';
import { Candidate } from '../Models/Candidate';

@Component({
  selector: 'app-candidate-registration',
  templateUrl: './candidate-registration.component.html',
  styleUrls: ['./candidate-registration.component.css']
})
export class CandidateRegistrationComponent implements OnInit {

  constructor(private candidateservice: CandidateService) { }
  fname: string = "";
  lname: string = "";
  phone: number = 0;
  address: string = "";
  resume: string = "";


  ngOnInit(): void {
  }
  setValue() {
    console.log(this.fname);
    var candidate = new Candidate();
    candidate.firstName = this.fname;
    candidate.lastName = this.lname;
    candidate.phoneNumber = this.phone;
    candidate.address = this.address;
    candidate.resume = this.resume;
    this.candidateservice.saveCandidateDetail(candidate).subscribe((response) => {
console.log("inside set value function",response);
    })
  }

}

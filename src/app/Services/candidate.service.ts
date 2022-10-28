import { Injectable } from '@angular/core';
import { Candidate } from '../Models/Candidate';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CandidateService {

  CANDIDATE_DATA: Candidate[] = [

  ];

  constructor(private http: HttpClient) { }


  getCandidateData() {
    console.log("http call starting..")
    this.http.get<Candidate[]>("https://localhost:7051/api/CandidateDeatil")
      .subscribe((res) => { this.CANDIDATE_DATA = res })

    return this.CANDIDATE_DATA;
  }


  removecandidate(serialno: Candidate) {
    const index = this.CANDIDATE_DATA.indexOf(serialno);
    if (index !== -1) {
      this.CANDIDATE_DATA.splice(index, 1);
    }
    console.log(this.CANDIDATE_DATA.length);
  }

  saveCandidateDetail(cand: Candidate): Observable<any> {
    console.log(cand);
    cand.serialnumber = this.CANDIDATE_DATA.length + 1;

    console.log(JSON.stringify(cand))
    return this.http.post<any>("http://localhost:7051/api/CandidateDeatil/SaveCandidate", JSON.stringify(cand));
    

    //this.CANDIDATE_DATA.push(cand);
  }

}

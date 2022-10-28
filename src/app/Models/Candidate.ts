
export class Candidate {
    serialnumber:number;
    firstName: string;
    lastName: string;
    phoneNumber: number;
    address: string;
    resume: string;
    /**
     *
     */
    constructor() {
        this.serialnumber = 0;
        this.firstName = "";
        this.lastName = "";
        this.phoneNumber=0;
        this.address="";
        this.resume="";
    }
  }
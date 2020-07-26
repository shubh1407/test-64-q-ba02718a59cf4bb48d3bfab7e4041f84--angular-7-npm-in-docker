import { Component, OnInit ,ViewChild } from '@angular/core';
import { LeadServiceService } from '../lead-service.service';
import { ActivatedRoute, Router } from '@angular/router';

export class LeadList {
  public id: number;
    public updated_at: Date;
    public created_at: Date;
    public first_name : String;
    public last_name : String;
    public mobile : number;
    public email : String;
    public location_type : String;
    public location_string : String;
    public status : String;
    public communication : String;
    public tags : String;
  constructor(
    id: number,
    updated_at: Date,
    created_at: Date,
    first_name : String,
    last_name : String,
    mobile : number,
    email : String,
    location_type : String,
    location_string : String,
    status : String,
    communication : String,
    tags : String
  ) {
    this.id=id;
    this.first_name=first_name;
    this.last_name=last_name;
    this.mobile=mobile;
    this.email=email;
    this.location_string=location_string;
    this.location_type=location_type;
    this.communication=communication;
  }
}

export class MarkLead{
  public communication : String;
  constructor(communication : String)
  {
    this.communication=communication;
  }
}

@Component({
  selector: 'app-lead-dashboard',
  templateUrl: './lead-dashboard.component.html',
  styleUrls: ['./lead-dashboard.component.scss']
})
export class LeadDashboardComponent implements OnInit {
   
  @ViewChild('addclosebutton') addclosebutton;
  @ViewChild('updateclosebutton') updateclosebutton;
  @ViewChild('deleteclosebutton') deleteclosebutton;
  leadLists : LeadList;
  markLead: MarkLead;
  constructor(private leadService : LeadServiceService,private actroute: ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    
    this.leadLists=new LeadList(null,null,null,null,null,null,null,null,null,null,null,null);
    this.markLead=new MarkLead('');
    this.fetchAllLeads();
    this.updateId='';
  }

  title = 'Lead Table';
  row1 = 'Name';
  row2 = 'Email';
  row3 = 'Mobile Num';
  row4 = 'Location Type';
  row5 = 'Location String';
  row6 = 'Action';

  leads: LeadList[];
  communication: String;
  updateId: String;
  deleteId: String;
  fetchAllLeads()
  {
    this.leadService.retrieveAllLeads().subscribe(
      response => {
        console.log(response);
        this.leads = response;
      }
    );
  }

  setUpdateId(id) {
    this.updateId=id;
  };

  setDeleteId(id){
    this.deleteId=id;
  }
  deleteLead(id)
  {
    this.leadService.deleteLeadById(id).subscribe(
      response => {
        console.log(response)
        this.fetchAllLeads();
        this.deleteclosebutton.nativeElement.click();
      }
    );
  }
  updateLead(id)
  {
    this.leadService.updateLead(this.markLead,id).subscribe(
      response => {
        console.log(response)
        this.fetchAllLeads();
        this.updateclosebutton.nativeElement.click();
      }
    );
  }
  addLead()
  {
    console.log(this.leadLists);

    this.leadService.createLead(this.leadLists).subscribe(
      data => {
        console.log(data);
        this.fetchAllLeads();
        this.addclosebutton.nativeElement.click();
        this.leadLists=new LeadList(null,null,null,null,null,null,null,null,null,null,null,null);
      }
    )
  }

}

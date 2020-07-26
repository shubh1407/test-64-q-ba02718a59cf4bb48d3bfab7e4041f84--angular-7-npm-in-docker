import { Injectable } from '@angular/core';
import { LeadList, MarkLead } from './lead-dashboard/lead-dashboard.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeadServiceService {

  public url:String;
  constructor(
    private httpClient : HttpClient
  ) { 
    this.url=environment.apiUrl
  }

retrieveAllLeads()
  {
      return this.httpClient.get<LeadList[]>(`${this.url}/api/leads/?location_string=India`)
  }

  deleteLeadById(id)
  {
    return this.httpClient.delete(`${this.url}/api/leads/${id}`);
  }

  createLead(leadLists : LeadList)
  {
    return this.httpClient.post(`${this.url}/api/leads/`,leadLists);
  }

  updateLead(markLead : MarkLead,id){
    return this.httpClient.put(`${this.url}/api/mark_lead/${id}`,markLead);
  }
}
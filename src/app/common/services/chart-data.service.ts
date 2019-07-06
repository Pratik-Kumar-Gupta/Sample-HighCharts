import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { GlobalVariable } from '../../global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor(private http:HttpClient) { 

   }

  get_chart_data(month,mType,rType):Observable<any>
  {
    return 
  }
}

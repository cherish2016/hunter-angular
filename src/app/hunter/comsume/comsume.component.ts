import {Component, OnInit} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-comsume',
  templateUrl: './comsume.component.html',
  styleUrls: ['./comsume.component.css']
})
export class ComsumeComponent implements OnInit {

  private url = 'http://localhost:9090/search/';
  private unInterviewList: string[];
  private todo: any;

  constructor(private http: Http) {

  }

  ngOnInit() {
    this.getAllResumeWithStatus("待处理");
  }

  private getInfoByName() {
    this.http.get(this.url).map(res => {

    })
  }

  private getTopo10Resume() {

  }

  getAllResumeWithStatus(status: string) {
    let statusUrl = this.url + "status/" + status
    return this.http.get(statusUrl)
      .map(this.extractData)
      .catch(this.handleError)
      .subscribe(resumes => this.unInterviewList = resumes);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

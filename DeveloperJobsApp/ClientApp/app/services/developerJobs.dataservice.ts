import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DeveloperJobsDataService {
    private baseUrl: string = "http://localhost:60529/api/"

    constructor(private http: Http) {

    }

    public getAllIndustryTypes() {
        return this.http.get(this.baseUrl + "Industries")
    }

    public getAllCompanyTypes() {
        return this.http.get(this.baseUrl + "CompanyTypes")
    }

    public getAllJobTypes() {
        return this.http.get(this.baseUrl + "JobTypes")
    }
}
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { DeveloperJob } from '../models/developerJob';

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

    public saveDeveloperJob(developerJob: DeveloperJob) {
        let headers = new Headers({ 'Content-Type': 'application/json' }),
            options = new RequestOptions({ headers: headers });

        return this.http.post(this.baseUrl + "DeveloperJobs", developerJob, options)
    }
}
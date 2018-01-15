import { Component } from '@angular/core';

import { IIndustryType } from '../../models/industryType';
import { ICompanyType } from '../../models/companyType';
import { IJobType } from '../../models/jobType';
import { DeveloperJob } from '../../models/developerJob';
import { CompanyAddress } from '../../models/companyAddress';

import { DeveloperJobsDataService } from '../../services/developerJobs.dataservice';

import { USStates, IUSState } from '../../resources/usStates';
import { countries, ICountry } from '../../resources/countries';

@Component({
    selector: 'add-job',
    templateUrl: './addJob.component.html',
    styleUrls: ['./addJob.component.css'],
    providers: [DeveloperJobsDataService]
})
export class AddJobComponent {
    public industryTypes: IIndustryType[];
    public companyTypes: ICompanyType[];
    public jobTypes: IJobType[];
    public devJob: DeveloperJob = this.initializeDeveloperJob();
    public usStates: IUSState[] = USStates;
    public countries: ICountry[] = countries;

    constructor(private dataService: DeveloperJobsDataService) {
        this.dataService.getAllIndustryTypes()
            .subscribe(result => {
                this.industryTypes = result.json() as IIndustryType[];
            }, error => console.error(error));

        this.dataService.getAllCompanyTypes()
            .subscribe(result => {
                this.companyTypes = result.json() as ICompanyType[];
            }, error => console.error(error));

        this.dataService.getAllJobTypes()
            .subscribe(result => {
                this.jobTypes = result.json() as IJobType[];
            }, error => console.error(error));
    }

    private initializeDeveloperJob() {
        return new DeveloperJob(
            "", "", new CompanyAddress(0, "", "", "", "", "", ""), "", false, false, 0, "", 0, 0, 0, ""
        ) 
    }

    onSubmit() {
        console.log(this.devJob);
        if (this.devJob && this.devJob.jobTitle && this.devJob.jobTitle.length > 0) {
            this.dataService.saveDeveloperJob(this.devJob)
                .subscribe(resp => {
                    if (resp.ok)
                        alert("Developer job saved successfully with jobId: " + resp.json().id);
                }, error => {
                    console.error(error)
                })
        }
    }
}

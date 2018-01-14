import { Component } from '@angular/core';

import { IIndustryType } from '../../models/industryType';
import { ICompanyType } from '../../models/companyType';
import { IJobType } from '../../models/jobType';
import { DeveloperJobsDataService } from '../../services/developerJobs.dataservice';

@Component({
    selector: 'add-job',
    templateUrl: './addJob.component.html',
    styleUrls: ['./addJob.component.css'],
    providers: [DeveloperJobsDataService]
})
export class AddJobComponent {
    private industryTypes: IIndustryType[];
    private companyTypes: ICompanyType[];
    private jobTypes: IJobType[];

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
}

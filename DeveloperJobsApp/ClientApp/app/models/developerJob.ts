import { CompanyAddress } from './companyAddress';

export class DeveloperJob {
    constructor(
        public jobTitle: string,
        public companyName: string,
        public companyAddress: CompanyAddress,
        public salaryRange: string,
        public isRemoteOption: boolean,
        public equitySharing: boolean,
        public jobTypeId: number,
        public experienceLevel: string,
        public industryId: number,
        public companySize: number,
        public companyTypeId: number,
        public jobDescription: string
    ) { }
}
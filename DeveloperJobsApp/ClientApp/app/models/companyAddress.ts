export class CompanyAddress {
    constructor(
        public id: number,
        public address1: string,
        public address2: string,
        public city: string,
        public state: string,
        public zipCode: string,
        public countryName: string
    ) { }
}
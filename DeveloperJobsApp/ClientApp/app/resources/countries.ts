export interface IState {
    iso: string,
    name: string
}

export type Region = "Asia" | "Europe" | "Africa" | "Oceania" | "Americas" | "Antarctica";

export interface ICountry {
    iso: string,
    name: string,
    hasPostalCodes: boolean,
    region: Region,
    states: IState[],
    zipRegex: string | number
}

export const countries: ICountry[] = [
    {
        "region": "Asia",
        "iso": "AF",
        "name": "Afghanistan",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{4})$"
    },
    {
        "region": "Europe",
        "iso": "AX",
        "name": "Aland Islands",
        "hasPostalCodes": true,
        "states": [],
        "zipRegex": "^(\\d{5})$"
    }
] 
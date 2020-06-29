export class Insurance {
    name: string;
    familyName: string;
    date: Date;
    remarks: string;
    type: 'Car' | 'Apartment' | 'Life' | 'Health' | null;
    constructor() {
        this.name = null;
        this.familyName = null;
        this.date = null;
        this.remarks = null;
        this.type = null;
    }
}


export const InsuranceType = {
    Car: 'Car',
    Apartment: 'Apartment',
    Life: 'Life',
    Health: 'Health',
    null: null
};

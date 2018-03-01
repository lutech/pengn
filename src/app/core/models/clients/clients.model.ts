export class Clients {
    constructor(
        Id: string,
        FirstName: string,
        LastName: string,
        MiddleName: string,
        DateofBirth: string,
        Address: Address,
        SSN: string
    ) {}
}

export class Address {
    constructor(
        Street1: string,
        Street2: string,
        City: string,
        State: string,
        ZipCode: string,
        County: string,
    ) {}
}


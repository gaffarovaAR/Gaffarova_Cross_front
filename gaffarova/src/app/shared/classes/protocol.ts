export class ProtocolVM {  
    constructor(public id: number, public name: string, public head: string,
        public date: Date, public amountAssig: number) {}
}

export class ProtocolDTO {  
    constructor(public name: string, public headID: number, public date: Date,
        public assignmentsID: number[]) {}
}


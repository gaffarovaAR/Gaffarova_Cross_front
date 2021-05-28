export class AssignmentVM {  
    constructor(public id: number, public text: string, public deadline: Date, public executorsList: string,
        public done: string, public is_Overdue: string, public dateLastChange: Date) {}
}

export class AssignmentDTO {  
    constructor(public text: string, public deadline: string, public executorsID: number[]) {}
}

export class AssignmentExVM {  
    constructor(public id: number, public text: string, public deadline: Date,
        public done: string, public is_Overdue: string, public dateLastChange: Date) {}
}
export class ExecutorVM {  
    constructor(public id: number, public thirstName: string, public secondName: string,
        public thirdName: string, public position: string, public amountAssig: number) {}
}

export class ExecutorDTO {  
    constructor(public thirstName: string, public secondName: string, public thirdName: string,
        public position: string, public login: string, public password: string) {}
}

// export class EmployerKoff {  
//     constructor(public id: number, public name: string, public comp: number, public all: number) {}
// }
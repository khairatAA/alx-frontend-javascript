interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    readonly location: string,
    [key: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number
}

interface printTeacherFunction {
    firstName: string,
    lastName: string
}
function printTeacher({ firstName, lastName }: printTeacherFunction) {
    return `${firstName.charAt(0)}. ${lastName}`
}

console.log(printTeacher({ firstName: "Joe", lastName: "Doe"}));

interface StudentClassInterface {
    firstName:string,
    lastName:string
}
class StudentClass{
    firstName:string;
    lastName:string;

    constructor({firstName, lastName}: StudentClassInterface) {
        this.firstName = firstName
        this.lastName = lastName
    }

    workOnHomework() {
        return 'Currently working'
    }

    displayName(firstName:string) {
        return this.firstName
    }
}


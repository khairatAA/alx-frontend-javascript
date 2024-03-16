interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak?(): string,
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string,
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home'
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks'
    }
    
    getToWork() {
        return 'Getting a coffee break'
    }

}

class Teacher implements TeacherInterface {
    workFromHome(){
        return 'Cannot work from home'
    }

    getCoffeeBreak(){
        return 'Cannot have a break'
    }

    workTeacherTasks(){
        return 'Getting to work'
    }
}

function createEmployee(salary: number | string) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher
    } else {
        return new Director
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


function isDirector(employee: Director) {
    return employee
}

function executeWork(employee: Director | Teacher) {
    if () {
        employee.
    } else {
        
    }
}

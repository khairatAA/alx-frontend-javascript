// Creating an interface for a student
interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Khairat",
    lastName: "Adesina",
    age: 10,
    location: "Nigeria"
}

const student2: Student = {
    firstName: "Arike",
    lastName: "Adesina",
    age: 15,
    location: "Nigeria"
}

let studentsList: Student[]
studentsList[0] = student1
studentsList[1] = student2

const table = document.createElement('table')
const tbody = document.createElement('tbody')

studentsList.forEach((student) => {
    const row = document.createElement('tr')
    const firstNameCell = document.createElement('td')
    const locationCell = document.createElement('td')

    firstNameCell.textContent = student.firstName
    locationCell.textContent = student.location

    row.appendChild(firstNameCell);
    row.appendChild(locationCell)
    tbody.appendChild(row)
})

table.appendChild(tbody)
document.body.appendChild(table);

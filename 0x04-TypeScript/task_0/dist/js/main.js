var student1 = {
    firstName: "Khairat",
    lastName: "Adesina",
    age: 10,
    location: "Nigeria"
};
var student2 = {
    firstName: "Arike",
    lastName: "Adesina",
    age: 15,
    location: "Nigeria"
};
var studentsList;
studentsList[0] = student1;
studentsList[1] = student2;
var table = document.createElement('table');
var tbody = document.createElement('tbody');
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
table.appendChild(tbody);
console.log(document.body.appendChild(table));
//# sourceMappingURL=main.js.map
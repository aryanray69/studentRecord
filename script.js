const students = [
    {
        name: "Aryan",
        marks: "38%",
        class: "3rd",
        address: "India"
    },
    {
        name: "Salmaan Ahmed",
        marks: "38%",
        class: "3rd",
        address: "India"
    },
    {
        name: "Riya Sharma",
        marks: "85%",
        class: "10th",
        address: "123,ABC Colony, Delhi"
    },
    {
        name: "Rohan Patel",
        marks: "70%",
        class: "12th",
        address: "456, XYZ Street Mumbai"
    },
    {
        name: "Priya Singh",
        marks: "95%",
        class: "8th",
        address: "789, PQR Nagar, Bangalore"
    },
    {
        name: "Neha Verma",
        marks: "80%",
        class: "11th",
        address: "222, DEF Avenue, Chennai"
    },
    {
        name: "Manoj Kumar",
        marks: "75%",
        class: "10th",
        address: "333, GHI Lane, Hyderabad"
    },
    {
        name: "Pooja Mishra",
        marks: "88%",
        class: "12th",
        address: "444, STU COLONY Pune"
    },
    {
        name: "Rajesh Singhania",
        marks: "92%",
        class: "9th",
        address: "555, VWX Street, Jaipur"
    },
]

const studentContainer = document.getElementById("studentContainer");
const search = document.getElementById("search");

function displayStudents(studentList) {

    studentContainer.innerHTML = "";

    for (let i = 0; i < studentList.length; i++) {

        studentContainer.innerHTML += `
            <div class="card">
                <h3>${studentList[i].name}</h3>
                <p><strong>Marks:</strong> ${studentList[i].marks}</p>
                <p><strong>Class:</strong> ${studentList[i].class}</p>
                <p><strong>Address:</strong> ${studentList[i].address}</p>
            </div>
        `;
    }
}

displayStudents(students);

search.addEventListener("input", function () {

    let searchValue = search.value.toLowerCase();

    let filteredStudents = [];

    for (let i = 0; i < students.length; i++) {

        if (students[i].name.toLowerCase().includes(searchValue)) {
            filteredStudents.push(students[i]);
        }

    }

    displayStudents(filteredStudents);

});
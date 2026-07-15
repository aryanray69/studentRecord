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

    studentContainer.innerHTML = studentList.map(student => `
        <div class="card">
            <h3>${student.name}</h3>
            <p><strong>Marks:</strong> ${student.marks}</p>
            <p><strong>Class:</strong> ${student.class}</p>
            <p><strong>Address:</strong> ${student.address}</p>
        </div>
    `).join("");

}

displayStudents(students);

search.addEventListener("input", function () {

    const searchValue = this.value.toLowerCase();

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchValue)
    );

    displayStudents(filteredStudents);

});
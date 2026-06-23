let students = [];

function addStudent(){

    let studentName =
    document.getElementById("studentName").value;

    students.push(studentName);

    displayStudents();
}

function displayStudents(){

    let list =
    document.getElementById("studentList");

    list.innerHTML = "";

    students.forEach(student => {

        let li =
        document.createElement("li");

        li.innerText = student;

        list.appendChild(li);

    });

}
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
function searchStudent(){

    let keyword =
    document
    .getElementById("searchBox")
    .value
    .toLowerCase();

    let students =
    document.querySelectorAll("li");

    students.forEach(student => {

        if(student.innerText
        .toLowerCase()
        .includes(keyword)){

            student.style.display="block";

        }else{

            student.style.display="none";

        }

    });

}
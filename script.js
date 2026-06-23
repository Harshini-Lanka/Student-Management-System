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

    students.forEach((student,index)=>{

        let li =
        document.createElement("li");

        li.innerHTML =
        `${student}
         <button
         onclick="deleteStudent(${index})">
         Delete
         </button>`;

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
function deleteStudent(index){

    students.splice(index,1);

    displayStudents();

}
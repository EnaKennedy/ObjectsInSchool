function addStudents(){
    var firstName = document.getElementById("sfname").value;
    var lastName = document.getElementById("slname").value;
    var grade = document.getElementById("grade").value;

    allStudents.push(new Student(firstName,lastName,grade));
    console.log(allStudents);
    clearBoxes();
}
function addTeacher(){
    var firstName = document.getElementById("tfname").value;
    var lastName = document.getElementById("tlname").value;
    var subject = document.getElementById("subject").value;

    allTeachers.push(new Teacher(firstName,lastName,subject));
    console.log(allTeachers);
    clearBoxes()
}
function addSection(){
    var sectionName = document.getElementById("sname").value;
    var size = document.getElementById("size").value;

    allSections.push(new Section(sectionName,size));
    console.log(allSections);
    clearBoxes()
}
function listItems() {
    var item = document.getElementById("list").value;
    if (item == 0) {
        var sl = "<table border=1>";
        for (var i = 0; i < allStudents.length; i++) {
            sl += "<tr>";
            sl += "<td>" + allStudents[i].firstName + "</td>";
            sl += "<td>" + allStudents[i].lastName + "</td>";
            sl += "<td>" + allStudents[i].grade + "</td>";
            sl += "</tr>";
        }
        sl += "</table>";
        document.getElementById("listOutput").innerHTML = sl;
    }
    if (item == 1) {
        var tl = "<table border=1>";
        for (var r = 0; r < allTeachers.length; r++) {
            tl += "<tr>";
            tl += "<td>" + allTeachers[r].firstName + "</td>";
            tl += "<td>" + allTeachers[r].lastName + "</td>";
            tl += "<td>" + allTeachers[r].subject + "</td>";
            tl += "</tr>";
        }
        tl += "</table>";
        document.getElementById("listOutput").innerHTML = tl;
    }
    if (item == 2) {
        var sel = "<table border=1>";
        for (var t = 0; t < allSections.length; t++) {
            sel += "<tr>";
            sel += "<td>" + allSections[t].sectionName + "</td>";
            sel += "<td>" + allSections[t].MaxSize + "</td>";
            sel += "</tr>";
        }
        sel += "</table>";
        document.getElementById("listOutput").innerHTML = sel;
    }
}

function generateSubjectList(){
    var sl="";
    for(var i=0;i<allSections.length;i++){
        sl+="<option value'";
        sl+=allSections[i].id;
        sl+="'>";
        sl+=allSections[i].sectionName+" "+allSections[i].size;
        sl+="</option>";
    }
    document.getElementById("subjects").innerHTML=sl;
}
function generateStudentList(){
    var sl="";
    for(var i=0;i<allStudents.length;i++){
        sl+="<option value'";
        sl+=allStudents[i].id;
        sl+="'>";
        sl+=allStudents[i].firstName+" "+allStudents[i].lastName;
        sl+="</option>";
    }
    document.getElementById("students").innerHTML=sl;
}

function generateTeacherList(){
    var sl="";
    for(var i=0;i<allTeachers.length;i++){
        sl+="<option value'";
        sl+=allTeachers[i].id;
        sl+="'>";
        sl+=allTeachers[i].firstName+" "+allTeachers[i].lastName;
        sl+="</option>";
    }
    document.getElementById("teachers").innerHTML=sl;
}
function studentById(studentid){
    for (var i=0; i<allStudents.length; i++){
        if(allStudents[i].id==studentid){
            return allStudents[i];
        }
    }
}
function teacherById(teacherid){
    for (var i=0; i<allTeachers.length; i++){
        if(allTeachers[i].id==teacherid){
            return allTeachers[i];
        }
    }
}
function subjectById(subjectid){
    for (var i=0; i<allSections.length;i++){
        if(allSections[i].id==subjectid){
            return allSections[i];
        }
        console.log(allSections)
    }
}
function addStudentToSection(){
    var stud=studentById(document.getElementById("students").value);
    var sub=subjectById(document.getElementById("subjects").value);
    var teach=subjectById(document.getElementById("teachers").value);

    sub.students.push(stud);
    document.getElementById("added").value="Student Added!";
}

function listStudentsInSection(){
    var sub=subjectById(document.getElementById("section").value);
    var tl="<table border=1>";
    for (var i=0;i<sub.students.length;i++){
        tl +="<tr>";
        tl+="<td>"+sub.students[i].firstName+"</td>";
        tl+="<td>"+sub.students[i].lastName+"</td>";
        tl+="<td>"+sub.students[i].grade+"</td>";
        tl+="</tr>"
    }
    tl+="</table>"
    document.getElementById("studList").innerHTML=tl;
}
function clearBoxes() {
    var elements = document.getElementsByTagName("input");
    for (var i=0; i<elements.length; i++) {
        if (elements[i].type == "text") {
            elements[i].value = "";
        }
    }
}
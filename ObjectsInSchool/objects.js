var id=1
function Student(firstName,lastName,grade){
    this.firstName=firstName;
    this.lastName=lastName;
    this.grade=grade;
    this.id=id++;
}
function Teacher(firstName, lastName, subject){
    this.firstName=firstName;
    this.lastName=lastName;
    this.subject=subject;
    this.id=id++;
}
function Section(sectionName,MaxSize){
    this.sectionName=sectionName;
    this.MaxSize=MaxSize;
    this.currentSize=0;
    this.id=id++;
    this.students=[];
    this.teacher="";
}
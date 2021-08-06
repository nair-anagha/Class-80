students=[];

function submitbutton(){
    var displaystudents=[];
    for(var i=1;i<=4;i++){
        var studentname=document.getElementById("student "+i).value;
        console.log(studentname);
        students.push(studentname);
    }

    console.log(students);
    var lengthofname=students.length.length;
    console.log(lengthofname);

    for(var j=0; j<lengthofname;j++){
        displaystudents.push("<h4>name - "+students[j]+ "</h4>");
        console.log(displaystudents);
    }

    console.log(displaystudents);
    document,getElementById("displaywithcommas").innerHTML=displaystudents;
    
    var removecommas=displaystudents.join(" ");
    console.log(removecommas);
    document.getElementById("displaywithoutcommas").innerHTML=removecommas;

    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}
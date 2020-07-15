document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#submit').onclick = submit;
});

function submit(){
    var mathScore = document.getElementById('maths').value;
    var englishScore = document.getElementById('english').value
    var computerScore = document.getElementById('computer').value
    var biologyScore = document.getElementById('biology').value   
    var chemistryScore = document.getElementById('chemistry').value
    var physicsScore = document.getElementById('physics').value 

    let scores = [mathScore, englishScore, computerScore, biologyScore, chemistryScore, physicsScore];
    let grades = [];
    scores.forEach(checkGrade)

    function checkGrade(score){
       if(score < 30){
           grades.push('F')
       }else if(score >= 31 && score <= 59){
           grades.push('C')
       }else if(score >= 60 && score <= 69){
           grades.push('B')
       }else if(score >= 70 && score <= 100){
           grades.push('A')
       }else{
           alert('Invalid score input!')
       }
    }

    document.getElementById('mathGrade').innerHTML = grades[0];
    document.getElementById('englishGrade').innerHTML = grades[1];
    document.getElementById('comGrade').innerHTML = grades[2];
    document.getElementById('bioGrade').innerHTML = grades[3];
    document.getElementById('chemGrade').innerHTML = grades[4];
    document.getElementById('phyGrade').innerHTML = grades[5];
}


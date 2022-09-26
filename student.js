
//sybject list
let outputItem = document.getElementById('output_item');

var themArray = [];
let datsubject = document.getElementById('datsubject')


function pushThem(){
	var inputItem = document.getElementById('theme_input').value;
	themArray.push(inputItem);

	var pval = "";

	for(i=0; i<themArray.length; i++){

		pval +=  themArray[i] +  "</br>"
	}
	console.log(pval)
	outputItem.innerHTML = pval

}
//Cree une liste des aprenant list
let outputStudent = document.getElementById('output_student');
// let outputStudent = document.getElementById('output_student');

var studentArray = [];

function pushStudent(){
	var inputStudent = document.getElementById('input_student').value;
	studentArray.push(inputStudent);

	var students = "";

	for(i=0; i<studentArray.length; i++){

		students +=  studentArray[i] +  "</br>"
	}
	// console.log(students)
    // console.table(studentArray)
	outputStudent.innerHTML = students


}
//date function
let counter = 0
let d = moment().format("YYYY-MM-DD");

function skippingWekeend(date, days) {
    let d = moment(new Date(date)).add(Math.floor(days / 5) * 7, "d");
    let remaining = days % 5;
    while (remaining) {
        d.add(1, "d");
        if (d.day() !== 0 && d.day() !== 6) remaining--;
        }
        return d.format("YYYY-MM-DD");
    }

//Random Student

let btnRandom = document.getElementById('btnrandom');
let result = document.getElementById('reandom_result');
let list = document.getElementById('random_list');

let resultsArray = [];// student random results  array 
let users = studentArray;//students array	
function getRundomNumber(min, max){
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
};

btnRandom.addEventListener('click', () => {
    let index = getRundomNumber(0, users.length-1);
    result.innerText = users[index];

    
    
//afficher les resultats du random dans un tableaux
    resultsArray.push(users[index])//stocker les resultat dans resultats du random array
    console.log(resultsArray)
    var leng = "";
    for(j=0; j<resultsArray.length; j++){
        
        leng += resultsArray[j]  + "</br>"
    }
    list.innerHTML = leng 

//call days function
    var daysArray = []
        var day = skippingWekeend(d, counter++)

//random list
        var st = ""
        for(i=0; i<users.length; i++){

            st +=  users[i]  + "</br>" 
        }
        var dayeS = "" 
        dayeS += day + "</br>"
        outputStudent.innerHTML = st 
        datsubject.innerHTML += dayeS

//retire de la liste des aprenant
        const indecValue = studentArray.indexOf(result.innerHTML);
            studentArray.splice(indecValue, 1)
//rewrite innerHtml after splice for update student list 
            for(let z=0; z<studentArray.length; z++){
                var inputStudent = document.getElementById('input_student').value;
            
                var students = "";
            
                for(i=0; i<studentArray.length; i++){
            
                    students +=  studentArray[i] +  "</br>"
                }
    
                outputStudent.innerHTML = students
            }
//condition pour vider student list apret finir le random
        if(studentArray.length === 0){
            outputStudent.innerHTML = " "
        }
        console.log(result.innerHTML)
        console.log(indecValue)

//creat and object with student and subject array 
    let finaResults = document.getElementById('fina_results')
    function createAssociativeArray(arr1, arr2) {
        var arr = {};
        for(var i = 0, ii = arr1.length; i<ii; i++) {
            arr[arr1[i]] = arr2[i];
            
        }
        // return arr;
        // console.log(arr)
        console.table(arr)
    }
    
    var array1 = themArray;
    var array2 = resultsArray;
    createAssociativeArray(array1, array2);
    

})

// const merge = themArray.concat(resultsArray)
// console.log(merge)

//date

// let table = document.getElementById('table')
function Export() {
    html2canvas(document.getElementById('table'), {
        onrendered: function (canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 500
                }]
            };
            pdfMake.createPdf(docDefinition).download("HtmlToPdf.pdf");
        }
    });
  }



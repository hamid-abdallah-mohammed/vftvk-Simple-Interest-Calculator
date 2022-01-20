

function compute() {
    // get principal from the dom and give it id 
    // pluse one conditon
    var principal = document.getElementById("principal").value;
	if(principal < 1) {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		return ;
	}
     // get rate years with thier values
    var rate = parseFloat(document.getElementById("rate").value);
    var years = document.getElementById("years").value;
    // ca
    var interest = principal * years * rate / 100;
    var Data = new Date();
	var fullYear = parseInt(Data.getFullYear())+parseInt(years);
    
    //Create the Interest text
    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + fullYear + "</mark>";
}

// udpdate the chaged rate
function updateRate() 
{    
     var rateval = document.getElementById("rate").value;
     document.getElementById("rate_val").innerText=rateval;
    
}


        

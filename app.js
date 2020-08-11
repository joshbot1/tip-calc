var calculatetips = function(){

    var domStrings = {
          
        billamount : 'billamt',
        service :'serviceQual',
        Totaltip :'totalTip',
        tip :'tip'
        
    }

    var bill =document.getElementById(domStrings.billamount).value;
    var serve = document.getElementById(domStrings.service).value;

    //check if the string is empty or less than 0 or equal to 1

    if(bill === '' || serve == 0){

        alert('please enter a value');
        return;
    }else{//calulating the tips

        var total;
        
        total =  Math.round(bill * serve);
          
        // for number formating to look good we display 2 decimal value after integer
    
        total  = total.toFixed(2);
    
        //to display the results
    
        document.getElementById(domStrings.Totaltip).style.display = 'block';
        document.getElementById(domStrings.tip).innerHTML = total;
    
    }

}

    


//to hide the tips on load
document.getElementById('totalTip').style.display = 'none';

document.getElementById('calculate').addEventListener('click', function(){

    calculatetips();
});
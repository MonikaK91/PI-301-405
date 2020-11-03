let zagrade = function (s) {
    var polje=[];
    
    for(let i=0; i<s.length; i++) {
        if(s[i] == "(" || s[i] == "[" || s[i] == "{") {
            polje.push(s[i]);
        } 
        
        let duzina = polje.length;
        
        if(s[i] == ")" && polje[duzina - 1] == "("){
            polje.pop();
        }
        else if(s[i] == "}" && polje[duzina - 1] == "{") {
            polje.pop();
        } 
        else if(s[i] == "]" && polje[duzina - 1] == "[") {  
            polje.pop();
        }
        else if(s[i] == ")" || s[i] == "}" || s[i] == "]") {
            return false;
        }
    }      
    return polje.length == 0;;
};

console.log(zagrade("[()]()()")); 
console.log(zagrade("{[((()))]}")); 
console.log(zagrade("({)}")); 

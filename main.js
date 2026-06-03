

let buffer = "";

function tokenize(input){
    buffer = "";  
    for (let i = 0; i < input.length; i++) {
        
        const char = input[i];
        // In the ASCII table, the letters a-z occupy the range 97-122.
        // This can be used here to specify a range within a numerical interval.
        if (char >= "a" && char <= "z"){
            buffer += char;
        }
    }

    // stored as an object so token types can be identified later
    const tokenObject = {
        type : "IDENTIFIER",
        value : buffer
    }

   return tokenObject
};

const token1 = tokenize("alter=42");
console.log(token1);




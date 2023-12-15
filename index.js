const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
//first we need to convert the strin into cells

for (let i = 0; i < str.length; i++) 

{const array= str.split(",") //convert string into cells
  console.log(array);
  
  const rows = str.split('\n');// convert string into rows and columns
   console.log (rows)
   const cellsforrows = rows.map(rows => rows.split(','));
                            //Convert each row into an array of cells
    console.log (cellsforrows);       
   
// Access the object ID from the first line of the row
var headers = cellsforrows[0];//I acceed first line of header
console.log (headers);//print the header


var dataobjects = []; // Array to store objects

// Iterate through the rows (start from 1 assuming index 0 is the header)
for (let i = 1; i < cellsforrows.length; i++) {
    var row = cellsforrows[i];
    var rowData = {}; // Object to store the current row data

    // Access each cell based on the headers
    for (let j = 0; j < headers.length; j++) {
        var header = headers[j];
        var cellValue = row[j];
        rowData[header] = cellValue;
    }

    // Push the object representing the current row into the array
    dataobjects.push(rowData);
}

// Log the array of objects
console.log(dataobjects);

//Part 4

// we need to sort the rows of objects based on the ID

let sortedobject= dataobjects.sort ((a,b)=>a.ID-b.ID);
console.log(sortedobject);

//Insert the following object at index 1:
//{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
//object that we want insert 
const newindex = { id: "48", name: "Barry", occupation: "Runner", age: "25" };

//inserted at index 1
const newarray = sortedobject.slice();
newarray.splice(1, 0, newindex);
console.log(newarray)


//Add the following object to the end of the array:
//{ id: "7", name: "Bilbo", occupation: "None", age: "111" }

const lastindex= { id: "7", name: "Bilbo", occupation: "None", age: "111" };

newarray.push(lastindex);
console.log(newarray);

//Part 5: Full Circle
//As a final task, transform the final set of data back into CSV format.
//There are a number of ways to do this; be creative!
//Once complete, be sure to submit your work according to the submission instructions at the beginning of this document.

//let loop through each row
let combinedstring=""
for (let i = 0; i < newarray.length; i++) {
    const rowes = newarray[i];
   
    //convert each row into a string // // Add a comma after combining each row // delete comma at the end of the string

    const rowstring = Object.values(rowes).join(',');

    console.log(rowstring)


    //convert the rows of string into one combined string
    // add comma after combing each row 
    combinedstring += rowstring+',';

    //remove comma from ','' of the whole string
    combinedstring = combinedstring.slice(0, -1);



   
}
console.log(combinedstring)
}

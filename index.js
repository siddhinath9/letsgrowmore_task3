document.addEventListener("DOMContentLoaded", function() {
  var selectedButton;
  var selectedCheck=[];
    var enroll=document.getElementById("submit");
    if(enroll){
        enroll.onclick = function(){
            event.preventDefault();
            var radioButton=document.getElementsByName("radioButton");
          for(i=0;i<radioButton.length;i++){
            if(radioButton[i].checked){
              selectedCheck=[];
              selectedButton=radioButton[i].value;
              break;
            }
          }
          var checkButton=document.getElementsByName("skill");
          for(i=0;i<checkButton.length;i++){
            if(checkButton[i].checked){
              selectedCheck.push(checkButton[i].value);
            }
          }
        var myTable=document.getElementById("myTable")
        var inputName=document.getElementById("name").value;
        var inputEmail=document.getElementById("email").value;
        var inputWebsite=document.getElementById("website").value;
        var inputImage=document.getElementById("image").value;

          var img=document.createElement("img");
          img.src=inputImage;
  
          var row = document.createElement("tr");
          myTable.appendChild(row);
          myTable.className="display-table";
        
          // Create table cells and add them to the row
          var cell1 = document.createElement("td");
          var cell2 = document.createElement("td");
          row.appendChild(cell1);
          row.appendChild(cell2);
 
          // Add text to the table cells
          cell1.innerHTML = inputName + "<br>"+ selectedButton +"<br>"+inputEmail + "<br>"+inputWebsite+"<br>"+selectedCheck.join(", ");
          cell2.appendChild(img);
 
        }
    }
 });
 
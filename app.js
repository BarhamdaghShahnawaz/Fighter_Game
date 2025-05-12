
        function nameText() {
          
            let newText = +prompt(`1 forEnter your name , 2 for use default name`);

           if(newText === 1)
           {
            if (newText) {
           var user_name = prompt("Enter your Own Style Name");
                let h1Element = document.getElementById("name");

                h1Element.textContent = user_name;
            }

else{
    alert("Please enter a valid name");
}


        }

        else{
              if (newText) {
           var user_name = prompt("Enter your name");
                let h1Element = document.getElementById("name");

                h1Element.textContent = `★彡[${user_name}]彡★`;
            }

else{
    alert("Please enter a valid name");
}
        }
        }

        
        nameText()
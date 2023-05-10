//document.getElementById("popupForm").style.display = "none"; 
   
   function Login() {
    //document.getElementById("popupForm").style.display = "none";
       alert('welcome');
        var username=document.getElementById("spandhu").value;
        var password=document.getElementById("sp@ndhu").value;
        

        if(username=="spandhu" && password=="sp@ndhu"){
          
          //alert("login successFully");
          //document.getElementById('popupForm').style.display = "popup";
          //return true;
          document.getElementById("popupForm").style.display = "block";    
        }
        else{
          alert("login failed");
          
        }
        //document.getElementById("popupForm").style.display = "block";
      }
      //document.getElementById("popupForm").style.display = "show"; 
   
      function closeForm() {
      document.getElementById("popupForm").style.display = "none";
      }

      function handleSubmit () {
        var name = document.getElementById("name").value;
        var surname = document.getElementById("surname").value;
        var number = document.getElementById("number").value;
        var email = document.getElementById("email").value;

        localStorage.setItem("NAME", name);
        localStorage.setItem("SURNAME", surname);
        localStorage.setItem("MOBILE", number);
        localStorage.setItem("EMAIL", email);

        return;
      }

      function handleEdit(){
         var name = document.setElementById("name").value;
         var surname = document.setElementById("surname").value;
         var number = document.setElementById("number").value;
         var email = document.setElementById("email").value;

         edit.addEventListener("click", function(){
            input.contentEditable = true;
         })
      }
      
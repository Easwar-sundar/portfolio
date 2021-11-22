function addressSame(){
    if (document.getElementById("same").checked){
        document.getElementById("paddress").value =document.getElementById("address").value;
    }else{
        document.getElementById("paddress").value ="";
    }
}
$(function() {
    $("#firstname").blur(function(){
    let value=$("#firstname").val();
    if(value ===''){ $("#fname").text("* The field is required").css("color","red").css("font-weight","bold");}
    else{
        //$("#sname").val(value);
        $("#fname").text("");
    }
})
});
$(function() {
    $("#password").blur(function(){
    let value=$("#password").val();
    if(value ===''){ $("#pwd").text("* The field is required").css("color","red").css("font-weight","bold");}
    else{
        //$("#sname").val(value);
        $("#pwd").text("");
    }
})
}); 
$(function() {
    $("#blood").blur(function(){
    let value=$("#blood").val();
    if(value ===''){ $("#bg").text("* The field is required").css("color","red").css("font-weight","bold");}
    else{
        //$("#sname").val(value);
        $("#bg").text("");
    }
})
});
$(function() {
    $("#lastname").blur(function(){
    let value=$("#lastname").val();
    if(value ===''){ $("#lname").text("* The field is required").css("color","red").css("font-weight","bold");}
    else{
        //$("#sname").val(value);
        $("#lname").text("");
    }
})
});
$(function() {
    $("#email").blur(function(){
    let value=$("#email").val();
    if(value ===''){ $("#mail").text("* The field is required").css("color","red").css("font-weight","bold");}
    else{
        //$("#sname").val(value);
        $("#mail").text("");
    }
})
});
    $(document).ready(function(){
        $('input').focus(function(){
            $(this).css('border','3px solid #23c0f5');
        })
      });
    
      $(document).ready(function(){
        $('input').blur(function(){
            $(this).css('border','none');
        })
      });

      $(document).ready(function () {
        $("#dob").blur(function () {
            var value = $("#dob").val();
            console.log(value);
            dob = new Date(value);
            console.log(dob);
      
            if (value === '') {
                $("#dob").focus();
            }
            else {
                var today = new Date();
                console.log(today);
                var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
                //console.log(age);
                $("#age").val(age);
            }
        })
      });
      $(document).ready(function () {
        $("#email").blur(function(){
            var evalue = $("#email").val();
            console.log(evalue);
            var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            
            if(!regex.test(evalue)){
                $("#email").css('border','3px solid red');
        
            }
            else{
                $("#email").css('border','1px solid green');
            }
        })
        });
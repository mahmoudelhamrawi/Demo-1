
//header
$("#wclose").click(function(){

         $(".sub-boob .navbar-mine").animate({width:'0'},500,function(){
            $(".sub-boob").css("display","none")
         })

})

$("#open").click(function(){
    
     $(".sub-boob .navbar-mine").animate({width:'200px'},function(){
              $(".sub-boob").css("display","block")
         
     })



})






//section2
$("#h1").click(function(){
     $("#p1").slideToggle(function(){
         $("#p1").css("backgroundColor","white")
      
     })
           $("#p2").slideUp()
           $("#p3").slideUp()
           $("#p4").slideUp()
    
})
$("#h2").click(function(){
     $("#p2").slideToggle(function(){
         $("#p2").css("backgroundColor","white")
     })
           $("#p1").slideUp()
           $("#p3").slideUp()
           $("#p4").slideUp()
    
})
$("#h3").click(function(){
     $("#p3").slideToggle(function(){
         
         $("#p3").css("backgroundColor","white")
     })
          $("#p1").slideUp()
           $("#p2").slideUp()
           $("#p4").slideUp()
})
$("#h4").click(function(){
     $("#p4").slideToggle(function(){
         
         $("#p4").css("backgroundColor","white")
     })
           $("#p1").slideUp()
           $("#p2").slideUp()
           $("#p3").slideUp()
})






///duartion

// Set the date we're counting down to
 
 var deadline = new Date("oct 27, 2019 23:59:59").getTime();


///// Update the count down every 1 second
var x = setInterval(function() { 
 
  // Get today's date and time
var now = new Date().getTime(); 
  // Find the distance between now and the count down date
var currentDate = deadline - now; 
    
    
  // Time calculations for days, hours, minutes and seconds
var days = Math.floor(currentDate / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((currentDate%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((currentDate % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((currentDate % (1000 * 60)) / 1000); 
    
    // Display the result in the element 
document.getElementById("day").innerHTML =days ; 
document.getElementById("hour").innerHTML =hours; 
document.getElementById("minute").innerHTML = minutes;  
document.getElementById("second").innerHTML =seconds; 
    
    
  // If the count down is finished, write some text
if (currentDate < 0) { 
        clearInterval(x); 
        document.getElementById("demo").innerHTML = "TIME UP Finished"; 
        document.getElementById("day").innerHTML ='0'; 
       document.getElementById("hour").innerHTML ='0'; 
        document.getElementById("minute").innerHTML ='0' ;  
        document.getElementById("second").innerHTML = '0'; } 
    
  //  every 1 second
}, 1000); 



///btn
$(window).scroll(function(){
    let sco=$(window).scrollTop();
    if(sco>800){
        $(".mybtn").fadeIn(500);
    }else{
        $(".mybtn").fadeOut(500);  
    }
    
    
})


$(".mybtn").click(function(){
    
   $("body,html").animate({scrollTop:0},1000) 
    
})



    
   




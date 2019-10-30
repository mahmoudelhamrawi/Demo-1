//
//
//
//


$(".options #fas").click(function(){
    
    $(".cap-options").toggle(2000);
    
    
})

//
//$(".cap-options ul li").eq(0).css("backgroundColor","orange")
//$(".cap-options ul li").eq(1).css("backgroundColor","red")
//$(".cap-options ul li").eq(2).css("backgroundColor","gray")
//$(".cap-options ul li").eq(3).css("backgroundColor","blue")
//$(".cap-options ul li").eq(4).css("backgroundColor","yellow")
//
//
//
//$(".cap-options ul li").click(function(){
//    
//  let color=$(this).css("backgroundColor");
//    $("h1,h2,h3,h4").css("color",color)
//    
//    
//})
//
//$("img").click(function(){
//    
//    let imgs=$(this).attr("src")
////    $(".slider").css("backgroundImage","url("+imgs+")")
//    $(".slider").css("backgroundImage",`url(${imgs})` )
//
//    
//    
//})
//
/////btn to up
//
//
//let offff=$(".container-mine").offset().top;
//
//
//$(window).scroll(function(){
//    let wscoll=$(window).scrollTop();
//
//    
//if(wscoll > offff){
////    $(".container-mine").css("backgroundColor","red")
//    $("nav").css("backgroundColor","rgba(0,0,0,.6)")
//    
//}else{
////     $(".container-mine").css("backgroundColor","white")
//    $("nav").css("backgroundColor","transparent")
//
//}
//  
//    
//   if(wscoll > 1200){
//       
// $("#btnup").fadeIn(500);
//}
//    
//    else{
// $("#btnup").fadeOut(500);
//}
//})
//
//$("#btnup").click(function(){
//    
//    $("body,html").animate({scrollTop:0},2000)
//})
//
//
//
//
//////move to part of site
//
//$("nav a").click(function(){ 
//    let hr=$(this).attr("href");
//    
//    let xxx=$(hr).offset().top;
//    $("html,body").animate({scrollTop:xxx},1000)
//})
//
//
//
// 
/////losding process


$(document).ready(function(){
    
    $("#loading").fadeOut(2000,function(){
        $("body").css("overflow","auto")
        
    })
    
})

//
// window.onload=function(){
//       $("#loading").fadeOut(2000,function(){
//        $("body").css("overflow","auto")
//        
//     
// }






let vv=$("#services").offset().top;

$(window).scroll(function(){
    let cc=$(window).scrollTop()

        if(cc>vv){
            $("nav").css("backgroundColor","rgba(0,0,0,.6)")
         }else{
             $("nav").css("backgroundColor","transparent")

        }
        
        
        
        
    if(cc>1200){
        $("#btnup").fadeIn(500)
    }else{
       $("#btnup").fadeOut(500)

    }
    
    
    
})

$("#btnup").click(function(){
    
   $("body,html").animate({scrollTop:0},1000) 
    
})








$(".options i").click(function(){
    $(".cap-opt").toggle()
    
    
    
})




//$(".cap-opt ul li").eq(0).css("backgroundColor","black");
//$(".cap-opt ul li").eq(1).css("backgroundColor","gray");
//$(".cap-opt ul li").eq(2).css("backgroundColor","blue");
//$(".cap-opt ul li").eq(3).css("backgroundColor","green");
//$(".cap-opt ul li").eq(4).css("backgroundColor","yellow");

$(".cap-opt .navbar-nav .nav-itemm .nav-linkk .nav-linkk").click(function(){
    
   let dd=$(this).attr("href")
    let rr=$(dd).offset().top;
    
    $("html,body").animate({scrollTop:rr},1000)
    
    
})




$(".options img").click(function(){
    let imgs=$(this).attr("src")
    $(".slider").css("backgroundImage","url("+imgs+")")
    
    
})





// Set the date we're counting down to
 
 var deadline = new Date("oct 29, 2019 00:37:00").getTime();


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








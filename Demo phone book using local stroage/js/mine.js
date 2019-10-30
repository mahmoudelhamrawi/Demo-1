var productname = document.getElementById("in-1"); 
var productprice = document.getElementById("in-2"); 
var productcompany = document.getElementById("in-3"); 
var productdescription = document.getElementById("in-4"); 
var search_bar = document.getElementById("search")

//console.log(search_bar);

var btn = document.getElementById("my-btn"); 

var productcontainer ;

var toggole = false; 

var globalindex = 0;




search_bar.onkeyup = function()
{
    var cols = "";
   for (var i=0;i<productcontainer.length;i+=1)
       {
           if (productcontainer[i].name.includes(search_bar.value))
               {
                   cols+=` <div class="col-md-4 my-class">
                       <h2>`+productcontainer[i].name+`</h2>
                        <p>`+productcontainer[i].price+`</p>
                        <p>`+productcontainer[i].desc+`</p>
                        <p>`+productcontainer[i].company+`</p>
                    <button id="my-delete-btn" type="button" onclick="deletefun(`+i+`)" class="btn btn-danger">Delete</button>

                    <button id="my-update-btn" type="button"
                    onclick="retrive(`+i+`)" class="btn btn-warning">update </button> 
                    </div>`
               }
       }
    document.getElementById("my-data").innerHTML=cols;
}


if (localStorage.getItem("productcontainer")==null)
    {
        productcontainer=[]; 
    }
else 
    {
     productcontainer=JSON.parse(localStorage.getItem("productcontainer")); 
        display(); 
    }

function init ()
{
    if (!toggole)
        {
             add();
            display();
        }
    else 
        {
            updatefun(); 
            btn.innerHTML="Add Product"
        }
    
   toggole=false; 
    clear();
}


function add()
{
    var product = 
        {
            name : productname.value, 
            price : productprice.value , 
            company : productcompany.value , 
            desc : productdescription.value
        }
    
    productcontainer.push(product); 
   
    localStorage.setItem("productcontainer" ,  JSON.stringify(productcontainer))
}


function display () 
{
    var cols=""; 
    for ( var i=0 ; i<productcontainer.length;i+=1)
        {
            cols+=` <div class="col-md-4  my-class  m-2">
                       <h2>`+productcontainer[i].name+`</h2>
                        <p>`+productcontainer[i].price+`</p>
                        <p>`+productcontainer[i].desc+`</p>
                        <p>`+productcontainer[i].company+`</p>
                    <button id="my-delete-btn" type="button" onclick="deletefun(`+i+`)" class="btn btn-danger">Delete</button>

                    <button id="my-update-btn" type="button"
                    onclick="retrive(`+i+`)" class="btn btn-warning">update </button> 
                    </div>`
        }

    document.getElementById("my-data").innerHTML=cols
}


function clear ()
{
    var hoba = document.getElementsByClassName("form-control");
    for (var i=0;i<hoba.length;i++)
        {
            hoba[i].value=""; 
        }
   
}

function retrive(myindex)
{
     var hoba = document.getElementsByClassName("form-control");
    
    productname.value = productcontainer[myindex].name; 
    productprice.value = productcontainer[myindex].price; 
    productcompany.value = productcontainer[myindex].company; 
    productdescription.value = productcontainer[myindex].desc;
    toggole = true; 
    globalindex = myindex; 
    btn.innerHTML="Update Product";
//    alert(globalindex)
}

function deletefun(myindex)
{ 
    productcontainer.splice(myindex ,1);
    localStorage.setItem("productcontainer" , JSON.stringify(productcontainer)); 
    display(); 
}

function updatefun()
{
//    alert(globalindex);
//    var temp = document.getElementsByClassName("form-control");

    productcontainer[globalindex].name=productname.value;   
    
    productcontainer[globalindex].price=productprice.value;
    
    productcontainer[globalindex].company=productcompany.value; 
    
    productcontainer[globalindex].desc= productdescription.value; 
    
    display(); 
}



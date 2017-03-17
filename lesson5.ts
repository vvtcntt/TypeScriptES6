for(let i=1;i<=5;i++)
{
    (function(x){

         setTimeout(function(){
        console.log(i);

        },1000);
    })(i)
   
}
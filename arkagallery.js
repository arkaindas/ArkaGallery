/* Script For Arka gallery */
var i=0;
var arr=new Array("Nice002.jpg","Nice005.jpg","Nice007.jpg","Nice009.jpg");
var arr1=new Array("Hello Every One","Pure Javascript Code","You can extend this slider","Everyone can use this");
function bgchange()
{

document.getElementById("img").innerHTML="<img src='"+arr[i]+"' width='100%' height='80%'/>";
document.getElementById("caption").innerHTML=arr1[i];
if(i==3)
{
i=-1;
}
i++;
setTimeout('bgchange()',4000);
}
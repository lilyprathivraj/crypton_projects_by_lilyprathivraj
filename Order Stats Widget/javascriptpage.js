let para=document.getElementById('para');
let up=document.getElementById('up');
let down=document.getElementById('down');


up=function(){
    para.textcontent=String(parseInt(para.textcontent)+1);
    console.log(para.textcontent);
}
down=function(){
    para.textcontent=String(parseInt(para.textcontent)-1);
}
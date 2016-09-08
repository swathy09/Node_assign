var fs=require('fs');
var d;
var content=[];
var key=[];
var last=[];
fs.readFile("datafile_15.csv",function(err,data)
{
  //console.log(data.toString());//console.log(err.stack);
  d=data.toString();
  content=d.split("\n");//console.log(content[0]);
  key=content[0].split(",");//console.log(key[1]);
  for(var i=1;i<=2;i++)
  {
    var obj={};
    var value=content[i].split(",");
    for(var p=0;p<2;p++)
    {
      obj[key[p]]=value[p];
    }
    last.push(obj);
  }
   //console.log(last);
   console.log(JSON.stringify(last));
})
//console.log(content[0]);
// var p=0;
// obj[key[p]]=value[p];
// p++;
// obj[key[p]]=value[p];
// p++;
// obj[key[p]]=value[p];
// p++;

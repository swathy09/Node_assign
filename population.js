var fs=require('fs');
var d;
var content=[];
var key=[];
var last=[];
var des=[];
var pop=[];
fs.readFile("datafile_15.csv",function(err,data)
{
  //console.log(data.toString());//console.log(err.stack);
  d=data.toString();
  content=d.split("\n");//console.log(content[0]);
  key=content[0].split(",");//console.log("key= "+key[5]);
  var j=0;
  for(var p=1;p<=20;p++)
  {
    var v=content[p].split(",");//console.log(v[5]);
    pop[j++]=v[5];
  }
  function sortFloat(a,b)
  { return b - a; }
  pop.sort(sortFloat);//console.log(pop);
  for(var i=1;i<=20;i++)
  {
    var obj={};
    var value=content[i].split(",");
    for(var p=0;p<25;p++)
    {
      obj[key[p]]=value[p];
    }
    last.push(obj);
  }
//  console.log(last[0].Population);//console.log(last);

var temp1=[];
var swat=0;
for(var t=0;t<pop.length;t++)
{
  for(var y=0;y<last.length;y++)
  {
    if(last[y].Population==pop[t])
    {
      if(last[y].CountryName!="European Union")
      {
        var obj1={};
        obj1["CountryName"]=last[y].CountryName;
        obj1["Population"]=last[y].Population;
        temp1[swat]=obj1;
        swat++;
      }
    }
  }
}

   console.log(JSON.stringify(temp1));
   var json1=JSON.stringify(temp1);
   fs.writeFile('population.json',json1,function(err)
   {
     if(err)
     {
       return console.log("error in population");
     }
     console.log("population file is written");
   })

   var temp2=[];
   var temp3=[];
   for(var p=1;p<=20;p++)
   {
     var value=content[p].split(",");
     //obj for GDP
     var obj2={};
     obj2[key[0]]=value[0];
     obj2[key[11]]=value[11];
     if(value[0]==="European Union")
     {
       temp2.push(obj2);
       temp2.pop(obj2);
     }
     else {
       temp2.push(obj2);
     }

     //obj for purchasing power
     var obj3={};
     obj3[key[0]]=value[0];
     obj3[key[23]]=value[23];
     if(value[0]==="European Union")
     {
       temp3.push(obj3);
       temp3.pop(obj3);
     }
     else {
       temp3.push(obj3);
     }
 }

     //sorting text2
     temp2.sort(function(a,b)
     {
       return a[key[11]]-b[key[11]];
     })
     temp2.reverse();

   // sorting text3
     temp3.sort(function(a,b)
     {
       return a[key[23]]-b[key[23]];
     })
     temp3.reverse();


   //console.log(JSON.stringify(temp2));
   var json2=JSON.stringify(temp2);
   fs.writeFile('gdp.json',json2,function(err)
   {
     if(err)
     {
       return console.log("error in population");
     }
     console.log("GDP file is written");
   })

   console.log(JSON.stringify(temp3));
   var json3=JSON.stringify(temp3);
   fs.writeFile('ppp.json',json3,function(err)
   {
     if(err)
     {
       return console.log("error in population");
     }
     console.log("ppp file is written");
   })

});

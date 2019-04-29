let tools=require("./index2.js");
tools.removeRepeatArray([2,6,8,9,10,20,7,8,4,1,2,2,8,6,7,4]);
console.log(tools.upsetArr([1,2,3,4,5,6,7,8,9]));
console.log(tools.randomOne([1,2,3,4]));
console.log(tools.removeArrayForValue(['test','test1','test2','test','aaa'],'test','%'));
var arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}];
console.log(tools.getOptionArray(arr,'b',true));
var brr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}];
console.log(tools.filterOptionArray(brr,'a'));
drr=[{a:10,b:2,c:9},{a:22,b:3,c:5},{a:55,b:9},{a:34,b:2,c:5},{a:4,b:5,c:7}];
console.log(tools.arraySort(drr,'a'));//a是第一排序条件，b是第二排序条件
console.log(tools.steamroller([[1,2,3],[2,3,[1,2]]]));
tools.maxArr([6,8,38,10,20,5,600,152,12]);
tools.minArr([1,2,5,70,25,3]);
tools.sumArr([1,2,3,4]);
tools.covArr([1,2,3,4]);

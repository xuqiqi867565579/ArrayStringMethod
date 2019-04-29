let tool=require("./index3.js");
tool.getEndTime("2019/7/22 16:0:0");
console.log(tool.randomNumber(200));
tool.setUrlPrmt({'a':1,'b':2});
tool.getUrlPrmt('baidu.com/write?draftId=122000011938');
tool.filterParams({a:"",b:null,c:"010",d:123},'a,b');
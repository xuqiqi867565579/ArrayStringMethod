 //1、到某一个时间的倒计时
 //getEndTime('2019/7/22 16:0:0')
 //result：{d:1,h:1,m:2,s:34}

 //2、随机返回一个范围内的数：
 //  randomNumber(5,100)
 //  result:11
 //  randomNumber(200)
 //  result:(返回一个200以内的数字)
 //  randomNumber()
 //  result:(返回一个各位数)


 //3、设置url参数
 //setUrlPrmt({'a':1,'b':2})
 //result：a=1&b=2

 //4、获取url参数
 //getUrlPrmt('baidu.com/write?draftId=122000011938')
 //result：Object{draftId: "122000011938"}

 //5、清除对象中值为空的属性
 //filterParams({a:"",b:null,c:"010",d:123})
 //Object {c: "010", d: 123}
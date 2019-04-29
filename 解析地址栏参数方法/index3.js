module.exports={
     //1、到某一个时间的倒计时
    //getEndTime('2019/7/22 16:0:0')
    //result：{d:1,h:1,m:2,s:34}
    getEndTime(str){
        let  ndate=new Date(str),
            odate=new Date();
            cdate=ndate-odate;
        let day=24*60*60*1000,
            hour=60*60*1000,
            minute=60*1000,
            sec=1000;
        let days=Math.floor(cdate/day),
            hours=Math.floor(cdate%day/hour),
            minutes=Math.floor(cdate%hour/minute),
            secs=Math.floor(cdate%minute/sec);
            // console.log(days);
            // console.log(hours);
            // console.log(minutes);
            // console.log(secs);
            function add(num){
                return num<10? "0"+num:num;
            }
            obj={};
            obj.d=add(days);
            obj.h=add(hours);
            obj.m=add(minutes);
            obj.s=add(secs);
            console.log(obj);
        
    },
    //2、随机返回一个范围内的数：
    //  randomNumber(5,100)
    //  result:11
    //  randomNumber(200)
    //  result:(返回一个200以内的数字)
    //  randomNumber()
    //  result:(返回一个各位数)
    randomNumber(min,max){
        if(min && max){
            return Math.floor(Math.random()*(max-min+1)+min)
        }else if(min && max==null){ 
            return Math.floor(Math.random()*(min-0+1)+0);
        }else if(min==null && max==null){
            return  Math.floor(Math.random()*(9-1+1)+1);
        }
     
    },

    //3、设置url参数
    //setUrlPrmt({'a':1,'b':2})
    //result：a=1&b=2
    setUrlPrmt(obj){
        let str="";
        for(var k in obj){
            str+=`${k}=${obj[k]}&`;
        }
        console.log(str.slice(0,-1));

    },
    //4、获取url参数
    //getUrlPrmt('baidu.com/write?draftId=122000011938')
    //result：Object{draftId: "122000011938"}
    getUrlPrmt(arr){
        let next=arr.split("?")[1].split("=");     
        console.log(Object.prototype.toString.call(next));
        objs={};
        lefts=next[0];
        right=next[1];
        objs[lefts]=right;
        console.log(objs);
    },
    //5、清除对象中值为空的属性
    //filterParams({a:"",b:null,c:"010",d:123})
    //Object {c: "010", d: 123}
    filterParams(strr,type){
            type.split(",").filter((eles,index)=>{
                   delete strr[eles];
                //console.log(strr[eles]);
               
            })
            console.log(strr);
            return strr;
        
    }
}
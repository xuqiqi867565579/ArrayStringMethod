module.exports={
    //1、 
    /*字符串*/
    //去除空格  type 1-所有空格  2-前后空格  3-前空格 4-后空格
    //trim('  1235asd',1)
    //result：1235asd
    trim(str,type){
        type=3;
        switch(type){
            case 1:
            console.log(str.replace(/\s+/g,""))
            return str.replace(/\s+/g,"");
            break;
            case 2:
            console.log(str.replace(/(^\s*)|(\s*$)/g, ""))
            return str.replace(/(^\s*)|(\s*$)/g, "");
            break;
            case 3:
            console.log(str.replace(/^\s*/,"0"))
            return str.replace(/^\s*/,"");
            break;
            case 4:
            console.log(str.replace(/\s*$/,""))
            return str.replace(/\s*$/,"");
            break;

        }     
    },
    //2、
    /*type
    1: 首字母大写
    2：首字母小写
    3：大小写转换
    4：全部大写
    5：全部小写
    * */
    //changeCase('asdasd',1)
    //result：Asdasd
    changeCase(str,word){
         word=4;
        switch(word){
            case 1:         
                let prev=str.slice(0,1).toUpperCase();
                let next=str.slice(1);
                    prev+=next;
                    console.log(prev);
            return  prev;
            break;
            case 2:
            let prevs=str.slice(0,1).toLowerCase();
            let nexts=str.slice(1);
                prevs+=nexts;
            console.log(prevs);
            return  prevs;
            break;
            case 3:
              let newArr=str.split("");
                newArr.forEach(function(ele,i){
                    if(/^[a-z]$/.test(ele)){
                        newArr[i]=ele.toUpperCase();
                    }else if(/^[A-Z]$/.test(ele)){
                        newArr[i]=ele.toLowerCase();
                    }
                   
                })
                console.log(newArr.join(""));
                return newArr.join("");
            case 4:
            console.log(str.toUpperCase())
            return  str.toUpperCase();   
            case 5:
            return  str.toLowerCase();

        }
    },
    //3、
    //字符串循环复制
    //repeatStr(str->字符串, count->次数)
    //repeatStr('123',3)
    //"result：123123123"
    repeatStr(str,count){
        let newA=str;
        for(var i=0;i<count;i++){
            newA+=str;
        }
        console.log(newA);
        return newA;
    },
    //4、
    //字符串替换(字符串,要替换的字符或者正则表达式（不要写g）,替换成什么)
    //ecDo.replaceAll('这里是上海，中国第三大城市，广东省省会，简称穗，','上海','广州')
    //result："这里是广州，中国第三大城市，广东省省会，简称穗，"
    replaceAll(str,prevText,nextText){
        let reg=new RegExp(prevText,"g");//在全局状态下匹配上海这个文本
        console.log(str.replace(reg,nextText));//字符串中将上海替换成广州
        //replace(被替换的内容,替换成的内容)
        return str.replace(reg,nextText);
    },
    //5、
    //字符替换*
    //replaceStr(字符串,字符格式, 替换方式,替换的字符（默认*）)
    //type: 0.依次从前面开始替换的个数  1.从最后一个开始替换的个数
    //replaceStr('1asd88465asdwqe3',[5],1,'+')        
    //replaceStr('1asd88465asdwqe3',[5],0,'+')  
    //result："1asd88465as+++++"                      
    //result："+++++8465asdwqe3"
    replaceStrr(data,num,change,text){
        //方法一
        // if(change==0){
        //     var str=data.slice(0,num);
        //     let next=data.slice(num);
        //     let prev=[];
        //     for(var i=0;i<str.length;i++){
        //         prev.push(str[i].replace(/\w/,type));

        //     }   
        //     let prevs=prev.join("");
        //         prevs+=next;
        //         console.log(prevs);

        // }else if(change==1){
        //     let len=data.length;
        //     var str2=data.slice(-num);
        //     let next=data.slice(0,len-num);
        //     console.log(next);  
        //     let nexts=[];
        //     for(var i=0;i<str2.length;i++){
        //        nexts.push(str2[i].replace(/\w/,type));
        //     }   
        //     let nextss=nexts.join("");
        //         next+=nextss;
        //         console.log(next);
               
        // }
        //方法二
         if(change==0){
           let regStr=`^\\w{${num}}`;
           let reg=new RegExp(regStr); // /^\w{5}/
          return data.replace(reg,(retext)=>{
              //reg表示正则 从头开始匹配
              //retext 表示从头开始截取的五位字符串
                let restr=text||"*";
                let newStr="";
                for(let i=0;i < retext.length;i++){
                    newStr+=restr;
                }
                let nexttext=data.slice(5);
                    newStr+=nexttext;
                    console.log(newStr);
                return newStr;
          })
         }else if(change==1){
            let regStr=`\\w{${num}}$`;
            let reg=new RegExp(regStr);
            return data.replace(reg,(retext)=>{
                //reg表示正则 从头开始匹配
                //retext 表示从头开始截取的五位字符串
                let restr=text||"*";
                let newStr="";
                for(let i=0;i < retext.length;i++){
                    newStr+=restr;
                }
                let nexttext=data.slice(5);
                    nexttext+=newStr;
                    console.log(nexttext);
                return nexttext;
            })
         }   

    },
    //6、
    //检测字符串
    //checkType('165226226326','phone')
    //result：false
    //类型：手机号，邮箱，电话，数字，英文，中文，大写，小写
    checkType(str, type) {
         switch(type){
             case "phone":
             {
                 let  reg=/^1[3-9]\d{9}$/;
                 return reg.test(str);
             }
             case "email":
             {
                 let  reg=/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
                 return reg.test(str);
             }
             case "tel":
             {
                 let  reg=/\d{3}-\d{8}|\d{4}-\d{7}/;
                 console.log(reg.test(str));
                 return reg.test(str);
             }
             case "number":
             {
                 let  reg=/\d+/;
                 return reg.test(str);
             }
             case "english":
             {
                 let  reg=/[a-zA-Z]+/;
                 return reg.test(str);
             }
             case "chinese":
             {
                 let  reg=/[\u4e00-\u9fa5]/;
                 return reg.test(str);
             }
         }  
         
    },
     //7、
    //检测密码强度
    //checkPwd('12asdASAD')
    //result：3(强度等级为3)
    //0：小于6位数（统一返回0）
    //1、全部为数字
    //2、数字加小写字母
    //3、数字+小写字母+大写字母   
    checkPwd(str){
        if(str.length<6){
            console.log(0);
            return 0;
        }else if(/^\d+$/g.test(str)){
            console.log(1);
            return 1;
        }else if(/^[0-9a-z]+$/.test(str)){
            console.log(2);
            return 2;
        }else if(/^[0-9a-zA-Z]+$/.test(str)){
            console.log(3);
            return 3;
        }

    },  
    //8、
    //随机码
    //count取值范围2-36

    //randomWord(10)
    //result："2584316588472575"

    //randomWord(14)
    //result："9b405070dd00122640c192caab84537"

    //randomWord(36)
    //result："83vhdx10rmjkyb9"
    randomWord(num){
        let random=Math.random();
        let text=random.toString(num).substr(2)
       console.log(text);

    },
    //9、
    //查找字符串
    //strSplit: 出现在字符串里的次数
    //var strTest='sad44654blog5a1sd67as9dablog4s5d16zxc4sdweasjkblogwqepaskdkblogahseiuadbhjcibloguyeajzxkcabloguyiwezxc967'
    //countStr(strTest,'blog')
    //result：6
    strSplit(str,num){
           let arr=str.split(num);
            //将字符串转化为数组 用要求的数进行切合 得出剩余的数组
            //[ 'sad44654','4s5d16zxc4sdweasjk','wqepaskdk','ahseiuadbhjci','uyeajzxkca','uyiwezxc967' ]
            //因为数组的长度为7,说明是以6个分隔出来的  所以得出此字母出现的次数为6
           console.log(arr);
           if(arr.length>0){
               count=arr.length-1;
           }
           console.log(count);
           return count;
    },
    //10、
    //格式化处理字符串
    //ecDo.formatText('1234asda567asd890')
    //result："12,34a,sda,567,asd,890"
    //ecDo.formatText('1234asda567asd890',4,' ')
    //result："1 234a sda5 67as d890"
    //ecDo.formatText('1234asda567asd890',4,'-')
    //result："1-234a-sda5-67as-d890"
    formatText(data,num,type){
        if(num=="" && type==""){
            let len=data.length;
            let arr=data.split("").reverse();
            let count=Math.ceil(data.length/3);
            len=3, crr=[];
            for(var i=0;i<count;i++){
                let brr=arr.slice(i*3,i*3+3);
               crr.push(brr.reverse().join(""));       
            }
            console.log(crr.reverse());
        }else if(num==4 && type==""){
            let str=data.split("");
            let newStr=str.reverse().join("");
            let len=newStr.length;
            let count=Math.ceil(len/num);
            let crr=[];
            for(var i=0;i<count;i++){
               crr.push(newStr.slice(i*num,i*num+num));
               
            }
            console.log(crr.reverse());
        }
        else if(num==4 && type=="-"){
            let str=data.split("");
            let newStr=str.reverse().join("");
            let len=newStr.length;
            let count=Math.ceil(len/num);
            let crr=[];
            for(var i=0;i<count;i++){
               crr.push(newStr.slice(i*num,i*num+num));
               
            }
            console.log(crr.reverse().join("-"));
        }
    },
    //11、
    // 找出最长单词 (Find the Longest word in a String)
    // longestWord('Find the Longest word in a String')
    // result：Longest
    // longestWord('Find|the|Longest|word|in|a|String','|')
    // result：Longest
    longestWord(str){
        let brr=str.split(" ");
        for(var i=0;i<brr.length;i++){
            for(var j=i+1;j<brr.length;j++){
                let prev=brr[i];
                let next=brr[j];        
                if(brr[i].length>brr[j].length){
                     brr[i]=next;
                     brr[j]=prev;   
                }
            }
           
        }
       console.log(brr[brr.length-1]);
        return brr;
    },
    //12、
    //句中单词首字母大写 (Title Case a Sentence)
    //ecDo.titleCaseUp('this is a title')
    //"This Is A Title"
    titleCaseUp(str){
        var arr=[];
        str.split(" ").forEach(function(ele,i){
            let first=ele.slice(0,1).toUpperCase();
            let next=ele.slice(1);
            first+=next;
            arr.push(first);
        });
        console.log(arr.join(" "));

    },
}

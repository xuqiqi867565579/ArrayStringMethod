module.exports={
//数组操作：
//1、数组去重
// removeRepeatArray(arr)
// result:[]
// removeRepeatArray(arr){
//     let newArr=[];
//     arr.forEach(function(ele,i){
//         if(!newArr.includes(ele)){
//             newArr.push(ele)
          
//         }
//     })
//     console.log(newArr);
//     return newArr;
// }
    removeRepeatArray(arr){
        var  newArr=[];
        for(let  i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]==arr[j]){
                j=++i;        
                }
            }
            newArr.push(arr[i]);
        }
        console.log(newArr);
        return newArr;
        // var  result = [];
        // console.log(arr);
        // for (let i = 0; i < arr.length; i++) {
        //     for (let j = i + 1; j < arr.length; j++) {
        //         if (arr[i] == arr[j]) {
        //             j = ++i
        //         }
        //     }
        //     result.push(arr[i]);
        // }
        // console.log(result);
        // return result;
    },

//2、数组顺序随机********
// upsetArr(arr)
// result:[]
    upsetArr(arr){
        return arr.sort((a,b)=>{
            // console.log(Math.random() -0.5);
            return Math.random() -0.5;
        })  
        console.log(arr);
    },
   
//3、从数组中随机获取元素
//randomOne([1,2,3,4])
    randomOne(brr){
       return brr.sort((a,b)=>{
           console.log(Math.floor(Math.random()*brr.length));
            return brr[Math.floor(Math.random()*brr.length)];
        })
    },

//4、删除值为'val'的数组元素
//removeArrayForValue(['test','test1','test2','test','aaa'],'test','%')
//result：["aaa"]   带有'test'的都删除
//removeArrayForValue(['test','test1','test2','test','aaa'],'test')
//result：["test1", "test2", "aaa"]  //数组元素的值全等于'test'才被删除
removeArrayForValue(arr,text,type){
    //type=false;
    //filter过滤
    return arr.filter((ele)=>{
       return type?ele.indexOf(text)<0:ele!==text;

    })
},

//5、获取对象数组某些项
//var arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}]
//getOptionArray(arr,'a,c')
//result：[{a:1,c:9},{a:2,c:5},{a:5,c:underfind},{a:4,c:5},{a:4,c:7}]
//getOptionArray(arr,'b',true)
//result：[2, 3, 9, 2, 5]
getOptionArray(arr,num,type){
    if(type){        
        return arr.map((ele)=>{
            let nrr=num.split(",");
            nrr.forEach((k)=>{
               objs=ele[k];
            })
            return objs;
        })
    }else{
        return arr.map((ele,i)=>{
            var  newArr=num.split(",");
            var obj={};
            console.log(newArr);
            newArr.forEach((j)=>{
                obj[j]=ele[j];  
            })
            return obj;
        })
    }   
    
   
},

//6、排除对象数组某些项
//var arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}]
//filterOptionArray(arr,'a')
//result：[{b:2,c:9},{b:3,c:5},{b:9},{b:2,c:5},{b:5,c:7}]
//filterOptionArray(arr,'a,c')
//result：[{b:2},{b:3},{b:9},{b:2},{b:5}]
filterOptionArray(arr,type){
   return arr.map((ele)=>{
        type.split(" ").forEach((k)=>{
            console.log(ele[k])
          delete ele[k];
        })
        return ele;
    })
  
},
//7、对象数组的排序
//var arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}]
//ecDo.arraySort(arr,'a')a是第一排序条件，b是第二排序条件
//result：[{"a":1,"b":2,"c":9},{"a":2,"b":3,"c":5},{"a":4,"b":2,"c":5},{"a":4,"b":5,"c":7},{"a":5,"b":9}]
    arraySort(arr,type){
        return arr.sort((a,b)=>{
            return a[type]>b[type];
        })

    },

//8、数组扁平化(concat,(push,apply))
// steamroller([[1,2,3],[2,3,[1,2]]])
    //扁平化 是将多维数组转化为一维数组
    steamroller(arr){
        let newArr=[];
        function every(everyArr){       
            everyArr.forEach((ele)=>{
                if(Array.isArray(ele)){
                    every(ele)
                }else{
                    newArr.push(ele);
                }
            })
        }
        every(arr);
        console.log(newArr);
        return newArr;
    },

//数值数组
//3、找数组中最大值
//maxArr(arr)
//result:4
    maxArr(arr){
        console.log(Math.max.apply(Math,arr));
    },


//4、找数组中最小值
//minArr(arr)
//result:4
    minArr(arr){
        console.log(Math.min.apply(Math,arr));
    },

//5、求数组中值的和
//sumArr([1,2,3,4])
    sumArr(arr){
        let len=arr.length;
        let str=0;
        for(var i=0;i<arr.length;i++){
            str+=arr[i]*1;
        }   
       console.log(str);
    },
//6、数组平均值
// covArr([1,2,3,4])
    covArr(arr){
        let len=arr.length;
        let str=0;
        for(var i=0;i<arr.length;i++){
            str+=arr[i]*1;
        }   
       let mid=str/len;
       console.log(mid);
    }
}
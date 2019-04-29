//数组操作：

//1、数组去重
// removeRepeatArray(arr)
// result:[]

//2、数组顺序随机
// upsetArr(arr)
// result:[]

//3、从数组中随机获取元素
//randomOne([1,2,3,4])

//4、删除值为'val'的数组元素
//removeArrayForValue(['test','test1','test2','test','aaa'],'test','%')
//result：["aaa"]   带有'test'的都删除
//removeArrayForValue(['test','test1','test2','test','aaa'],'test')
//result：["test1", "test2", "aaa"]  //数组元素的值全等于'test'才被删除


//5、获取对象数组某些项
//var arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}]
//getOptionArray(arr,'a,c')
//result：[{a:1,c:9},{a:2,c:5},{a:5,c:underfind},{a:4,c:5},{a:4,c:7}]
//getOptionArray(arr,'b',true)
//result：[2, 3, 9, 2, 5]


//6、排除对象数组某些项
//var arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}]
//filterOptionArray(arr,'a')
//result：[{b:2,c:9},{b:3,c:5},{b:9},{b:2,c:5},{b:5,c:7}]
//filterOptionArray(arr,'a,c')
//result：[{b:2},{b:3},{b:9},{b:2},{b:5}]

//7、对象数组的排序
//var arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}]
//ecDo.arraySort(arr,'a,b')a是第一排序条件，b是第二排序条件
//result：[{"a":1,"b":2,"c":9},{"a":2,"b":3,"c":5},{"a":4,"b":2,"c":5},{"a":4,"b":5,"c":7},{"a":5,"b":9}]


//8、数组扁平化(concat,(push,apply))
// steamroller([[1,2,3],[2,3,[1,2]]])


//数值数组
//3、找数组中最大值
//maxArr(arr)
//result:4
//4、找数组中最小值
//minArr(arr)
//result:4

//5、求数组中值的和
//sumArr([1,2,3,4])
//6、数组平均值
// covArr([1,2,3,4])
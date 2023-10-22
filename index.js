let arr1=[
    {name:"ahmed",age:30},
    {name:"yasser",age:28},
    {name:"jarie",age:35},
    {name:"svein",age:61}
]
let arr2=[]

arr1.forEach(()=>{
    arr2=arr1.filter((index)=>index.age>28)
})
arr2.forEach((e)=>{
    console.log(e.name,e.age)
})
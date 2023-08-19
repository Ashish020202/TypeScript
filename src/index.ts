// 1. Typescript is a superset of JS
// 2. Allows Static Typing
// 3. Makes your code more strict

let age: number =20;
if(age<49)
  age +=10;

  // typescript builtin datatypes
  // js number ,boolean , null , undefined , object
  // any , unknown , never , unknown , tuple

  let marks  = 199;
  let course = "ts";
  let is_good = true;

  // avoid using any as a best practice as we use ts for type safety
  let any ;

  // array 
  let numbers: number[] = [];
  let digit = [1,2,4];
  digit.forEach(n=>n.toString)  //here we can see all the properties and method of number objects because the editor knows the type of n that offers code complition

  // tuple
  let user : [number,string] = [1,"ashish"]

  // enum : represents list of related constants
  enum size {small=1,medium,large}  //medium 2 //large 3

// Typescript code never run in browser, rather it is converted/compiled/transpiled into JavaScript, which eventually runs in browser. Thus, only JavaScript runs at the end.

// Function

// Function : We have to clearly mention data type of argument and what function returns.

  function addnumber(a:number,b:number):number{
    return a+b;
  }

  function calculate( a: number, b: number, type: "sum" | "sub" | "div" | "mul"): number{
    if(type === 'sum') return a + b;
    if(type === 'sub') return a - b;
    if(type === 'mul') return a * b;
    if(type === 'div') return a / b;
    return -1
  }

  const ans =addnumber(2,3);
  console.log(ans);
  
//   Interface is like defining the shape of a custom data type.

//    Interfaces can 

// - use other interfaces
// - extend interfaces
// - can be implemented by classes.

  interface persontype{
    name:string,
    age:number
  }

  function greet(person:persontype):string{
    return "hello"+person.name+"your age is"+person.age;
  }
  const ans2 = greet({
    name:"ashish",
    age:16
  })
  console.log(ans2);

  // INTERFACES

  interface humantypes{
    name:string,
    gender:string,
    age:number
    // call greet
    greet():string
  }

  class human implements humantypes {
    // have to define here
    name:string;
    gender:string;
    age:number;

    constructor( name:string,
      gender:string,
      age:number){
        this.name=name;
        this.gender=gender;
        this.age=age;
      }

      greet(): string {
          return "hii"+this.name;
      }
  }
  
  
  // type
  type animalsType ={
      name:string,
      age:number
  }

  function animals(prop:animalsType){
    return prop.name+prop.age;
  }

  console.log(animals({
    name:"dog",
    age:10
  }));
  
  // enum
  enum arithmetic{
    Add,
    sub,
    mul,
    div
  }
  
 

                                

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
  digit.forEach(n=>n.toString)  //here we can see all the properties and method of number objects 
                                //because the editor knows the type of n that offers code complition
                                
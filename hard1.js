function realType(ip){
  if (ip==null)
  return 'null';
  else if(Array.isArray(ip))
  return 'array';
  else
	return typeof ip;
}


console.log(realType(1));
console.log(realType('a'));
console.log(realType(true));
console.log(realType([]));
console.log(realType(null));
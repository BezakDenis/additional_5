module.exports = function check(str, bracketsConfig) {

  let stack = [];
  let A = false;
  let i,j;
  
  if(!str) return false;

  str.split('').forEach((elem, index) => {

	for(i = 0; i < bracketsConfig.length; i++){
		for(j = 0; j < bracketsConfig[i].length; j++){
			if(elem === bracketsConfig[i][j]){
				if(!stack[0]){
					stack.push(elem);
				}
				else {
					if((j && (stack[stack.length - 1] === bracketsConfig[i][j - 1])) || 
					((bracketsConfig[i][j] === bracketsConfig[i][j + 1]) && (bracketsConfig[i][j] === stack[stack.length - 1])))
						stack.pop();
					else { 
						stack.push(elem);
					}
				}
				A = true;
				break;
			}
		}
		if(A) break;
	}
	A = false;

  });

  return stack.length ? false : true;
}
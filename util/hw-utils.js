// You don't need to touch this file ^_^
var homeworkCount = 0;
var problemCount = 0;
window.startHomework = function(){
  console.log(`*********************************** Running Homework #${homeworkCount++} ****************************************`);
}
window.problem = function(name, fn){
  console.log(`> Running Problem "${name}":`);

  fn();

  console.log('\n');
  problemCount++;
}

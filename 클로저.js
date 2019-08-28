// var name = 'song';
// function log()
// {
//   console.log(name);
// }
//
// function wrapper()
// {
//   var name = 'song';
//   log();
// }
// wrapper();

for (var i  = 0; i < 100; i++)
{
  setTimeout(function() { // 0.00000001초
    console.log(i); // 이미 i는 100이 되어 있음.
  }, i*1000); // 0초뒤에 i를 찾음
}
/*console.log(i);의 i는 함수 안의 변수기 때문에 실행 될 때 값이 결정됨.
즉, 이 코는 i가 1초뒤에 실행되는데 그제서야 console.log(i)의 i를 찾게 되는데,
컴퓨터는 계산이 빨라 for문을 통해 i는 이미 100이 된 상태로 바뀜.
setTimeout때문에 어쩔 수 없이 차례대로 실행 되는 것일 뿐임.*/
/*쉽게 순서를 말하자면 */
setTimeout(function() {
  console.log(i); // 100
}, 1*1000)
setTimeout(function() {
  console.log(i); // 100
}, 2*1000)
/*--------------------*/
setTimeout(function() {
  console.log(i); // 100
}, 99*1000)

/* 이것을 해결하기 위해 */

for (var i  = 0; i < 100; i++)
{
  function 클로저(j) // j가 0
  {
  setTimeout(function() {  //j는 죽었다 깨어나도 38번째 줄의 j --> 0
    console.log(j);
  }, j*1000);
 }
 클로저(i);
}
/*로 쓰면 된다. 이것의 실행 순서는*/

function 클로저(j) // j가 0
{
setTimeout(function() { // 0.00000001초
  console.log(j); // 0
}, 0*1000);
}
클로저(0);

function 클로저(j) // j가 1
{
setTimeout(function() {
  console.log(j); // 1
}, 1*1000); //
}
클로저(1);

function 클로저(j)
{
setTimeout(function() {
  console.log(j);
}, 2*1000);
}
클로저(2);

function 클로저(j)
{
setTimeout(function() {
  console.log(j);
}, 3*1000);
}
클로저(3);
/*--------------------------------*/
function 클로저(j)
{
setTimeout(function() {
  console.log(j);
}, 99*1000);
}
클로저(99);

/*참고로 매개 변수의 j는 var로 선언을 하지 않았지만 쓸 수 있는 이유는 그 자체가 변수이기 setTimeout때문에 */
function 클로저(j)
{
setTimeout(function() {
  var j = 0;
  console.log(j);
}, 99*1000);
}
클로저(99);
/*과 같은 셈이다. */

/* 추가로 이런식으로 했을 때 즉시 실행된다.*/
for (var i  = 0; i < 100; i++)
{
  (function 클로저(j) // j가 0
  {
  setTimeout(function() {  //j는 죽었다 깨어나도 38번째 줄의 j --> 0
    console.log(j);
  }, j*1000);
})(i);
}

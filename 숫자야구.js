var 바디 = document.body;

var 숫자후보;
var 숫자배열;

function 숫자뽑기() {
  숫자후보 = [1,2,3,4,5,6,7,8,9];
  숫자배열 = [];
  for(var i = 0; i < 4; i++)
  {
    var 뽑은것 = 숫자후보.splice(Math.floor(Math.random()*(9-i)), 1)[0]; // shift는 순서대로 1,2,3,4로 뽑는것이고, pop은 거꾸로 9,8,7,6으로 뽑음, splice는 아무거나 뽑음
    숫자배열.push(뽑은것); // 넣는 순서가 다름 shift가 1,2,3,4로 뽑으면 4,3,2,1로 뽑음
  }
}


숫자뽑기();
console.log(숫자배열);

var result = document.createElement('h1');
바디.append(result);
var 폼 = document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
입력창.maxLength = 4;
폼.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '입력!';
var 틀린횟수 = 0;
var 남은횟수 = 4;
var 기회 = document.createElement('h2');
바디.append(기회);
폼.append(버튼);

폼.addEventListener('submit',function 비동기(e) // 엔터 쳤을 때
  {
    e.preventDefault();
    var 답 = 입력창.value;
    if (답 === 숫자배열.join('')) // 답이 맞으면
    {
        result.textContent = '홈런';
        기회.textContent = 틀린횟수+"번 시도해서 맞추셨습니다.^^"
        입력창.value='';
        숫자뽑기();
        틀린횟수 = 0;
    }
    else // 답이 틀리면
    {
      var 답배열 = 답.split('');
      var 스트라이크 = 0;
      var 볼 = 0;
      틀린횟수 += 1;
      남은횟수 -= 1;
      if(틀린횟수 > 4) // 4번 넘게 틀렸으면
      {

        result.textContent = "4번 넘게 틀려서 실패! 답은" + 숫자배열.join(',') + "였습니다!";
        입력창.value = '';
        입력창.focus();
        숫자뽑기();
        틀린횟수 = 0;
      }
      else {
        for (var i = 0; i < 3; i++)
        {
          if(Number(답배열[i]) === 숫자배열[i]) //같은 자리인지 확인
          {
            스트라이크++;
          }
          else if(숫자배열.indexOf(Number(답배열[i]))> -1) // 같은 자리는 아니지만, 숫자가 겹치는지 확인
          {
            볼++;
          }
        }
        기회.textContent = "기회가" + 남은횟수 + "남았습니다.";
        result.textContent = 스트라이크 + "스트라이크" + 볼 + "볼입니다.";
        입력창.value='';
        입력창.focus();
      }

    }
  });

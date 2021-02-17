### Q1.

- join()과 toString()의 차이: join의 인자로 separator가 들어가서 다양한 형태의 string을 만들 수 있다.

  - join(separator?: string): string;

  - toString(): string;

<br>

### Q4.

```javascript
const array = [1, 2, 3, 4, 5];
let shiftedArray = array;
for (let i = 0; i < 2; ++i) {
	shiftedArray.shift();
}
console.log(array);
```

```
예측한 결과: [1, 2, 3, 4, 5]
실제 결과: [3, 4, 5]
```

- 얕은 복사 vs 깊은 복사
  - 얕은 복사: 참조  /  깊은 복사:  복사 + 참조

- shift(); 앞에 있는 문자 제거
- 배열 변형: splice()

<br>

// array 변형

```javascript
const result = array.splice(0, 2);
console.log(result);
console.log(array);
```

```
[1, 2]
[3, 4, 5]
```

<br>

// array 유지

```javascript
const result = array.slice(2, 5);
console.log(result);
console.log(array);
```

```
[3, 4, 5]
[1, 2, 3, 4, 5]
```

원하는 곳만 받아서 사용하고 싶을 때

<br>

### Q5.

나중에 호출하는 함수라서 콜백함수라고 불린다.

##### 콜백함수의 형태(=>)가 어렵다

```javascript
const result = students.find(function (student, index) {
    	return student.score === 90;
	});
  console.log(result);
}
```

1. index는 쓰지 않으니까 지운다.
2. function 대신 =>

```javascript
 const result = students.find((student) => {
    return student.score === 90;
  });
 console.log(result);
```

3. 함수가 한 줄이면 {}, return, ;을 지울 수 있다.

<br>

// function (student)의 student는 함수의 인자일 뿐이다. 다른 문자로 바꿔도 문제가 없다. find를 호출할 때 콜백함수를 쓰는데, obj로 student가 들어간 것이다.

<br>

### Q6.

```javascript
const result = students.filter((student) => student.enrolled);
console.log(result);
```

등록된 학생이면 result에 들어간다.

// result는 배열이니까 []로 선언하고 사용해야 한다고 생각했는데 바로 초기화를 했다.

<br>

*Returns the elements of an array that meet the condition specified in a callback function.*

// filter()가 배열을 리턴하기 때문에 result는 배열이 될 수 있다.
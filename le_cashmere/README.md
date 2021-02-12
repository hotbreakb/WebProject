## Purpose

To clone a reactive website
URL: http://lecashmere.co.kr/ (http://rwdb.kr/page/2/)

---

## To do list

- [ ] .container .main-grid 작은 화면일 때 가운데 정렬
      justify-content: center;를 쓰면 div를 가운데 정렬할 수 있을 거라고 생각했는데 안 된다.

```
@media screen and (max-width: 768px) {
  .main-grid {
    justify-content: center;
    flex-direction: column;
  }

  .main-grid .col {
    justify-content: center;
    padding: var(--padding);
    width: 45vh;
  }

  .main-grid .col .desc {
    font-size: 13px;
    letter-spacing: 0.7px;
    line-height: 1.5;
  }
}
```

- [ ] navbar 수정하기:
      분명 다 만들었다고 생각했는데 다시 보니까 이상해졌다.
      <br>
- [x] main-img cover로 보이게 수정하기 (2021.02.15 15:32):
      이것도 됐었는데 고치다보니까 바뀌어있다.
      <br>
- [ ] container 안에 있는 사진 크기 줄이기:
      작은 화면일 때만 고려하다 보니 신경쓰지 못했다.
      <br>
- [ ] shop-img-box 안에 있는 사진 간격 없애기
      <br>
- [ ] shop-img-box hover 효과 만들기
      <br>
- [ ] footbar 만들기:
      위부터 만들고 싶어서 안 만들었다.
      <br>
- [ ] main-img 슬라이드 만들기:
      js가 필요할 것 같다.

<br>
<br>
<br>

## Try Again

#### 1. Button in picture

```
<a href="http://lecashmere.co.kr/2020/09/04/brand-film/">
    <div class="read-more-btn">read more</div>
    <div class="thumbnail" style="background-image: url('Image/Img4.jpg')" ></div>
</a>
```

I tried to put the picture as 'background', but the image is not showing.

[Try] To solve this, I put a button tag inside the image.

- HTML

```
<div class="main-journal">
    <div class="box">
        <img src="Image/Img4.jpg" alt="" />
        <button class="read-more-btn" onclick="location.href = 'http://lecashmere.co.kr/2020/09/04/brand-film/' ">
        read more
        </button>
        <div class="title">20 FW special edition</div>
        <div class="desc">letter from le cashmere</div>
    </div>
    ...
```

- CSS

```
.main-journal .box {
  position: relative;
  /* width: 50%; */
}

.main-journal .box .read-more-btn {
  /* display: none; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: var(--button-color);
  color: white;
  font-size: 14px;
  padding: 18px 45px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 3px;
}
```

The problem is that the navbar is hidden behind the picture.

![prob1](https://user-images.githubusercontent.com/64337152/107729378-17cd7580-6d34-11eb-9229-8cc053e9945e.png)

So I will delete the 'position: relative;' and later recreate it without using the 'button tag'.

---

## My two cents

1. It's hard to care a small unit.
2. It's too long to use only css when designing.
3. It takes a long time to decorate from beginning to end.

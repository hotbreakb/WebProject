## Purpose

To clone a reactive website
URL: http://lecashmere.co.kr/

Reference:
http://rwdb.kr/page/2/
https://pixabay.com/ko/

- The photos used have nothing to do with the content.
- I used a non-copyright photo.

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

- [x] navbar_list 수정하기 (21/02/16 11:05)
- [x] main-img cover로 보이게 수정하기 (21/02/15 15:32)
- [x] container 안에 있는 사진 크기 줄이기 (21/02/15 21:23)
- [ ] shop-img-box 안에 있는 사진 간격 없애기 (21/02/16 12:37)
      해결했는데 다시 생겼음. 이해를 못하겠음 아아악
- [ ] shop-img-box hover 효과 만들기
- [ ] footbar 만들기:
      위부터 만들고 싶어서 안 만들었다.
- [ ] main-img 슬라이드 만들기:
      js가 필요할 것 같다.

- [ ] main-journal 작은 화면에서 왼쪽으로 붙는 거 수정하기: shop-img-box랑 똑같이 css를 만들어도 바뀌지 않는다.

- [x] shop-img-box에서 두 번째 줄에 있는 table의 간격 줄이기 & 비율 바꾸기 (21/02/16 01:16, 21/02/16 11:20)

<br>
<br>
<br>

## Try Again

#### 1. Button in Picture

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

<br>

#### 2. Shrinking Title on Small Screen

I put the title in exactly the same way.
![prob1](https://user-images.githubusercontent.com/64337152/107838369-eb276580-6de8-11eb-9ded-7b372da9b94b.png)

But if the screen gets smaller, so does the title.
![prob2](https://user-images.githubusercontent.com/64337152/107838366-e95da200-6de8-11eb-9841-a532027928be.png)

I tried to modify the padding and font-size of the title, but failed, so I decided to put the \_ in another way.
![prob3](https://user-images.githubusercontent.com/64337152/107838368-eb276580-6de8-11eb-897b-574c49891eea.png)

The title is an image on the actual site, it is reflected maybe.

---

## Difficulties

1. Caring a small unit.
2. Using only css when designing.
3. Decorating from beginning to end.
4. Finding the center
5. Consideration of screen size
6. Different components for different tags

---

## To study

1. vw VS vh
2. display: flex;
3. align-items: center;
4. float: right;

---

## Plan

1. clone other site with someone

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

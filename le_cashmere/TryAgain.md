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

<br>

#### 3. Transform: scale; not increase consistently

I waana make 'Expansion'.
![prob5](https://user-images.githubusercontent.com/64337152/107840692-49a81000-6df8-11eb-8179-fe87c73e97c6.png)

I put 'overflow: hidden;' in because I wanted the size of the picture to be constant, but it didn't work out.

![prob6](https://user-images.githubusercontent.com/64337152/107840696-4c0a6a00-6df8-11eb-82f0-e8083cb1c681.png)

#### 4. Pictures coming up above Navbar

![image](https://user-images.githubusercontent.com/64337152/107854992-10f15080-6e63-11eb-86af-51b5a980bc26.png)

- CSS

```
.shop-img-box .box img {
  transform: scale(1);
  transition: all 0.3s ease-in-out;
}

.shop-img-box .box img:hover,
.shop-img-box .row img:hover {
  transform: scale(1.1);
}

.shop-img-box .row {
  overflow: hidden;
}

.shop-img-box .row img {
  transform: scale(1);
  transition: all 0.3s ease-in-out;
}
```

I can solve this problem if I erase the transition.

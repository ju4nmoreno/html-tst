function $(selector) {
  return document.querySelector(`${selector}`);
}

const $card = $(".card"),
  $cardTitle = $(".card-title"),
  $cardSubtitle = $(".card-subtitle"),
  $cardShine = $(".card-shine"),
  $cardShadow = $(".card-shadow"),
  currentMousePos = { x: 0, y: 0 },
  mouseFromCenter = { x: 0, y: 0 };

document.addEventListener("mousemove", (event) => {
  const wHeigth = window.innerHeight,
    wWidth = window.innerWidth;

  currentMousePos.x = event.pageX;
  currentMousePos.y = event.pageY;
  mouseFromCenter.x = currentMousePos.x - wWidth / 2;
  mouseFromCenter.y = currentMousePos.y - wHeigth / 2;

  const around1 =
      -1 * (((currentMousePos.y * 100) / wHeigth) * 0.2 - 10) + "deg",
    around2 = 1 * (((currentMousePos.x * 100) / wWidth) * 0.2 - 10) + "deg",
    trans1 = ((currentMousePos.x * 100) / wHeigth) * 0.3 + "px",
    trans2 = ((currentMousePos.y * 100) / wHeigth) * 0.3 + "px",
    dy = event.pageY - wHeigth / 2,
    dx = event.pageX - wWidth / 2,
    theta = Math.atan2(dy, dx),
    angle = (theta * 180) / Math.PI - 90,
    mousePositionX = (currentMousePos.x / wWidth) * 100;

  $cardShine.setAttribute(
    "style",
    `background: linear-gradient(${angle}deg, rgba(255,255,255, ${
      (currentMousePos.y / wHeigth) * 0.7
    }) 0%, rgba(255,255,255,0) 80%`
  );

  $card.setAttribute(
    "style",
    `transform: translate3d(${trans1}, ${trans2}, 0) scale(1) rotateX(${around1}) rotateY(${around2}); background-position: ${mousePositionX}% ${
      (currentMousePos.y / wHeigth) * 50
    }%`
  );

  $cardShadow.setAttribute(
    "style",
    `transform: scale(.9,.9) translateX(${
      mouseFromCenter.x * -0.02 + 12
    }px) translateY(${mouseFromCenter.y * -0.02 + 12}px) scale(1) rotateY(${
      (mouseFromCenter.x / 25) * 0.5
    }deg) rotateX(${mouseFromCenter.y / -25}deg)`
  );

  $cardTitle.setAttribute(
    "style",
    `transform: translateX(${(mouseFromCenter.x / 25) * 0.7}px) translateY(${
      (mouseFromCenter.y / 25) * 1.15
    }px) translateZ(10px)`
  );

  $cardSubtitle.setAttribute(
    "style",
    `transform: translateX(${(mouseFromCenter.x / 25) * 0.7}px) translateY(${
      (mouseFromCenter.y / 25) * 1.15
    }px) translateZ(60px)`
  );
});

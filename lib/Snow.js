export default class Snow {
  #icon;
  #snowPlowImage;

  #countSnowflake;
  #snowBallsLength;
  #snowBallIterations;

  #snowBallupNum;
  #snowBallIterationsInterval;
  #clearSnowBalls;
  #reset;

  #showSnowBalls;
  #showSnowBallsIsMobile;
  #showSnowflakes;

  #$snowflakesBox;
  #$snowBallBox;
  #$layer;
  #$snowBallWrap;
  #$snowBall;
  #$snowPlow;

  #windowInnerWidth = window.innerWidth;

  constructor(config = {}) {
    const {
      iconColor = '#a6e7ff',
      iconSize = 15,
      icon = `<svg fill="${iconColor}" xmlns="http://www.w3.org/2000/svg" width="${iconSize}px" height="${iconSize}px" viewBox="0 0 50 50"><path d="M24.97-.03A2 2 0 0 0 23 2v4.17l-1.9-1.89a2 2 0 0 0-1.43-.6 2 2 0 0 0-1.39 3.43L23 11.83v9.7l-8.4-4.85-1.74-6.46a2 2 0 0 0-1.9-1.51A2 2 0 0 0 9 11.25l.7 2.6-3.64-2.1a2 2 0 0 0-.95-.28 2 2 0 0 0-1.05 3.75l3.63 2.1-2.57.69a2 2 0 1 0 1.04 3.86l6.43-1.72L21.02 25l-8.41 4.85-6.4-1.72a2 2 0 0 0-.6-.07A2 2 0 0 0 5.18 32l2.53.67-3.64 2.1a2 2 0 1 0 2 3.47l3.63-2.1-.67 2.5a2 2 0 1 0 3.87 1.04l1.7-6.36L23 28.5v9.68l-4.68 4.68a2 2 0 1 0 2.83 2.83L23 43.83V48a2 2 0 1 0 4 0v-4.17l1.88 1.87a2 2 0 1 0 2.82-2.83l-4.7-4.7v-9.7l8.4 4.85 1.74 6.46A2 2 0 1 0 41 38.75l-.7-2.6 3.64 2.1a2 2 0 1 0 2-3.47l-3.64-2.1 2.56-.68a2 2 0 0 0-.5-3.94 2 2 0 0 0-.54.07l-6.41 1.72-8.38-4.83 8.43-4.86 6.38 1.7a2 2 0 1 0 1.03-3.85l-2.5-.68 3.57-2.05a2 2 0 0 0-.91-3.75 2 2 0 0 0-1.1.28l-3.64 2.1.7-2.6a2 2 0 0 0-2.03-2.54 2 2 0 0 0-1.84 1.51l-1.73 6.46L27 21.57v-9.74l4.72-4.72a2 2 0 1 0-2.83-2.83L27 6.18V2a2 2 0 0 0-2.03-2.03z"/></svg>`,
      snowPlowImage = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="63.793"><path fill="none" d="M100 0H78.448v21.552H100V0Z"/><path fill="#A8D6DA" fill-rule="evenodd" d="M48.276 32.759v1.724h13.793v-12.07H50L48.276 32.76Z"/><path fill="#C0F5F9" fill-rule="evenodd" d="M50 32.759h12.069v-8.621H51.724L50 32.758Z"/><path fill="#EBEBEB" d="M68.966 22.414v1.724h27.586v-1.724l-5.81-6.03a10.776 10.776 0 0 0-15.243-.276l-6.533 6.306Z"/><path fill="#C38325" fill-rule="evenodd" d="M70.69 37.931v1.724h24.138v-1.724l3.448-6.896v-8.621H67.24v8.62l3.449 6.897Z"/><path fill="#DA922A" fill-rule="evenodd" d="M48.276 32.759 32.759 37.93h-1.724v13.793H50V32.76h-1.724ZM100 37.931H60.345v18.966H100V37.93Z"/><path fill="#EA9D2D" fill-rule="evenodd" d="M98.276 22.414H67.24v8.62h31.035v-8.62ZM62.069 32.759H48.276v24.138h13.793V32.759Z"/><path fill="#F7F7F7" d="M0 62.431v1.362h25.862V53.448a6.897 6.897 0 0 0-12.911-3.373 5.174 5.174 0 0 0-5.994 5.895l-1.472.196A6.32 6.32 0 0 0 0 62.43Z"/><path fill="#EBEBEB" d="M.356 63.793h25.506v-6.896a6.897 6.897 0 0 0-12.911-3.374 5.174 5.174 0 0 0-5.994 5.895l-1.472.196a6.313 6.313 0 0 0-5.13 4.18Z"/><path fill="#DBDBDB" fill-rule="evenodd" d="M48.276 44.828H32.759v6.896h15.517v-6.896Z"/><path fill="#DA922A" fill-rule="evenodd" d="m79.31 37.931-1.724-6.896h10.345l-1.724 6.896H79.31Z"/><path fill="#EBEBEB" fill-rule="evenodd" d="M63.793 10.345a3.448 3.448 0 1 0-6.896 0 3.448 3.448 0 0 0 6.896 0ZM37.931 22.414a3.448 3.448 0 1 0-6.896 0 3.448 3.448 0 0 0 6.896 0ZM29.31 3.448a3.448 3.448 0 1 0-6.896 0 3.448 3.448 0 0 0 6.896 0ZM94.828 3.448a3.448 3.448 0 1 0-6.897 0 3.448 3.448 0 0 0 6.897 0ZM15.517 31.035a3.448 3.448 0 1 0-6.896 0 3.448 3.448 0 0 0 6.896 0ZM10.345 13.793a3.448 3.448 0 1 0-6.897 0 3.448 3.448 0 0 0 6.897 0Z"/><path fill="#EA9D2D" d="M21.983 56.897h3.88V34.483h3.307a3.589 3.589 0 0 1 3.589 3.588v23.136a2.586 2.586 0 0 1-2.587 2.586H18.965v-3.88a3.017 3.017 0 0 1 3.018-3.016Z"/><path fill="#C3C3C3" fill-rule="evenodd" d="M100 55.172a8.62 8.62 0 1 0-17.241 0 8.62 8.62 0 0 0 17.241 0Z"/><path fill="#EBEBEB" fill-rule="evenodd" d="M94.828 55.172a3.448 3.448 0 1 0-6.897 0 3.448 3.448 0 0 0 6.897 0Z"/><path fill="#C3C3C3" fill-rule="evenodd" d="M82.759 55.172a8.62 8.62 0 1 0-17.242 0 8.62 8.62 0 0 0 17.242 0Z"/><path fill="#EBEBEB" fill-rule="evenodd" d="M77.586 55.172a3.448 3.448 0 1 0-6.896 0 3.448 3.448 0 0 0 6.896 0Z"/><path fill="#C38325" fill-rule="evenodd" d="M65.517 50H55.172v6.897h10.345V50Z"/><path fill="#C3C3C3" fill-rule="evenodd" d="M55.172 55.172a8.62 8.62 0 1 0-17.241 0 8.62 8.62 0 0 0 17.241 0Z"/><path fill="#EBEBEB" fill-rule="evenodd" d="M50 55.172a3.448 3.448 0 1 0-6.896 0 3.448 3.448 0 0 0 6.896 0Z"/></svg>`,
      showSnowBalls = true,
      showSnowBallsIsMobile = true,
      showSnowflakes = true,
      countSnowflake = 100,
      snowBallsLength = 10,
      snowBallIterations = 40,
      snowBallupNum = 1,
      snowBallIterationsInterval = 1000,
      clearSnowBalls = 20000,
      reset = -6,
    } = config;

    this.#icon = icon;
    this.#snowPlowImage = snowPlowImage;
    this.#showSnowBalls = showSnowBalls;
    this.#showSnowBallsIsMobile = showSnowBallsIsMobile;
    this.#showSnowflakes = showSnowflakes;
    this.#countSnowflake = countSnowflake > 100 ? 100 : countSnowflake;
    this.#snowBallsLength = snowBallsLength > 10 ? 10 : snowBallsLength;
    this.#snowBallIterations = snowBallIterations;
    this.#snowBallupNum = snowBallupNum > 3 ? 3 : snowBallupNum;
    this.#snowBallIterationsInterval = snowBallIterationsInterval;
    this.#clearSnowBalls = clearSnowBalls;
    this.#reset = reset;

    if (this.#snowBallIterations < 10 && this.#snowBallupNum < 4) {
      this.#snowBallIterations = 10;
    } else if (this.#snowBallIterations > 40 && this.#snowBallupNum > 2) {
      this.#snowBallIterations = 40;
    }

    this.#init();
  }

  #init() {
    window.addEventListener('resize', this.#resize.bind(this));

    // CREATE ELEMENTS ON THE PAGE
    this.#$snowflakesBox = document.createElement('div');
    this.#$snowBallBox = document.createElement('div');
    this.#$layer = document.createElement('div');
    this.#$snowBallWrap = document.createElement('div');
    this.#$snowBall = this.#$snowBallWrap.getElementsByTagName('a');
    this.#$snowPlow = document.createElement('div');

    this.#$snowflakesBox.className = 'snowflakes-box';
    this.#$snowBallBox.className = 'snowball-box';
    this.#$layer.className = 'snow-layer';
    this.#$snowBallWrap.className = 'snowball-wrap';
    this.#$snowPlow.className = 'snow-plow-img';
    this.#$snowPlow.innerHTML = this.#snowPlowImage;

    // APPEND ELEMENTS ON THE PAGE
    if (this.#showSnowflakes == true) {
      document.body.appendChild(this.#$snowflakesBox);
    }

    this.#createSnowflakes();
    this.#checkWindowWidth();

    if (this.#$snowBall.length) {
      for (let item of this.#$snowBall) {
        let w = item.clientWidth;
        item.style.height = w + 'px';
      }
    }

    this.#activateSnowBallsChangeTranslate();
  }

  #resize() {
    this.#windowInnerWidth = window.innerWidth;
    this.#$snowflakesBox.innerHTML = '';
    this.#$snowBallBox.innerHTML = '';

    this.#createSnowflakes();
    this.#checkWindowWidth();
  }

  destroy() {
    window.removeEventListener('resize', this.#resize);
    window.removeEventListener('resize', this.#resize);
  }

  // ACTIVATE SNOWBALLS POSITION
  #activateSnowBallsChangeTranslate() {
    let iterations = 0;
    let interval;

    const snowBallsChangeTranslate = () => {
      iterations++;
      if (iterations >= this.#snowBallIterations) {
        clearInterval(interval);
        this.#$layer.classList.add('up-max');

        setTimeout(() => {
          this.#activateAnimate();
        }, this.#clearSnowBalls);
      }

      for (const $snowBallEl of this.#$snowBall) {
        const style = window.getComputedStyle($snowBallEl);
        const matrix = new DOMMatrix(style.transform);
        const transformMatrixY = matrix.m42;
        const snowBallupNumM = -this.#snowBallupNum;
        const up = transformMatrixY + snowBallupNumM;

        $snowBallEl.style.transform = 'translateY(' + up + 'px )';
      }
    };

    interval = setInterval(snowBallsChangeTranslate, this.#snowBallIterationsInterval);
  }

  #activateAnimate() {
    if (this.#$layer.classList.contains('up-max')) {
      for (const $snowBallEl of this.#$snowBall) {
        if (!$snowBallEl.classList.contains('active')) $snowBallEl.classList.add('active');

        if (!this.#$snowPlow.classList.add('active')) this.#$snowPlow.classList.add('active');

        $snowBallEl.onanimationend = () => {
          $snowBallEl.style.transform = 'translateY(' + this.#reset + 'px )';
          this.#$snowPlow.classList.remove('active');
          setTimeout(() => {
            if ($snowBallEl.classList.contains('active')) {
              $snowBallEl.classList.remove('active');
            }

            this.#$layer.classList.remove('up-max');

            this.#activateSnowBallsChangeTranslate();
          }, 1000);
        };

        this.#$snowPlow.onanimationend = () => {
          this.#$snowPlow.classList.remove('active');
        };
      }
    }
  }

  // CREATE SNOWFLAKES
  #createSnowflakes() {
    for (let i = 0; i < this.#countSnowflake; i++) {
      const snowflake = document.createElement('span');

      snowflake.className = 'snowflake';
      snowflake.innerHTML = this.#icon;
      this.#$snowflakesBox.appendChild(snowflake);
    }
  }

  #createSnowBallsBox() {
    this.#$layer.appendChild(this.#$snowBallWrap);
    this.#$snowBallBox.appendChild(this.#$layer);
    document.body.appendChild(this.#$snowBallBox);
  }

  // CREATE SNOWBALLS
  #createSnowBalls() {
    if (this.#$snowBallWrap.children.length !== 0) {
      return;
    }

    for (let i = 0; i < this.#snowBallsLength; i++) {
      const $snowBall = document.createElement('a');
      $snowBall.innerHTML = `${this.#icon}${this.#icon}`;
      this.#$snowBallWrap.appendChild($snowBall);
    }

    this.#$snowBallWrap.appendChild(this.#$snowPlow);
  }

  // CHECK WINDOW WIDTH FOR CREATE SnowBallsBox
  #checkWindowWidth() {
    if (!this.#showSnowBalls) {
      return;
    }

    if (!this.#showSnowBallsIsMobile) {
      if (this.#windowInnerWidth > 1024) {
        this.#createSnowBallsBox();
        this.#createSnowBalls();
      }
      return;
    }

    if (this.#windowInnerWidth < 1024) {
      if (this.#snowBallIterations > 20) {
        this.#snowBallIterations = 20;
      }

      if (this.#snowBallsLength > 3) {
        this.#snowBallsLength = 3;
      }

      if (this.#snowBallupNum > 2) {
        this.#snowBallupNum = 2;
      }
    }

    this.#createSnowBallsBox();
    this.#createSnowBalls();
  }
}

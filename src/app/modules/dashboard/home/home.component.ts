import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService, LocalStorageService } from '@app/core';
import { WHEEL } from './enum/step.enum';

@Component({
  selector: 'app-lucky-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  prizes = [
    {
      text: 'Giải 1',
      img: './assets/images/lucky/tv.png',
      number: 1, // 1%,
      percentpage: 0.01 // 1%
    },
    {
      text: 'Giải 2',
      img: './assets/images/lucky/tulanh.png',
      number: 1,
      percentpage: 0.05 // 5%
    },
    {
      text: 'Giải 3',
      img: './assets/images/lucky/maygiat.png',
      number: 1,
      percentpage: 0.1 // 10%
    },
    {
      text: 'Giải 4',
      img: './assets/images/lucky/dieuhoa.png',
      number: 1,
      percentpage: 0.24 // 24%
    },
    {
      text: 'Giải 5',
      img: './assets/images/lucky/maygiat.png',
      number: 1,
      percentpage: 0.36 // 24%
    },
    {
      text: 'Không Trúng',
      img: 'https://cdn-icons-png.flaticon.com/128/5087/5087660.png',
      percentpage: 0.6 // 60%
    }
  ];

  isPercentage = true;
  prizeIndex = 0;
  codeNumber: string;
  disabled = false;

  optsPrize: any;
  mode = 'both';
  music: any;
  successMusic: any;
  loseMusic: any;

  ele: any;
  canvas: any;
  container: any;
  btn: any;
  transitionEnd;
  cssSupport;
  transform;
  WHEEL = WHEEL;
  currentStep = WHEEL.STEP_1;

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
    private router: Router,
    protected localStorageService: LocalStorageService
  ) {
    this.codeNumber = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.cssSupport = {
      transform: this.normalizeCss('Transform')
    };
    this.transform = this.cssSupport.transform;
    this.transitionEnd = this.cssSupport.transitionEnd;

    const token = this.localStorageService.getItem('wheelTokenAqua');
    if (!token) {
      this.currentStep = WHEEL.STEP_1;
    } else {
      this.getCurrentStep(token);
    }

    this.draw();
  }

  getCurrentStep(token) {
    const params = { token: token };
    this.dashboardService.getCurrentStep(params).subscribe(
      res => {
        console.log(res, 'getCurrentStep');
        this.currentStep = +res.data.step;
      },
      err => {
        console.log(err);
        // this.router.navigate(["/404"], {
        //   replaceUrl: true,
        // });
      }
    );
  }

  ngAfterViewInit() {
    this.music = document.getElementById('bgm') as HTMLVideoElement;
    this.successMusic = document.getElementById('success') as HTMLVideoElement;
    this.loseMusic = document.getElementById('lose') as HTMLVideoElement;
  }

  normalizeCss(name) {
    return name.toLowerCase();
  }

  draw() {
    const id = 'luckywheel';
    const rotateDeg = 360 / this.prizes.length / 2 + 90;
    const prizeItems = document.createElement('ul');
    const html = [];
    const turnNum = 1 / this.prizes.length;

    const ele = document.getElementById(id);
    const canvas = ele.querySelector(
      '.hc-luckywheel-canvas'
    ) as HTMLCanvasElement;
    this.container = ele.querySelector('.hc-luckywheel-container');

    const ctx = canvas.getContext('2d');

    for (let i = 0; i < this.prizes.length; i++) {
      ctx.save();
      ctx.beginPath();
      ctx.translate(250, 250); // Center Point
      ctx.moveTo(0, 0);
      ctx.rotate(
        (((360 / this.prizes.length) * i - rotateDeg) * Math.PI) / 180
      );
      ctx.arc(0, 0, 250, 0, (2 * Math.PI) / this.prizes.length, false); // Radius

      const grd = ctx.createLinearGradient(0, 0, 0, 170);
      grd.addColorStop(0, '#3464c4');
      grd.addColorStop(1, '#6b9bf8');

      const grd1 = ctx.createLinearGradient(0, 0, 0, 170);
      grd1.addColorStop(0, '#d5b04c');
      grd1.addColorStop(1, '#f6e19b');

      if (i % 2 === 0) {
        ctx.fillStyle = grd;
      } else {
        ctx.fillStyle = grd1;
      }

      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
      ctx.restore();
      const prizeList = this.prizes;
      html.push('<li class="hc-luckywheel-item"> <span style="');
      html.push(this.transform + ': rotate(' + i * turnNum + 'turn)">');
      if (this.mode === 'both') {
        html.push('<img src="' + prizeList[i].img + '" />');
        html.push('<p class=\'curve\'>' + prizeList[i].text + '</p>');
      } else if (prizeList[i].img) {
        html.push('<img src="' + prizeList[i].img + '" />');
      } else {
        html.push('<p id="curve">' + prizeList[i].text + '</p>');
      }
      html.push('</span> </li>');
      if (i + 1 === this.prizes.length) {
        prizeItems.className = 'hc-luckywheel-list';
        this.container.appendChild(prizeItems);
        prizeItems.innerHTML = html.join('');
      }
    }
  }

  gotBack(data) {
    console.log(data);
  }

  getPrize() {
    const rand = this.randomIndex(this.prizes);
    const chances = rand;
    this.optsPrize = {
      prizeId: rand,
      chances: chances
    };
    let deg = 0;
    deg =
      deg +
      (360 - (deg % 360)) +
      (360 * 30 - rand * (360 / this.prizes.length));
    this.runRotate(deg);
  }

  runRotate(deg) {
    this.music.play();
    this.container.style[this.transform] = 'rotate(' + deg + 'deg)';
    this.container.style['transition-duration'] = '25s';
    setTimeout(() => {
      this.music.pause();
      this.successMusic.play();
      this.shoot();
    }, 25000);
  }

  shoot() {
    const startFire = setInterval(() => {
      this.startFire();
    }, 1000);
    setTimeout(function() {
      clearInterval(startFire);
    }, 10000);
  }

  startFire() {
    try {
      this.confetti({
        angle: this.randomNum(60, 120),
        spread: this.randomNum(10, 50),
        particleCount: this.randomNum(40, 50),
        origin: {
          y: 0.6
        }
      });
    } catch (error) {}
  }

  randomNum(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  confetti(args: any) {
    return window['confetti'].apply(this, arguments);
  }

  randomIndex(prizes) {
    if (this.isPercentage) {
      let counter = 1;
      for (let i = 0; i < prizes.length; i++) {
        if (prizes[i].number === 0) {
          counter++;
        }
      }
      if (counter === prizes.length) {
        return null;
      }
      const rand = Math.random();
      this.prizeIndex = 5;
      console.log(rand);
      // switch (true) {
      //   case rand < prizes[4].percentpage:
      //     prizeIndex = 4 ;
      //     break;
      //   case rand < prizes[4].percentpage + prizes[3].percentpage:
      //     prizeIndex = 3;
      //     break;
      //   case rand < prizes[4].percentpage + prizes[3].percentpage + prizes[2].percentpage:
      //     prizeIndex = 2;
      //     break;
      //   case rand < prizes[4].percentpage + prizes[3].percentpage + prizes[2].percentpage + prizes[1].percentpage:
      //     prizeIndex = 1;
      //     break;
      //   case rand < prizes[4].percentpage + prizes[3].percentpage + prizes[2].percentpage + prizes[1].percentpage  + prizes[0].percentpage:
      //     prizeIndex = 0;
      //     break;
      // }
      if (prizes[this.prizeIndex].number !== 0) {
        prizes[this.prizeIndex].number = prizes[this.prizeIndex].number - 1;
        return this.prizeIndex;
      } else {
        return this.randomIndex(prizes);
      }
    } else {
      let counter = 0;
      for (let i = 0; i < prizes.length; i++) {
        if (prizes[i].number === 0) {
          counter++;
        }
      }
      if (counter === prizes.length) {
        return null;
      }
      /* tslint:disable:no-bitwise */
      const rand = (Math.random() * prizes.length) >>> 0;
      if (prizes[rand].number !== 0) {
        prizes[rand].number = prizes[rand].number - 1;
        return rand;
      } else {
        return this.randomIndex(prizes);
      }
    }
  }

  spin() {
    if (this.currentStep !== WHEEL.STEP_3) {
      return;
    }
    this.disabled = true;
    this.getPrize();
  }

  getFormRegisterIdentity(step) {
    console.log(step, 'getFormRegisterIdentity');
  }
}

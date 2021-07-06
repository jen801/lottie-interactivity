// Animation configuration

document.addEventListener('DOMContentLoaded', function () {
  // const lfcontainer = document.getElementById('fifthLottie');
  // const fifthLottie = lottie.loadAnimation({
  //   container: lfcontainer, // the dom element that will contain the animation
  //   renderer: 'svg',
  //   autoplay: false,
  //   path: 'https://assets2.lottiefiles.com/packages/lf20_4fET62.json', // the path to the animation json
  // });

  LottieInteractivity.create({
    player: '#zeroLottie',
    mode: 'scroll',
    actions: [
      {
        visibility: [0, 1.0],
        type: 'seek',
        frames: [0, 360],
      },
    ],
  });

  LottieInteractivity.create({
    player: '#firstLottie',
    mode: 'scroll',
    actions: [
      {
        visibility: [0, 1.0],
        type: 'seek',
        frames: [0, 300],
      },
    ],
  });
  LottieInteractivity.create({
    player: '#secondLottie',
    mode: 'scroll',
    container: '#MyContainerId',
    actions: [
      {
        visibility: [0, 1.0],
        type: 'seek',
        frames: [90, 123],
      },
    ],
  });

  LottieInteractivity.create({
    player: '#thirdLottie',
    mode: 'scroll',
    actions: [
      {
        visibility: [0, 0.3],
        type: 'stop',
        frames: [50],
      },
      {
        visibility: [0.3, 1.0],
        type: 'seek',
        frames: [50, 240],
      },
    ],
  });

  LottieInteractivity.create({
    player: '#fourthLottie',
    mode: 'scroll',
    actions: [
      {
        visibility: [0, 0.2],
        type: 'stop',
        frames: [0],
      },
      {
        visibility: [0.2, 0.45],
        type: 'seek',
        frames: [0, 45],
      },
      {
        visibility: [0.45, 1.0],
        type: 'loop',
        frames: [45, 60],
      },
    ],
  });

  LottieInteractivity.create({
    player: '#fifthLottie',
    mode: 'scroll',
    actions: [
      {
        visibility: [0, 1.0],
        type: 'loop',
        frames: [70, 500],
      },
    ],
  });

  LottieInteractivity.create({
    player: '#seventhLottie',
    mode: 'cursor',
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: 'loop',
        frames: [45, 60],
      },
      {
        position: { x: -1, y: -1 },
        type: 'stop',
        frames: [0],
      },
    ],
  });

  LottieInteractivity.create({
    player: '#eighthLottie',
    mode: 'cursor',
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: "seek",
        frames: [45, 60]
      }
    ]
  });

  LottieInteractivity.create({
    player: '#ninthLottie',
    mode: 'cursor',
    actions: [
      {
        position: { x: [0, 1], y: [-1, 2] },
        type: 'seek',
        frames: [0, 180],
      },
    ],
  });

  LottieInteractivity.create({
    player: '#tenthLottie',
    mode: 'cursor',
    actions: [
      {
        type: 'click',
        forceFlag: false
      },
    ],
  });

  LottieInteractivity.create({
    player: '#eleventhLottie',
    mode: 'cursor',
    actions: [
      {
        type: 'hover',
        forceFlag: false
      },
    ],
  });

  LottieInteractivity.create({
    player:'#twelfthLottie',
    mode:"scroll",
    actions: [
      {
        visibility: [0.50, 1.0],
        type: "play"
      },
    ]
  });

  LottieInteractivity.create({
    player: '#thirteenthLottie',
    mode: 'cursor',
    actions: [
      {
        type: 'hold'
      }]
  });

  LottieInteractivity.create({
    player: '#fourteenthLottie',
    mode: 'cursor',
    actions: [
      {
        type: 'pauseHold'
      }]
  });

  // use the cursor sync and on frame 30 autoplay the rest
  // of the animation
  LottieInteractivity.create({
    player: '#unlockIphone',
    mode: 'chain',
    actions: [
      {
        state: 'none',
        position: { x: [0, 1], y: [-1, 2] },
        transition: 'seek',
        frames: [0, 30],
      },
      {
        state: 'autoplay',
        transition: 'none',
        frames: [30, 160],
      },
    ],
  });

  // LottieInteractivity.create({
  //   player: '#chainingPlayer',
  //   mode: 'chain',
  //   actions: [
  //     {
  //       state: 'loop',
  //       transition: 'click',
  //       frames: [0, 100]
  //     },
  //     {
  //       state: 'autoplay',
  //       transition: 'onComplete',
  //       frames: [100, 200]
  //     },
  //     {
  //       state: 'loop',
  //       loop: 1,
  //       transition: 'hover',
  //       frames: [200, 300]
  //     },
  //     {
  //       state: 'loop',
  //       transition: 'click',
  //       click: 4,
  //       frames: [300, 400],
  //       reset: false
  //     },
  //     {
  //       state: 'autoplay',
  //       transition: 'click',
  //       frames: [400, 500],
  //       reset: false
  //     },
  //     {
  //       state: 'loop',
  //       transition: 'repeat',
  //       repeat: 1,
  //       frames: [500, 600],
  //       reset: true
  //     }
  //   ]
  // })

  LottieInteractivity.create({
    player: '#birdExploding',
    mode: 'chain',
    actions: [
      {
        state: 'loop',
        transition: 'click',
        frames: 'bird'
      },
      {
        state: 'autoplay',
        transition: 'onComplete',
        frames: 'explosion'
      },
      {
        state: 'autoplay',
        frames: 'feathers',
        transition: 'onComplete',
        reset: true
      }
    ],
  })

  LottieInteractivity.create({
    player: '#jumpToTest',
    mode: 'chain',
    actions: [
      {
        state: 'loop',
        transition: 'click',
        frames: [0, 100],
      },
      {
        state: 'autoplay',
        transition: 'onComplete',
        frames: [100, 200]
      },
      {
        state: 'loop',
        loop: 1,
        transition: 'hover',
        frames: [200, 300]
      },
      {
        state: 'loop',
        transition: 'click',
        click: 4,
        frames: [300, 400],
        reset: false
      },
      {
        state: 'autoplay',
        transition: 'click',
        frames: [400, 500],
        reset: false
      },
      {
        state: 'loop',
        transition: 'repeat',
        repeat: 1,
        frames: [500, 600],
      },
      {
        state: 'click',
        forceFlag: true,
        transition: 'repeat',
        repeat: 10,
        frames: [600, 700],
        jumpTo: 3
       }
    ]
  })

  LottieInteractivity.create({
    player: '#clickTestPlayer',
    mode: 'chain',
    actions: [
      {
        state: 'click',
        forceFlag: true,
        frames: 'star',
        transition: 'click',
        click: 5
      },
      {
        frames: 'confetti',
        state: 'autoplay',
        reset: false,
        transition: 'none'
      }
    ]
  });
});

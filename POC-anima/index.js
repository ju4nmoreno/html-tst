const elements = [
    {
        id: '#ele_1',
        backgroundClass: 'gradient',
    },
]
const DEFAULT = {
    SCALE_END: [0, 5],
    SCALE_IMAGE: [0, 0.85],
    ROTATE: ['135deg', '135deg'],
    DURATION: 1000,
}

const tl = anime.timeline({
    easing: 'linear',
    autoplay: false,
})

tl.add({
    targets: '#ele_1',
    scale: ['0', '0.75'],
    duration: 175,
})
    .add(
        {
            targets: '#ele_1 img',
            scale: DEFAULT.SCALE_IMAGE,
            duration: 175,
            easing: 'easeOutCubic',
        },
        0
    )
    .add(
        {
            targets: '.text1',
            left: ['-600px', '81px'],
            duration: 175,
        },
        0
    )
    .add(
        {
            targets: '.text2',
            right: ['-1000px', '81px'],
            duration: 175,
        },
        0
    )
    .add(
        {
            targets: '#ele_1',
            scale: ['0.75', 5],
        },
        300
    )
    .add(
        {
            targets: '.text1',
            left: ['81px', '-600px'],
            duration: 175,
        },
        300
    )
    .add(
        {
            targets: '.text2',
            right: ['80px', '-1000px'],
            duration: 175,
        },
        300
    )
    .add(
        {
            targets: '#ele_2',
            scale: DEFAULT.SCALE_END,
            duration: DEFAULT.DURATION,
        },
        300
    )
    .add(
        {
            targets: '#ele_2 img',
            scale: DEFAULT.SCALE_IMAGE,
            duration: 700,
            easing: 'easeOutCubic',
        },
        300
    )
    .add(
        {
            targets: '#ele_3',
            scale: DEFAULT.SCALE_END,
            duration: DEFAULT.DURATION,
        },
        600
    )
    .add(
        {
            targets: '#ele_3 img',
            scale: DEFAULT.SCALE_IMAGE,
            duration: 700,
            easing: 'easeOutCubic',
        },
        600
    )
    .add(
        {
            targets: '#ele_4',
            scale: DEFAULT.SCALE_END,
            rotate: DEFAULT.ROTATE,
            duration: DEFAULT.DURATION,
        },
        900
    )

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    tl.seek(window.scrollY)
})

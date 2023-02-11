/**标记点**/
export const markers = [{
        id: 'new-marker1',
        position: {
            yaw: '-27deg',
            pitch: '-6deg'
        },
        image: require('./../assets/arrow.gif'),
        size: {
            width: 50,
            height: 50
        },
    },
    {
        id: 'new-marker2',
        position: {
            yaw: '-170deg',
            pitch: '20deg'
        },
        image:require('./../assets/arrow.gif'),
        size: {
            width: 50,
            height: 50
        },
    },
    {
        id: 'new-marker3',
        tooltip: {
            content: "恭喜你，获得意外宝藏！",
            class: 'custom-tooltip',
            position: 'top',
            trigger: 'click'
        },
        position: {
            yaw: '4deg',
            pitch: '-52deg'
        },
        image: require('./../assets/local.png'),
        size: {
            width: 38,
            height: 38
        },
        anchor: 'Holly',
    },
];
/**全景图片列表**/
export const photos = [{
        id: 'sphere',
        panorama:require('./../assets/1.jpg'),
        thumbnail: require('./../assets/1.jpg'),
        options: {
            caption: '图一',
        },
        markers:markers
    },
    {
        id: 'sphere-test',
        panorama: require('./../assets/2.jpg'),
        thumbnail: require('./../assets/2.jpg'),
        name: 'Test sphere',
        options: {
            caption: '图二',
        },
        markers:[]
    },
    {
        id: 'key-biscayne',
        panorama: require('./../assets/3.jpg'),
        thumbnail: require('./../assets/3.jpg'),
        name: 'Key Biscayne',
        options: {
            caption: '图三',
        },
        markers:[ {
            // polyline marker
            id: 'polyline',
            polylinePixels: [
                [2478, 1635], [2184, 1747], [1674, 1953], [1166, 1852],
                [709, 1669], [301, 1519], [94, 1399], [34, 1356],
            ],
            svgStyle: {
                stroke: 'rgba(140, 190, 10, 0.8)',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '10px',
            },
            tooltip: 'A dynamic polyline marker',
        },]
    },
]
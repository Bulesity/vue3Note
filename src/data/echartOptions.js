exports.homePieOption = {
    title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
},
tooltip: {
    trigger: 'item'
},
legend: {
    orient: 'vertical',
    left: 'left'
},
series: [
    {
    name: 'Access From',
    type: 'pie',
    radius: '50%',
    data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
    ],
    emphasis: {
        itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    }
    }
]
};
exports.homeBarOption =  {
    title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  };
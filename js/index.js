// 立即执行函数，防止变量污染 (function() {})();

// 柱状图模块1
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2.指定配置项和数据
  var option = {
    color: ['#2f89cf'],
    // 提示框组件
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' ,// 默认为直线，可选为：'line' | 'shadow'
      }
    },
    
    // 修改图表位置大小
    grid: {
      left: '0%',
      top: '15%',
      right: '0%',
      bottom: '0%',
      containLabel: true
    },
    // x轴相关配置
    xAxis: [{
      type: 'category',
      data: ['1978年', '1979年', 
      '1980年', '1981年', '1982年',
      '1983年', '1984年', '1985年',
      '1986年', '1987年', '1988年', '1989年',
      '1990年', '1991年', '1992年', '1993年',
      '1994年', '1995年', '1996年', '1997年', '1998年', 
      '1999年', '2000年'],
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 10
      },
      // x轴样式不显示
      axisLine: {
        show: false
      }
    }],
    // y轴相关配置
    yAxis: [{
      type: 'value',
      name:'单位：元',
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y轴样式修改
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    // 系列列表配置
    series: [
    {
      name: '人均国内生产总值',
      type: 'bar',
      barWidth: '35%',
      // ajax传动态数据
      data:[385, 423, 468, 497, 533, 588, 
        702, 866, 973, 1123, 1378, 1536, 
        1663, 1912, 2334, 3027, 4081, 
        5091, 5898, 6481, 6860, 7229, 7942],
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5
      }
    }]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 柱状图模块2
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));

  // 声明颜色数组
  var myColor = ["#1089E7", "#D2691E"];
  // 2.指定配置项和数据
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' ,// 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      top: "15%",
      left: '10%',
      right:'0%',
      bottom: '8%',
      // containLabel: true
    },
    // x轴相关配置
    xAxis: [{
      type: 'category',
      data: ['1978年', '1979年', 
      '1980年', '1981年', '1982年',
      '1983年', '1984年', '1985年',
      '1986年', '1987年', '1988年', '1989年',
      '1990年', '1991年', '1992年', '1993年',
      '1994年', '1995年', '1996年', '1997年', '1998年', 
      '1999年', '2000年'],
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 10
      },
      // x轴样式不显示
      axisLine: {
        show: false
      }
    }],
    // y轴相关配置
    yAxis: [{
      type: 'value',
      name:'单位：元',
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y轴样式修改
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    series: [
      {
        name: '农村人均纯收入',
        type: 'bar',
        barWidth: '35%',
        color:"#D2691E",
        // ajax传动态数据
        data:[133.6, 160.2, 191.3, 223.4, 270.1, 309.8, 355.3, 397.6,
           423.8, 462.6, 544.9, 601.5, 686.3, 708.6, 784, 921.6, 1221, 
           1577.7, 1926.1, 2090.1, 2162, 2210.3, 2253.4],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
      },
      {
        name: '城镇人均可支配收入',
        type: 'bar',
        barWidth: '35%',
        color:"#A52A2A",
        // ajax传动态数据
        data:[343.4, 387, 477.6, 491.9, 526.6, 564, 651.2, 739.1,
           899.6, 1002.2, 1181.4, 1375.7, 1510.2, 1700.6, 2026.6, 
           2577.4, 3496.2, 4283, 4838.9, 5160.3, 5425.1, 5854, 6280],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
      },
    ]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 折线图模块1
(function () {
  // 年份对应数据
  var yearData = [{
      year: "城市（1986-2000）", // 年份
      data: [
        // 两个数组是因为有两条线
        [8.8, 9, 9.3, 9.7, 9.9, 10.3, 10.7, 11, 11.4, 11.8, 12.3, 13, 13.6, 14.2, 14.9],//城市人均使用面积
        [6, 6.1, 6.3, 6.6, 6.7, 6.9, 7.1, 7.5, 7.8, 8.1, 8.5, 8.8, 9.3, 9.8, 10.3]//城市人均居住面积
      ]
    },
    {
      year: "农村（1985-2000）", // 年份
      data: [
        // 两个数组是因为有两条线
        [14.7, 15.3, 16, 16.6, 17.2, 17.8, 18.5, 18.9, 20.7, 20.2, 21, 21.7, 22.5, 23.3, 24.2, 24.8],//农村人均居住面积
        [7.78, 11.06, 15.01, 18.63, 19.76]//农村钢
      ]
    }
  ];

  var myChart = echarts.init(document.querySelector(".line .chart"));

  var option = {
    // 修改两条线的颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      top: "15%",
      left: '2%',
      right: '3.8%',
      bottom: '3%',
      containLabel: true,
      show: true, // 显示边框
      borderColor: '#012f4a' // 边框颜色
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // 去除轴间距
      data: [
      '1986年', '1987年', '1988年', '1989年',
      '1990年', '1991年', '1992年', '1993年',
      '1994年', '1995年', '1996年', '1997年', '1998年', 
      '1999年', '2000年'],
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: 'value',
      name:'单位：m²',
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#4c9bfb"
        }
      }
    },
    series: [{
        type: 'line',
        smooth: true, // 圆滑的线
        name: '城市人均使用面积',
        data: yearData[0].data[0]
      },
      {
        type: 'line',
        smooth: true, // 圆滑的线
        name: '城市人均居住面积',
        data: yearData[0].data[1]
      }
    ]
  };

  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })

  // 5.点击切换2020 和 2021 的数据
  $('.line h2 a').on('click', function () {
    // console.log($(this).index());
    // 点击a 之后 根据当前a的索引号 找到对应的 yearData 相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 选中年份高亮
    $('.line h2 a').removeClass('a-active');
    $(this).addClass('a-active');

    // 需要重新渲染
    myChart.setOption(option);
  })
})();

// 折线图模块2
(function () {
  var myChart = echarts.init(document.querySelector('.line2 .chart'));

  var option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: "0%",
      right:"5%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      top: '30',
      left: '5',
      right: '30',
      bottom: '0',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        }
      },
      // x轴线的颜色为   rgba(255,255,255,.2)
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.2)"
        }
      },
      data: ["1985年","1990年","1995年","1999年","2000年"]
    }],
    yAxis: [{
      type: 'value',
      name:'单位：m²',
      axisTick: {
        // 不显示刻度线
        show: false
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        }
      },
      // 修改分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    }],
    series: [{
        name: '农村人均钢砖木结构住房面积',
        type: 'line',
        smooth: true, // 圆滑的线
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: 2
        },
        // 填充区域渐变透明颜色
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [{
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 拐点设置为小圆点
        symbol: 'circle',
        // 设置拐点大小
        symbolSize: 5,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        data: [7.78, 11.06, 15.01, 18.63, 19.76]
      },
      {
        name: "农村人均居住面积",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [{
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [14.7, 17.8, 21, 24.2, 24.8]
      }
    ]
  };

  myChart.setOption(option);

  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 饼形图1
(function () {
  //1、实例化对象
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  // 2.指定配置项和数据
  {
    // 年份对应数据
    var yearData = [{
        year: "平均预期寿命", // 年份
        data: [
          // 两个数组是因为有两条线
          [67.77,68.55,70.8,71.4],//平均预期寿命
        ]
      },
    ];
    var option = {
      // 修改两条线的颜色
      color: ['#00f2f1', '#ed3f35'],
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        top: "0%",
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12"
        }
      },
      grid: {
        top: "15%",
        left: '2%',
        right: '5%',
        bottom: '0%',
        containLabel: true,
        show: true, // 显示边框
        borderColor: '#012f4a' // 边框颜色
      },
      xAxis: {
        type: 'category',
        boundaryGap: false, // 去除轴间距
        data: [
        '1981年',  '1990年', '1996年', '2000年'],
        // 去除刻度线
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#4c9bfb" // x轴文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        }
      },
      yAxis: {
        type: 'value',
        name:'单位：岁',
        min:60,
        max:80,
        // 去除刻度线
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#4c9bfb" // x轴文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        },
        splitLine: {
          lineStyle: {
            color: "#4c9bfb"
          }
        }
      },
      series: [{
          type: 'line',
          smooth: true, // 圆滑的线
          name: '平均预期寿命',
          data: yearData[0].data[0]
        },
      ]
    }
    };
  
    myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 饼形图2
(function () {
  var myChart = echarts.init(document.querySelector('.pie2 .chart'));
  // 年份对应数据
  var yearData = [{
    year: "各项数据", // 年份
    data: [
      // 两个数组是因为有两条线
      [56.8, 55.9, 55.3, 54, 54.1, 54.1, 52.3, 50.3, 48, 45.5, 42.2],//恩格尔系数
      [77, 80.8, 81.5, 82.2, 82.8, 83.5, 84.2],//成人识字率
      [5.02,3.64,3.6,3.31,3.32,3.33, 3.22   ],//婴儿死亡率
    ]
  },
]

var option = {
  // 修改两条线的颜色
  color: ['#00FA9A', '#0000FF','#7B68EE'],
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    top: "15%",
    right:"5%",
    textStyle: {
      color: "rgba(255,255,255,.5)",
      fontSize: "12"
    }
  },
  grid: {
    top: "30%",
    left: '2%',
    right: '5%',
    bottom: '0%',
    containLabel: true,
    show: true, // 显示边框
    borderColor: '#012f4a' // 边框颜色
  },
  xAxis: {
    type: 'category',
    boundaryGap: false, // 去除轴间距
    data:['1990年',  '1995年', '1996年', '1997年', '1998年', '1999年', 
      '2000年'],
    // 去除刻度线
    axisTick: {
      show: false
    },
    axisLabel: {
      color: "#4c9bfb" // x轴文本颜色
    },
    axisLine: {
      show: false // 去除轴线
    }
  },
  yAxis: {
    type: 'value',
    name:'单位：%',
    // 去除刻度线
    axisTick: {
      show: false
    },
    axisLabel: {
      color: "#4c9bfb" // x轴文本颜色
    },
    axisLine: {
      show: false // 去除轴线
    },
    splitLine: {
      lineStyle: {
        color: "#4c9bfb"
      }
    }
  },
  series: [{
      type: 'line',
      smooth: true, // 圆滑的线
      name: '恩格尔系数',
      data: yearData[0].data[0]
    },
    {
      type: 'line',
      smooth: true, // 圆滑的线
      name: '成人识字率',
      data: yearData[0].data[1]
    },
    {
      type: 'line',
      smooth: true, // 圆滑的线
      name: '婴儿死亡率',
      data: yearData[0].data[2]
    }
  ]
};

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

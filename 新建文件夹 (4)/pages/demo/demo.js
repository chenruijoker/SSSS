Page({
  data: {
    array: [1, 2, 3, 4, 5],
    view: 'WEBVIEW',
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' },
    count: 0
  },
  add: function () {
    this.setData({
      count: this.data.count+1
    })
  }
})
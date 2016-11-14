const Tabletop = require('tabletop')
const NProgress = require('nprogress')

const spreadsheetKey = '1f-fXgbqqSS0o6U3M72ivq-yXMZHBDAJrr2RJ43FTbOg'
const sheetName = 'Electoral College Member Contact Information'

module.exports = {
  state: {
    electors: []
  },
  reducers: {
    receive: (data, state) => {
      return { electors: data }
    }
  },
  subscriptions: {
    fetch: (send, done) => {
      NProgress.start()
      Tabletop.init({
        key: spreadsheetKey,
        wanted: [ sheetName ],
        callback: (data, tabletop) => {
          NProgress.done()
          const electors = tabletop.sheets(sheetName).all()
          send('receive', electors, done)
        }
      })
    }
  }
}

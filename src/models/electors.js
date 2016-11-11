const Tabletop = require('tabletop')
const NProgress = require('nprogress')

const spreadsheetKey = '1CHvGdLNmk4ltaX2E_2uDEVSomS5IUVhVDp5RvTu7FbQ'

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
        simpleSheet: true,
        callback: (data, tabletop) => {
          NProgress.done()
          send('receive', data, done)
        }
      })
    }
  }
}

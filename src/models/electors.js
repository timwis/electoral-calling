const Tabletop = require('tabletop')

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
      Tabletop.init({
        key: spreadsheetKey,
        simpleSheet: true,
        callback: (data, tabletop) => {
          send('receive', data, done)
        }
      })
    }
  }
}

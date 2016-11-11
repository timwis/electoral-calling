const choo = require('choo')

const ListView = require('./views/list')

const app = choo()

if (process.env.NODE_ENV !== 'production') {
  const log = require('choo-log')
  app.use(log())
}

app.model(require('./models/electors'))

app.router((route) => [
  route('/', ListView)
])

const tree = app.start()
document.body.appendChild(tree)

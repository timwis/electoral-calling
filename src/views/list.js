const html = require('choo/html')

const Elector = require('../components/elector')

module.exports = (state, prev, send) => {
  return html`
    <main>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Electoral calling
            </h1>
            <h2 class="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc at imperdiet felis. Pellentesque tincidunt ipsum in
              lorem ornare, quis mattis nunc imperdiet. Integer
              consequat consectetur consequat.
            </h2>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns is-multiline">
            ${state.electors.map(Elector)}
          </div>
        </div>
      </section>
    </main>
  `
}

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
              The fate of the country is in the hands of these
              538 members of the electoral college. Here's who
              they are.
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

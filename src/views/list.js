const html = require('choo/html')
const sortBy = require('lodash/sortBy')

const Elector = require('../components/elector')
const StateNav = require('../components/state-nav')
const slugify = require('../util').slugify

module.exports = (state, prev, send) => {
  const activeState = state.params.activeState || 'pennsylvania'
  const electors = sortBy(state.electors.filter((elector) => {
    return slugify(elector['Elector For']) === activeState
  }), 'Photo').reverse()

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
          ${StateNav(activeState)}
          <div class="columns is-multiline">
            ${electors.map(Elector)}
          </div>
        </div>
      </section>
    </main>
  `
}

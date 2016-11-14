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
              On December 19th, 2016, the 538 members of the Electoral
              College will elect the next President of the United States.
              In many states, Electors are bound by state law to vote for
              the candidate they pledged for, but the states listed below
              allow Electors to vote for other candidates.
              The fate of the country is in their hands. Here's who they
              are.
              <a href="http://faithlessnow.com/">More info</a>.
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

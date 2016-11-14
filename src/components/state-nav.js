const html = require('choo/html')

const slugify = require('../util').slugify

module.exports = (active) => {
  return html`
    <div class="tabs">
      <ul>
        ${State('Arizona')}
        ${State('Arkansas')}
        ${State('Georgia')}
        ${State('Idaho')}
        ${State('Indiana')}
        ${State('Iowa')}
        ${State('Kansas')}
        ${State('Louisiana')}
        ${State('Missouri')}
        ${State('North Dakota')}
        ${State('Pennsylvania')}
        ${State('South Dakota')}
        ${State('Tennessee')}
        ${State('Texas')}
        ${State('West Virginia')}
      </ul>
    </div>
  `

  function State (name) {
    const slug = slugify(name)
    if (slug === active) {
      return html`
        <li class="is-active"><a href="#/${slug}">${name}</a></li>
      `
    } else {
      return html`
        <li><a href="#/${slug}">${name}</a></li>
      `
    }
  }
}

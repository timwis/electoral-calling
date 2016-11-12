const html = require('choo/html')
const style = require('typestyle').style

module.exports = (data) => {
  const fullName = `${data['First Name']} ${data['Last Name']}`

  return html`
    <div class="column">
      <div class="card">
        ${Photo(data)}
        <div class="card-content">
          <p class="title is-5">${fullName}</p>
          <div class="content">
            ${Address(data)}
            ${Email(data)}
            ${Phone(data)}
            <div class="social">
              ${Facebook(data)}
              ${Twitter(data)}
              ${LinkedIn(data)}
            </div>
          </div>
        </div>
      </div>
    </div>
  `

  function Photo (data) {
    const url = data['Photo']
    const yOffset = (data['Photo Offset'] || 50) + '%'

    return url ? html`
      <div class="card-image ${photoContainerClass}">
        <figure
          class="image ${photoClass}"
          style="background-image: url(${url}); background-position-y: ${yOffset}"
        ></figure>
      </div>
    ` : ''
  }

  function Address (data) {
    const address = data['Address']
    let fullAddress = address
    if (data['City']) fullAddress += `, ${data['City']}, ${data['State']}`
    if (data['Zip']) fullAddress += `, ${data['Zip']}`

    return address ? html`
      <div class="address">
        <span class="icon is-small"><i class="fa fa-map-marker"></i></span>
        <a href="https://maps.google.com/?q=${fullAddress}">${address}</a>
      </div>
    ` : ''
  }

  function Email (data) {
    const email = data['Email']

    return email ? html`
      <div class="email">
        <span class="icon is-small"><i class="fa fa-envelope"></i></span>
        <a href="mailto:${email}">${email}</a>
      </div>
    ` : ''
  }

  function Phone (data) {
    const tel = data['Phone']

    return tel ? html`
      <div class="phone">
        <span class="icon is-small"><i class="fa fa-phone"></i></span>
        <a href="tel:${tel}">${tel}</a>
      </div>
    ` : ''
  }

  function Facebook (data) {
    const url = data['Facebook']

    return url ? html`
      <a href=${url}>
        <span class="icon"><i class="fa fa-facebook-official"></i></span>
      </a>
    ` : ''
  }

  function Twitter (data) {
    const url = data['Twitter']

    return url ? html`
      <a href=${url}>
        <span class="icon"><i class="fa fa-twitter"></i></span>
      </a>
    ` : ''
  }

  function LinkedIn (data) {
    const url = data['LinkedIn']

    return url ? html`
      <a href=${url}>
        <span class="icon"><i class="fa fa-linkedin"></i></span>
      </a>
    ` : ''
  }
}

const photoContainerClass = style({
  height: '175px'
})

const photoClass = style({
  position: 'relative',
  float: 'left',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
  height: '175px'
})

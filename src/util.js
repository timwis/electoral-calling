exports.slugify = function slugify (text) {
  return text && text.toLowerCase().replace(' ', '-')
}

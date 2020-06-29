function filterName(name) {
  if (name === undefined) {
    return "Unknown";
  }
  if (/[_]/.test(name)) {
    name = name.replace(/[_]/g, " ");
  }
  if (name.length > 11) {
    return name.substr(0, 11);
  }
  return name.trim();
}

module.exports = filterName;

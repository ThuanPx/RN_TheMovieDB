

export function serializeJSON(json) {
  if (Object.keys(json).length === 0) {
    return '';
  }
  const parameters = Object.keys(json).filter(key => json[key] !== null);
  return parameters.map((keyName) => {
    if (json[keyName] !== null) {
      return `${encodeURIComponent(keyName)}=${encodeURIComponent(json[keyName])}`;
    }
  }).join('&');
}

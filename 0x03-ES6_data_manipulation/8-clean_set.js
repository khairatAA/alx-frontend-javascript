// Clean Set
export default function cleanSet(set, startString) {
  let result = '';

  for (const value of set) {
    if (startString !== '' && value.startsWith(startString)) {
      const reminder = value.substring(startString.length);
      result += `${reminder}-`;
    }
  }

  if (result.endsWith('-')) {
    result = result.slice(0, -1);
  }

  return result;
}

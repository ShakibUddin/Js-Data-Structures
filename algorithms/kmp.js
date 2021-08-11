function kmp(mainString, pattern) {
  if (mainString.length === 0 || pattern.length === 0) return false;
  let piTable = [];
  let i = 0,
    j = 0;
  piTable = fillPiTable(pattern, piTable);
  while (i < mainString.length) {
    if (mainString[i] !== pattern[j]) {
      if (j !== 0) {
        j = piTable[j - 1];
      } else {
        ++i;
      }
    } else {
      ++i;
      ++j;
    }
    if (j === pattern.length) return true;
  }
  return false;
}

function fillPiTable(pattern, table) {
  let i = 1,
    j = 0;
  table[0] = 0;
  while (i < pattern.length) {
    if (pattern[i] === pattern[j]) {
      table[i] = j + 1;
      ++i;
      ++j;
    } else {
      if (j !== 0) {
        j = table[j - 1];
      } else {
        table[i] = 0;
        ++i;
      }
    }
  }
  return table;
}

module.exports = { kmp, fillPiTable };

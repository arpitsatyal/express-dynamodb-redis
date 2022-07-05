const fs = require('fs');
/**
 * Get JSON Data From File.
 *
 * @param {*} filePath
 * @param {string} [encoding='utf8']
 * @returns {Array}
 */
exports.getJSONDataFromFile = (filePath, encoding = 'utf8') => {
  try {
    const data = JSON.parse(fs.readFileSync(filePath), encoding);

    return data;
  } catch (err) {
    console.log(`Error Occurred wile reading ${filePath}\n`, err);

    throw err;
  }
}

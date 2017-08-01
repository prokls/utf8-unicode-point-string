/**
 * Take a string as argument. Encode it as UTF-8 and return a
 * human-readable unicode point representation. Example::
 *
 * @param {string} a string to encode
 * @example
 * to_utf8_unicode_point_string('A')
 * // returns 'U+41'
 * to_utf8_unicode_point_string('hi ルーカスǃ')
 * // returns 'U+686920e383abe383bce382abe382b9c783'
 * @returns {string} a unicode point representation
 */
function to_utf8_unicode_point_string(arg) {
  if (arg.length == 0)
    return "";

  let utf8_bytes = unescape(encodeURIComponent(arg));
  let result = "U+";
  for (let i = 0; i < utf8_bytes.length; i++) {
    result += ('0' + utf8_bytes.charCodeAt(i).toString(16)).slice(-2);
  }

  return result;
}

// example call
to_utf8_unicode_point_string("hi ルーカスǃ")

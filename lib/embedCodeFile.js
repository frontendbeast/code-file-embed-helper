var fs = require('fs');
var path = require('path');

/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * Embed code from an external file as preformatted text.
 *
 * {{embed 'path/to/file.js'}}
 *
 * @param {String} `fp` filepath to the file to embed.
 * @param {String} `language` Optionally specify the language to use for syntax highlighting.
 * @return {String}
 * @api public
 */

helpers.embedCodeFile = function embedCodeFile(fp, ext) {
  ext = typeof ext !== 'string' ? path.extname(fp).slice(1) : ext;
  var code = fs.readFileSync(fp, 'utf8');
  if (ext === 'markdown' || ext === 'md') {
    ext = 'markdown';
    // if the string is markdown, escape backticks
    code = code.split('`').join('&#x60');
  }
  code = code.replace(/[\u00A0-\u9999<>\&]/gim, function(i) { return '&#'+i.charCodeAt(0)+';'; });
  return code.trim() + '\n';
};

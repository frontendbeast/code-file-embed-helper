#embed-code-file-helper
Handlebars helper for embedding code files. For example when using a living styleguide. File content will have all HTML entities encoded.

Example usage:

```
{{ embedCodeFile 'path/to/code-file.ext' }}
```

Taken from [handlebars-helpers](https://github.com/helpers/handlebars-helpers) and tweaked to output an encoded string.

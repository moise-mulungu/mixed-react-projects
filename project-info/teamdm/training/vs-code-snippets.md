
# howto: see section: "Create your own snippets"
https://code.visualstudio.com/docs/editor/userdefinedsnippets#_create-your-own-snippets

# examples of snippets I use
```json
{
	"JSX prop": {
    "prefix": "prop",
    "body": ["$1={$1} $2"],
    "description": "Log output to console"
  },
  "Export default functional component": {
    "prefix": "edfc",
    "body": [
      "import { useState, useEffect } from 'react';",
      "",
      "export default function $1(props) {",
      "\tconst { $2 } = props;",
      "",
      "\treturn (",
      "\t\t<>",
      "\t\t\t$3",
      "\t\t</>",
      "\t);",
      "};",
      ""
    ],
    "description": ""
  },
	  "Export default function hook": {
    "prefix": "edfh",
    "body": [
      "import { useState, useEffect } from 'react';",
      "",
      "export default function $1(props) {",
      "  const { $2 } = props;",
      "",
      "  return $8;",
      "}"
    ],
    "description": "custom hook"
  },
	"Array.reduce": {
    "prefix": ".reduce",
    "body": [".reduce((acc, cur) => {", "\t$2", "\treturn acc;", "}, $1)"],
    "description": "never forget to 'return acc;'"
  },
	  "React Fragment Shorthand": {
    "prefix": "rfs",
    "body": ["<>$1</>"],
    "description": "React Fragment Shorthand"
  },
}
```

css(parts, ...values)
=====================

The `css` tag function creates a `<style>` element as a string.

Usage
-----

```javascript
import {css} from "@kristorres/acutis/utils"

const custom = css`
    body {
        --background: white;
        --font: Inter;
        --text-size-default: 16px;
        --foreground: #212529;
    }
`
```

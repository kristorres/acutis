Themes
======

Acutis comes with two predefined themes: `Light` and `Dark`.

```svelte
<script>
    import {Dark, Light} from "@kristorres/acutis/themes"
</script>
```

Creating a Custom Theme
-----------------------

The following CSS variables are required to create a new theme:

| CSS Variable          | Description |
| --------------------- | ----------- |
| `--background`        | The background color of the page. |
| `--font`              | The default font for the page. |
| `--text-size-default` | The default font size. |
| `--foreground`        | The default color of the content. |

```svelte
<script>
    import {css} from "@kristorres/acutis/utils"

    const theme = css`
        body {
            /* Define CSS variables here. */
        }
    `
</script>

{@html theme}
```

Existing themes can be customized by overriding properties with the `css` tag
function.

```svelte
<script>
    import {Light} from "@kristorres/acutis/themes"
    import {css} from "@kristorres/acutis/utils"

    const custom = css`
        body {
            /* Define CSS variables here. */
        }
    `
</script>

<Light />
{@html custom}
```

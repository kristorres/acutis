Grid
====

The `Grid` component creates a grid layout to arrange its content.

Usage
-----

```svelte
<script>
    import {Grid} from "@kristorres/acutis"
</script>

<style>
    div {
        border: 1px solid green;
        padding: 0.5rem;
    }
</style>

<Grid columns={3} style="border: 1px solid blue; height: 100vh;">
    <div>Grid item 1</div>
    <div>Grid item 2</div>
    <div>Grid item 3</div>
    <div>Grid item 4</div>
</Grid>
```

Props
-----

| Name         | Type                                          | Default | Description |
| ------------ | --------------------------------------------- | ------- | ----------- |
| `children`   | `node`                                        | —       | The content of the grid. |
| `columns`    | `Array<number \| string> \| number \| string` | —       | The columns in the grid. |
| `gap`        | `number \| string`                            | `"8px"` | The space between the cells in the grid. The default unit of length is `px`. |
| `pad`        | `number \| string`                            | `"4px"` | The padding between the content and container edge. The default unit of length is `px`. |
| `rows`       | `Array<number \| string> \| number \| string` | —       | The rows in the grid. |
| `scrollable` | `bool`                                        | `false` | If `true`, the grid can be scrolled when the content overflows. |

You can use DOM element attributes as props directly on the component.

Flex
====

The `Flex` component creates a flexbox container that transforms its direct
children into flex items.

Usage
-----

```svelte
<script>
    import {Flex} from "@kristorres/acutis"
</script>

<style>
    div {
        border: 1px solid green;
        padding: 0.5rem;
    }
</style>

<Flex style="border: 1px solid blue; height: 100vh;">
    <div>Flex item 1</div>
    <div>Flex item 2</div>
    <div>Flex item 3</div>
</Flex>
```

Props
-----

| Name         | Type     | Default     | Description |
| ------------ | -------- | ----------- | ----------- |
| `children`   | `node`   | —           | The content of the component. |
| `cross`      | `string` | `"stretch"` | The alignment of the flex items on the cross axis. |
| `direction`  | `string` | `"column"`  | The “direction” of the flex items in the component. |
| `gap`        | `string` | `"8px"`     | The space between the flex items in the component. |
| `main`       | `string` | `"start"`   | The alignment of the flex items on the main axis. |
| `pad`        | `string` | `"4px"`     | The padding between the content and container edge. |
| `scrollable` | `bool`   | `false`     | If `true`, the component can be scrolled when the content overflows. |

You can use DOM element attributes as props directly on the component.

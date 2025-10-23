Baseline
========

The `Baseline` component sets up a simple and consistent baseline CSS for a web
app.

Usage
-----

```svelte
<script>
    import {Baseline} from "@kristorres/acutis"
    import {Light} from "@kristorres/acutis/themes"
</script>

<Baseline theme={Light} />

<!-- The rest of your app. -->
```

Props
-----

| Name    | Type          | Default | Description |
| ------- | ------------- | ------- | ----------- |
| `theme` | `elementType` | `Light` | The component used for the app theme. |

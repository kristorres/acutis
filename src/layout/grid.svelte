<script>
    import label from "../utils/label.js"

    const {
        columns = null,
        rows = null,
        gap = null,
        pad = null,
        scrollable = false,
        children,
        ...rest
    } = $props()

    const overflow = (scrollable === true)
        ? "auto"
        : null

    const normalize = (value) => {
        if (value === null) {
            return null
        }
        if (Array.isArray(value) === true) {
            return value
                .map(
                    (item) => label(item, "fr")
                )
                .join(" ")
        }
        if (typeof value !== "number") {
            return value
        }
        if (value === 1) {
            return "1fr"
        }

        return `repeat(${value}, 1fr)`
    }
</script>

<style>
    acutis-grid {
        display: grid;
        grid-auto-rows: min-content;
        gap: 8px;
        padding: 4px;
        overflow: hidden;
    }
</style>

<acutis-grid
    style:grid-template-columns={normalize(columns)}
    style:grid-template-rows={normalize(rows)}
    style:gap={label(gap, "px")}
    style:padding={label(pad, "px")}
    style:overflow
    {...rest}
>
    {@render children?.()}
</acutis-grid>

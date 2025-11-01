<script>
    import label from "../utils/label.js"

    const {
        direction = null,
        main = null,
        cross = null,
        gap = null,
        pad = null,
        scrollable = false,
        children,
        ...rest
    } = $props()

    const overflow = (scrollable === true)
        ? "auto"
        : null
</script>

<style>
    acutis-flex {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: stretch;
        gap: 8px;
        padding: 4px;
        overflow: hidden;
    }

    acutis-flex > :global(*) {
        flex-shrink: 0;
    }
</style>

<acutis-flex
    style:flex-direction={direction}
    style:justify-content={main}
    style:align-items={cross}
    style:gap={label(gap, "px")}
    style:padding={label(pad, "px")}
    style:overflow
    {...rest}
>
    {@render children?.()}
</acutis-flex>

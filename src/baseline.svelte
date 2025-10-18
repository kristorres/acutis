<style>
    :global {
        * {
            box-sizing: border-box;
            flex-shrink: 0;
            touch-action: none;
            -webkit-tap-highlight-color: transparent;
        }

        html {
            line-height: 1.125;
            -webkit-text-size-adjust: 100%;

            overflow: hidden;
            width: 100%;
            height: 100%;
            padding: 0px;
            margin: 0px;
        }

        body {
            position: fixed;

            background-color: var(--background, white);
            font-family: var(--font, ui-sans-serif, system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif);
            font-size: var(--text-size-default, 16px);
            color: var(--foreground, #212529);

            overflow: hidden;
            width: 100%;
            height: 100%;
            padding: 0px;
            margin: 0px;
        }
    }
</style>

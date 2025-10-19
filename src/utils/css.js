const css = (parts, ...values) => {
    const content = parts
        .reduce(
            (array, part, index) => [...array, part, values[index] ?? ""],
            []
        )
        .join("")

    return `<style>\n${content}\n</style>`
}

export default css

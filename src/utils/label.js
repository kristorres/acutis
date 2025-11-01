const label = (value, defaultUnit) => {
    if (typeof value === "number") {
        return `${value}${defaultUnit}`
    }

    return value
}

export default label

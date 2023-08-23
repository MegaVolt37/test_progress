export function bem(name, mods = {}) {
  const result = [name]

  for (const [mod, value] of Object.entries(mods)) {
    if (value === true) {
      result.push(`${name}--${mod}`)
    } else if (value) {
      result.push(`${name}--${mod}--${value}`)
    }
  }

  return result.join(" ")
}
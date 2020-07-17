export function handleKeyPress(e: React.KeyboardEvent<HTMLAnchorElement>) {
  e.preventDefault()

  if (e.key === 'Enter' || e.location === 0) {
    const target = e.target as HTMLAnchorElement
    target.click()
  }
}

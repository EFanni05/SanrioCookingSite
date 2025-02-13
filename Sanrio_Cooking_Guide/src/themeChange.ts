export function Theme(currentTheme: number) {
  if (currentTheme === 0) {
    //dark mode
    return 1
  } else {
    // light mode
    return 0
  }
}
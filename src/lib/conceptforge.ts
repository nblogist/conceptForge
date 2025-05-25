// src/lib/conceptforge.ts
export function blendConcepts(
  listA: string[],
  listB: string[]
): string[] {
  // VERY basic example: cross-concatenate prefixes/suffixes
  const blends = []
  for (const a of listA) {
    for (const b of listB) {
      blends.push(`${a.trim()} ${b.trim()}`)
      blends.push(`${b.trim()} ${a.trim()}`)
    }
  }
  // drop duplicates
  return Array.from(new Set(blends))
}

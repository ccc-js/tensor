export function add (a:Array<number>, b:Array<number>) {
  let c = new Array(a.length)
  for (let i = 0; i < a.length; i++) {
    c[i] = a[i] + b[i]
  }
  return c
}

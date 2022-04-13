export default class Counter {
  constructor (public limit: number) {
    this.limit = limit
  }

  // 用一个闭包去保存count，实例化的counter就可以多次使用了
  [Symbol.iterator] () {
    let count = 1
    return {
      next: () => {
        if (count <= this.limit) {
          return { done: false, value: count++ }
        } else {
          return { done: true, value: undefined }
        }
      },
    }
  }
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('Count', () => {
    const counter = new Counter(3)
    const results = []
    for (const i of counter) {
      results.push(i)
    }
    expect(results).toEqual([1, 2, 3])

    // counter可以多次使用
    let n = 1
    for (const i of counter) {
      expect(i).toEqual(n++)
    }
  })
}

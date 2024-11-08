import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useDbStore = defineStore('db', () => {
  const items = reactive(new Map<string, object>())
  const testAction = (count = 1000) => {
    const ids: number[] = Array.from({ length: count }, () => Math.random().toString().split('.')[1])
    ids.map((id) => {
      items.set(id, {
        id: id,
        test: 'test',
        obj: {
          x: 'x',
          y: 'y'
        }
      })
    });
  }
  return { testAction, items }
})

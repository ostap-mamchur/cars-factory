export interface IStorage<T> {
  isFull(): boolean
  add(item: T): void
  get(id: number): T
}
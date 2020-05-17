import { DataStoreOptions, Transformer } from "./types";
import { observable, computed, action } from "mobx";

export class DataStore<T> {
  private readonly transformers: ReadonlyArray<Transformer<T>>;
  @observable
  private _value: T;

  constructor(value: T, { transformers }: DataStoreOptions<T>) {
    this._value = value;
    this.transformers = transformers || [];
  }

  @computed
  get value(): T {
    return this._value;
  }

  @action
  set(value: T): void {
    this._value = this.transformers
      .reduce((val, transformer) => transformer(val), value);;
  }
}

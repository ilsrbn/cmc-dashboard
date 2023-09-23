type NumericKey<T> = {
  [K in keyof T]: T[K] extends number | bigint ? K : never;
}[keyof T];

export function descendingSortBy<T>(array: T[], by: NumericKey<T>): T[] {
  return array.sort((a, b) =>
    typeof a[by] === 'number' && typeof b[by] === 'number'
      ? (b[by] as number) - (a[by] as number)
      : 0
  );
}

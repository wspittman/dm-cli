export function popFirstWord(str: string): { word: string; rest: string } {
  const trimmed = str.trim();
  const index = trimmed.indexOf(' ');
  const hasSpace = index !== -1;

  return {
    word: hasSpace ? trimmed.slice(0, index) : trimmed,
    rest: hasSpace ? trimmed.slice(index + 1).trim() : '',
  };
}

export function splitAndMap<T>(
  str: string,
  separator: RegExp,
  mapper: (str: string) => T | undefined,
): T[] {
  return str.split(separator).map(mapper).filter(Boolean) as T[];
}

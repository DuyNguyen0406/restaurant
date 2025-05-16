export function remToPx(rem: string, baseFontSize?: number) {
  const remValue = parseFloat(rem);

  if (isNaN(remValue)) {
    throw new Error("Invalid rem value");
  }

  if (!baseFontSize) {
    baseFontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
  }

  return remValue * baseFontSize;
}

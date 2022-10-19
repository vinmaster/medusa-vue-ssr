const dollarFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

export class Util {
  static formatDollars(price: number): string {
    return dollarFormatter.format(price);
  }
}

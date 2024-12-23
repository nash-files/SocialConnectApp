export class StringValidator {
  static isNonEmpty(value: string): boolean {
    return value !== null && value !== undefined && value.trim().length > 0;
  }

  static isWithinLength(value: string, maxLength: number): boolean {
    return value.length <= maxLength;
  }

  static isValidUrl(value: string): boolean {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  }
}
export class ErrorHandler {
  static handleError(error: Error, context: string) {
    console.error(`Error in ${context}:`, error);
    // Add error reporting logic here
  }
}
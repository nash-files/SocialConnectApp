type ErrorContext = {
  message: string;
  context: string;
  timestamp: Date;
  stack?: string;
};

export class ErrorHandler {
  private static errors: ErrorContext[] = [];

  static handleError(error: Error, context: string) {
    const errorContext: ErrorContext = {
      message: error.message,
      context,
      timestamp: new Date(),
      stack: error.stack
    };

    this.errors.push(errorContext);
    console.error(`Error in ${context}:`, error);
    
    // Add error reporting logic here
  }

  static getRecentErrors(): ErrorContext[] {
    return [...this.errors].reverse().slice(0, 10);
  }

  static clearErrors(): void {
    this.errors = [];
  }
}
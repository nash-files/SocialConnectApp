import { firebase } from '@nativescript/firebase-core';
import { ErrorHandler } from '../utils/error-handler';

export class BaseService {
  protected firestore = firebase.firestore();
  
  protected handleError(error: Error, context: string) {
    ErrorHandler.handleError(error, context);
  }
}
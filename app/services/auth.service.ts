import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-auth';
import { User } from '../models/user.model';

export class AuthService {
  async signUp(email: string, password: string, username: string): Promise<User> {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user: User = {
      id: userCredential.user.uid,
      email,
      username,
      followers: [],
      following: []
    };
    return user;
  }

  async signIn(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  async signOut() {
    return firebase.auth().signOut();
  }
}
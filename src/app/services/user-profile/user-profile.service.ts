import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface UserProfile {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    birthDate: string;
    bio: string;
}

@Injectable({ providedIn: 'root' })

export class UserProfileService {
    private readonly STORAGE_KEY = 'userProfile';

    private _profile$ = new BehaviorSubject<UserProfile | null>
    (this.loadProfile());

    profile$ = this._profile$.asObservable();

    constructor() {}

    private loadProfile(): UserProfile | null {
        const data = localStorage.getItem(this.STORAGE_KEY);
        return data ? JSON.parse(data) : null;
    }

    saveProfile(profile: UserProfile) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(profile));
        this._profile$.next(profile);
    }
}
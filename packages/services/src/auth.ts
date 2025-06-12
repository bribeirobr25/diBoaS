export interface AuthService {
    login(provider: 'email' | 'google' | 'apple' | 'x'): Promise<string>;
    signup(provider: 'email' | 'google' | 'apple' | 'x'): Promise<string>;
    logout(): Promise<void>;
    enable2FA(): Promise<void>;
}

export class MockAuthService implements AuthService {
    async login() {
        return 'mock-token';
    }
    async signup() {
        return 'mock-token';
    }
    async logout() { }
    async enable2FA() { }
}
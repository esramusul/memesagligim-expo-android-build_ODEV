import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
    email: string;
    setEmail: (email: string) => void;
    name: string;
    setName: (name: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    return (
        <AuthContext.Provider value={{ email, setEmail, name, setName }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

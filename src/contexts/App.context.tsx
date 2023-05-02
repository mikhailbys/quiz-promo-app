import React, {useState} from "react";
import {IndexedDb} from "../database";

interface AppState {
    token: string | null;
    setToken: (token: string | null) => void;
    username: string;
    setUsername: (username: string) => void;
    db: IndexedDb;
}

const DEFAULT_APP_STATE = {
    isSignedIn: false
}

const AppContext = React.createContext<AppState | null>(null);

export const useAppContext = () => {
    const context = React.useContext(AppContext);

    if (!context) {
        throw new Error("useAppContext must be used within the AppContextProvider");
    }

    return context;
}

export const AppContextProvider = ({children}: any) => {
    const db = new IndexedDb();

    const [username, setUsername] = useState('');
    const [token, setToken] = useState<string | null>(null);
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <AppContext.Provider
            value={{username, token, setUsername, setToken, db}}>
            {children}
        </AppContext.Provider>
    );
}
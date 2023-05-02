import {useAppContext} from "../../contexts/App.context";

export const useHeaderState = () => {
    const { username, setToken } = useAppContext();

    return {
        username,
        setToken
    }
}
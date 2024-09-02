import {useState} from "react";

export const useToast = () => {
    const [toasts, setToasts] = useState([]);

    const showToast = (message, type = 'info', duration = 3000) => {
        const id = Date.now();
        setToasts((prevToasts) => [...prevToasts, {id, message, type, duration}]);

        if (toasts.length >= 3) {
            setToasts((prevToasts) => prevToasts.slice(1));
        }

        setTimeout(() => {
            setToasts((prevToasts) => prevToasts.filter(toast => toast.id !== id));
        }, duration)
    }

    const clearToasts = () => setToasts([]);

    return {toasts, showToast, clearToasts};
}
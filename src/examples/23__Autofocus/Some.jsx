export const MyComponent = () => {
    const inputElement = useRef(null);

    useEffect(() => {
        if (inputElement.current) {
            inputElement.current.focus();
        }
    }, []);

    return (
        <label>
            Title
            <input type="text" defaultValue="Untitled" ref={inputElement} />
        </label>
    );
};
export function handleObjectPropertyChange(event, setterFunction) {
    setterFunction((prev) => ({
        ...prev,
        [event.target.name]: event.target.value
    }))
}
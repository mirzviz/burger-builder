const withErrorHandler = (WrappedComponent) => {
    return (props) => {
        return(
            <WrappedComponent {...props} />
        );
    }
}
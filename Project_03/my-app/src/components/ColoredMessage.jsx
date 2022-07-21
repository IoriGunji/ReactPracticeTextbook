export const ColoredMessage = (props) => {
    const { color, children } = props;
    const contntStyle = {
        color,
        fontSize: "20px"
    };

    return <p style={contntStyle}>{children}</p>;
};
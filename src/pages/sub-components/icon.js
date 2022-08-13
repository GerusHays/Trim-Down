
const Icon = ({iconName, iconSize}) => {
    if(iconSize === "sm") {
        return(
            <img src={require(`../../assets/icons/${iconName}.png`)} alt={iconName}  className={`icon-sm`} />
        );
    }

    return(
        <img src={require(`../../assets/icons/${iconName}.png`)} alt={iconName}  className={`icon-md`} />
    );

    
}

export default Icon;

const Icon = ({iconName}) => {
    return(
        <img src={require(`../../assets/icons/${iconName}.png`)} alt={iconName}  className='icon' />
    );
}

export default Icon;
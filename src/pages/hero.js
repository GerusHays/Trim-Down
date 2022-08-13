import Icon from './sub-components/icon';
const Hero = () => {
    return (
        <>
        <div className="hero  ">
            <div className="hero-content text-center py-10">
                <div className="max-w-xl">
                    <h1 className="text-3xl font-bold text-white">
                        Are you trying to "trim" down on expenses and have more money in your pocket?
                    </h1>
                    <img src={require('../assets/images/wallet.png')} alt="money" className="py-6 smm:max-w-md" />
                    
                </div>
               
            </div>
        </div>
        <div className='flex justify-center pb-10'>
            <div className='card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 '>
                <div className='card-body items-center text-center'>
                    <h2 className='card-title'>
                        No matter what you're trying to reduce spending on, we can help! 
                    </h2>
                    <div className='card-actions py-3 '>
                        <Icon iconName={'beer'} iconSize={'md'} />
                        <Icon iconName={'vaping'} iconSize={'md'} />
                        <Icon iconName={'clothes'} iconSize={'md'} />
                        <Icon iconName={'weed'} iconSize={'md'} />
                    </div>
                    <div className='card-actions justify-center'>
                        <button className='btn btn-error'>Sign Up</button>
                        <button className='btn btn-accent '>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}

export default Hero
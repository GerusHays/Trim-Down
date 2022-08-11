
const Hero = () => {
    return (
        <div className=" min-h-screen">
            <div className="hero-content text-center py-10">
                <div className="max-w-xl">
                    <h1 className="text-3xl font-bold text-white">
                        Are you trying to "trim" down on expenses and have more money in your pocket?
                    </h1>
                    <img src={require('../assets/images/wallet.png')} alt="money" className="py-6 smm:max-w-md" />
                    <p className='text-lg font-bold text-white'>We can help you get there! Sign up today! </p>
                    <button className='btn btn-warning btn-wide m-3'>Sign Up</button>
                    <button className='btn btn-accent btn-wide '>Sign In</button>
                </div>
            </div>
        </div>
    );
}

export default Hero
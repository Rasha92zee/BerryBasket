import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Free Shipping Over <b>
                            $100</b> & Free Returns</p>
                    </div>
                </div>

                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper col-sm-3">
                                <Link to="/">
                                    <img src={Logo} alt="Berry Basket Logo" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>  
        </>
    )
}

export default Header;
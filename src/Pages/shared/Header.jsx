
import logo from '../../assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center'>
           <img className='mx-auto mb-5' src={logo} alt="" />
            <p className='text-lg mb-2 text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium'>{moment().format("dddd, MMMM Do, YYYY") }</p>
        </div>
    );
};

export default Header;
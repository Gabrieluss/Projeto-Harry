import './main.css';
import Logo from '../../images/logo.png';

function Main(){
    return(
        <div className='texto'>
            <div>
            <h1>Oi, me chamo <spam>Gabriel!</spam></h1>
            <p>Sou Desenvolvedor Full Stack</p>    
            </div>
            <img src={Logo} alt="Logo"/>
        </div>
    )
}

export default Main;
import style from '../styles/Navbar.module.css'




const Navbar =()=> {
    return(
        <div className="flex justify-between items-center p-5">
            <div className="left flex items-center">
                <img src="navbarlogo.png" alt="" />
                <li className={style.a}><a href="">Landing</a></li>
                <li className={style.a}><a href="">Company</a></li>
                <li className={style.a}><a href="">CMS Pages</a></li>
                <li className={style.a}><a href="">Utility</a></li>
            </div>
            <div className="right flex items-center">
              <button className={style.btn}>$129 Buy Now</button>
              <img src="search.png" alt="" />
              <img src="buy.png" alt="" />
            </div>
        </div>
    )
}

export default Navbar;
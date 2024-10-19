import style from '../styles/Section.module.css'



const Section =()=>{
    return(
        <div>
        <div className="flex justify-between items-center p-5">

            <div className={style.left}>
               <img src="frame.png" className={style.img} alt="" />
            </div>
            <div className={style.right}>
                <img src="2.png" alt="" />
            </div>  
            </div>
            <div className="">
                <img src="3.png" alt="" className={style.img1} />
            </div>
            <div className="">
                <button  className={style.btn}>LANDING PAGES</button>
            </div>
            <div className="flex justify-between items-center p-16">
                <div className={style.left}>
                    <img src="4.png" alt="" />
                </div>
                <div className={style.right}>
                    <img src="5.png" alt="" />
                </div>
            </div>
            <div className="flex justify-between items-center p-16">
                <div className={style.left}>
                    <img src="6.png" alt="" />
                </div>
                <div className={style.right}>
                    <img src="7.png" alt="" />
                </div>
            </div>
            <div className="">
                <button  className={style.btn}>COMPANY</button>
            </div>
            <div className="mt-10 ml-20">
                <img src="8.png" alt="" />
            </div>
            <div className="">
                <button  className={style.btn}>CMS PAGES</button>
            </div>
            <div className="mt-10 ml-20">
                <img src="9.png" alt="" />
            </div>
            <div className="">
                <button  className={style.btn}>UTILITY</button>
            </div>
            <div className="mt-10 ml-20">
                <img src="10.png" alt="" />
            </div>

        </div>
    )
}


export default Section;
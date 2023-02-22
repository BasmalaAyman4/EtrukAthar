import React from 'react'
import styles from "./HomeCounting.module.css"
import { useSpring ,animated } from 'react-spring'  
function Number({n}){
    const {number } = useSpring({
        from: {number :0},
        number :n ,
        delay :200,
        config: { mass:1 ,tension:20,friction:10},
    });
    return <animated.div>{number.to((n)=> n.toFixed(0))}</animated.div>

}
const HomeCounting = () => {
  
  return (
    <section className={`${styles["home-counting"]} mt-5 `}>
    <div className={`${styles["home-counting__container"]} mt-5 `}>
        <div className={`${styles["home-counting__content"]} `}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <big className={`${styles["home-counting__plus"]} `}>+</big>
                            <h3 className={`${styles["home-counting__number"]} `}>
                        
                                <Number n={1} />

                            </h3>
                        
                        </div>
                        <p className={`${styles["home-counting__pragraph"]} `} >مليون دولار تم جمعها</p>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <big className={`${styles["home-counting__plus"]} `}>+</big>
                            <h3 className={`${styles["home-counting__number"]} `}>
                        
                                <Number n={605} />

                            </h3>
                        
                        </div>
                        <p className={`${styles["home-counting__pragraph"]} `} >  حالة تم دعمها </p>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <big className={`${styles["home-counting__plus"]} `}>+</big>
                            <h3 className={`${styles["home-counting__number"]} `}>
                        
                                <Number n={147} />

                            </h3>
                        
                        </div>
                        <p className={`${styles["home-counting__pragraph"]} `} >
                            حملة تم إنجازها
                        </p>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <big className={`${styles["home-counting__plus"]} `}>+</big>
                            <h3 className={`${styles["home-counting__number"]} `}>
                        
                                <Number n={77} />

                            </h3>
                        
                        </div>
                        <p className={`${styles["home-counting__pragraph"]} `} >
                        مشروع تم إنجازه  
                        </p>
                    </div>
                    
                </div>
            </div>
         </div>
         </div>
    </section>
  )
}

export default HomeCounting
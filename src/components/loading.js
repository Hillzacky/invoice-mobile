import Image from 'next/image'
import s from '../public/assets/css/style.css';

export default function Loading(d='d-none'){
    return (
        <>
            <div className={[s.containerFluid, s.loaderWrap, d].join(" ")}>
                <div className={[s.row, s.h100].join(" ")}>
                    <div className="col-10 col-md-6 col-lg-5 col-xl-3 mx-auto text-center align-self-center">
                        <div className={[s.loaderCubeWrap, s.loaderCubeAnimate, s.mxAuto].join(" ")}>
                            <Image src="assets/img/logo.png" alt="Logo"/>
                        </div>
                        <p className={s.mt4}>It's time for track budget<br/><strong>Please wait...</strong></p>
                    </div>
                </div>
            </div>
        </>
    )
}
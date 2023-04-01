
import Image from 'next/image'
import { host } from '@app/libs/helper'

function HomePage() {
  return (
    <>
      <section className="h-100">
        <header className="header position-fixed">
            <div className="row">
                <div className="col-auto">
                    <a href="javascript:void(0)" target="_self" className="btn btn-light btn-44 menu-btn">
                        <i className="bi bi-list"></i>
                    </a>
                </div>
                <div className="col align-self-center text-center">
                    <div className="logo-small">
                        <Image src={ host() + "/public/assets/img/logo.png" } alt="" width={64} height={64}/>
                        <h5>Mobile</h5>
                    </div>
                </div>
                <div className="col-auto">
                    <a href="notifications.html" target="_self" className="btn btn-light btn-44">
                        <i className="bi bi-bell"></i>
                        <span className="count-indicator"></span>
                    </a>
                </div>
            </div>
        </header>
        <div className="main-container container">
            <div className="row mb-4">
                <div className="col-auto">
                    <div className="avatar avatar-50 shadow rounded-10">
                        <Image src="assets/img/user1.jpg" alt=""/>
                    </div>
                </div>
                <div className="col align-self-center ps-0">
                    <h4 className="text-color-theme"><span className="fw-normal">Hi</span>, Maxartkiller</h4>
                    <p className="text-muted">Good Morning</p>
                </div>
            </div>

            <div className="row mb-4 hideonprogress">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="avatar avatar-44 shadow-sm rounded-10">
                                        <Image src="assets/img/user3.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col align-self-center ps-0">
                                    <p className="small mb-1"><a href="profile.html" className="fw-medium">Shelvey</a> <span className="text-muted">requested money</span></p>
                                    <p>150 <span className="text-muted">$</span> <small className="text-muted">1 min ago</small>
                                    </p>
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-44 btn-default shadow-sm">
                                        <i className="bi bi-arrow-up-right-circle"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-0">
                            <div className="col-12">
                                <div className="progress bg-none h-2 hideonprogressbar" data-target="hideonprogress">
                                    <div className="progress-bar bg-theme" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-12 px-0">
                    <div className="swiper-container cardswiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row mb-3">
                                            <div className="col-auto align-self-center">
                                                <Image src="assets/img/masterocard.png" alt=""/>
                                            </div>
                                            <div className="col align-self-center text-end">
                                                <p className="small">
                                                    <span className="text-uppercase size-10">Validity</span><br/>
                                                    <span className="text-muted">09/24</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <h4 className="fw-normal mb-2">
                                                    150540.00
                                                    <span className="small text-muted">USD</span>
                                                </h4>
                                                <p className="mb-0 text-muted size-12">10141 0021 0001 0154</p>
                                                <p className="text-muted size-12">Debit Card</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="card dark-bg">
                                    <div className="card-body">
                                        <div className="row mb-3">
                                            <div className="col-auto align-self-center">
                                                <Image src="assets/img/masterocard.png" alt=""/>
                                            </div>
                                            <div className="col align-self-center text-end">
                                                <p className="small">
                                                    <span className="text-uppercase size-10">Validity</span><br/>
                                                    <span className="text-muted">06/25</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <h4 className="fw-normal mb-2">
                                                    56040.00
                                                    <span className="small text-muted">USD</span>
                                                </h4>
                                                <p className="mb-0 text-muted size-12">10141 0021 0001 0154</p>
                                                <p className="text-muted size-12">Debit Card</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="card theme-radial-gradient border-0">
                                    <div className="card-body">
                                        <div className="row mb-3">
                                            <div className="col-auto align-self-center">
                                                <i className="bi bi-wallet2"></i> Wallet
                                            </div>
                                            <div className="col align-self-center text-end">
                                                <p className="small">
                                                    <span className="text-uppercase size-10">Validity</span><br/>
                                                    <span className="text-muted">Unlimited</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <h4 className="fw-normal mb-2">
                                                    100.00
                                                    <span className="small text-muted">USD</span>
                                                </h4>
                                                <p className="mb-0 text-muted size-12">10141 0021 0001 0154</p>
                                                <p className="text-muted size-12">Debit Card</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col">
                    <h6 className="title">Connections</h6>
                </div>
                <div className="col-auto">
                    <a href="userlist.html" className="small">View all</a>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12 px-0">
                    <div className="swiper-container connectionwiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <a href="profile.html" className="card text-center">
                                    <div className="card-body">
                                        <figure className="avatar avatar-50 shadow-sm mb-1 rounded-10">
                                            <Image src="assets/img/user4.jpg" alt=""/>
                                        </figure>
                                        <p className="text-color-theme size-12 small">Nicolas</p>
                                    </div>
                                </a>
                            </div>

                            <div className="swiper-slide">
                                <a href="profile.html" className="card text-center">
                                    <div className="card-body">
                                        <figure className="avatar avatar-50 shadow-sm mb-1 rounded-10">
                                            <Image src="assets/img/user2.jpg" alt=""/>
                                        </figure>
                                        <p className="text-color-theme size-12 small">Shelvey</p>
                                    </div>
                                </a>
                            </div>

                            <div className="swiper-slide">
                                <a href="profile.html" className="card text-center">
                                    <div className="card-body">
                                        <figure className="avatar avatar-50 shadow-sm mb-1 rounded-10">
                                            <Image src="assets/img/user3.jpg" alt=""/>
                                        </figure>
                                        <p className="text-color-theme size-12 small">Amenda</p>
                                    </div>
                                </a>
                            </div>

                            <div className="swiper-slide">
                                <a href="profile.html" className="card text-center">
                                    <div className="card-body">
                                        <figure className="avatar avatar-50 shadow-sm mb-1 rounded-10">
                                            <Image src="assets/img/user1.jpg" alt=""/>
                                        </figure>
                                        <p className="text-color-theme size-12 small">RXL15</p>
                                    </div>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="profile.html" className="card text-center">
                                    <div className="card-body">
                                        <figure className="avatar avatar-50 shadow-sm mb-1 rounded-10">
                                            <Image src="assets/img/user4.jpg" alt=""/>
                                        </figure>
                                        <p className="text-color-theme size-12 small">Nicolas</p>
                                    </div>
                                </a>
                            </div>

                            <div className="swiper-slide">
                                <a href="profile.html" className="card text-center">
                                    <div className="card-body">
                                        <figure className="avatar avatar-50 shadow-sm mb-1 rounded-10">
                                            <Image src="assets/img/user2.jpg" alt=""/>
                                        </figure>
                                        <p className="text-color-theme size-12 small">Shelvey</p>
                                    </div>
                                </a>
                            </div>

                            <div className="swiper-slide">
                                <a href="profile.html" className="card text-center">
                                    <div className="card-body">
                                        <figure className="avatar avatar-50 shadow-sm mb-1 rounded-10">
                                            <Image src="assets/img/user3.jpg" alt=""/>
                                        </figure>
                                        <p className="text-color-theme size-12 small">Amenda</p>
                                    </div>
                                </a>
                            </div>

                            <div className="swiper-slide">
                                <a href="profile.html" className="card text-center">
                                    <div className="card-body">
                                        <figure className="avatar avatar-50 shadow-sm mb-1 rounded-10">
                                            <Image src="assets/img/user1.jpg" alt=""/>
                                        </figure>
                                        <p className="text-color-theme size-12 small">RXL15</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-12">
                    <div className="card theme-bg text-center">
                        <div className="card-body">
                            <div className="row">
                                <div className="col align-self-center">
                                    <h1>15% OFF</h1>
                                    <p className="size-12 text-muted">
                                        On every bill pay, launch offer get 5% Extra
                                    </p>
                                    <div className="tag border-dashed border-opac">
                                        BILLPAY15OFF
                                    </div>
                                </div>
                                <div className="col-6 align-self-center ps-0">
                                    <Image src="assets/img/offergraphics.png" alt="" className="mw-100"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-12">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="darkmodeswitch"/>
                                <label className="form-check-label text-muted px-2 " for="darkmodeswitch">Activate Dark
                                    Mode</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col">
                    <h6 className="title">Saving Targets</h6>
                </div>
                <div className="col-auto">

                </div>
            </div>
            <div className="row mb-4">
                <div className="col-6 col-md-4 col-lg-3">
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="circle-small">
                                        <div id="circleprogressone"></div>
                                        <div className="avatar avatar-30 alert-primary text-primary rounded-circle">
                                            <i className="bi bi-globe"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto align-self-center ps-0">
                                    <p className="small mb-1 text-muted">USA Trip</p>
                                    <p>60<span className="small">%</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="circle-small">
                                        <div id="circleprogresstwo"></div>
                                        <div className="avatar avatar-30 alert-success text-success rounded-circle">
                                            <i className="bi bi-cash-stack"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto align-self-center ps-0">
                                    <p className="small mb-1 text-muted">Car loan</p>
                                    <p>85<span className="small">%</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="avatar avatar-40 alert-danger text-danger rounded-circle">
                                        <i className="bi bi-house"></i>
                                    </div>
                                </div>
                                <div className="col align-self-center ps-0">
                                    <div className="row mb-2">
                                        <div className="col">
                                            <p className="small text-muted mb-0">Home Loan</p>
                                            <p>3510.00 $</p>
                                        </div>
                                        <div className="col-auto text-end">
                                            <p className="small text-muted mb-0">Next EMI</p>
                                            <p className="small">1 Aug 2024</p>
                                        </div>
                                    </div>

                                    <div className="progress alert-danger h-4">
                                        <div className="progress-bar bg-danger w-50" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col">
                    <h6 className="title">Transactions<br/><small className="fw-normal text-muted">Today, 24 Aug 2021</small>
                    </h6>
                </div>
                <div className="col-auto align-self-center">
                    <a href="transactions.html" className="small">View all</a>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-12 px-0">
                    <ul className="list-group list-group-flush bg-none">
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="avatar avatar-50 shadow rounded-10 ">
                                        <Image src="assets/img/company4.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col align-self-center ps-0">
                                    <p className="text-color-theme mb-0">Zomato</p>                                   
                                    <p className="text-muted size-12">Food</p>
                                </div>                                
                                <div className="col align-self-center text-end">
                                    <p className="mb-0">-25.00</p>                                   
                                    <p className="text-muted size-12">Debit Card 4545</p>
                                </div>
                            </div>
                        </li>
                        
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="avatar avatar-50 shadow rounded-10">
                                        <Image src="assets/img/company5.png" alt=""/>
                                    </div>
                                </div>
                                <div className="col align-self-center ps-0">
                                    <p className="text-color-theme mb-0">Uber</p>                                   
                                    <p className="text-muted size-12">Travel</p>
                                </div>                                
                                <div className="col align-self-center text-end">
                                    <p className="mb-0">-26.00</p>                                   
                                    <p className="text-muted size-12">Debit Card 4545</p>
                                </div>
                            </div>
                        </li>
                        
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="avatar avatar-50 shadow rounded-10">
                                        <Image src="assets/img/company1.png" alt=""/>
                                    </div>
                                </div>
                                <div className="col align-self-center ps-0">
                                    <p className="text-color-theme mb-0">Starbucks</p>                                   
                                    <p className="text-muted size-12">Food</p>
                                </div>                                
                                <div className="col align-self-center text-end">
                                    <p className="mb-0">-18.00</p>                                   
                                    <p className="text-muted size-12">Cash</p>
                                </div>
                            </div>
                        </li>
                        
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="avatar avatar-50 shadow rounded-10">
                                        <Image src="assets/img/company3.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col align-self-center ps-0">
                                    <p className="text-color-theme mb-0">Walmart</p>                                   
                                    <p className="text-muted size-12">Clothing</p>
                                </div>                                
                                <div className="col align-self-center text-end">
                                    <p className="mb-0">-105.00</p>                                   
                                    <p className="text-muted size-12">Wallet</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col">
                    <h6 className="title">News and Upcomming</h6>
                </div>
                <div className="col-auto align-self-center">
                    <a href="blog.html" className="small">Read more</a>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <a href="blog-details.html" className="card mb-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="avatar avatar-60 shadow-sm rounded-10 coverImage">
                                        <Image src="assets/img/news.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col align-self-center ps-0">
                                    <p className="text-color-theme mb-1">Do share and Earn a lot</p>                                   
                                    <p className="text-muted size-12">Get $10 instant as reward while your friend or invited member join FiMobile</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                
                <div className="col-12 col-md-6 col-lg-4">
                    <a href="blog-details.html" className="card mb-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="avatar avatar-60 shadow-sm rounded-10 coverImage">
                                        <Image src="assets/img/news1.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col align-self-center ps-0">
                                    <p className="text-color-theme mb-1">Walmart news latest picks</p>                                   
                                    <p className="text-muted size-12">Get $10 instant as reward while your friend or invited member join FiMobile</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                
                <div className="col-12 col-md-6 col-lg-4">
                    <a href="blog-details.html" className="card mb-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-auto">
                                    <div className="avatar avatar-60 shadow-sm rounded-10 coverImage">
                                        <Image src="assets/img/news2.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col align-self-center ps-0">
                                    <p className="text-color-theme mb-1">Do share and Help us</p>                                   
                                    <p className="text-muted size-12">Get $10 instant as reward while your friend or invited member join Mobile</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

        </div>
      </section>
    </>
  )
}

export default HomePage
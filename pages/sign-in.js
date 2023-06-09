import Header from '@app/components/header';
import Footer from '@app/components/footer';
import Image from 'next/image';
import cs from '../public/assets/css/sign-in.css';


export default function SignIn() {
  return (
	<>
		<main class="container-fluid h-100">
			<div class="row h-100 overflow-auto">
				<div class="col-12 text-center mb-auto px-0">
					<header class="header">
						<div class="row">
							<div class="col-auto"></div>
							<div class="col">
								<div class="logo-small">
									<Image src="assets/img/logo.png" alt=""/>
									<h5>FiMobile</h5>
								</div>
							</div>
							<div class="col-auto"></div>
						</div>
					</header>
				</div>
				<div class="col-10 col-md-6 col-lg-5 col-xl-3 mx-auto align-self-center text-center py-4">
					<h1 class="mb-4 text-color-theme">Sign in</h1>
					<form class="was-validated needs-validation" novalidate>
						<div class="form-group form-floating mb-3 is-valid">
							<input type="text" class="form-control" value="maxartkiller" id="email" placeholder="Username"/>
							<label class="form-control-label" for="email">Username</label>
						</div>

						<div class="form-group form-floating is-invalid mb-3">
							<input type="password" class="form-control " id="password" placeholder="Password"/>
							<label class="form-control-label" for="password">Password</label>
							<button type="button" class="text-danger tooltip-btn" data-bs-toggle="tooltip"
								data-bs-placement="left" title="Enter valid Password" id="passworderror">
								<i class="bi bi-info-circle"></i>
							</button>
						</div>
						<p class="mb-3 text-center">
							<a href="forgot-password.html" class="">
								Forgot your password?
							</a>
						</p>

						<button type="button" class="btn btn-lg btn-default w-100 mb-4 shadow"
							onclick="window.location.replace('index.html');">
							Sign in
						</button>
					</form>
					<p class="mb-2 text-muted">Don't have account?</p>
					<a href="signup.html" target="_self" class="">
						Sign up <i class="bi bi-arrow-right"></i>
					</a>

				</div>
				<div class="col-12 text-center mt-auto">
					<div class="row justify-content-center footer-info">
						<div class="col-auto">
							<p class="text-muted">Or you can continue with </p>
						</div>
						<div class="col-auto ps-0">
							<a href="#" class="p-1"><i class="bi bi-twitter"></i></a>
							<a href="#" class="p-1"><i class="bi bi-google"></i></a>
							<a href="#" class="p-1"><i class="bi bi-facebook"></i></a>
						</div>
					</div>
				</div>
			</div>
		</main>
    </>
  )
}

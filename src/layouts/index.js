import Header from '../components/header';
import Footer from '../components/footer';

export default function Layout({main,pg}){
	return(
			<>
				<Header />
				<main className="body-scroll" data-page={pg} >{main}</main>
				<Footer />
			</>
	)
}


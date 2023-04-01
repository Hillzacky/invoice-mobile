import Header from '@app/components/header';
import Footer from '@app/components/footer';

export default function Layout({main,pg}){
	return(
			<>
				<Header />
				<main className="body-scroll" data-page={pg} >{main}</main>
				<Footer />
			</>
	)
}


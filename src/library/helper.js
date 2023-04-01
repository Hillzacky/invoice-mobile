function allowMethod(r,m){
    if(r.method!==m) return r.status(405).end();
}

function host(){
	//import { useRouter } from 'next/router';

	const r = require('next/router').useRouter();
	const o = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
	return o+r.asPath;  
}

export default { host, allowMethod }
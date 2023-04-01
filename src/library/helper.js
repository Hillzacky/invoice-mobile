function allowMethod(r,m){
    if(r.method!==m) return r.status(405).end();
}

function host(o='url'){
	if(o=='url') return window.location.protocol + '//' + window.location.host;
	if(o=='path') return window.location.pathname.split('/');
}

export default { host, allowMethod }
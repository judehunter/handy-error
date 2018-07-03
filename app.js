var _Error = Error;
Error = function (c = 'ERR', m = '', x = {}){
	let e = new _Error(m);
	e.code = c;
	e.extra = x;
	return e;
}

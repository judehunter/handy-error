var defC, defM, defX;
function HandyError (c = defC, m = defM, x = defX){
	let e = new Error(m);
	Error.captureStackTrace(e, HandyError);
	if (c)
		e.code = c;
	if (x)
		e.extra = x;
	return e;
}
module.exports = HandyError;
module.exports.config = (c, m, x) => {
	defC = c; defM = m; defX = x; return HandyError;
}

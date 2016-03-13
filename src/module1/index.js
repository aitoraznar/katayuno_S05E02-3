function splitIntoThree(coin) {
	
}

function exchange(coin) {
	if(coin<=12){
		return coin;
	}
	else{
		return coin+1;
	}
}


module.exports = {
	exchange: exchange
};

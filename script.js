const determineDate = (day, leap) => {
	let daysInYear = 365;
	if (leap) {
		daysInYear = 366;
		day += 1;
	}
	
	let month = '';
	let dayOfMonth = 0;
	
	
	if (day > daysInYear - 32) {
		month = 'December';
		dayOfMonth = day - (daysInYear - 32);
	} else if (day > daysInYear - 62) {
		month = 'November';
		dayOfMonth = day - (daysInYear - 62);
	} else if (day > daysInYear - 93) {
		month = 'October';
		dayOfMonth = day - (daysInYear - 93);
	} else if (day > daysInYear - 123) {
		month = 'September';
		dayOfMonth = day - (daysInYear - 123);
	} else if (day > daysInYear - 154) {
		month = 'August';
		dayOfMonth = day - (daysInYear - 154);
	} else if (day > daysInYear - 185) {
		month = 'July';
		dayOfMonth = day - (daysInYear - 185);
	} else if (day > daysInYear - 215) {
		month = 'June';
		dayOfMonth = day - (daysInYear - 215);
	} else if (day > daysInYear - 246) {
		month = 'May';
		dayOfMonth = day - (daysInYear - 246);
	} else if (day > daysInYear - 276) {
		month = 'April';
		dayOfMonth = day - (daysInYear - 276);
	} else if (day > daysInYear - 307) {
		month = 'March';
		dayOfMonth = day - (daysInYear - 307);
	} else if (day < 31) {
		month = 'January';
		dayOfMonth = day + 1;
	} else {
		month = 'February';
		dayOfMonth = day - 30;
	}
	
	return [month, dayOfMonth];
}

const generateDateAndTime = () => {

	let day = Math.floor(Math.random() * 1461);
	let date = [];
	let leap = false;
	let sign = '';

	let year = ((Math.floor(Math.random() * 50)) * 4) + 1900;
	if (day < 366) {
		leap = true;
	} else if (day < 731) {
		year += 1;
	} else if (day < 1096) {
		year += 2;
	} else {
		year += 3;
	}

	date = determineDate((day % 365 - 1), leap);

	let minute = (Math.floor(Math.random() * 1440));
	day += ((Math.round(minute / 1.44)) / 1000);
	let time = [Math.floor(minute / 60), (minute % 60)]
	
	let adjustedDate = ((Math.floor((year - 2000) / 4)) * 1461) + day;

	return {
		year, date, time, day, adjustedDate, sign
	};
}


const determineSunSign = (obj) => {
	let degree = Math.abs(((obj.adjustedDate % 365.06825) / 365.06825) * 360);
	console.log(degree)

	if (degree < 30) {
		return 'Aries';
	} else if (degree < 60) {
		return 'Taurus';
	} else if (degree < 90) {
		return 'Gemini';
	} else if (degree < 120) {
		return 'Cancer';
	} else if (degree < 150) {
		return 'Leo';
	} else if (degree < 180) {
		return 'Virgo';
	} else if (degree < 210) {
		return 'Libra';
	} else if (degree < 240) {
		return 'Scorpio';
	} else if (degree < 270) {
		return 'Sagittarius';
	} else if (degree < 300) {
		return 'Capricorn';
	} else if (degree < 330) {
		return 'Aquarius';
	} else if (degree < 360) {
		return 'Pisces';
	} else {
		return 'Aries';
	}
}

let test1 = generateDateAndTime();
test1.sign = determineSunSign(test1);
console.log(test1);
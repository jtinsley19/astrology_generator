const determineDate = (day, leap) => {
	let daysInYear = 365;
	if (leap) {
		daysInYear = 366;
		day += 1;
	}
	
	let month = '';
	let dayOfMonth = 0;
	
	
	if (day > daysInYear - 31) {
		month = 'December';
		dayOfMonth = day - (daysInYear - 31);
	} else if (day > daysInYear - 61) {
		month = 'November';
		dayOfMonth = day - (daysInYear - 61);
	} else if (day > daysInYear - 92) {
		month = 'October';
		dayOfMonth = day - (daysInYear - 92);
	} else if (day > daysInYear - 122) {
		month = 'September';
		dayOfMonth = day - (daysInYear - 122);
	} else if (day > daysInYear - 153) {
		month = 'August';
		dayOfMonth = day - (daysInYear - 153);
	} else if (day > daysInYear - 184) {
		month = 'July';
		dayOfMonth = day - (daysInYear - 184);
	} else if (day > daysInYear - 214) {
		month = 'June';
		dayOfMonth = day - (daysInYear - 214);
	} else if (day > daysInYear - 245) {
		month = 'May';
		dayOfMonth = day - (daysInYear - 245);
	} else if (day > daysInYear - 275) {
		month = 'April';
		dayOfMonth = day - (daysInYear - 275);
	} else if (day > daysInYear - 306) {
		month = 'March';
		dayOfMonth = day - (daysInYear - 306);
	} else if (day <= 31) {
		month = 'January';
		dayOfMonth = day;
	} else {
		month = 'February';
		dayOfMonth = day - 31;
	}
	
	return [month, dayOfMonth];
}

const generateDateAndTime = () => {

	let day = Math.floor(Math.random() * 1461);
	let date = [];
	let leap = false;

	let year = ((Math.floor(Math.random() * 50)) * 4) + 1900;
	if (day <= 366) {
		leap = true;
	} else if (day <= 731) {
		year += 1;
	} else if (day <= 1096) {
		year += 2;
	} else {
		year += 3;
	}

	date = determineDate((day % 365 - 1), leap);

	let minute = (Math.floor(Math.random() * 1440));
	console.log(day + ' ' + minute);
	day += (Math.round(minute / 1.44)) / 1000;
	console.log(day);
	let time = [Math.floor(minute / 60), (minute % 60)]
	
	
	return {
		year, date, time, day
	};
}

let test1 = generateDateAndTime();

console.log(test1);
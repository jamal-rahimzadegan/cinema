const perCharAndNum =
	/^[0-9  ء ا آ ئ ب پ ت ث ج چ ح خ د ذ ر ز ژ س ش ص ض ط ظ ع غ ف ق ک گ ل م ن و ه ی ۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹]+$/;
const engChar = /^[0-9 A-Za-z\s]+$/;
const perChar = /^[  ء ا آ ئ ب پ ت ث ج چ ح خ د ذ ر ز ژ س ش ص ض ط ظ ع غ ف ق ک گ ل م ن و ه ی]+$/;
const onlyNumberRegx = /^[0-9]*$/;
const persianDigits = /[\u0660-\u0669\u06F0-\u06F9]/g;
const onlyEnglishAlphabetRegx = /^[A-Za-z\s]+$/;
const containsHtml = /<\/?[a-z][\s\S]*>/i;
const phoneNumber = /^09[\d]{9}$/;

export default {
	engChar,
	perCharAndNum,
	perChar,
	onlyEnglishAlphabetRegx,
	onlyNumberRegx,
	persianDigits,
	containsHtml,
	phoneNumber,
};

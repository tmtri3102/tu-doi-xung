function isPalindrome(s) {
	// Chuyển đổi chuỗi về chữ thường và loại bỏ các ký tự không phải là chữ cái và số
	s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

	// Hàm đệ quy kiểm tra tính đối xứng
	function checkPalindrome(start, end) {
		// Nếu chỉ còn một ký tự hoặc không có ký tự nào
		if (start >= end) {
			return true;
		}
		// Kiểm tra ký tự đầu và cuối
		if (s[start] !== s[end]) {
			return false;
		}
		// Gọi đệ quy với phần còn lại của chuỗi
		return checkPalindrome(start + 1, end - 1);
	}

	return checkPalindrome(0, s.length - 1);
}

// Ví dụ kiểm tra
console.log(isPalindrome("Rotor")); // true
console.log(isPalindrome("Redder")); // true
console.log(isPalindrome("Motor")); // false

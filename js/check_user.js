var eyeIcon = document.getElementById("eye-icon");
var eye = document.getElementById("hide-eye");
var eyeSlash = document.getElementById("hide-eye-slash");
eyeIcon.onclick = function () {
	var password = document.getElementById("pwd");
	if (password.type == "password") {
		password.type = "text";
		eye.style.display = "block";
		eyeSlash.style.display = "none";

	} else {
		password.type = "password";
		eye.style.display = "none";
		eyeSlash.style.display = "block";
	}
}

function loginClick() {
	var filter1 = /[a-zA-Z0-9]+$/
	var filter2 = /[a-zA-Z0-9\@]+$/
	var x = true;
	var formname = document.forms["login-form"]["user"].value;
	var formpass = document.forms["login-form"]["pwd"].value;

	if (formname == "" || formpass == "") {
		alert('Không được bỏ trống các trường.');
		x = false;
		return;
	}
	if (!filter1.test(formname)) {
		alert("Họ Tên không được chứa kí tự đặc biệt.");
		x = false;
		return;
	}
	if (!filter2.test(formpass)) {
		alert("Mật khẩu không được chứa kí tự đặc biệt khác @.");
		x = false;
		return;
	}
	if (formname.match(/\s/g) || formpass.match(/\s/g)) {
		alert('Họ Tên và Mật khẩu không được chứa khoảng trắng.');
		x = false;
		return;
	}
	if (Boolean(x) == true) {
		alert('Đăng nhập thành công!!');
		return;
	}
}
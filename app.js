const registerForm = document.getElementById('register-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('passwordConfirm');

// 폼 제출 시 비밀번호 일치 검사
registerForm.addEventListener('submit', function (event) {
  // 기본 동작 방지 (폼 제출 방지)
  event.preventDefault();

  if (password.value === confirmPassword.value) {
    //서버로 회원가입 데이터 전송 로직

    //회원가입 성공시 로직
    alert("회원가입 성공!");
    window.location.href = "/login.html";
  } else {
    alert("비밀번호가 일치하지 않습니다!");
  }
});
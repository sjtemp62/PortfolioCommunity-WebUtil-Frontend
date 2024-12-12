document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('문의가 성공적으로 전송되었습니다.');
    document.getElementById('contactForm').reset();
});

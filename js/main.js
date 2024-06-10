document.addEventListener('DOMContentLoaded', function () {
  // == Nav 버튼 클릭 이벤트
  var $btnHome = document.getElementById('btnHome');
  var $btnSkills = document.getElementById('btnSkills');
  var $btnResume = document.getElementById('btnResume');
  var $btnPortfolio = document.getElementById('btnPortfolio');

  $btnHome.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  $btnSkills.addEventListener('click', function () {
    document.querySelector('.skills').scrollIntoView({ behavior: 'smooth' });
  });

  $btnResume.addEventListener('click', function () {
    document.querySelector('.resume').scrollIntoView({ behavior: 'smooth' });
  });

  $btnPortfolio.addEventListener('click', function () {
    document.querySelector('.portfolio').scrollIntoView({ behavior: 'smooth' });
  });
  // === Nav 버튼 완료

  // === contact 모달창
  document.getElementById('contactButton').addEventListener('click', function() {
    var contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
    contactModal.show();
  });

  // === viedo 모달창
  document.getElementById('videoModal').addEventListener('hidden.bs.modal', function () {
    var video = document.getElementById('modalVideo');
    video.pause();
    video.currentTime = 0;
  });

});
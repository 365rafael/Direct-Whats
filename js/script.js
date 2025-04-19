const phoneInput = document.getElementById('phone');

IMask(phoneInput, {
  mask: '0000000-0000'
});

document.getElementById('whatsappForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const rawPhone = phoneInput.value.replace(/\D/g, '');
  const message = encodeURIComponent(document.getElementById('message').value.trim());

  if (rawPhone.length < 10) {
    alert('Digite um número válido com DDD.');
    return;
  }

  const fullPhone = `55${rawPhone}`;
  const link = `https://wa.me/${fullPhone}?text=${message}`;

  window.open(link, '_blank');
});

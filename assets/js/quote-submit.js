(() => {
  const form = document.getElementById('quoteForm');
  const status = document.querySelector('.quote-status');
  if (!form || !status) return;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const button = form.querySelector('[type="submit"]');
    const original = button.textContent;
    button.disabled = true;
    button.textContent = 'Sending…';
    status.textContent = 'Sending your inquiry…';
    const data = Object.fromEntries(new FormData(form).entries());
    data._subject = 'RareMate website inquiry' + (data.company ? ' - ' + data.company : '');
    data._replyto = data.customerEmail;
    data._template = 'table';
    data._captcha = 'false';
    try {
      const response = await fetch('https://formsubmit.co/ajax/sales@raremate.com', {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data)
      });
      const result = await response.json();
      if (!response.ok || String(result.success).toLowerCase() !== 'true') throw new Error('Submission was not accepted');
      status.textContent = 'Your inquiry was submitted. Thank you; we will respond by email.';
      form.reset();
    } catch (error) {
      status.textContent = 'We could not submit your inquiry. Please try again or email sales@raremate.com directly.';
    } finally {
      button.disabled = false;
      button.textContent = original;
    }
  });
})();

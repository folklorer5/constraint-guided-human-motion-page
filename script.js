(() => {
  const button = document.getElementById('copyBib');
  const bib = document.getElementById('bibtex');
  if (!button || !bib) return;

  button.addEventListener('click', async () => {
    const original = button.textContent;
    try {
      await navigator.clipboard.writeText(bib.textContent);
      button.textContent = 'Copied';
    } catch (_) {
      button.textContent = 'Select text';
    }
    setTimeout(() => { button.textContent = original; }, 1500);
  });
})();

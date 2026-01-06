// Tabs
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// Contacts card
const btn = document.getElementById('contactsBtn');
const card = document.getElementById('contactsCard');

btn.addEventListener('click', () => {
  card.style.display = card.style.display === 'flex' ? 'none' : 'flex';
});

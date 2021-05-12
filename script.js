const projects = [
  'four-card-feature-section',
  'intro-component-with-signup-form',
  'base-apparel-coming-soon',
  'single-price-grid-component',
  'ping-coming-soon-page',
  'huddle-landing-page-simple',
  'huddle-landing-page',
  'fylo-landing-page',
  'insure-landing-page',
  'pricing-component-with-toggle'
]

const list = document.getElementById('list');

projects.forEach(project => {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = `/${project}/index.html`;
  link.innerHTML = `<p>${formatProjectName(project)}</p>`;


  const img = document.createElement('img');
  img.src = `${project}/design/desktop-preview.jpg`;
  link.prepend(img);

  listItem.appendChild(link);
  list.appendChild(listItem);
});

function formatProjectName(name) {
  return name.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
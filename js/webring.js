(async () => {
  const [rawSlug, directionRaw] = window.location.pathname.split('/').filter(Boolean);
  const slug = rawSlug.replace(/^@/, '');
  const direction = directionRaw.replace(/\.html$/, '');
  const res = await fetch('/webring.json');
  if (!res.ok) return;
  const mapping = await res.json();
  const slugs = Object.keys(mapping);
  const index = slugs.indexOf(slug);
  if (index === -1) return;
  const newIndex = direction === 'next'
    ? (index + 1) % slugs.length
    : direction === 'prev'
      ? (index - 1 + slugs.length) % slugs.length
      : -1;
  if (newIndex === -1) return;
  const targetUrl = mapping[slugs[newIndex]];
  if (targetUrl) window.location.href = targetUrl;
})();

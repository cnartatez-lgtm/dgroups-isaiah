// Presentation only: approved lesson records remain unchanged.
const escape = text => String(text ?? '').replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
export const bibleAuthority = 'Only the Bible is inspired by God. These commentaries are human reflections, always read them under the authority of God’s Word.';
export const beforeYouBegin = 'These commentaries grow out of this week’s passage. They are not required, and they are not the main thing. They are simply here to help, a little extra for your study. Feel free to use them or not, and to choose the point that best fits your group’s conversation. You do not need to cover everything. What matters most is to read the passage, pray, study it together and let it reach your hearts, so that we respond to God in obedience to his Word. Each point also opens other themes you can explore, as your time and energy allow. Our prayer is that God will guide you, give you wisdom and bring fruit from your time in his Word.';
const authorityPattern = /Only the Bible is inspired by God\. These commentaries are human reflections, always read them under the authority of God[’']s Word\./g;

function formatLine(line) {
 const text = line.trim();
 if (/^A final word[.:]?$/i.test(text)) return '';
 const subtitle = text.match(/^(Before You Begin|Reflection question|Optional Ideas to Explore)(\s*:)?(?:\s+(.*))?$/i);
 if (subtitle && (!subtitle[3] || subtitle[2])) {
  const label = escape(subtitle[1] + (subtitle[2] || ''));
  return `<strong class="commentary-subtitle">${label}</strong>${subtitle[3] ? ' ' + escape(subtitle[3]) : ''}`;
 }
 // Escape prose before adding emphasis; lesson strings never supply HTML.
 let position = 0, result = '';
 for (const match of text.matchAll(authorityPattern)) {
  result += escape(text.slice(position, match.index)) + `<strong class="bible-authority">${escape(match[0])}</strong>`;
  position = match.index + match[0].length;
 }
 return result + escape(text.slice(position));
}

export function formatCommentary(text) {
 return String(text ?? '').split(/\n\s*\n/).map(paragraph => paragraph.split('\n').map(formatLine).filter(Boolean).join('<br>')).filter(Boolean).map(paragraph => `<p>${paragraph}</p>`).join('');
}

export function formatIntroduction(text) {
 let original = String(text ?? '').trim();
 // Existing complete prefatory material is replaced with this same shared block,
 // so it is neither duplicated nor placed before the regular introductory copy.
 const authority = original.match(/Only the Bible is inspired by God\. These commentaries are human reflections, always read them under the authority of God[’']s Word\./);
 if (/^Before You Begin\b/i.test(original) && authority) original=original.slice(authority.index+authority[0].length).trim();
 const preface = `<section class="commentary-preface"><p><strong class="commentary-subtitle">Before You Begin</strong></p><p class="commentary-preface-copy">${escape(beforeYouBegin)}</p><p><strong class="bible-authority">${escape(bibleAuthority)}</strong></p></section>`;
 return preface + formatCommentary(original);
}

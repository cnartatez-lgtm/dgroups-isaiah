const escape=text=>String(text??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function renderIntroduction(introduction){
 const prose=indexes=>indexes.map(i=>{const s=introduction.sections[i];return `<section class="intro-topic"><h5>${escape(s.title)}</h5><p class="book-references">${escape(s.reference)}</p>${s.paragraphs.map(p=>`<p>${escape(p)}</p>`).join('')}</section>`;}).join('');
 return `<section class="paper inductive-guide" aria-labelledby="inductive-title">
  <span class="eyebrow">READ · UNDERSTAND · RESPOND</span>
  <h3 id="inductive-title">How to study together</h3>
  <p class="method-opening">Begin with Scripture. Read the passage aloud and pray for understanding. Inductive study moves from noticing what the text says to understanding its meaning and responding to God.</p>
  <div class="inductive-steps">
   <section><span class="method-step">01</span><h4>Observation</h4><p class="method-question">Who is involved, and what happens?</p><p>Notice the people, actions, repeated words and contrasts. Describe what you can see in the passage before drawing conclusions.</p></section>
   <section><span class="method-step">02</span><h4>Interpretation</h4><p class="method-question">What is the main point for the first hearers?</p><p>Follow the surrounding verses and ask what the words meant in their setting. Use related Scriptures and historical context to check your understanding.</p></section>
   <section><span class="method-step">03</span><h4>Application</h4><p class="method-question">What does this show us about God, and how will we respond?</p><p>Let the passage shape what you trust, desire and do. Choose a concrete response of faith or obedience, and pray for one another as you put it into practice.</p></section>
  </div>
  <p class="method-closing">Give one another room to notice and reflect. Let Scripture guide the conversation, and turn to the study tools and commentaries as supporting help.</p>
 </section>
<article class="paper book-introduction"><span class="eyebrow">MEET THE BOOK</span><h3>${escape(introduction.title)}</h3><p class="book-opening">${escape(introduction.opening)}</p>
 <section class="book-category"><span class="eyebrow">01 · THE PROPHET AND HIS WORLD</span><h4>Before the Holy One</h4>${prose([0,1,8])}<h5>Four kings. One enduring King.</h5>${introduction.kings.map(k=>`<p><strong>${escape(k.name)} · ${escape(k.theme)}</strong><br>${escape(k.text)} <small>(${escape(k.reference)})</small></p>`).join('')}<h5>Prophets in the whole of life</h5><p>A teaching lens from the supplied presentations. These spheres overlap; they do not limit any prophet’s message.</p>${introduction.spheres.map(([name,setting,text])=>`<p><strong>${escape(name)} · ${escape(setting)}</strong><br>${escape(text)}</p>`).join('')}</section>
 <section class="book-category"><span class="eyebrow">02 · REDEMPTION AND HOPE</span><h4>The future God opens</h4>${prose([2,4,9,10])}</section>
 <section class="book-category"><span class="eyebrow">03 · A PEOPLE CALLED TO RESPOND</span><h4>Trust, worship and everyday life</h4>${prose([3,5,6,7])}</section><p class="annotation intro-source">${escape(introduction.subtitle)}</p></article>`;
}

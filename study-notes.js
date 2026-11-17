// Shared notes UI. A cloud repository supplies list() and create() at activation.
// Names and comments are always rendered as text, never interpreted as HTML.
export function mountStudyNotes(root, {chapter, repository, preview = false}) {
  if (!Number.isInteger(chapter) || chapter < 1 || chapter > 66) throw new Error('Invalid chapter');
  let disposed = false, loading = false, posting = false, request = 0, next = null, allNotes = [], total = 0;
  const abort = new AbortController();
  root.replaceChildren();
  const make = (tag, className, content) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (content !== undefined) el.textContent = content;
    return el;
  };
  const section = make('section', 'study-notes');
  section.setAttribute('aria-labelledby', `notes-heading-${chapter}`);
  const top = make('div', 'notes-heading');
  const heading = make('div');
  heading.append(make('span', 'notes-eyebrow', `ISAIAH ${chapter} · GROW TOGETHER`));
  const title = make('h2', '', 'Study notes'); title.id = `notes-heading-${chapter}`;
  heading.append(title);
  const refresh = make('button', 'notes-refresh', 'Refresh'); refresh.type = 'button';
  top.append(heading, refresh);
  section.append(top, make('p', 'notes-intro', 'Share a question, an observation or an encouragement from this chapter.'));
  const notice = make('p', 'notes-visibility', preview
    ? 'Design preview · Example notes only. Cloud storage is not connected.'
    : 'Your name and note will be public. Names are provided by contributors.');
  section.append(notice);
  const form = make('form', 'notes-form');
  const nameLabel = make('label', '', 'Your name');
  const name = make('input'); name.type = 'text'; name.name = 'display_name';
  name.autocomplete = 'name'; name.required = true; name.maxLength = 60;
  name.placeholder = 'Name shown with your note'; nameLabel.append(name);
  const bodyLabel = make('label', '', 'Your study note');
  const body = make('textarea'); body.name = 'body'; body.required = true;
  body.maxLength = 2000; body.rows = 5; body.placeholder = 'What stood out to you in this chapter?';
  bodyLabel.append(body);
  const counter = make('span', 'notes-counter', '0 / 2,000');
  body.setAttribute('aria-describedby', `notes-help-${chapter}`);
  const help = make('p', 'notes-help', 'Keep it kind and relevant to the chapter. Please do not include private information.');
  help.id = `notes-help-${chapter}`;
  const submitRow = make('div', 'notes-submit-row');
  const submit = make('button', 'notes-submit', preview ? 'Try adding a note' : 'Post note'); submit.type = 'submit';
  submitRow.append(counter, submit);
  form.append(nameLabel, bodyLabel, help, submitRow); section.append(form);
  const status = make('p', 'notes-status'); status.setAttribute('role','status'); status.setAttribute('aria-live','polite');
  section.append(status);
  const listTitle = make('h3', 'notes-list-title', 'Chapter conversation');
  const list = make('div', 'notes-list'); list.setAttribute('aria-label', `Study notes for Isaiah ${chapter}`);
  const older=make('button','notes-refresh','Load earlier notes');older.type='button';older.hidden=true;
  section.append(listTitle, list, older); root.append(section);
  const alive = () => !disposed && root.isConnected;
  function controls() {
    refresh.disabled = loading || posting;
    older.disabled = loading || posting;
    submit.disabled = posting;
    name.disabled = posting; body.disabled = posting;
    submit.textContent = posting ? 'Saving…' : preview ? 'Try adding a note' : 'Post note';
  }
  function showNotes(notes) {
    list.replaceChildren();
    const safeNotes = notes.filter(note => note.chapter === chapter);
    listTitle.textContent = `Chapter conversation (${total})`;
    if (!safeNotes.length) {
      list.append(make('p','notes-empty','No notes yet. Start the conversation about this chapter.'));
      return;
    }
    for (const note of safeNotes) {
      const article = make('article', 'study-note');
      const head = make('div', 'study-note-head');
      const author = make('strong', '', note.display_name);
      const time = make('time');
      const date = new Date(note.created_at);
      if (!Number.isNaN(date.getTime())) {
        time.dateTime = date.toISOString();
        time.textContent = new Intl.DateTimeFormat('en-GB', {
          dateStyle: 'medium', timeStyle: 'short', timeZone: 'Europe/Paris'
        }).format(date);
      }
      head.append(author, time);
      article.append(head, make('p', 'study-note-body', note.body));
      list.append(article);
    }
  }
  async function load({quiet = false, append = false} = {}) {
    const ticket = ++request;
    loading = true; controls(); list.setAttribute('aria-busy','true');
    if (!quiet) status.textContent = 'Loading chapter notes…';
    try {
      const result = await repository.list(chapter, {signal: abort.signal,before:append?next:null});
      if (!alive() || ticket !== request) return;
      const notes=Array.isArray(result)?result:result.notes;
      total=Array.isArray(result)?result.length:result.total;
      next=Array.isArray(result)?null:result.next;
      allNotes=append?[...allNotes,...notes]:notes;
      allNotes=[...new Map(allNotes.map(note=>[note.id,note])).values()];
      showNotes(allNotes);older.hidden=!next;
      if (!quiet) status.textContent = '';
    } catch (error) {
      if (!alive() || ticket !== request || error.name === 'AbortError') return;
      status.textContent = 'Notes could not be loaded. Use Refresh to try again.';
    } finally {
      if (alive() && ticket === request) {
        loading = false; controls(); list.removeAttribute('aria-busy');
      }
    }
  }
  body.addEventListener('input', () => {counter.textContent = `${body.value.length.toLocaleString('en-GB')} / 2,000`;});
  refresh.addEventListener('click', () => load());
  older.addEventListener('click', () => load({append:true}));
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (posting) return;
    const displayName = name.value.trim(), text = body.value.trim();
    if (!displayName || !text) {
      status.textContent = 'Please enter your name and a study note.';
      (!displayName ? name : body).focus(); return;
    }
    if (displayName.length > 60 || text.length > 2000) return;
    if (!preview && !navigator.onLine) {
      status.textContent = 'You are offline. Your note has not been posted. Keep this window open and try again when connected.'; return;
    }
    posting = true; controls(); status.textContent = preview ? 'Adding preview note…' : 'Saving your note…';
    try {
      await repository.create({chapter, display_name: displayName, body: text}, {signal: abort.signal});
      if (!alive()) return;
      body.value = ''; counter.textContent = '0 / 2,000';
      status.textContent = preview ? 'Preview note added. Reloading this preview removes your test notes.' : 'Your note has been saved.';
      await load({quiet: true});
    } catch (error) {
      if (!alive() || error.name === 'AbortError') return;
      status.textContent = error.status===429 || error.status===400 || error.status===404 || error.status===401
        ? error.message : 'Your note was not confirmed as saved. Your text is still here; refresh the notes before trying again.';
    } finally {
      if (alive()) {posting = false; controls();}
    }
  });
  load();
  return () => {disposed = true; request++; abort.abort();};
}

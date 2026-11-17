// Public API only. No administrative credentials or teaching drafts in this file.
const BASE = 'https://eden-ai.tail79c4a2.ts.net';
const SESSION_KEY = 'isaiah-study-notes-session-v1';
let sessionPromise, memorySession;

export class NotesError extends Error {
  constructor(message,status){super(message);this.status=status;}
}
async function request(path,options={}) {
  const controller=new AbortController();
  const timer=setTimeout(()=>controller.abort(),15000);
  const cancel=()=>controller.abort();
  options.signal?.addEventListener('abort',cancel,{once:true});
  if(options.signal?.aborted)controller.abort();
  try{
    const response=await fetch(BASE+path,{...options,signal:controller.signal,cache:'no-store',credentials:'omit',referrerPolicy:'no-referrer'});
    const data=await response.json();
    if(!response.ok)throw new NotesError(data.error||'Study notes are temporarily unavailable.',response.status);
    return data;
  }finally{clearTimeout(timer);options.signal?.removeEventListener('abort',cancel);}
}
function currentSession(){
  try{memorySession=JSON.parse(localStorage.getItem(SESSION_KEY))||memorySession;}catch{}
  return memorySession?.token&&memorySession.expires_at>Date.now()/1000+60?memorySession:null;
}
async function session(){
  const existing=currentSession();if(existing)return existing;
  if(!sessionPromise)sessionPromise=request('/v1/session',{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'})
    .then(value=>{memorySession=value;try{localStorage.setItem(SESSION_KEY,JSON.stringify(value));}catch{}return value;})
    .finally(()=>{sessionPromise=null;});
  return sessionPromise;
}
export function createNotesRepository(){
  const pending=new Map();
  return {
    async list(chapter,{signal,before}={}){
      const query=new URLSearchParams({chapter:String(chapter)});
      if(before)query.set('before',String(before));
      return request('/v1/notes?'+query,{signal});
    },
    async create(input,{signal}={}){
      const signature=JSON.stringify(input);
      if(!pending.has(signature))pending.set(signature,crypto.randomUUID());
      const data={...input,request_id:pending.get(signature)};
      const auth=await session();
      try{
        const result=await request('/v1/notes',{method:'POST',signal,headers:{'Content-Type':'application/json',Authorization:'Bearer '+auth.token},body:JSON.stringify(data)});
        pending.delete(signature);return result.note;
      }catch(error){
        if(error.status===401){memorySession=null;try{localStorage.removeItem(SESSION_KEY);}catch{}}
        throw error;
      }
    }
  };
}

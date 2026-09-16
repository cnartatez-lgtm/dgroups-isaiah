// Concise editorial reading aids; pastoral lessons are stored separately.
export const sections = [
 {id:'holy',start:1,end:12,title:'The Holy King & his people',short:'Holiness',image:'isaiah-holy-king.webp',icon:'crown',description:'Rebellion meets the Holy One. Judgment, a surviving remnant, and the promised Davidic king introduce the book’s central hopes.',question:'How does the holiness of God expose false trust and open a future for his people?',key:'6:1–8; 11:1–9'},
 {id:'nations',start:13,end:23,title:'The nations before God',short:'The nations',image:'isaiah-nations.webp',icon:'people',description:'The surrounding powers come under judgment. No empire, trade network, or alliance stands outside God’s rule.',question:'What happens to the powers that promise lasting security?',key:'14:24–27; 19:19–25'},
 {id:'hope',start:24,end:27,title:'Judgment & a feast of hope',short:'Hope',image:'isaiah-feast.webp',icon:'sun',description:'The horizon widens to the earth. Songs of trust interrupt devastation, and God promises a feast and victory over death.',question:'What makes hope possible in a world under judgment?',key:'25:6–9; 26:1–4'},
 {id:'trust',start:28,end:35,title:'The choice to trust',short:'Trust',image:'isaiah-trust.webp',icon:'mountain',description:'Judah’s misplaced confidence is confronted. God calls his people to return and pictures a desert becoming a way home.',question:'Where do we seek safety, and what does trust in God look like in practice?',key:'30:15; 35:1–10'},
 {id:'crisis',start:36,end:39,title:'Faith tested in history',short:'Crisis',image:'isaiah-crisis.webp',icon:'book',description:'Hezekiah faces Assyria, illness, and the temptation to display his wealth. Deliverance and the warning of exile stand together.',question:'How do crisis and success each reveal what a person trusts?',key:'37:14–20; 39:1–8'},
 {id:'comfort',start:40,end:48,title:'Comfort & a new exodus',short:'Comfort',image:'isaiah-comfort.webp',icon:'leaf',description:'The incomparable Creator comforts his people. Idols are exposed, and God announces redemption and a way out of captivity.',question:'How does knowing who God is reshape fear and weariness?',key:'40:1–11; 43:1–7'},
 {id:'servant',start:49,end:55,title:'The Servant & the invitation',short:'The Servant',image:'isaiah-servant.webp',icon:'people',description:'The Servant’s mission reaches the nations through suffering. The promise of restoration becomes an invitation to receive God’s mercy.',question:'How do the Servant’s suffering and God’s invitation belong together?',key:'52:13–53:12; 55:1–7'},
 {id:'creation',start:56,end:66,title:'A renewed people & creation',short:'New creation',image:'isaiah-new-creation.webp',icon:'sun',description:'True worship takes shape in justice, humility, and welcome. The book closes with the hope of new creation and a final warning.',question:'What kind of community lives in the light of God’s promised future?',key:'58:6–12; 65:17–25'}
];
export const chapterTitles = ['Rebellion, cleansing & restoration','The mountain of Yahweh','The silent judgment of God','The Branch & the shelter','The vineyard & the woes','The Holy King & the call','The sign of Immanuel','A sanctuary or a stumbling stone','A child is born','Assyria & the returning remnant','The shoot from Jesse','Songs of salvation','An oracle concerning Babylon','Fallen pride & God’s purpose','An oracle concerning Moab','Moab seeks refuge','Damascus & forgotten trust','A message concerning Cush','Egypt, Assyria & Israel','A sign concerning Egypt & Cush','Watchmen over the nations','The valley of vision','An oracle concerning Tyre','The earth under judgment','The feast & the end of death','A song of trust','The vineyard restored','A sure foundation','A people near in words','Returning & rest','Help from God','A king will reign in righteousness','Yahweh is our judge','Judgment on the nations','The desert will rejoice','Jerusalem under threat','Hezekiah’s prayer & deliverance','Hezekiah’s illness & song','The envoys from Babylon','Comfort for God’s people','Do not be afraid','The Servant & the blind','Called by name','The Creator & the idols','Cyrus & God’s purpose','The God who carries his people','Babylon brought low','Listen & come out','A light to the nations','The obedient Servant','Comfort for Zion','Good news & the exalted Servant','The suffering Servant','The covenant of peace','Come to the waters','A house of prayer for all peoples','The high & holy One','The fast God chooses','Sin, justice & the Redeemer','Arise, shine','Good news to the afflicted','Zion’s new name','Judgment & remembered mercy','A prayer for God to come','New heavens & a new earth','Humility, worship & the final horizon'];
export const chapterDivisions = {
 1:[[1,9,'Children who rebel'],[10,17,'Worship & justice'],[18,20,'The invitation to return'],[21,31,'The city refined']],
 2:[[1,5,'The mountain of Yahweh'],[6,9,'A land full of substitutes'],[10,18,'Yahweh alone exalted'],[19,22,'The end of human pride']],
 3:[[1,7,'The removal of support'],[8,12,'Accountability before God'],[13,15,'Leaders under judgment'],[16,26,'Visible glory stripped away']],
 4:[[1,1,'The aftermath of judgment'],[2,3,'The Branch & the remnant'],[4,4,'Cleansing Zion'],[5,6,'A shelter over God’s people']]
};
const terms=[
 ['Yahweh','yahweh','holy',6,3,'God’s personal name in WEB. The Holy One speaks, judges, saves, and remains faithful to his purpose.'],
 ['Holy','holy','holy',6,3,'Set apart and belonging to God. Isaiah’s vision joins holiness to glory and the need for cleansing.'],
 ['Holy One of Israel','holy one of israel','holy',1,4,'A characteristic title for God in Isaiah. Covenant belonging deepens the seriousness of despising him.'],
 ['Glory','glory','holy',6,3,'God’s manifest splendor and worth. Human displays of importance are tested against the glory that belongs to him.'],
 ['Judah','judah','holy',1,1,'The southern kingdom addressed by Isaiah. Its worship, justice, leadership, and alliances face God’s examination.'],
 ['Jerusalem','jerusalem','holy',1,1,'Judah’s capital and the city associated with the temple. Isaiah pictures both its corruption and its restoration.'],
 ['Zion','zion','creation',2,3,'A name associated with Jerusalem, God’s dwelling, and his people. Its future is a focus of restoration and hope.'],
 ['Israel','israel','comfort',43,1,'The covenant people. Context determines whether the name refers especially to the northern kingdom or more broadly to God’s people.'],
 ['People','people|peoples','creation',60,3,'The communities addressed and gathered by God. Notice who is accused, comforted, included, or called to respond.'],
 ['Children','children|child','holy',1,2,'A family image of covenant belonging, rebellion, or promised life. Read each occurrence in context.'],
 ['Remnant','remnant','holy',10,20,'Those who remain through judgment. Their survival points to God’s preserving mercy and a call to return.'],
 ['Branch','branch|branches','holy',4,2,'An image of growth and renewed life. Isaiah 4 speaks of Yahweh’s branch, and chapter 11 of a shoot from Jesse.'],
 ['King','king|kings','crisis',6,5,'Human rulers are accountable to the true King. Failed leadership sharpens the hope for a righteous Davidic ruler.'],
 ['Nations','nation|nations','nations',2,2,'Peoples beyond Israel and Judah. They appear as instruments, objects of judgment, and recipients of future blessing.'],
 ['Assyria','assyria|assyrian','crisis',37,6,'The empire threatening Judah. It serves as an instrument of judgment yet remains accountable for its arrogance.'],
 ['Babylon','babylon','nations',13,1,'An imperial power associated with pride and captivity. Its promised fall forms part of the announcement of deliverance.'],
 ['Egypt','egypt','trust',31,1,'A tempting source of military help. Isaiah challenges confidence in its strength while also announcing a future blessing for Egypt.'],
 ['Pride','pride|proud','trust',2,12,'Self-exaltation that resists dependence on God. Isaiah repeatedly announces the humbling of what is lifted up.'],
 ['High','high|lofty','trust',2,17,'Height can describe God’s exaltation or human presumption. The surrounding words determine the meaning.'],
 ['Mountain','mountain|mountains','hope',25,6,'An image of strongholds, pride, or the place of God’s instruction and feast. Its meaning changes with the setting.'],
 ['Idols','idol|idols','comfort',44,9,'Objects of worship and trust made by human hands. Their helplessness contrasts with the living Creator.'],
 ['Silver','silver','trust',2,7,'Wealth can become a source of confidence. Silver also appears in the image of refining a corrupt people.'],
 ['Gold','gold','trust',2,7,'A sign of wealth, ornament, or manufactured idols. What security can such riches provide?'],
 ['Justice','justice','creation',1,17,'The right ordering of community life under God, including defending those exposed to exploitation.'],
 ['Righteousness','righteousness|righteous','creation',1,27,'What accords with God’s right character and rule, linked to judgment, deliverance, and a renewed community.'],
 ['Poor','poor','creation',3,15,'Those with limited power or resources. God confronts their exploitation and calls for concrete care.'],
 ['Sin','sin|sins|sinned','servant',53,12,'Wrongdoing and rebellion against God. Isaiah exposes it while announcing cleansing and the Servant’s bearing of sin.'],
 ['Heart','heart|hearts','trust',29,13,'The center of desire, thought, and trust. Words of worship may conceal a heart far from God.'],
 ['Hands','hand|hands','holy',1,15,'An image of action, violence, idolatry, or divine power. In chapter 1, prayer and conduct belong together.'],
 ['Day','day|days','hope',2,12,'A time marker often announcing divine intervention. Observe what each particular day brings.'],
 ['Light','light','servant',49,6,'An image of revelation, guidance, and salvation. The Servant brings light to the nations.'],
 ['Darkness','darkness|dark','creation',60,2,'An image of distress and the need for divine light. Isaiah’s promises speak into this setting.'],
 ['Peace','peace','hope',26,3,'Well-being and wholeness under God’s care, connected to trust and the righteous rule he promises.'],
 ['Salvation','salvation','comfort',43,11,'God’s deliverance from enemies and captivity, with a wider horizon reaching the ends of the earth.'],
 ['Redeemer','redeemer','comfort',43,14,'One who reclaims and rescues. God calls himself his people’s Redeemer; the book unfolds his saving work.'],
 ['Servant','servant|servants','servant',49,3,'A person or people called to serve God. The title refers to different figures, so identify the servant in context.'],
 ['Comfort','comfort|comforted|comforts','comfort',40,1,'God’s assurance to an afflicted people, grounded in his presence, his word, and his power to redeem.'],
 ['Water','water|waters','creation',55,1,'A basic need and an image of life. The invitation to the waters expresses God’s generous provision.'],
 ['Wilderness','wilderness|desert','comfort',40,3,'A setting of exposure and need that becomes a road of return and a place of renewed life.'],
 ['Fire','fire','holy',6,6,'An image of judgment or purification. The coal in Isaiah’s call is associated with the prophet’s cleansing.'],
 ['Earth','earth','creation',65,17,'The scope of God’s reign and the place affected by sin. The final promise reaches to a renewed earth.'],
 ['Covenant','covenant','servant',54,10,'God’s binding relationship and commitment. Isaiah exposes rebellion and announces a covenant of peace.'],
 ['Word','word|words','comfort',40,8,'What God speaks endures and accomplishes his purpose. Distinguish his speech from unreliable human words.'],
 ['Armies','armies','holy',6,3,'WEB’s wording in “Yahweh of Armies,” a title expressing God’s sovereign command and power.']
];
export const glossary=terms.map(([word,forms,pillar,chapter,verse,definition])=>({word,forms:forms.split('|'),pillar,chapter,verse,definition}));
const actions=[['Hear','hear|hears|heard|hearing'],['Trust','trust|trusts|trusted|trusting'],['Return','return|returns|returned|returning'],['Save','save|saves|saved|saving'],['Know','know|knows|known|knowing|knew'],['Fear','fear|fears|feared|fearing'],['Seek','seek|seeks|seeking|sought'],['Come','come|comes|coming|came'],['Walk','walk|walks|walked|walking'],['Exalt','exalt|exalts|exalted'],['Redeem','redeem|redeems|redeemed'],['Judge','judge|judges|judged|judging'],['Make','make|makes|made|making'],['Say','say|says|said|saying'],['See','see|sees|seen|saw|seeing'],['Bring','bring|brings|brought|bringing'],['Give','give|gives|given|gave|giving'],['Dwell','dwell|dwells|dwelt|dwelling']].map(([word,forms])=>({word,forms:forms.split('|')}));
const pronouns=['I','Me','My','You','Your','He','Him','His','She','Her','We','Us','Our','They','Them','Their','It','Its'].map(word=>({word,forms:[word.toLowerCase()]}));
export const normalize=token=>token.toLowerCase().replace(/[’']s$/,'');
export function tokens(text){return (text.match(/[A-Za-z]+(?:[’'][A-Za-z]+)?/g)||[]).map(normalize);}
export function countForms(text,forms){const list=tokens(text);let count=0;for(const form of forms){const parts=tokens(form);for(let i=0;i<=list.length-parts.length;i++){if(parts.every((part,j)=>list[i+j]===part))count++;}}return count;}
export function matches(token,forms){return forms.includes(normalize(token));}
const analysisCache=new WeakMap();
export function analyze(chapters,chapter=1,category='keywords',wholeBook=false){
 let cache=analysisCache.get(chapters);if(!cache){cache=new Map();analysisCache.set(chapters,cache);}const key=`${chapter}:${category}:${wholeBook}`;if(cache.has(key))return cache.get(key);
 const definitions=category==='actions'?actions:category==='pronouns'?pronouns:glossary;
 const keys=wholeBook?Object.keys(chapters).map(Number):[Number(chapter)];
 const result=definitions.map(term=>{
   const counts=keys.map(c=>Object.values(chapters[c].verses).map(text=>countForms(text,term.forms)));
   const perChapter=counts.map(c=>c.reduce((a,b)=>a+b,0));
   const perVerse=wholeBook?counts[keys.indexOf(Number(chapter))]:counts[0];
   const occurrences=keys.flatMap((c,index)=>counts[index].flatMap((count,i)=>count?[{chapter:c,verse:i+1}]:[]));
   return {...term,count:perChapter.reduce((a,b)=>a+b,0),perVerse,perChapter,occurrences,verseNumbers:occurrences.filter(x=>x.chapter===Number(chapter)).map(x=>x.verse)};
 }).filter(term=>term.count>0).sort((a,b)=>b.count-a.count||a.word.localeCompare(b.word));cache.set(key,result);return result;
}
export function divisions(chapter,total){return chapterDivisions[chapter]||Array.from({length:4},(_,i)=>[Math.floor(i*total/4)+1,Math.floor((i+1)*total/4),null]).filter(([a,b])=>b>=a);}
export function movement(chapter){return sections.find(s=>chapter>=s.start&&chapter<=s.end);}

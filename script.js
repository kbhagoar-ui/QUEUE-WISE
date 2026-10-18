const people = document.getElementById('people');
const counters = document.getElementById('counters');
const service = document.getElementById('service');
const rush = document.getElementById('rush');
function analyseQueue(){
  const n=Math.max(0,Math.min(500,Number(people.value)||0));
  const c=Math.max(1,Math.min(20,Number(counters.value)||1));
  const s=Math.max(5,Math.min(600,Number(service.value)||35));
  const level=rush.value;
  const buffer=level==='high'?1.25:level==='medium'?1.1:1;
  const minutes=Math.ceil((n/c)*s/60*buffer);
  let pressure,title,copy,caption;
  if(n===0){pressure='Clear';caption='No one is currently waiting';title='Keep the flow simple';copy='The queue is clear in this scenario. Keep recording wait times during busy periods so you can compare what changes when the next rush arrives.';}
  else if(minutes>=12||n/c>=18||level==='high'){pressure='High';caption='Action recommended';title='Reduce pressure at the bottleneck';copy=c<2||n/c>=14?'If staffing and space allow, open another serving point during the rush. Consider a separate quick-pickup lane for pre-packed items and measure whether the wait drops.':'Check whether another serving point can be activated, move a staff member to the slowest step, and simplify menu or payment decisions. Recheck the queue after 10 minutes.';}
  else if(minutes>=6||n/c>=8||level==='medium'){pressure='Moderate';caption='Keep an eye on the line';title='Balance the serving points';copy='Check whether students can be redirected to a faster counter. Track service time and queue length during the next rush to see if the change helps.';}
  else{pressure='Low';caption='Flow looks manageable';title='Protect the smooth flow';copy='Keep the current setup and note queue length and service time. These observations can help plan staffing before the next busy break.';}
  document.getElementById('wait').textContent=`~${minutes} min`;
  document.getElementById('waitnote').textContent=`${n} waiting · ${c} active counter${c===1?'':'s'}`;
  document.getElementById('pressure').textContent=pressure;
  document.getElementById('pressurenote').textContent=caption;
  document.getElementById('rec-title').textContent=title;
  document.getElementById('rec-text').textContent=copy;
}
document.getElementById('analyze').addEventListener('click',analyseQueue);
[people,counters,service,rush].forEach(el=>el.addEventListener('change',analyseQueue));
const menu=document.getElementById('menu'), links=document.querySelector('.nav-links');
menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-label',open?'Close menu':'Open menu');});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
analyseQueue();

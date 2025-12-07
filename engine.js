const qContainer=document.getElementById('questions');
QUESTIONS.forEach(q=>{
  const div=document.createElement('div'); div.className='question';
  const lbl=document.createElement('div'); lbl.className='q-label'; lbl.textContent=q.label;
  const radios=document.createElement('div'); radios.className='radios';
  [0,1,2].forEach(val=>{
    const r=document.createElement('label'); r.style.cursor='pointer'; r.style.padding='6px 8px'; r.style.borderRadius='6px'; r.style.border='1px solid rgba(0,0,0,0.05)'; r.style.display='inline-block';
    r.innerHTML=`<input type='radio' name='${q.key}' value='${val}' ${val===0?'checked':''} /> ${val}`;
    radios.appendChild(r);
  });
  div.appendChild(lbl); div.appendChild(radios); qContainer.appendChild(div);
});

function readFacts(){const facts={};QUESTIONS.forEach(q=>{facts[q.key]=Number(document.querySelector(`input[name='${q.key}']:checked`).value)});return facts}
function evaluate(f){const matches=[];RULES.forEach(r=>{if(r.condition(f))matches.push({id:r.id,name:r.name,explain:r.explain})});return matches}
function renderResult(matches,facts){
  const out=document.getElementById('result-area'); out.innerHTML='';
  const summary=document.getElementById('out-summary'); const explain=document.getElementById('explain');
  if(matches.length===0){summary.textContent='هیچ الگوی مشخصی یافت نشد'; out.innerHTML=`<div class='result'>نتیجه: هیچ الگوی مشخصی یافت نشد</div>`; explain.innerHTML=`<pre>${JSON.stringify(facts,null,2)}</pre>`; return;}
  summary.textContent=matches.map(m=>m.name).join(' ، ');
  const list=document.createElement('div'); list.className='result'; list.innerHTML=`<strong>الگوهای فعال:</strong>`;
  matches.forEach(m=>{const item=document.createElement('div'); item.style.marginTop='8px'; item.innerHTML=`<div style='font-weight:600'>${m.name}</div><div style='color:#555;font-size:13px'>دلیل: ${m.explain}</div>`; list.appendChild(item)});
  const expl=document.createElement('div'); expl.style.marginTop='12px'; expl.innerHTML='<strong>شرح امتیازات:</strong>';
  const table=document.createElement('div'); table.style.marginTop='8px';
  for(const k in facts){const l=QUESTIONS.find(q=>q.key===k).label; const row=document.createElement('div'); row.style.display='flex'; row.style.justifyContent='space-between'; row.style.padding='6px 8px'; row.style.borderRadius='6px'; row.style.marginTop='6px'; row.style.background='rgba(0,0,0,0.02)'; row.innerHTML=`<div>${l}</div><div style='font-weight:700'>${facts[k]}</div>`; table.appendChild(row)}
  out.appendChild(list); out.appendChild(expl); out.appendChild(table); explain.innerHTML=`<pre>${JSON.stringify({matches:matches.map(m=>m.id),facts},null,2)}</pre>`;
}

document.getElementById('run-btn').addEventListener('click',()=>{const f=readFacts(); const m=evaluate(f); renderResult(m,f)});
document.getElementById('reset-btn').addEventListener('click',()=>{document.getElementById('expert-form').reset();document.getElementById('out-summary').textContent='هیچ';document.getElementById('result-area').innerHTML='';document.getElementById('explain').innerHTML=''});
document.getElementById('copy-json').addEventListener('click',()=>{const f=readFacts(); const m=evaluate(f); const payload={facts:f,matches:m.map(x=>x.id)}; navigator.clipboard?.writeText(JSON.stringify(payload,null,2)).then(()=>{alert('JSON کپی شد')}).catch(()=>{alert('امکان کپی به کلیپ‌بورد نیست')})});

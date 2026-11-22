const menuButton=document.querySelector('.menu-btn');const nav=document.querySelector('.nav');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const form=document.getElementById('contactForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const msg=['Hello ZIMESTA, I would like to make an enquiry.','',`Name: ${d.get('name')}`,`Phone: ${d.get('phone')}`,`Email: ${d.get('email')||'Not provided'}`,`Service: ${d.get('service')}`,`Project details: ${d.get('message')}`].join('\\n');window.open('https://wa.me/260975314720?text='+encodeURIComponent(msg),'_blank','noopener,noreferrer');});}

const enrolForm=document.getElementById('enrolForm');
if(enrolForm){enrolForm.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(enrolForm);const msg=['Hello ZIMESTA, I am interested in computer skills learning.','',`Enquiry from: ${d.get('enquirer')}`,`Name: ${d.get('name')}`,`Phone: ${d.get('phone')}`,`Learner level: ${d.get('level')}`,`Learning interest: ${d.get('topic')}`,`Additional information: ${d.get('details')||'Not provided'}`].join('\n');window.open('https://wa.me/260975314720?text='+encodeURIComponent(msg),'_blank','noopener,noreferrer');});}

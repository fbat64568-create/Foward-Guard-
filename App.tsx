import { useMemo, useState } from 'react';
import {
  ArrowRight, ChevronLeft, ChevronRight, CircleCheck, Globe2, LifeBuoy,
  Menu, MessageSquare, MoveRight, Phone, ShieldAlert, ShieldCheck, X
} from 'lucide-react';

type Service = [string, string, string, string, string];

const services: Service[] = [
  ['01','LEAVE & VACATION REQUEST','Information and guidance for personnel requesting authorized leave or vacation.','REQUEST ASSISTANCE','leave'],
  ['02','CONTRACT TERMINATION','Administrative guidance for personnel seeking information about ending or reviewing an employment or service contract.','CONTRACT SUPPORT','contract'],
  ['03','TRANSFER REQUEST','Request information regarding assignment transfers and personnel relocation procedures.','REQUEST TRANSFER SUPPORT','transfer'],
  ['04','RESIGNATION / SEPARATION','Administrative information for personnel considering resignation or separation from an assignment.','SEPARATION SUPPORT','separation'],
  ['05','EMERGENCY EXTRACTION SUPPORT','Information and referral for urgent personnel emergencies requiring authorized assistance.','EMERGENCY SUPPORT','emergency'],
  ['06','MEDICAL / WELFARE SUPPORT','Connect with appropriate authorized medical, welfare, and personnel-support resources.','REQUEST ASSISTANCE','welfare'],
  ['07','FAMILY SUPPORT','Resources and information for families of deployed personnel.','FAMILY RESOURCES','family'],
  ['08','GENERAL PERSONNEL INQUIRY','For questions that do not fall into the categories above.','CONTACT PERSONNEL SUPPORT','general'],
];

const contacts = [
  'Leave Administration','Contract Administration','Transfer Administration',
  'Separation Administration','Welfare Support','Emergency Support'
];

const news = [
  ['MIDDLE EAST','Turkey, Egypt and Qatar urge compliance with Gaza ceasefire obligations','Reuters','20 Aug 2026 · 12:30 UTC','https://www.reuters.com/world/middle-east/turkey-egypt-qatar-condemn-israeli-attacks-gaza-call-israel-comply-with-2026-08-20/'],
  ['GLOBAL ENERGY','Oil reaches three-week high amid Middle East supply concerns','Reuters','20 Aug 2026 · 01:11 UTC','https://www.reuters.com/business/energy/oil-prices-steady-investors-assess-us-iran-war-outlook-2026-08-20/'],
  ['HUMANITARIAN','UN reports record attacks against humanitarian workers in 2025','Reuters','19 Aug 2026 · 04:05 UTC','https://www.reuters.com/world/africa/attacks-aid-workers-hit-record-high-2025-un-says-2026-08-19/'],
];

const steps = ['SELECT SERVICE','PERSONNEL INFORMATION','REQUEST DETAILS','SUBMIT REQUEST'];

export default function App() {
  const [menu,setMenu] = useState(false);
  const [open,setOpen] = useState(false);
  const [step,setStep] = useState(1);
  const [service,setService] = useState('');
  const [submitted,setSubmitted] = useState(false);
  const [reference,setReference] = useState('');
  const [track,setTrack] = useState('');

  const selected = useMemo(() => services.find(s => s[4] === service), [service]);

  function request(id = '') {
    setService(id);
    setStep(id ? 2 : 1);
    setSubmitted(false);
    setOpen(true);
  }

  function choose(id:string) {
    setService(id);
    setStep(2);
  }

  function submit() {
    setReference('DPSC-' + Math.floor(100000 + Math.random()*899999));
    setSubmitted(true);
  }

  return <div className="site">
    <div className="notice"><ShieldCheck size={14}/> FICTIONAL DEMONSTRATION PLATFORM <span>Not affiliated with any real military, government, intelligence agency, or defense organization.</span></div>

    <header className="nav">
      <a href="#top" className="brand">
        <span className="brandmark"><ShieldCheck size={20}/></span>
        <span><b>DPSC</b><small>PERSONNEL SUPPORT CENTER</small></span>
      </a>
      <nav className={menu ? 'links open' : 'links'}>
        <a href="#support" onClick={()=>setMenu(false)}>Support Center</a>
        <a href="#tracking" onClick={()=>setMenu(false)}>Case Tracking</a>
        <a href="#admin" onClick={()=>setMenu(false)}>Administration</a>
        <a href="#news" onClick={()=>setMenu(false)}>World Updates</a>
      </nav>
      <button className="menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
      <button className="navcta" onClick={()=>request()}>REQUEST SUPPORT <ArrowRight size={15}/></button>
    </header>

    <main id="top">
      <section className="hero">
        <div className="grid"></div><div className="vignette"></div>
        <div className="heroText">
          <div className="eyebrow"><i/> PERSONNEL ASSISTANCE NETWORK · DEMO ENVIRONMENT</div>
          <h1>DEPLOYED<br/><em>PERSONNEL</em><br/>SUPPORT CENTER</h1>
          <p className="sub">Administrative Support <b>•</b> Personnel Assistance <b>•</b> Assignment Services</p>
          <p className="copy">Centralized support resources for deployed personnel seeking assistance with administrative, assignment, leave, transfer, separation, and welfare matters.</p>
          <div className="actions">
            <button className="primary" onClick={()=>request()}>REQUEST PERSONNEL SUPPORT <ArrowRight size={17}/></button>
            <button className="secondary" onClick={()=>document.querySelector('#admin')?.scrollIntoView({behavior:'smooth'})}><Phone size={16}/> CONTACT SUPPORT</button>
          </div>
          <button className="world" onClick={()=>document.querySelector('#news')?.scrollIntoView({behavior:'smooth'})}><Globe2 size={15}/> WORLD SITUATION UPDATES <MoveRight size={15}/></button>
        </div>
        <div className="meta"><span>NETWORK STATUS <b><i/> OPERATIONAL</b></span><span>ACCESS MODE <b>DEMO / PUBLIC</b></span><span>LAST SYNC <b>20 AUG 2026 · 14:17 WAT</b></span></div>
      </section>

      <section className="quick">
        <label>QUICK ACTIONS</label>
        {[
          ['REQUEST LEAVE','leave'],['TRANSFER SUPPORT','transfer'],['CONTRACT SUPPORT','contract'],
          ['SEPARATION SUPPORT','separation'],['EMERGENCY ASSISTANCE','emergency']
        ].map(([label,id])=><button key={id} className={id==='emergency'?'danger':''} onClick={()=>request(id)}>{label}<ArrowRight size={14}/></button>)}
      </section>

      <section className="support" id="support">
        <div className="sectionhead">
          <div><small>01 / PERSONNEL SUPPORT DASHBOARD</small><h2>HOW CAN WE <em>ASSIST YOU?</em></h2></div>
          <p>Choose a support pathway. This demonstration intentionally excludes classified, operational, credential, and precise location information.</p>
        </div>
        <div className="cards">
          {services.map(([n,title,desc,button,id])=><article className={id==='emergency'?'card emergency':''} key={id}>
            <div className="cardtop"><span>{n}</span><i>●</i></div>
            <h3>{title}</h3><p>{desc}</p>
            <button onClick={()=>choose(id)}>{button}<ArrowRight size={14}/></button>
          </article>)}
        </div>
      </section>

      <section className="tracking" id="tracking">
        <div className="radarbox"><div className="radar"><div className="sweep"></div><i className="dot d1"/><i className="dot d2"/><i className="dot d3"/></div><small>DEMO CASE NETWORK</small></div>
        <div className="trackcopy">
          <small>02 / CASE MANAGEMENT</small><h2>MY SUPPORT<br/><em>REQUEST</em></h2>
          <p>Enter a fictional support reference number to preview how case progress could be displayed in an authorized backend.</p>
          <div className="trackform"><input value={track} onChange={e=>setTrack(e.target.value.toUpperCase())} placeholder="e.g. DPSC-248531"/><button onClick={()=>setTrack(track||'DPSC-248531')}>VIEW STATUS <ArrowRight size={15}/></button></div>
          {track && <div className="case">
            <div><span>REFERENCE</span><b>{track}</b><small>DEMONSTRATION RECORD</small></div>
            <div className="timeline">{['RECEIVED','UNDER REVIEW','SUPPORT TEAM ASSIGNED','RESPONSE AVAILABLE','CLOSED'].map((s,i)=><span className={i===0?'active':''} key={s}><i>{i===0?<CircleCheck size={14}/>:i+1}</i>{s}</span>)}</div>
          </div>}
        </div>
      </section>

      <section className="admin" id="admin">
        <div className="sectionhead"><div><small>03 / COMMAND & ADMINISTRATIVE CONTACT</small><h2>PERSONNEL <em>ADMINISTRATION</em></h2></div><p>Demo contact channels are shown below. They are not official military command addresses.</p></div>
        <div className="admincards">{contacts.map((c,i)=><div key={c}><span>0{i+1}</span><div><h3>{c}</h3><p>Authorized support pathway</p></div><ArrowRight size={16}/></div>)}</div>
        <div className="contacts">
          <div><MessageSquare/><span>DEMO CONTACT <b>personnel@example-demo.org</b></span></div>
          <div><LifeBuoy/><span>DEMO CONTACT <b>support@example-demo.org</b></span></div>
          <small>DEMO CONTACT — NOT AN OFFICIAL MILITARY ADDRESS</small>
        </div>
      </section>

      <section className="news" id="news">
        <div className="newshead"><div><small>04 / PUBLIC INFORMATION</small><h2>LIVE WORLD <em>NEWS UPDATES</em></h2></div><span className="pill"><i/> PUBLIC SOURCES · UTC</span></div>
        <p className="intro">Current publicly reported international conflict, security, energy, and humanitarian developments. No tactical or operational intelligence is displayed.</p>
        <div className="newscards">{news.map(n=><a href={n[4]} target="_blank" rel="noreferrer" key={n[1]}><small>{n[0]}</small><h3>{n[1]}</h3><footer><b>{n[2]}</b><span>{n[3]}</span><ArrowRight size={14}/></footer></a>)}</div>
      </section>
    </main>

    <footer className="sitefooter"><div className="footbrand"><span className="brandmark"><ShieldCheck size={18}/></span><b>DPSC</b><small>FICTIONAL PERSONNEL SUPPORT CENTER</small></div><p>Fictional demonstration platform. Not affiliated with or operated by any real military, government, intelligence agency, or defense organization.</p><span>© 2026 DEMO ENVIRONMENT</span></footer>

    {open && <div className="overlay" onMouseDown={e=>{if(e.currentTarget===e.target)setOpen(false)}}>
      <div className="modal">
        <button className="close" onClick={()=>setOpen(false)}><X/></button>
        {submitted ? <div className="success"><CircleCheck size={48}/><small>REQUEST RECEIVED</small><h2>SUPPORT REQUEST<br/><em>SUBMITTED</em></h2><p>Your request has been submitted for review through the appropriate support channel.</p><div className="ref">REFERENCE <b>{reference}</b></div><small>Demo only. A real implementation should route submissions only to verified administrators using appropriate security and privacy controls.</small><button className="primary" onClick={()=>setOpen(false)}>RETURN TO CENTER <ArrowRight size={15}/></button></div>
        : <>
          <small>PERSONNEL SUPPORT REQUEST</small><h2>{steps[step-1]}</h2>
          <div className="steps">{steps.map((s,i)=><span className={i+1<=step?'on':''} key={s}><b>{i+1}</b>{s}</span>)}</div>
          {step===1 && <div className="panel"><p>Select the assistance pathway that best describes your request.</p><div className="options">{services.map(([n,t,, ,id])=><button key={id} onClick={()=>choose(id)}><span>{n}</span>{t}<ChevronRight size={15}/></button>)}</div></div>}
          {step===2 && <div className="panel"><p>Provide general contact information only. Do not include classified or sensitive operational information.</p><div className="fields">
            {['NAME','EMAIL','COUNTRY','ORGANIZATION / EMPLOYER','GENERAL ASSIGNMENT CATEGORY'].map(x=><label key={x}>{x}<input placeholder={x==='EMAIL'?'name@example.org':x==='NAME'?'Full name':x==='COUNTRY'?'Country':x==='ORGANIZATION / EMPLOYER'?'Organization or employer':'General category'}/></label>)}
            <label>PREFERRED CONTACT METHOD<select defaultValue="Email"><option>Email</option><option>Phone</option><option>Other authorized channel</option></select></label>
          </div><div className="modalactions"><button className="back" onClick={()=>setStep(1)}><ChevronLeft size={15}/> BACK</button><button className="primary" onClick={()=>setStep(3)}>CONTINUE <ArrowRight size={15}/></button></div></div>}
          {step===3 && <div className="panel"><div className="selected"><span>SELECTED SERVICE</span><b>{selected?.[1]||'GENERAL PERSONNEL INQUIRY'}</b></div><label>DESCRIBE HOW WE CAN ASSIST YOU<textarea rows={7} placeholder="Describe how we can assist you."/></label><div className="warning"><ShieldAlert size={18}/><span>Do not submit passwords, security credentials, precise military locations, troop movements, operational details, weapons information, or sensitive intelligence.</span></div><div className="modalactions"><button className="back" onClick={()=>setStep(2)}><ChevronLeft size={15}/> BACK</button><button className="primary" onClick={submit}>SUBMIT REQUEST <ArrowRight size={15}/></button></div></div>}
        </>}
      </div>
    </div>}
  </div>;
}

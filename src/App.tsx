import { useState } from 'react'
import { ArrowRight, HeartHandshake, Menu, X, ShieldCheck, Clock3, House, MessageCircle, CheckCircle2, ChevronDown, Stethoscope, Users, Sparkles } from 'lucide-react'
import './style.css'

const services = [
  { icon: HeartHandshake, title: 'Acompanhamento no dia a dia', text: 'Presença e apoio nas atividades cotidianas, respeitando hábitos, preferências e autonomia.' },
  { icon: House, title: 'Apoio no ambiente domiciliar', text: 'Cuidado pensado para a rotina da casa, com atenção ao conforto e à segurança.' },
  { icon: Users, title: 'Suporte à família', text: 'Escuta e alinhamento com familiares para construir uma rotina de cuidado mais tranquila.' },
]
const faqs = [
  ['Como funciona o primeiro contato?', 'Você compartilha um pouco sobre a necessidade da família. A equipe poderá entender o contexto e orientar sobre os próximos passos e a possibilidade de atendimento.'],
  ['Quais regiões são atendidas?', 'A área de cobertura precisa ser confirmada diretamente com a equipe. Informe sua cidade e bairro no formulário para receber essa orientação.'],
  ['O atendimento é personalizado?', 'A proposta é compreender a rotina, as preferências e as necessidades de cada pessoa antes de alinhar um formato de apoio.'],
  ['Home care substitui acompanhamento médico?', 'Não. O cuidado domiciliar não substitui avaliação, diagnóstico, prescrição ou acompanhamento de profissionais de saúde habilitados.'],
]
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [sent, setSent] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return <div>
    <header className="header">
      <a className="brand" href="#inicio" onClick={closeMenu}><span className="brand-mark"><HeartHandshake size={23}/></span><span>cuidados<span className="brand-light">home care</span></span></a>
      <button className="mobile-toggle" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        <a href="#inicio" onClick={closeMenu}>Início</a><a href="#sobre" onClick={closeMenu}>Sobre nós</a><a href="#servicos" onClick={closeMenu}>Serviços</a><a href="#duvidas" onClick={closeMenu}>Dúvidas</a><a className="nav-cta" href="#contato" onClick={closeMenu}>Fale com a equipe <ArrowRight size={16}/></a>
      </nav>
    </header>
    <main>
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span/> CUIDADO QUE ACOLHE</div>
          <h1>Mais cuidado.<br/><em>Mais tranquilidade.</em></h1>
          <p className="hero-lead">Apoio domiciliar com atenção, respeito e acolhimento para quem você ama — e mais tranquilidade para toda a família.</p>
          <div className="hero-actions"><a className="button button-dark" href="#contato">Converse com a gente <ArrowRight size={18}/></a><a className="text-link" href="#servicos">Conheça nossa proposta <span>↘</span></a></div>
          <div className="hero-note"><ShieldCheck size={18}/><span>Respeito à individualidade em cada etapa do cuidado.</span></div>
        </div>
        <div className="hero-visual">
          <div className="photo-frame"><img src="https://images.unsplash.com/photo-1576765608866-5b51046452a5?auto=format&fit=crop&w=1100&q=85" alt="Profissional oferecendo apoio acolhedor a uma pessoa idosa em casa"/></div>
          <div className="floating-card"><span className="floating-icon"><HeartHandshake size={20}/></span><div><strong>Cuidado humanizado</strong><small>Com atenção a cada pessoa</small></div></div>
          <div className="hero-stamp">PRESENÇA<br/>QUE FAZ<br/><b>BEM</b></div>
        </div>
        <div className="hero-bottom"><span>01 / 04</span><span className="line"></span><span>ACOLHIMENTO • RESPEITO • PRESENÇA</span></div>
      </section>
      <section className="intro section-pad" id="sobre">
        <div className="section-kicker">NOSSA ESSÊNCIA <span>✳</span></div>
        <div className="intro-grid"><h2>O cuidado começa<br/>quando alguém <em>se importa.</em></h2><div className="intro-text"><p>Sabemos que receber cuidado em casa envolve confiança. Por isso, acreditamos em uma relação construída com escuta, respeito e atenção à história de cada pessoa.</p><p>Nosso propósito é apoiar famílias na busca por uma rotina de cuidado mais acolhedora, considerando necessidades, preferências e o contexto de cada lar.</p><a className="under-link" href="#contato">Vamos conversar <ArrowRight size={16}/></a></div></div>
        <div className="values"><div><span>01</span><strong>Escuta atenta</strong><small>Entender antes de cuidar.</small></div><div><span>02</span><strong>Respeito</strong><small>Valorizar escolhas e autonomia.</small></div><div><span>03</span><strong>Presença</strong><small>Estar junto com responsabilidade.</small></div></div>
      </section>
      <section className="services section-pad" id="servicos">
        <div className="services-head"><div><div className="section-kicker">COMO PODEMOS APOIAR <span>✳</span></div><h2>Cuidado que considera<br/><em>cada detalhe.</em></h2></div><p>O apoio é conversado de acordo com a realidade de cada família. Conheça algumas frentes de cuidado que podem ser avaliadas no primeiro contato.</p></div>
        <div className="service-grid">{services.map((s,i)=><article className="service-card" key={s.title}><div className="service-top"><span>0{i+1}</span><s.icon size={25}/></div><h3>{s.title}</h3><p>{s.text}</p><a href="#contato" aria-label={'Consultar sobre '+s.title}><ArrowRight size={19}/></a></article>)}</div>
        <p className="disclaimer">Os serviços, escopo e disponibilidade devem ser confirmados após avaliação da necessidade. Procedimentos de saúde são realizados somente por profissionais legalmente habilitados, dentro de suas atribuições.</p>
      </section>
      <section className="promise section-pad"><div className="promise-art"><img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=850&q=85" alt="Retrato acolhedor de uma mulher sorrindo"/><div className="art-note">CUIDAR É<br/><em>ESTAR PRESENTE.</em></div></div><div className="promise-copy"><div className="section-kicker">UMA RELAÇÃO DE CONFIANÇA <span>✳</span></div><h2>Seu familiar é único.<br/><em>O cuidado também.</em></h2><p>Não existe uma única rotina que sirva para todas as pessoas. O primeiro passo é ouvir a família, compreender o que é importante e conversar com clareza sobre as possibilidades de apoio.</p><div className="promise-points"><div><CheckCircle2/><span>Conversa inicial para entender a necessidade</span></div><div><CheckCircle2/><span>Alinhamento transparente sobre o atendimento</span></div><div><CheckCircle2/><span>Respeito à privacidade e à individualidade</span></div></div><a className="button button-outline" href="#contato">Fale com a equipe <ArrowRight size={18}/></a></div></section>
      <section className="faq section-pad" id="duvidas"><div className="faq-title"><div className="section-kicker">PERGUNTAS FREQUENTES <span>✳</span></div><h2>Informação que<br/><em>traz segurança.</em></h2><p>Se sua dúvida não estiver aqui, envie uma mensagem. Será um prazer orientar.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={'faq-item '+(openFaq===i?'faq-active':'')} key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{q}</span><ChevronDown size={19}/></button>{openFaq===i&&<p>{a}</p>}</div>)}</div></section>
      <section className="contact section-pad" id="contato"><div className="contact-copy"><div className="section-kicker">VAMOS CONVERSAR <span>✳</span></div><h2>O primeiro passo<br/>é uma <em>conversa.</em></h2><p>Conte um pouco sobre o que sua família precisa. A equipe poderá entrar em contato para entender melhor a situação.</p><div className="contact-detail"><MessageCircle/><div><strong>Atendimento acolhedor</strong><span>Envie seus dados e sua mensagem pelo formulário.</span></div></div><div className="contact-detail"><Clock3/><div><strong>Próximos passos claros</strong><span>Disponibilidade e região serão confirmadas pela equipe.</span></div></div></div>
        <form className="contact-form" name="contato-site" method="POST" data-netlify="true" onSubmit={e=>{e.preventDefault();setSent(true)}}><input type="hidden" name="form-name" value="contato-site"/><div className="form-heading">Conte com a gente <span>✳</span></div><label>Seu nome<input name="nome" placeholder="Como podemos chamar você?" required/></label><div className="form-row"><label>Telefone / WhatsApp<input name="telefone" type="tel" placeholder="(00) 00000-0000" required/></label><label>Cidade e bairro<input name="regiao" placeholder="Onde precisa de apoio?" required/></label></div><label>Como podemos ajudar?<select name="necessidade" defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Acompanhamento de pessoa idosa</option><option>Apoio na rotina domiciliar</option><option>Orientação para a família</option><option>Outro tipo de necessidade</option></select></label><label>Mensagem<textarea name="mensagem" rows={3} placeholder="Conte brevemente o que você procura..."/></label><button className="button button-dark form-submit" type="submit">Enviar mensagem <ArrowRight size={18}/></button>{sent&&<p className="form-feedback">Obrigado pelo contato! Para ativar o recebimento, é necessário publicar este site com o processamento de formulários da Netlify habilitado. Por enquanto, este formulário ainda não envia os dados.</p>}<small>Ao enviar, você concorda com o uso dos dados para retorno sobre sua solicitação. Consulte nossa <a href="/privacidade/">Política de Privacidade</a>.</small></form>
      </section>
    </main>
    <footer className="footer"><div className="footer-main"><a className="brand brand-footer" href="#inicio"><span className="brand-mark"><HeartHandshake size={22}/></span><span>cuidados<span className="brand-light">home care</span></span></a><p>Cuidado domiciliar com acolhimento, respeito e atenção à individualidade.</p><a className="footer-top" href="#inicio">Voltar ao topo ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Cuidados Home Care. Todos os direitos reservados.</span><a href="/privacidade/">Privacidade</a><span>Informações institucionais sujeitas à confirmação pela equipe.</span></div></footer>
    <a className="whatsapp-float" href="#contato" aria-label="Ir para formulário de contato"><MessageCircle size={22}/><span>Fale com a gente</span></a>
  </div>
}
export default App

/**
 * PORTFÓLIO - IZABEL DOS SANTOS LIMA
 * Scripts de Interatividade, Filtros, Modais, Links Reais dos Projetos e Gestão de Tema
 */

// ==========================================
// 1. BASE DE DADOS DOS PROJETOS & REPOSITÓRIOS
// ==========================================
const PROJETOS = [
  {
    id: "norte-eventos",
    title: "Norte Eventos",
    subtitle: "Sistema de Cadastro, Gerenciamento e Divulgação de Eventos",
    year: 2026,
    status: "Aberta / Open Source",
    isOpenSource: true,
    category: ["web", "figma", "opensource"],
    technologies: ["Figma", "HTML5", "JavaScript", "Tailwind CSS"],
    linkType: "github",
    linkUrl: "https://github.com/StevegitXz/Norte-Eventos.git",
    linkText: "Repositório GitHub",
    linkIcon: "github",
    icon: "calendar",
    color: "emerald",
    shortDesc: "Sistema web para cadastro, gestão e divulgação de eventos com inscrições, emissão de ingressos e acompanhamento de pagamentos.",
    fullDesc: `O projeto consiste em um sistema web completo para cadastro, gerenciamento e divulgação de eventos, permitindo que organizadores criem e administrem eventos com praticidade, enquanto os participantes pesquisam, visualizam detalhes e realizam inscrições online.

A plataforma centraliza dados cruciais como datas, horários, locais, vagas e valores, além de integrar recursos avançados de cadastro de usuários, gerenciamento de inscrições, emissão de ingressos digitais e acompanhamento de status de pagamentos.`,
    highlights: [
      "Código aberto e hospedado no GitHub",
      "Arquitetura escalável e layout moderno com Tailwind CSS",
      "Módulo de emissão de ingressos e gestão de participantes",
      "Prototipado no Figma com foco em experiência de usuário intuitiva"
    ],
    team: "Izabel dos Santos Lima e Equipe"
  },
  {
    id: "aula-bootstrap",
    title: "Aula Bootstrap",
    subtitle: "Desenvolvimento de Interfaces Responsivas com Framework Bootstrap",
    year: 2024,
    status: "Aberta / Open Source",
    isOpenSource: true,
    category: ["web", "opensource"],
    technologies: ["HTML5", "CSS3", "Bootstrap"],
    linkType: "github",
    linkUrl: "https://github.com/leedzawy/AulaBootstrap.git",
    linkText: "Repositório GitHub",
    linkIcon: "github",
    icon: "layout",
    color: "purple",
    shortDesc: "Repositório prático com componentes, páginas e layouts modernos explorando o grid responsivo e utilitários do Bootstrap.",
    fullDesc: `O repositório "Aula Bootstrap" reúne estudos e implementações práticas de interfaces web responsivas desenvolvidas com o framework Bootstrap.

O projeto explora a estruturação modular através do sistema de grid de 12 colunas, estilização com classes utilitárias, tipografia adaptável, cartões de conteúdo, barras de navegação e componentes interativos, consolidando fundamentos essenciais de agilidade e consistência visual no desenvolvimento front-end.`,
    highlights: [
      "Repositório público com código-fonte no GitHub",
      "Construção de layouts adaptáveis a múltiplos dispositivos",
      "Exploração do sistema de grid e componentes oficiais do Bootstrap",
      "Prática intensiva de estruturação semântica em HTML5 e estilização CSS3"
    ],
    team: "Izabel dos Santos Lima"
  },
  {
    id: "letters-hub",
    title: "Letter's Hub",
    subtitle: "Livraria, Cafeteria, Luderia e Cyber Café 24 Horas",
    year: 2025,
    status: "Fechado",
    isOpenSource: false,
    category: ["web", "figma"],
    technologies: ["Figma", "HTML5", "JavaScript", "Tailwind CSS"],
    linkType: "figma",
    linkUrl: "https://www.figma.com/design/vjCWCiKv1WFbC0K3Pvh5Wb/Untitled?m=auto&t=LfG2xoOtNrNuH6os-6",
    linkText: "Design no Figma",
    linkIcon: "figma",
    icon: "coffee",
    color: "amber",
    shortDesc: "Espaço multifuncional integrando livraria, cafeteria com cardápio online, luderia para board games e cyber café 24h para desenvolvedores.",
    fullDesc: `O Letter's Hub apresenta uma proposta inovadora para um espaço multifuncional que reúne livraria, cafeteria, luderia, sala de reuniões e cyber café 24 horas.

A livraria disponibiliza venda e aluguel de títulos, compras online com opção de entrega ou retirada, além de um espaço voltado a impulsionar novos escritores locais. A cafeteria conta com cardápio físico e online. A luderia oferece locação de card games e board games. Já o cyber café atua 24 horas, oferecendo conectividade veloz e um ecossistema fértil para novos desenvolvedores e gamers.`,
    highlights: [
      "Design completo e layout detalhado construído no Figma",
      "Integração de múltiplos modelos de serviços em uma só interface",
      "Cardápio e catálogo digital com busca facilitada",
      "Área dedicada a escritores e novos desenvolvedores"
    ],
    team: "Izabel dos Santos Lima"
  },
  {
    id: "site-netflix",
    title: "Aplicativo da Netflix",
    subtitle: "Plataforma de Filmes e Séries Inspirada no Streaming da Netflix",
    year: 2024,
    status: "Fechado",
    isOpenSource: false,
    category: ["web", "figma"],
    technologies: ["Figma", "HTML5", "CSS3"],
    linkType: "figma",
    linkUrl: "https://www.figma.com/design/n9IQFmTbrrN9AnPcaYr8Ky/Untitled?m=auto&t=y2t3CGfSrOTAdjqA-6",
    linkText: "Design no Figma",
    linkIcon: "figma",
    icon: "film",
    color: "red",
    shortDesc: "Recriação criativa da interface de séries e filmes inspirada na Netflix, com tipografia customizada, carrosséis e layout imersivo.",
    fullDesc: `Protótipo de uma plataforma de entretenimento com catálogo de séries e filmes inspirado na interface consagrada da Netflix, concebido com atenção à experiência visual e design de interfaces.

A proposta permitiu explorar criatividade e estilização autoral, adaptando paletas de cores, tipografia, estruturação de carrosséis de pôsteres e disposição imersiva de informações de sinopse e reprodução.`,
    highlights: [
      "Protótipo de telas e UI/UX completo no Figma",
      "Estilização apurada e organização de carrosséis visuais de produções",
      "Adaptação de layout imersivo para catálogo de streaming",
      "Prática de estruturação semântica e hierarquia visual"
    ],
    team: "Izabel dos Santos Lima"
  },
  {
    id: "loja-aidg",
    title: "Loja AIDG",
    subtitle: "Plataforma de E-commerce de Cosméticos e Skincare Natural",
    year: 2024,
    status: "Fechado",
    isOpenSource: false,
    category: ["web", "figma"],
    technologies: ["Figma", "HTML5", "Tailwind CSS"],
    linkType: "figma",
    linkUrl: "https://www.figma.com/proto/SNo6TQqZ6CKUbT0a7yD8BT?node-id=0-1&t=y2t3CGfSrOTAdjqA-6",
    linkText: "Protótipo no Figma",
    linkIcon: "figma",
    icon: "sparkles",
    color: "pink",
    shortDesc: "E-commerce prototipado no Figma e desenvolvido em HTML5 e Tailwind CSS para venda de produtos de cuidados com a pele naturais e éticos.",
    fullDesc: `O site e plataforma "AIDG" foi concebido e prototipado no Figma e desenvolvido utilizando HTML5 e Tailwind CSS, com o objetivo de oferecer uma experiência de compra intuitiva, moderna e agradável para produtos voltados a cuidados com a pele e bem-estar.

Criado em colaboração por Ana Clara Fischer, Daphinne Barros, Geovana Conceição e Izabel Lima, o projeto combinou o design de interfaces e fluxo de usuário no Figma com a implementação front-end ágil. Os produtos apresentados são ricos em nutrientes, naturais e obtidos de forma ética, priorizando acessibilidade e qualidade.`,
    highlights: [
      "Prototipagem de telas e identidade visual criadas no Figma",
      "Desenvolvimento front-end moderno com HTML5 e Tailwind CSS",
      "Design de catálogo limpo focado na experiência de compra do cliente",
      "Trabalho colaborativo do design de interface até a codificação"
    ],
    team: "Ana Clara Fischer, Daphinne Barros, Geovana Conceição e Izabel Lima"
  },
  {
    id: "digital-academy",
    title: "Digital Academy",
    subtitle: "Plataforma de Ensino Online e Aprendizado Acessível e Intuitivo",
    year: 2025,
    status: "Fechado",
    isOpenSource: false,
    category: ["web", "figma"],
    technologies: ["Figma", "HTML5", "JavaScript", "Tailwind CSS"],
    linkType: "private",
    linkUrl: null,
    linkText: "Acesso Privado",
    linkIcon: "lock",
    icon: "graduation-cap",
    color: "purple",
    shortDesc: "Plataforma de ensino online acessível e segura criada para conectar professores e alunos com acompanhamento de progresso e avaliações.",
    fullDesc: `O projeto consiste em uma plataforma de ensino online acessível, segura e intuitiva, concebida para conectar professores e alunos de forma transparente.

Os educadores contam com ferramentas para cadastrar e gerenciar módulos de cursos, enquanto os alunos desfrutam de um ambiente amigável para assistir aulas, monitorar o progresso das disciplinas, realizar avaliações formativas e emitir certificações, tornando a jornada de aprendizagem muito mais dinâmica e estruturada.`,
    highlights: [
      "Ambiente de aprendizagem seguro e acessível",
      "Design de telas no Figma centrado no estudante",
      "Painel de controle do aluno e do professor",
      "Estrutura modular em JavaScript e Tailwind CSS"
    ],
    team: "Izabel dos Santos Lima"
  }
];

// ==========================================
// 2. INICIALIZAÇÃO DO DOM E EVENTOS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderProjects("todos");
  renderRepositoriesList();
  setupFilterTabs();
  setupEventListeners();
  setupScrollReveal();
  setupBackToTop();
  lucide.createIcons();
});

// ==========================================
// 3. GESTÃO DE TEMA (DARK / LIGHT MODE)
// ==========================================
function initTheme() {
  const savedTheme = localStorage.getItem("portfolio_theme") || "dark";
  applyTheme(savedTheme);

  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.classList.contains("light") ? "light" : "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem("portfolio_theme", newTheme);
      showToast(`Tema ${newTheme === "light" ? "Claro" : "Escuro"} ativado!`, "info");
    });
  }
}

function applyTheme(theme) {
  const root = document.documentElement;
  const themeIcon = document.getElementById("theme-toggle-icon");

  if (theme === "light") {
    root.classList.add("light");
    if (themeIcon) {
      themeIcon.setAttribute("data-lucide", "moon");
    }
  } else {
    root.classList.remove("light");
    if (themeIcon) {
      themeIcon.setAttribute("data-lucide", "sun");
    }
  }
  lucide.createIcons();
}

// ==========================================
// 4. RENDERIZAÇÃO DOS CARDS DE PROJETOS
// ==========================================
function renderProjects(filter = "todos") {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered = PROJETOS.filter(proj => {
    if (filter === "todos") return true;
    return proj.category.includes(filter);
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 text-gray-400">
        Nenhum projeto encontrado nesta categoria.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => {
    const isOsm = p.isOpenSource;
    const badgeClass = isOsm ? "badge-status-open" : "badge-status-closed";
    const statusText = isOsm ? "Open Source" : "Fechado";

    // Botão de ação direta dependendo do link disponível
    let actionButtonHtml = "";
    if (p.linkType === "github" && p.linkUrl) {
      actionButtonHtml = `
        <a href="${p.linkUrl}" target="_blank" rel="noopener noreferrer" title="Acessar Repositório no GitHub" class="p-2 rounded-lg bg-gray-800/80 hover:bg-purple-600/40 text-gray-300 hover:text-white border border-white/10 transition-all flex items-center gap-1.5 text-xs font-medium">
          <i data-lucide="github" class="w-3.5 h-3.5 text-purple-400"></i>
          <span>GitHub</span>
        </a>
      `;
    } else if (p.linkType === "figma" && p.linkUrl) {
      actionButtonHtml = `
        <a href="${p.linkUrl}" target="_blank" rel="noopener noreferrer" title="Ver no Figma" class="p-2 rounded-lg bg-gray-800/80 hover:bg-purple-600/40 text-gray-300 hover:text-white border border-white/10 transition-all flex items-center gap-1.5 text-xs font-medium">
          <i data-lucide="figma" class="w-3.5 h-3.5 text-pink-400"></i>
          <span>Figma</span>
        </a>
      `;
    } else {
      actionButtonHtml = `
        <span class="px-2.5 py-1.5 rounded-lg bg-gray-800/50 text-gray-400 border border-white/5 flex items-center gap-1 text-xs" title="Sem acesso público">
          <i data-lucide="lock" class="w-3 h-3 text-gray-500"></i>
          <span>Privado</span>
        </span>
      `;
    }

    return `
      <div class="feature-card rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden" data-id="${p.id}">
        <div class="absolute -right-12 -top-12 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
        
        <div>
          <!-- Cabeçalho do Card -->
          <div class="flex items-center justify-between mb-4">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${badgeClass}">
              <span class="w-2 h-2 rounded-full ${isOsm ? 'bg-emerald-400 animate-pulse' : 'bg-gray-400'}"></span>
              ${statusText}
            </span>
            <span class="text-xs font-mono text-gray-400 bg-gray-800/60 light:bg-gray-200 px-2.5 py-0.5 rounded-md border border-gray-700/40 light:border-gray-300">
              ${p.year}
            </span>
          </div>

          <!-- Título & Subtítulo -->
          <h3 class="text-xl font-bold text-white group-hover:text-purple-400 transition-colors mb-2 flex items-center gap-2">
            ${p.title}
          </h3>
          <p class="text-xs text-purple-300/80 font-medium mb-3">
            ${p.subtitle}
          </p>
          <p class="text-sm text-gray-300 mb-5 line-clamp-3 leading-relaxed">
            ${p.shortDesc}
          </p>

          <!-- Tecnologias -->
          <div class="flex flex-wrap gap-1.5 mb-6">
            ${p.technologies.map(t => `<span class="badge-tech">${t}</span>`).join("")}
          </div>
        </div>

        <!-- Ações do Card -->
        <div class="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
          <button onclick="openProjectModal('${p.id}')" class="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1.5 py-1.5 px-3 rounded-lg hover:bg-purple-500/10 transition-all">
            <i data-lucide="info" class="w-3.5 h-3.5"></i>
            Ver Detalhes
          </button>
          
          <div class="flex items-center gap-2">
            ${actionButtonHtml}
          </div>
        </div>
      </div>
    `;
  }).join("");

  lucide.createIcons();
}

// ==========================================
// 5. FILTRO DE TABS DOS PROJETOS
// ==========================================
function setupFilterTabs() {
  const tabs = document.querySelectorAll(".project-filter-btn");
  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      tabs.forEach(b => {
        b.classList.remove("active", "bg-purple-600", "text-white");
        b.classList.add("text-gray-400", "hover:text-white");
      });
      btn.classList.add("active", "bg-purple-600", "text-white");
      btn.classList.remove("text-gray-400");
      
      const filter = btn.getAttribute("data-filter");
      renderProjects(filter);
    });
  });
}

// ==========================================
// 6. LISTA CENTRALIZADA DE REPOSITÓRIOS & LINKS
// ==========================================
function renderRepositoriesList() {
  const repoContainer = document.getElementById("repositories-list-container");
  if (!repoContainer) return;

  repoContainer.innerHTML = PROJETOS.map(p => {
    let actionBlock = "";

    if (p.linkUrl) {
      const isGitHub = p.linkType === "github";
      const badgeType = isGitHub 
        ? '<span class="text-xs px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800 flex items-center gap-1"><i data-lucide="github" class="w-3 h-3"></i> GitHub</span>'
        : '<span class="text-xs px-2 py-0.5 rounded bg-pink-950 text-pink-300 border border-pink-800 flex items-center gap-1"><i data-lucide="figma" class="w-3 h-3"></i> Figma</span>';

      actionBlock = `
        <div class="flex items-center gap-2 self-end sm:self-center">
          <button onclick="copyToClipboard('${p.linkUrl}', 'Link copiado com sucesso!')" class="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border border-white/10 flex items-center gap-1.5 transition-colors" title="Copiar URL">
            <i data-lucide="copy" class="w-3.5 h-3.5"></i>
            Copiar Link
          </button>
          <a href="${p.linkUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 text-xs font-medium rounded-lg ${isGitHub ? 'bg-purple-600 hover:bg-purple-500' : 'bg-pink-600 hover:bg-pink-500'} text-white flex items-center gap-1.5 transition-colors">
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            ${isGitHub ? 'Acessar GitHub' : 'Acessar Figma'}
          </a>
        </div>
      `;

      return `
        <div class="p-4 rounded-xl bg-gray-900/60 light:bg-white border border-white/10 light:border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-purple-500/40 transition-all">
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <h4 class="font-semibold text-white text-base">${p.title}</h4>
              <span class="text-xs px-2 py-0.5 rounded bg-gray-800 text-gray-300 font-mono">${p.year}</span>
              ${p.isOpenSource ? '<span class="text-xs px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">Open Source</span>' : ''}
              ${badgeType}
            </div>
            <p class="text-xs text-gray-400 mt-1 max-w-xl truncate">${p.subtitle}</p>
            <div class="flex items-center gap-2 mt-2">
              <span class="text-xs font-mono text-purple-400">${p.technologies.join(" • ")}</span>
            </div>
          </div>
          ${actionBlock}
        </div>
      `;
    } else {
      // Digital Academy (sem acesso público)
      return `
        <div class="p-4 rounded-xl bg-gray-900/60 light:bg-white border border-white/10 light:border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-gray-700 transition-all opacity-90">
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <h4 class="font-semibold text-white text-base">${p.title}</h4>
              <span class="text-xs px-2 py-0.5 rounded bg-gray-800 text-gray-300 font-mono">${p.year}</span>
              <span class="text-xs px-2 py-0.5 rounded bg-gray-800 text-gray-400 border border-gray-700 flex items-center gap-1">
                <i data-lucide="lock" class="w-3 h-3"></i> Acesso Fechado
              </span>
            </div>
            <p class="text-xs text-gray-400 mt-1 max-w-xl truncate">${p.subtitle}</p>
            <div class="flex items-center gap-2 mt-2">
              <span class="text-xs font-mono text-gray-400">${p.technologies.join(" • ")}</span>
            </div>
          </div>
          <div class="self-end sm:self-center">
            <span class="px-3 py-1.5 text-xs font-medium rounded-lg bg-gray-800/80 text-gray-400 border border-white/5 flex items-center gap-1.5">
              <i data-lucide="shield-alert" class="w-3.5 h-3.5 text-amber-400/80"></i>
              Sem acesso público
            </span>
          </div>
        </div>
      `;
    }
  }).join("");

  lucide.createIcons();
}

// ==========================================
// 7. MODAL DE DETALHES DO PROJETO
// ==========================================
function openProjectModal(projectId) {
  const project = PROJETOS.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-project-content");
  if (!modal || !modalBody) return;

  // Botões de link do modal
  let modalLinksHtml = "";
  if (project.linkUrl) {
    const isGitHub = project.linkType === "github";
    modalLinksHtml = `
      <div class="flex items-center gap-2 flex-wrap">
        <a href="${project.linkUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 text-xs font-semibold rounded-lg ${isGitHub ? 'bg-purple-600 hover:bg-purple-500' : 'bg-pink-600 hover:bg-pink-500'} text-white flex items-center gap-2 transition-colors">
          <i data-lucide="${project.linkIcon}" class="w-4 h-4"></i>
          ${isGitHub ? 'Acessar Repositório no GitHub' : 'Acessar Projeto no Figma'}
        </a>
        <button onclick="copyToClipboard('${project.linkUrl}', 'Link copiado com sucesso!')" class="px-3 py-2 text-xs font-medium rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 border border-white/10 flex items-center gap-1.5 transition-colors">
          <i data-lucide="copy" class="w-3.5 h-3.5"></i>
          Copiar Link
        </button>
      </div>
    `;
  } else {
    modalLinksHtml = `
      <div class="p-3 rounded-lg bg-gray-900/90 border border-white/5 flex items-center gap-2 text-xs text-gray-400">
        <i data-lucide="lock" class="w-4 h-4 text-amber-400 flex-shrink-0"></i>
        <span>Projeto de escopo acadêmico fechado (sem disponibilização pública no momento).</span>
      </div>
    `;
  }

  modalBody.innerHTML = `
    <div class="space-y-6">
      <!-- Cabeçalho do Modal -->
      <div>
        <div class="flex items-center justify-between gap-4 mb-2">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${project.isOpenSource ? 'badge-status-open' : 'badge-status-closed'}">
            ${project.isOpenSource ? 'Aberta / Open Source' : 'Disponibilidade: Fechada'}
          </span>
          <span class="text-xs font-mono text-purple-400 bg-purple-950/40 border border-purple-800/50 px-2.5 py-1 rounded-md">
            Ano: ${project.year}
          </span>
        </div>
        <h2 class="text-2xl font-bold text-white mb-1">${project.title}</h2>
        <p class="text-sm text-purple-300 font-medium">${project.subtitle}</p>
      </div>

      <!-- Equipe / Autoria -->
      <div class="p-3.5 rounded-xl bg-gray-900/80 light:bg-gray-100 border border-white/5">
        <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1">Equipe / Desenvolvimento:</span>
        <p class="text-sm font-medium text-gray-200">${project.team}</p>
      </div>

      <!-- Descrição Completa -->
      <div>
        <h4 class="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">Sobre o Projeto</h4>
        <p class="text-sm text-gray-300 whitespace-pre-line leading-relaxed">${project.fullDesc}</p>
      </div>

      <!-- Pontos de Destaque -->
      <div>
        <h4 class="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">Destaques e Funcionalidades</h4>
        <ul class="space-y-2 text-sm text-gray-300">
          ${project.highlights.map(h => `
            <li class="flex items-start gap-2">
              <span class="text-purple-400 mt-0.5">•</span>
              <span>${h}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <!-- Tecnologias -->
      <div>
        <h4 class="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">Tecnologias Utilizadas</h4>
        <div class="flex flex-wrap gap-2">
          ${project.technologies.map(t => `<span class="badge-tech">${t}</span>`).join("")}
        </div>
      </div>

      <!-- Links Diretos -->
      <div class="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
        ${modalLinksHtml}
        <button onclick="closeProjectModal()" class="px-4 py-2 text-xs font-medium rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors">
          Fechar
        </button>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// ==========================================
// 8. FUNÇÕES DE CÓPIA & NOTIFICAÇÃO TOAST
// ==========================================
function copyToClipboard(text, customMessage = "Copiado para a área de transferência!") {
  navigator.clipboard.writeText(text).then(() => {
    showToast(customMessage, "success");
  }).catch(() => {
    // Fallback para navegadores legados
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      showToast(customMessage, "success");
    } catch (err) {
      showToast("Erro ao copiar texto.", "error");
    }
    document.body.removeChild(textArea);
  });
}

function showToast(message, type = "success") {
  const toast = document.getElementById("toast-notification");
  const toastMessage = document.getElementById("toast-message");
  const toastIcon = document.getElementById("toast-icon");
  if (!toast || !toastMessage) return;

  toastMessage.innerText = message;
  
  if (toastIcon) {
    if (type === "success") {
      toastIcon.setAttribute("data-lucide", "check-circle-2");
      toastIcon.className = "w-5 h-5 text-emerald-400";
    } else if (type === "error") {
      toastIcon.setAttribute("data-lucide", "alert-circle");
      toastIcon.className = "w-5 h-5 text-red-400";
    } else {
      toastIcon.setAttribute("data-lucide", "info");
      toastIcon.className = "w-5 h-5 text-purple-400";
    }
    lucide.createIcons();
  }

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

// ==========================================
// 9. CONFIGURAÇÃO DE EVENTOS GERAIS
// ==========================================
function setupEventListeners() {
  // Fechar modal ao clicar fora
  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
  }

  // Tecla Escape fecha modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal();
    }
  });

  // Menu Mobile Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // Botão copiar resumo Lattes
  const copyLattesBtn = document.getElementById("btn-copy-lattes");
  if (copyLattesBtn) {
    copyLattesBtn.addEventListener("click", () => {
      const lattesText = document.getElementById("lattes-resume-text")?.innerText || "";
      copyToClipboard(lattesText, "Resumo Lattes copiado com sucesso!");
    });
  }

  // Botão copiar citação bibliográfica
  const copyCitationBtn = document.getElementById("btn-copy-citation");
  if (copyCitationBtn) {
    copyCitationBtn.addEventListener("click", () => {
      const citationText = "LIMA, I. S.; DOS SANTOS LIMA, Izabel";
      copyToClipboard(citationText, "Citação bibliográfica copiada!");
    });
  }

  // Botão copiar e-mail
  const copyEmailBtn = document.getElementById("btn-copy-email");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      copyToClipboard("izabel23122008@gmail.com", "E-mail copiado para a área de transferência!");
    });
  }
}

// ==========================================
// 10. BOTÃO VOLTAR AO TOPO & SCROLL REVEAL
// ==========================================
function setupBackToTop() {
  const btn = document.getElementById("btn-back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
}

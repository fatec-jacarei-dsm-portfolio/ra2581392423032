document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano atual no rodapé
    document.getElementById('ano-atual').textContent = new Date().getFullYear();
    
    // Navegação com rolagem suave
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Funcionalidade das abas de projetos
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabTarget = this.getAttribute('data-tab');
            
            // Atualiza botões ativos
            tabBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Mostra conteúdo da aba selecionada
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabTarget) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Efeito ao rolar para exibir elementos
    const scrollElements = document.querySelectorAll('.project-card, .contact-link');
    
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 80)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
});
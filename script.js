const titles = document.querySelectorAll('.job-content h2');

titles.forEach(title => {
    const video = title.nextElementSibling;

    // Click effect
    title.addEventListener('click', () => {
        if (video.style.display === 'none') {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
});
function toggleLanguage() {
    // Get the <p> tag element within the <div class="pti"> tag
    const ptiTag = document.querySelector('.pti p');
    const knnTag = document.querySelector('.knn p');
    const getTag = document.querySelector('.get-wise p');
    const transTag = document.querySelector('.translation p');



    // Get the current language
    const currentLanguage = ptiTag.dataset.language || 'english';

    // Toggle between English and Portuguese
    if (currentLanguage === 'english') {
        ptiTag.textContent = "During my internship with the Department of International Affairs, I had the opportunity to collaborate with Itaipu Binacional and Itaipu Technology Park. As part of my responsibilities, I was tasked with translating various documents, contracts, e-mails, invitations, and itineraries from English to Portuguese. Additionally, I assisted in organizing national and international business meetings, as well as planning and coordinating travel arrangements such as booking hotels and purchasing tickets.";
        ptiTag.dataset.language = 'portuguese';
        getTag.textContent = "I have experience teaching ESL to both children and adults and am familiar with the Callan Method. I have assisted in creating lesson materials and proofreading texts, textbooks, and academic papers. I also grade fluency levels and create marketing videos using Premiere Pro. Additionally, I have provided translation services and executed conversation classes and assisted students with learning disabilities. "
        transTag.textContent ="\n" +
            "\n" +
            "Research on Pedagogic Methods - Unioste - Letras Português e Alemão. (PT-BR - EN-US)\n" +
            "\n" +
            "The Advancement of Techology and Optimization of Processess - Accounting Sciences) – Faculdade de Ensino Superior - ISEPE Rondon/Campus 2.(PT-BR - EN-US)\n" +
            "\n" +
            "Technology parks internationalization: A case study at the Itaipu Technology Park (PTI-BR)(PT-BR - EN-US).\n"
        knnTag.textContent = "My professional experience involves instructing English as a Second Language (ESL) to both children and adults, utilizing KNN's proprietary methodology. I specialize in conversational lessons and am adept at creating educational content for social media platforms such as Instagram and TikTok, including the development of scripts and editing of videos using Premiere Pro. ";
    } else {
        ptiTag.textContent = "Durante o estágio com o Departamento de Relações Internacionais, tive a oportunidade de " +
            "colaborar com a Itaipu Binacional e o Parque Tecnológico Itaipu. Como parte das minhas responsabilidades, " +
            "fui encarregado de traduzir vários documentos, contratos, e-mails, convites e itinerários do inglês para o " +
            "português. Além disso, ajudei a organizar reuniões de negócios nacionais e internacionais, bem como a" +
            " planejar e coordenar arranjos de viagem, como reservas de hotéis e compra de passagens.";
        ptiTag.dataset.language = 'english';
        getTag.textContent ="Eu tenho experiência em ensinar ESL para crianças e adultos e estou familiarizado com o " +
            "Método Callan. Ajudei na criação de materiais de aula e na revisão de textos, livros didáticos e " +
            "trabalhos acadêmicos. Também atribuí níveis de fluência e criei vídeos de marketing usando o Premiere Pro." +
            " Além disso, prestei serviços de tradução e executei aulas de conversação, além de auxiliar estudantes com" +
            " dificuldades de aprendizagem.";

        transTag.textContent ="Pesquisa sobre Métodos Pedagógicos - Unioste - Letras Português e Alemão. (PT-BR - EN-US)\n" +
            "\n" +
            "O Avanço da Tecnologia e a Otimização dos Processos - Ciências Contábeis - Faculdade de Ensino Superior - ISEPE Rondon/Campus 2. (PT-BR - EN-US)\n" +
            "\n" +
            "Internacionalização de Parques Tecnológicos: Um estudo de caso no Parque Tecnológico Itaipu (PTI-BR) (PT-BR - EN-US).";

        knnTag.textContent = "Minha experiência profissional envolve o ensino de inglês como segunda língua (ESL) para " +
            "crianças e adultos, utilizando a metodologia exclusiva da KNN. Eu sou especializado em aulas de conversação " +
            "e sou habilidoso na criação de conteúdo educacional para plataformas de mídia social como Instagram e TikTok," +
            " incluindo o desenvolvimento de roteiros e a edição de vídeos usando o Premiere Pro.";
    }
}

// Add an event listener to the language button to trigger the language toggle
const languageButton = document.getElementById('languageButton');
languageButton.addEventListener('click', toggleLanguage);


const backToTopBtn = document.getElementById('back-to-top-btn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        backToTopBtn.classList.add('show-back-to-top-btn');
    } else {
        backToTopBtn.classList.remove('show-back-to-top-btn');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Get the index div
const indexDiv = document.querySelector('.index');

// Add event listener to toggle the menu
indexDiv.addEventListener('click', function () {
  indexDiv.classList.toggle('collapsed');
});

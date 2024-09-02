// script.js

// Função para mostrar a seção selecionada
function showSection(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Mostra apenas a seção selecionada
    document.getElementById(sectionId).style.display = 'block';
}
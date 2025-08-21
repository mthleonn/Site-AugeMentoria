// Configuração de caminhos para imagens e assets
const ASSETS_CONFIG = {
    // Pasta base para assets
    BASE_PATH: './assets/images/',
    
    // Logos
    LOGO_AUGE: './assets/images/Logo_augesemfundo.jpg', // Logo oficial AUGE
    
    // Imagens dos mentores
    MENTOR_RAFAEL: './assets/images/Rafael.jpg', // Manter na raiz por enquanto
    MENTOR_DANIEL: './assets/images/Daniel.jpg', // Manter na raiz por enquanto
    
    // Imagens dos módulos
    MODULO_1: './assets/images/1.jpg', // Capa do Módulo 1
    MODULO_2: './assets/images/2.jpg', // Capa do Módulo 2
    MODULO_3: './assets/images/3.jpg', // Capa do Módulo 3
    MODULO_4: './assets/images/4.jpg', // Capa do Módulo 4
    MODULO_5: './assets/images/modulo5.jpg', // Placeholder - você pode substituir
    MODULO_6: './assets/images/modulo6.jpg', // Placeholder - você pode substituir
    
    // Imagens de fundo
    COMPUTERS_BG: './computers-bg.svg', // Manter na raiz por enquanto
    
    // Outras imagens que você pode adicionar
    HERO_MENTORS: './assets/images/fotojuntos.jpg', // Foto dos mentores juntos na seção hero
    HERO_IMAGE: './assets/images/hero-image.jpg',
    TESTIMONIAL_1: './assets/images/testimonial1.jpg',
    TESTIMONIAL_2: './assets/images/testimonial2.jpg',
    
    // Função helper para obter caminho completo
    getImagePath: function(imageName) {
        return this[imageName] || this.BASE_PATH + imageName;
    }
};

// Exportar para uso no HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ASSETS_CONFIG;
}

// Disponibilizar globalmente no browser
if (typeof window !== 'undefined') {
    window.ASSETS_CONFIG = ASSETS_CONFIG;
}
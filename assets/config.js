// Configuração de caminhos para imagens e assets
const ASSETS_CONFIG = {
    // Pasta base para assets
    BASE_PATH: './assets/images/',
    
    // Logos
    LOGO_AUGE: './assets/images/Logo_augesemfundo.jpg', // Logo oficial AUGE
    
    // Imagens dos mentores (agora usando SVGs na raiz)
    MENTOR_RAFAEL: './rafael.svg',
    MENTOR_DANIEL: './daniel.svg',
    
    // Imagens dos módulos
    MODULO_1: './assets/images/1.jpg', // Capa do Módulo 1
    MODULO_2: './assets/images/2.jpg', // Capa do Módulo 2
    MODULO_3: './assets/images/3.jpg', // Capa do Módulo 3
    MODULO_4: './assets/images/4.jpg', // Capa do Módulo 4

    
    // Imagens de fundo
    COMPUTERS_BG: './computers-bg.svg', // Manter na raiz por enquanto
    
    // Outras imagens utilizadas
    HERO_MENTORS: './assets/images/fotojuntos.jpg', // Foto dos mentores juntos na seção hero
    
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
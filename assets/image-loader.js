// Script otimizado para carregar imagens usando a configuração
(function() {
    'use strict';
    
    // Cache para elementos já processados
    const processedElements = new Set();
    
    document.addEventListener('DOMContentLoaded', function() {
        // Verificar se a configuração está disponível
        if (typeof ASSETS_CONFIG === 'undefined') {
            console.warn('ASSETS_CONFIG não encontrado. Usando caminhos padrão.');
            return;
        }

        // Função otimizada para atualizar src de uma imagem
        function updateImageSrc(elementId, configKey) {
            if (processedElements.has(elementId)) {
                return; // Evita processamento duplicado
            }
            
            const element = document.getElementById(elementId);
            if (!element) {
                console.warn(`Elemento ${elementId} não encontrado`);
                return;
            }
            
            if (!ASSETS_CONFIG[configKey]) {
                console.warn(`Configuração ${configKey} não encontrada`);
                return;
            }
            
            // Adicionar tratamento de erro para carregamento de imagem
            element.onerror = function() {
                console.error(`Erro ao carregar imagem: ${ASSETS_CONFIG[configKey]}`);
                // Fallback para imagem padrão se necessário
                this.style.display = 'none';
            };
            
            element.onload = function() {
                console.log(`Imagem ${elementId} carregada com sucesso`);
            };
            
            element.src = ASSETS_CONFIG[configKey];
            processedElements.add(elementId);
        }

        // Função otimizada para substituir placeholder por imagem real
        function replacePlaceholderWithImage(placeholderId, configKey, altText) {
            if (processedElements.has(placeholderId)) {
                return; // Evita processamento duplicado
            }
            
            const placeholder = document.getElementById(placeholderId);
            if (!placeholder) {
                console.warn(`Placeholder ${placeholderId} não encontrado`);
                return;
            }
            
            if (!ASSETS_CONFIG[configKey]) {
                console.warn(`Configuração ${configKey} não encontrada`);
                return;
            }
            
            // Criar elemento img com tratamento de erro
            const img = document.createElement('img');
            img.src = ASSETS_CONFIG[configKey];
            img.alt = altText || 'Imagem';
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '10px';
            
            img.onerror = function() {
                console.error(`Erro ao carregar placeholder ${placeholderId}: ${ASSETS_CONFIG[configKey]}`);
                this.style.display = 'none';
            };
            
            img.onload = function() {
                console.log(`Placeholder ${placeholderId} carregado com sucesso`);
            };
            
            // Substituir o placeholder
            try {
                placeholder.parentNode.replaceChild(img, placeholder);
                processedElements.add(placeholderId);
            } catch (error) {
                console.error(`Erro ao substituir placeholder ${placeholderId}:`, error);
            }
        }

        // Lista de imagens para carregar com tratamento de erro
        const imagesToLoad = [
            { elementId: 'logo-img', configKey: 'LOGO_AUGE' },
            { elementId: 'hero-mentors-img', configKey: 'HERO_MENTORS' },
            { elementId: 'mentor-rafael-img', configKey: 'MENTOR_RAFAEL' },
            { elementId: 'mentor-daniel-img', configKey: 'MENTOR_DANIEL' },
            { elementId: 'modulo-1-img', configKey: 'MODULO_1' },
            { elementId: 'modulo-2-img', configKey: 'MODULO_2' },
            { elementId: 'modulo-3-img', configKey: 'MODULO_3' },
            { elementId: 'modulo-4-img', configKey: 'MODULO_4' }
        ];
        
        const placeholdersToReplace = [
            { placeholderId: 'modulo-5-placeholder', configKey: 'MODULO_5', altText: 'Módulo 5 - Estratégias Avançadas' },
            { placeholderId: 'modulo-6-placeholder', configKey: 'MODULO_6', altText: 'Módulo 6 - Planejamento Financeiro' }
        ];
        
        // Carregar imagens com controle de erro
        let loadedCount = 0;
        let errorCount = 0;
        
        imagesToLoad.forEach(({ elementId, configKey }) => {
            try {
                updateImageSrc(elementId, configKey);
                loadedCount++;
            } catch (error) {
                console.error(`Erro ao processar ${elementId}:`, error);
                errorCount++;
            }
        });
        
        // Substituir placeholders
        placeholdersToReplace.forEach(({ placeholderId, configKey, altText }) => {
            try {
                replacePlaceholderWithImage(placeholderId, configKey, altText);
                loadedCount++;
            } catch (error) {
                console.error(`Erro ao processar placeholder ${placeholderId}:`, error);
                errorCount++;
            }
        });
        
        console.log(`Sistema de carregamento de imagens inicializado! Processados: ${loadedCount}, Erros: ${errorCount}`);
    });
    
    // Função global otimizada para atualizar uma imagem específica
    window.updateImage = function(elementId, newPath) {
        if (!elementId || !newPath) {
            console.warn('ID do elemento e caminho da imagem são obrigatórios');
            return false;
        }
        
        const element = document.getElementById(elementId);
        if (!element) {
            console.warn(`Elemento ${elementId} não encontrado.`);
            return false;
        }
        
        element.onerror = function() {
            console.error(`Erro ao carregar imagem manual: ${newPath}`);
        };
        
        element.onload = function() {
            console.log(`Imagem ${elementId} atualizada manualmente com sucesso`);
        };
        
        element.src = newPath;
        return true;
    };
    
    // Função global otimizada para listar todas as imagens configuráveis
    window.listConfigurableImages = function() {
        if (typeof ASSETS_CONFIG === 'undefined') {
            console.error('ASSETS_CONFIG não está disponível');
            return;
        }
        
        console.log('=== IMAGENS CONFIGURÁVEIS ===');
        Object.entries(ASSETS_CONFIG).forEach(([key, value]) => {
            if (typeof value === 'string' && (value.includes('.jpg') || value.includes('.png') || value.includes('.svg'))) {
                console.log(`${key}:`, value);
            }
        });
        console.log('==============================');
    };
    
    // Função para verificar se todas as imagens foram carregadas
    window.checkImageLoadStatus = function() {
        const images = document.querySelectorAll('img');
        let loaded = 0;
        let failed = 0;
        
        images.forEach(img => {
            if (img.complete) {
                if (img.naturalWidth === 0) {
                    failed++;
                } else {
                    loaded++;
                }
            }
        });
        
        console.log(`Status das imagens - Carregadas: ${loaded}, Falharam: ${failed}, Total: ${images.length}`);
        return { loaded, failed, total: images.length };
    };
})();
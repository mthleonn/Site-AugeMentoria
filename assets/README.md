# Sistema de Configuração de Imagens - AUGE

## Estrutura de Pastas

```
assets/
├── config.js          # Configuração de caminhos das imagens
├── image-loader.js    # Script que carrega as imagens automaticamente
├── images/            # Pasta para suas imagens personalizadas
└── README.md          # Este arquivo
```

## Como Usar

### 1. Adicionando Suas Imagens

1. Coloque suas imagens na pasta `assets/images/`
2. Edite o arquivo `assets/config.js` para apontar para suas imagens
3. Recarregue a página

### 2. Configurando Caminhos

Edite o arquivo `assets/config.js` e modifique os caminhos:

```javascript
const ASSETS_CONFIG = {
    // Exemplo: para usar uma imagem na pasta assets/images/
    MODULO_1: './assets/images/minha-imagem-modulo1.jpg',
    
    // Exemplo: para usar uma imagem na raiz do projeto
    LOGO_AUGE: './meu-logo.png',
    
    // Exemplo: para usar uma URL externa
    MENTOR_RAFAEL: 'https://exemplo.com/foto-rafael.jpg'
};
```

### 3. Imagens Configuráveis

| Elemento | Chave de Configuração | Descrição |
|----------|----------------------|------------|
| Logo AUGE | `LOGO_AUGE` | Logo principal no cabeçalho |
| Foto Rafael | `MENTOR_RAFAEL` | Foto do mentor Rafael |
| Foto Daniel | `MENTOR_DANIEL` | Foto do mentor Daniel |
| Módulo 1 | `MODULO_1` | Imagem do Módulo 1 - Fundamentos |
| Módulo 2 | `MODULO_2` | Imagem do Módulo 2 - Análise Técnica |
| Módulo 3 | `MODULO_3` | Imagem do Módulo 3 - Gestão de Risco |
| Módulo 4 | `MODULO_4` | Imagem do Módulo 4 - Psicologia |
| Módulo 5 | `MODULO_5` | Imagem do Módulo 5 - Estratégias Avançadas |
| Módulo 6 | `MODULO_6` | Imagem do Módulo 6 - Planejamento Financeiro |

### 4. Comandos Úteis no Console do Browser

Abra o console do navegador (F12) e use:

```javascript
// Ver todas as imagens configuradas
listConfigurableImages();

// Atualizar uma imagem específica
updateImage('logo-img', './nova-imagem.png');
```

### 5. Formatos Recomendados

- **Logo**: SVG ou PNG (fundo transparente)
- **Fotos dos Mentores**: JPG ou PNG (proporção quadrada ou retrato)
- **Módulos**: JPG ou PNG (proporção 300x250px recomendada)

### 6. Exemplo Prático

Para adicionar uma nova imagem do Módulo 1:

1. Coloque sua imagem em `assets/images/modulo1-fundamentos.jpg`
2. Edite `assets/config.js`:
   ```javascript
   MODULO_1: './assets/images/modulo1-fundamentos.jpg',
   ```
3. Recarregue a página

## Troubleshooting

- **Imagem não aparece**: Verifique se o caminho está correto no `config.js`
- **Console com erros**: Abra F12 e veja as mensagens de erro
- **Imagem cortada**: Ajuste as dimensões da imagem ou use `object-fit: cover`

## Suporte

Se tiver dúvidas, verifique o console do navegador para mensagens de debug.
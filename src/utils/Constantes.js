const tamanhos = {
    titulos_maiores: '4rem',
    titulos: '1.2rem',
    paragrafos: '0.8rem',
}

const cores = {
    azul_escuro: '#1A154B',
    quase_preto: '#1E1E1E',
    branco: '#FFFFFF'
}

// Função para definir variáveis CSS
export function setCssVariables() {
    const root = document.documentElement;

    // Definindo tamanhos
    for (const [key, value] of Object.entries(tamanhos)) {
        root.style.setProperty(`--${key}`, value);
    }

    // Definindo cores
    for (const [key, value] of Object.entries(cores)) {
        root.style.setProperty(`--${key}`, value);
    }
}

// Exportar tamanhos e cores
export { tamanhos, cores };

// Chamar a função para aplicar as variáveis imediatamente
setCssVariables();

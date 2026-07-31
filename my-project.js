// ============ PROJETO INTERATIVO - EDUCAÇÃO ADVENTISTA ============
// Página com animações e sons dos personagens

console.log('🎓 Educação Adventista - Projeto Carregado');

// ============ IMPORTAR SCRIPTS DE ANIMAÇÃO E ÁUDIO ============
// character-audio.js - Sons dos personagens
// animations.js - Animações principais

// ============ VARIÁVEIS GLOBAIS ============
let isPageFlipped = false;
let isFaucetRunning = false;
let isWheelchairMoving = false;

// ============ INICIALIZAR PROJETO ============
function initProject() {
    console.log('✅ Projeto inicializado com sucesso!');
    setupEventListeners();
    setupAnimations();
    setupAudio();
}

// ============ CONFIGURAR LISTENERS DE EVENTOS ============
function setupEventListeners() {
    // Página virando
    const flipBtn = document.getElementById('flipBtn');
    if (flipBtn) {
        flipBtn.addEventListener('click', handlePageFlip);
    }
    
    // Torneira pingando
    const toggleFaucet = document.getElementById('toggleFaucet');
    if (toggleFaucet) {
        toggleFaucet.addEventListener('click', handleFaucetToggle);
    }
    
    // Pai com menino na cadeira
    const toggleWheelchair = document.getElementById('toggleWheelchair');
    if (toggleWheelchair) {
        toggleWheelchair.addEventListener('click', handleWheelchairToggle);
    }
    
    console.log('✅ Event listeners configurados');
}

// ============ HANDLE - PÁGINA VIRANDO ============
function handlePageFlip() {
    const page1 = document.getElementById('page1');
    const flipBtn = document.getElementById('flipBtn');
    
    if (!isPageFlipped) {
        page1.classList.add('flipping');
        isPageFlipped = true;
        flipBtn.textContent = '⬅️ Voltar Página';
    } else {
        page1.classList.remove('flipping');
        isPageFlipped = false;
        flipBtn.textContent = '📖 Virar Página';
    }
    
    console.log('📖 Página virada - Estado:', isPageFlipped);
}

// ============ HANDLE - TORNEIRA PINGANDO ============
function handleFaucetToggle() {
    const waterDrops = document.getElementById('waterDrops');
    const toggleFaucet = document.getElementById('toggleFaucet');
    
    if (!isFaucetRunning) {
        isFaucetRunning = true;
        toggleFaucet.textContent = '🚫 Desligar Torneira';
        toggleFaucet.style.background = '#00cc44';
        
        // Criar gotas em intervalos rápidos
        const dropInterval = setInterval(() => {
            if (!isFaucetRunning) {
                clearInterval(dropInterval);
                return;
            }
            
            const drop = document.createElement('div');
            drop.className = 'drop';
            waterDrops.appendChild(drop);
            
            setTimeout(() => {
                drop.remove();
            }, 800);
        }, 400);
        
        // Guardar intervalo para depois
        toggleFaucet.dataset.dropInterval = dropInterval;
        
    } else {
        isFaucetRunning = false;
        toggleFaucet.textContent = '💧 Ligar Torneira';
        toggleFaucet.style.background = '#0099ff';
        
        const dropInterval = toggleFaucet.dataset.dropInterval;
        if (dropInterval) {
            clearInterval(dropInterval);
        }
        waterDrops.innerHTML = '';
    }
    
    console.log('💧 Torneira toggled - Estado:', isFaucetRunning);
}

// ============ HANDLE - PAI COM MENINO NA CADEIRA ============
function handleWheelchairToggle() {
    const wheelchairGroup = document.getElementById('wheelchairGroup');
    const toggleWheelchair = document.getElementById('toggleWheelchair');
    
    if (!isWheelchairMoving) {
        isWheelchairMoving = true;
        wheelchairGroup.style.animation = 'moveRightFast 3s ease-in-out infinite';
        toggleWheelchair.textContent = '⛔ Parar Passeio';
        toggleWheelchair.style.background = '#ee5a52';
    } else {
        isWheelchairMoving = false;
        wheelchairGroup.style.animation = 'none';
        wheelchairGroup.style.left = '0';
        toggleWheelchair.textContent = '👨‍👦 Iniciar Passeio';
        toggleWheelchair.style.background = '#ff6b6b';
    }
    
    console.log('👨‍👦 Cadeira de rodas toggled - Estado:', isWheelchairMoving);
}

// ============ SETUP ANIMAÇÕES ============
function setupAnimations() {
    console.log('✅ Animações configuradas');
}

// ============ SETUP ÁUDIO ============
function setupAudio() {
    console.log('✅ Áudio dos personagens pronto');
    console.log('Atalhos de teclado:');
    console.log('  R = Riso da criança');
    console.log('  E = Espanto');
    console.log('  P = Riso do pai');
}

// ============ INICIALIZAR QUANDO DOCUMENTO ESTIVER PRONTO ============
document.addEventListener('DOMContentLoaded', initProject);

// ============ EXPORTAR PARA DESENVOLVIMENTO ============
window.projectState = {
    isPageFlipped,
    isFaucetRunning,
    isWheelchairMoving
};

console.log('🎉 Projeto Educação Adventista - Sistema Pronto!');
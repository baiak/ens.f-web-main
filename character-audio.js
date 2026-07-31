// ============ ÁUDIOS DOS PERSONAGENS ============

// Criar contexto de áudio
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// ============ FUNÇÃO PARA CRIAR RISO ============
function playLaughter() {
    const now = audioContext.currentTime;
    
    // Criar oscilador para riso (frequências variadas)
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    osc1.type = 'sine';
    osc2.type = 'sine';
    
    // Frequências para riso jovem
    osc1.frequency.setValueAtTime(400, now);
    osc1.frequency.exponentialRampToValueAtTime(600, now + 0.15);
    
    osc2.frequency.setValueAtTime(300, now);
    osc2.frequency.exponentialRampToValueAtTime(450, now + 0.15);
    
    // Envelope de amplitude para riso
    gainNode.gain.setValueAtTime(0.3, now);
    gainNode.gain.exponentialRampToValueAtTime(0.05, now + 0.2);
    
    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.2);
    osc2.stop(now + 0.2);
    
    // Segundo riso (ha ha ha)
    const osc3 = audioContext.createOscillator();
    const gainNode2 = audioContext.createGain();
    
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(450, now + 0.3);
    osc3.frequency.exponentialRampToValueAtTime(700, now + 0.45);
    
    gainNode2.gain.setValueAtTime(0.3, now + 0.3);
    gainNode2.gain.exponentialRampToValueAtTime(0.05, now + 0.5);
    
    osc3.connect(gainNode2);
    gainNode2.connect(audioContext.destination);
    
    osc3.start(now + 0.3);
    osc3.stop(now + 0.5);
    
    // Terceiro riso
    const osc4 = audioContext.createOscillator();
    const gainNode3 = audioContext.createGain();
    
    osc4.type = 'sine';
    osc4.frequency.setValueAtTime(500, now + 0.6);
    osc4.frequency.exponentialRampToValueAtTime(750, now + 0.75);
    
    gainNode3.gain.setValueAtTime(0.3, now + 0.6);
    gainNode3.gain.exponentialRampToValueAtTime(0.05, now + 0.8);
    
    osc4.connect(gainNode3);
    gainNode3.connect(audioContext.destination);
    
    osc4.start(now + 0.6);
    osc4.stop(now + 0.8);
}

// ============ FUNÇÃO PARA CRIAR ESPANTO ============
function playAmazement() {
    const now = audioContext.currentTime;
    
    // Criar oscilador para espanto (som ascendente)
    const osc = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    osc.type = 'sine';
    
    // Som ascendente do espanto
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.exponentialRampToValueAtTime(1000, now + 0.4);
    
    // Envelope de amplitude
    gainNode.gain.setValueAtTime(0.4, now);
    gainNode.gain.exponentialRampToValueAtTime(0.8, now + 0.2);
    gainNode.gain.exponentialRampToValueAtTime(0.1, now + 0.4);
    
    osc.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    osc.start(now);
    osc.stop(now + 0.4);
}

// ============ FUNÇÃO PARA CRIAR RISO DO PAI ============
function playFatherLaughter() {
    const now = audioContext.currentTime;
    
    // Riso mais profundo para o pai
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    osc1.type = 'sine';
    osc2.type = 'sine';
    
    // Frequências mais baixas
    osc1.frequency.setValueAtTime(200, now);
    osc1.frequency.exponentialRampToValueAtTime(350, now + 0.2);
    
    osc2.frequency.setValueAtTime(150, now);
    osc2.frequency.exponentialRampToValueAtTime(280, now + 0.2);
    
    gainNode.gain.setValueAtTime(0.4, now);
    gainNode.gain.exponentialRampToValueAtTime(0.05, now + 0.25);
    
    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.25);
    osc2.stop(now + 0.25);
    
    // Segundo riso do pai
    const osc3 = audioContext.createOscillator();
    const gainNode2 = audioContext.createGain();
    
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(250, now + 0.35);
    osc3.frequency.exponentialRampToValueAtTime(400, now + 0.55);
    
    gainNode2.gain.setValueAtTime(0.4, now + 0.35);
    gainNode2.gain.exponentialRampToValueAtTime(0.05, now + 0.6);
    
    osc3.connect(gainNode2);
    gainNode2.connect(audioContext.destination);
    
    osc3.start(now + 0.35);
    osc3.stop(now + 0.6);
}

// ============ INTEGRAR ÁUDIOS AOS ELEMENTOS ============

// Pai com menino na cadeira
const wheelchairGroup = document.getElementById('wheelchairGroup');
const toggleWheelchair = document.getElementById('toggleWheelchair');

if (wheelchairGroup) {
    wheelchairGroup.addEventListener('click', () => {
        playFatherLaughter();
    });
}

// Folha virando
const page1 = document.getElementById('page1');
const flipBtn = document.getElementById('flipBtn');

if (flipBtn) {
    flipBtn.addEventListener('click', () => {
        playAmazement();
    });
}

// Torneira pingando
const toggleFaucet = document.getElementById('toggleFaucet');

if (toggleFaucet) {
    toggleFaucet.addEventListener('click', () => {
        if (!document.getElementById('waterDrops').children.length) {
            playLaughter();
        }
    });
}

// ============ BOTÃO PARA TESTAR ÁUDIOS ============
if (flipBtn) {
    // Adicionar atalhos de teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'r') playLaughter();
        if (e.key === 'e') playAmazement();
        if (e.key === 'p') playFatherLaughter();
    });
}

// Log para debug
console.log('🎵 Áudios dos personagens carregados!');
console.log('Pressione:');
console.log('  R = Riso da criança');
console.log('  E = Espanto');
console.log('  P = Riso do pai');
// Dados dos produtos
const produtosDados = {
    0: {
        titulo: "Coxinha de Bode",
        descricao: "Tradição nordestina que encontrou seu lar na Encruzilhada. Nossas coxinhas são recheadas com costela de bode desfiada, lentamente cozida com temperos ancestrais e refogada com catupiry cremoso. Cada mordida é uma celebração dos sabores autênticos que conectam nossa mesa às raízes mais profundas da culinária brasileira. Um petisco que carrega história, resistência e muito sabor."
    },
    1: {
        titulo: "Bolinho da Encruzilhada",
        descricao: "Nossa assinatura em forma de bolinho! Feitos com linguiça toscana artesanal, cada bolinho é acompanhado por nossa geleia especial da casa com pimenta - uma receita única que desperta os sentidos e aquece a alma. É o encontro perfeito entre o tradicional e o inovador, onde cada ingrediente foi escolhido para criar uma experiência gastronômica inesquecível."
    },
    2: {
        titulo: "Emince com Fritas",
        descricao: "Iscas de filé mignon cortadas no ponto perfeito, grelhadas com maestria e servidas com batatas fritas douradas e couve crispy que adiciona textura e sabor únicos ao prato. Uma combinação que celebra a simplicidade elevada ao máximo, onde a qualidade dos ingredientes fala por si. É conforto e sofisticação em cada garfada."
    },
    3: {
        titulo: "Pastel de Queijo e Presunto",
        descricao: "Clássico brasileiro reinventado com o tempero especial da Encruzilhada. Massa crocante e dourada envolvendo queijo derretido e presunto selecionado, criando a harmonia perfeita entre simplicidade e sabor. É o petisco que une gerações, carregando a memória afetiva brasileira em cada mordida quente e saborosa."
    },
    4: {
        titulo: "Encruzilhada",
        descricao: "Nosso drink-assinatura que leva o nome da casa! Uma combinação única de abacaxi, hortelã, anis estrelado, mel e gengibre que desperta todos os sentidos. Cada ingrediente foi escolhido para representar um caminho diferente, criando uma bebida complexa e refrescante que simboliza as múltiplas possibilidades que a vida oferece. É literalmente beber a essência da Encruzilhada.\n\n**Temos opção sem álcool por R$12,00**"
    },
    5: {
        titulo: "Rosa Menina",
        descricao: "Homenagem líquida à delicadeza e força feminina. Melancia refrescante encontra a suavidade da baunilha e o frescor do limão, criando uma bebida que é pura poesia no copo. Rosa Menina é a celebração da feminilidade ancestral, das mulheres que resistem e florescem. Cada gole é uma reverência às nossas ancestrais e às guerreiras do presente.\n\n**Temos opção sem álcool por R$10,00**"
    },
    6: {
        titulo: "Koori",
        descricao: "Explosão tropical que conecta as raízes brasileiras num só gole. Mamão e manga se encontram com limão, baunilha e hortelã, adoçados naturalmente para criar uma experiência refrescante e autêntica. Koori é a celebração da abundância da nossa terra, uma bebida que carrega o sol, a alegria e a generosidade do povo brasileiro em cada ingrediente.\n\n**Temos opção sem álcool por R$10,00**"
    }
};

// Adicionar event listeners aos produtos
document.addEventListener('DOMContentLoaded', function() {
    const produtos = document.querySelectorAll('.produtocaixa');
    produtos.forEach((produto, index) => {
        produto.addEventListener('click', () => openPopup(index));
    });
});

function openPopup(produtoIndex) {
    const popup = document.getElementById('popupOverlay');
    const titulo = document.getElementById('popupTitle');
    const descricao = document.getElementById('popupDescription');
    
    titulo.textContent = produtosDados[produtoIndex].titulo;
    descricao.textContent = produtosDados[produtoIndex].descricao;
    
    popup.style.display = 'flex';
    
    // Pequeno delay para garantir que o display seja aplicado antes da animação
    setTimeout(() => {
        popup.classList.add('show');
    }, 10);
}

function closePopup() {
    const popup = document.getElementById('popupOverlay');
    popup.classList.remove('show');
    
    // Aguarda a animação terminar antes de esconder
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300);
}

// Fechar popup ao clicar fora
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('popup-overlay')) {
        closePopup();
    }
});

// Inicializar AOS
AOS.init();
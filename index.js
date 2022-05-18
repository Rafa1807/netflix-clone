// dados necessarios: Caminho da imagem, IMG, h1, h4 e p

const dados = [
  {
    caminhoImg: "img/presidente/andre-janones.jpeg",
    titulo: "Andre Janones",
    descricao:
      "Em 2016, se candidatou a prefeito de Ituiutaba, terminando em segundo lugar, com 13.759 votos (24,40% dos votos válidos). Ganhou notoriedade ao se autoproclamar uma das principais lideranças da greve dos caminhoneiros no Brasil em 2018 e, em decorrência disso, acabou sendo eleito deputado federal nas eleições de 2018. Foi o terceiro deputado federal mais votado de Minas Gerais, recebendo 178 660 votos (1,77% dos votos válidos na eleição). Recebeu destaque durante as votações do Auxílio Emergencial, onde sua live no Facebook chegou a ser a mais comentada do mundo ocidental, com 3,3 milhões de visualizações e 177 mil comentários, igualando a marca da cantora sertaneja Marília Mendonçao. Em 29 de janeiro de 2022, sua pré-candidatura à Presidência da República, pelo seu partido, Avante, foi oficializada",

    fonte: "https://pt.wikipedia.org/wiki/Andr%C3%A9_Janones",
  },

  {
    caminhoImg: "img/presidente/bolsonaro.jpeg",
    titulo: "Jair Bolsonaro",
    descricao: `Jair Bolsonaro foi eleito presidente da República pelo PSL em 2018, com 57,7 milhões de votos – 55,1% dos votos válidos. Assumiu o cargo em 1.º de janeiro de 2019. Antes disso, havia sido vereador do Rio de Janeiro entre 1989 e 1991, e deputado federal pelo Rio de Janeiro por sete mandatos, sendo o mais votado do seu estado nas eleições de 2014.

        Militar da reserva formado na Academia Militar das Agulhas Negras, ganhou espaço no cenário nacional ao manifestar posições conservadoras, defender o direito do cidadão ao porte de armas, elogiar a ditadura militar e fazer críticas ao comunismo, à esquerda, à ideologia de gênero e ao politicamente correto. Durante a campanha de 2018, foi alvo de um atentado com faca enquanto saudava apoiadores em Juiz de Fora, Minas Gerais.`,

    fonte:
      "https://www.gazetadopovo.com.br/eleicoes/2022/candidatos-a-presidente/jair-bolsonaro/",
  },
  {
    caminhoImg: "img/presidente/ciro-gomes.jpeg",
    titulo: "Ciro Gomes",
    descricao: `Ciro Ferreira Gomes GOMM (Pindamonhangaba, 6 de novembro de 1957) é um advogado, professor universitário e político brasileiro, filiado ao Partido Democrático Trabalhista (PDT), do qual é vice-presidente. Ocupou altos cargos políticos no país: foi deputado estadual por duas legislaturas no Ceará, o 43.º prefeito de Fortaleza, o 52.º governador do Ceará, ministro da Fazenda do Governo Itamar Franco durante a implantação do Plano Real e ministro da Integração Nacional durante o projeto de transposição do rio São Francisco no governo de Luiz Inácio Lula da Silva. Seu último mandato político foi o de deputado federal entre 2007 e 2011.
        
        No dia 21 de janeiro de 2022 Ciro Gomes realizou em Brasília o lançamento de sua pré-candidatura à presidência do Brasil. No evento, defendeu, entre outras propostas, a reindustrialização do Brasil e uma política fiscal para fortalecer a capacidade do Estado em induzir os investimentos por fora do teto de gastos.`,

    fonte: "https://pt.wikipedia.org/wiki/Ciro_Gomes",
  },
  {
    caminhoImg: "img/presidente/eduardo-leite.jpeg",
    titulo: "Eduardo Leite",
    descricao: `Eduardo Figueiredo Cavalheiro Leite (Pelotas, 10 de março de 1985) é um bacharel em direito e político brasileiro. Filiado ao Partido da Social Democracia Brasileira (PSDB), foi governador do Rio Grande do Sul entre 2019 e 2022. Anteriormente, foi prefeito de Pelotas de 2013 a 2017, cidade onde também foi vereador.

        Leite iniciou sua carreira política no movimento estudantil, como presidente do Grêmio Estudantil de sua escola. Graduado pela Faculdade de Direito da UFPel, filiou-se ao PSDB e concorreu a vereador em 2004, sem êxito. Logo depois, integrou a administração municipal, primeiro como assessor e secretário interino e depois como chefe de gabinete nos governos de Bernardo de Souza e Fetter Júnior. Em 2008, foi eleito vereador e presidiu a Câmara Municipal de 2011 a 2013.

        Em 2021, declarou apoio à implementação do parlamentarismo no Brasil e defendeu uma reforma política que reduzisse o número de partidos.[137] Também declarou ser contrário à reeleição para o mesmo cargo político.`,

    fonte: "https://pt.wikipedia.org/wiki/Eduardo_Leite",
  },
  {
    caminhoImg: "img/presidente/felipe-davila.webp",
    titulo: "Felipe d'Avila",
    descricao: `Felipe d' Avila, 58 anos, nascido em São Paulo, é cientista político, mestre em administração pública pela Universidade de Harvard. Fundou, em 2008, o Centro de Liderança Pública, uma organização sem fins lucrativos dedicada à formação de líderes políticos. É escritor e tem 10 títulos publicados, sendo 10 Mandamentos: do país que somos para o Brasil que queremos a sua obra mais recente. Essa é a primeira vez em que ele se candidata ao cargo de presidente da República. O vice-presidente não foi definido ainda.`,

    fonte:
      "https://agenciabrasil.ebc.com.br/politica/noticia/2022-04/partido-novo-lanca-pre-candidatura-de-luiz-felipe-davila-presidente",
  },
  {
    caminhoImg: "img/presidente/joao-doria.jpeg",
    titulo: "João Doria",
    descricao: `João Agripino da Costa Doria Junior, 65 anos, nascido em São Paulo, é um empresário, jornalista, publicitário e político brasileiro, filiado ao Partido da Social Democracia Brasileira (PSDB) desde 2001, ex-prefeito do município de São Paulo e ex-governador do estado de São Paulo. Tornou-se conhecido como entrevistador em talk-shows, palestrante e organizador de eventos empresariais. É criador e presidente licenciado do Grupo Doria.

        Ingressou na vida pública como secretário de Turismo de São Paulo e presidente da Paulistur (1983–86) no governo Mário Covas, e presidente da Embratur (1986-88) durante a presidência de José Sarney, ambas empresas estatais da área do turismo. Não teria outro cargo público até se tornar prefeito de São Paulo, trinta anos mais tarde`,

    fonte: "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Doria",
  },
  {
    caminhoImg: "img/presidente/lula.webp",
    titulo: "Luiz Inácio Lula da Silva",
    descricao: `Luiz Inácio Lula da Silva, nascido em Caetés, na cidade de Garanhuns, Pernanbuco, no dia 27 de outubro de 1945, mais conhecido como Lula, é um ex-sindicalista, ex-metalúrgico e político brasileiro, filiado ao Partido dos Trabalhadores (PT), do qual é o principal fundador. Foi o 35.º presidente do Brasil, tendo exercido o cargo de 1 de janeiro de 2003 a 1 de janeiro de 2011.

        Os dois mandatos do presidente Lula foram marcados por grandes avanços, mas também por grandes escândalos. Lula teve condições de passar para a história como o presidente que realizou grandes feitos e priorizou políticas que beneficiaram os mais pobres, mas a corrupção se infiltrou no poder.

        Lula ganhou a marca de ser o primeiro presidente da República condenado por corrupção passiva e lavagem de dinheiro, revelado pela maior investigação realizada no país, a Lava a Jato No dia 12 de julho de 2017, o juiz Sérgio Moro condenou o ex-presidente a nove anos e seis meses de prisão.`,

    fonte: "https://www.ebiografia.com/luiz_inacio_lula_silva/",
  },
  {
    caminhoImg: "img/presidente/simone-tebet.jpeg",
    titulo: "Simone Tebet",
    descricao: `Simone Nassar Tebet, nascida em Três Lagoas, 22 de fevereiro de 1970) é uma advogada, professora, escritora e política brasileira, filiada ao Movimento Democrático Brasileiro (MDB). Atualmente, ocupa o cargo de senadora da República pelo estado de Mato Grosso do Sul. Tebet é pré-candidata à presidência do Brasil nas eleições de 2022, com uma pré-campanha centrista e social liberal na chamada " terceira via".
        
        \nIniciou sua carreira política em 2002, ao ser eleita deputada estadual de Mato Grosso do Sul com 25.251 votos, tornando-se a mulher mais votada para o cargo naquele ano. 
        
        \nNas eleições municipais de 2004 se elegeu para o seu primeiro cargo majoritário, prefeita de Três Lagoas, sendo a primeira mulher a ocupar tal cargo no município. Nas eleições municipais de 2008 reelegeu-se para o posto com mais de 75% dos votos.Os dois mandatos do presidente Lula foram marcados por grandes avanços, mas também por grandes escândalos. Lula teve condições de passar para a história como o presidente que realizou grandes feitos e priorizou políticas que beneficiaram os mais pobres, mas a corrupção se infiltrou no poder.`,

    fonte: "https://pt.wikipedia.org/wiki/Simone_Tebet",
  },
  {
    caminhoImg: "img/presidente/vera-lucia.jpeg",
    titulo: "Vera Lúcia",
    descricao:
      "Vera Lúcia Pereira da Silva Salgado (Inajá, 12 de setembro de 1967) é uma política brasileira, filiada ao Partido Socialista dos Trabalhadores Unificado (PSTU).[1] Foi candidata à presidência da República na eleição presidencial de 2018,[2] obtendo 55.762 votos, ou 0,05% dos votos válidos.[3] Foi também uma das fundadoras do PSTU, e é a presidente do partido em Sergipe. \nFoi candidata do PSTU à prefeitura de Aracaju nas últimas quatro eleições, tendo o melhor resultado em 2012, com 20.241 votos, ou 6,6% dos votos válidos. Em 2006 e 2014, tentou uma vaga na Câmara Federal, e em 2010 saiu para governadora de Sergipe, também sem sucesso. \nO PSTU (Partido Socialista dos Trabalhadores Unificado) oficializou nesse sábado (19.mar.2022) a pré-candidatura da socióloga Vera Lúcia Pereira Da Silva Salgado à Presidência da República. Ela já concorreu ao Planalto pelo partido em 2018; recebeu 55 mil votos....",

    fonte:
      "https://pt.wikipedia.org/wiki/Vera_L%C3%BAcia_Salgado \nhttps://www.poder360.com.br/eleicoes/pstu-oficializa-vera-como-pre-candidata-a-presidente/",
  },
];






createCardsCandidatos(dados);

function createCardsCandidatos(listaCandidatos) {
  listaCandidatos.forEach((candidato) => {
    const candidatoEl = document.createElement("div");
    candidatoEl.classList.add("item");
    candidatoEl.innerHTML = `
        <img class="box-filme" src="${candidato.caminhoImg}">
         `;
    const candidatoModal= document.createElement("div")
    candidatoModal.classList.add("container-modal")
    candidatoModal.innerHTML=`
    <div class="modal" id="iniciamodal">
        <button title="Fechar" class="fechar">X</button>
             <img src="${candidato.caminhoImg}">
                 <h1>${candidato.titulo}</h1>
                    <h4>${candidato.descricao}</h4>
             <p>${candidato.fonte}</p>
    </div>

    `
    document.getElementById("carousel").appendChild(candidatoModal);
    document.getElementById("carousel").appendChild(candidatoEl);
    
    candidatoEl.addEventListener("click", () => {
      candidatoModal.style.display="block";
      const fechar = document.querySelectorAll(".fechar");
      fechar.forEach(button => {
        button.addEventListener("click", () => {
          candidatoModal.style.display = "none"
          })
      })
      
    });
  
  });
}
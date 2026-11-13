// ============================================================
// Levantamento Espiritual GAEB — perguntas
// Para editar o questionário, mexa só neste arquivo.
//
// Tipos de pergunta (campo "t"):
//   F = frequência   C = concordância   S = escolha uma   M = marque todas
// Em S e M, o campo "opcoes" lista as respostas; "Outra: ____" é
// acrescentado automaticamente (use outra:false para desligar).
// "max" limita quantas opções podem ser marcadas (só em M).
// "guia" é a pergunta que aparece dentro do campo de comentário.
// "mapa" é uma nota interna para a equipe e NÃO aparece no formulário.
// ============================================================

window.GAEB_CONFIG = {
  // Cole aqui o endereço do seu formulário no Formspree (https://formspree.io/f/xxxxxxxx)
  formspree: "COLE_AQUI_O_ENDERECO_DO_FORMSPREE",
  assunto: "Levantamento Espiritual GAEB — nova resposta",
  anoLevantamento: 2026
};

window.GAEB_ESCALAS = {
  F: ["Nunca", "Raramente", "Às vezes", "Muitas vezes", "Sempre"],
  C: ["Discordo totalmente", "Discordo", "Mais ou menos", "Concordo", "Concordo totalmente"]
};

window.GAEB_ABERTURA = {
  titulo: "Antes de começar",
  pausa: "Respire fundo. Não há pressa. Fique um instante em silêncio.",
  secoes: [
    {
      titulo: "Deus conhece você",
      verso: "“Ó Deus, examina-me e conhece o meu coração! Prova-me e conhece os meus pensamentos. Vê se há em mim algum pecado e guia-me pelo caminho eterno.”",
      ref: "Salmo 139.23-24, NTLH"
    },
    {
      titulo: "Para que servem estas perguntas",
      texto: [
        "Isto não é uma prova, e não existe resposta certa. As perguntas servem para identificar como está a sua vida com Deus hoje: o que vai bem e onde você precisa de ajuda. Responda como você é, e não como acha que deveria ser.",
        "Suas respostas serão lidas apenas pelo Thiago e pelo Matheus. Elas não serão mostradas aos seus pais nem a ninguém do grupo. A única exceção é se percebermos que você está correndo algum risco: nesse caso, vamos buscar ajuda, e falamos com você antes."
      ]
    },
    {
      titulo: "Fique atento",
      texto: [
        "Enquanto responde, preste atenção ao que o Espírito Santo fala com você. Se alguma pergunta tocar você, pare, pense e escreva no comentário."
      ],
      oracao: "Se quiser, ore antes de começar: “Senhor, me ajuda a ser sincero comigo e contigo. Amém.”"
    }
  ],
  dica: "Cada pergunta tem um espaço opcional para comentar. Você pode pular o que não quiser responder, e voltar para mudar uma resposta."
};

window.GAEB_ENCERRAMENTO = {
  titulo: "Para terminar",
  pausa: "Antes de sair, pare mais um instante.",
  secoes: [
    {
      titulo: "Você não está sozinho nas suas falhas",
      texto: ["Talvez você tenha percebido coisas boas, e talvez tenha percebido áreas difíceis. As duas coisas são normais. Deus já conhecia cada resposta antes de você escrever, e o amor dele por você não mudou."]
    },
    {
      titulo: "Jesus é quem nos ajuda",
      texto: ["Crescer não depende só do seu esforço. Jesus conhece as nossas fraquezas e é ele quem nos ajuda a mudar."],
      verso: "“Por isso tenhamos confiança e cheguemos perto do trono divino, onde está a graça de Deus. Ali receberemos misericórdia e encontraremos graça sempre que precisarmos de ajuda.”",
      ref: "Hebreus 4.16, NTLH"
    },
    {
      titulo: "Um próximo passo",
      texto: ["Se alguma pergunta ficou no seu coração, converse com Deus sobre ela agora. Em janeiro, um dos líderes vai conversar com você sobre o que respondeu. Se quiser conversar antes, é só nos procurar: estamos aqui para caminhar com você."]
    }
  ],
  agradecimento: "Obrigado por sua sinceridade."
};

window.GAEB_BLOCOS = [
  // ===================== INTERIOR =====================
  {
    id: "interior", titulo: "Interior",
    temas: [
      {
        id: "cotidiano", titulo: "Cotidiano com Deus",
        subareas: [
          { id: "cot-dia", titulo: "Começo e fim do dia", itens: [
            { t: "S", q: "Ao acordar. Na maioria das manhãs, o que mais se parece comigo é:", opcoes: [
              "Sigo direto com minhas coisas, sem lembrar de Deus.",
              "Lembro de Deus rapidamente, mas sem parar para isso.",
              "Dedico um momento curto a ele (uma pequena oração, um versículo que lembro de cor).",
              "Dedico um tempo maior (oração, leitura ou silêncio) antes de começar o dia.",
              "Varia muito de um dia para o outro."] },
            { t: "F", q: "Antes de dormir, entrego a Deus o que ficou do dia (preocupações, erros, agradecimentos)." }
          ]},
          { id: "cot-comum", titulo: "Deus nas coisas comuns", itens: [
            { t: "M", q: "Nas últimas semanas, percebi Deus presente quando:", opcoes: [
              "Uma oração minha foi respondida.",
              "Recebi consolo num momento difícil.",
              "Senti esperança quando as coisas pareciam sem saída.",
              "Alguém me ajudou na hora certa.",
              "Algo que li ou ouvi da Palavra veio no momento exato.",
              "Fiquei maravilhado com algo bonito (natureza, música, um momento com amigos).",
              "Não percebi Deus presente nesse período."],
              guia: "Quer contar uma dessas vezes?" },
            { t: "C", q: "Quando o dia sai do planejado (fim de semana, viagem, cansaço), ainda encontro um jeito de me aproximar de Deus." }
          ]}
        ]
      },
      {
        id: "oracao", titulo: "Oração e comunhão",
        subareas: [
          { id: "ora-como", titulo: "Como eu oro", itens: [
            { t: "M", q: "Quando oro, costumo:", opcoes: [
              "Agradecer", "Pedir por mim", "Pedir pelos outros", "Confessar meus erros", "Louvar a Deus",
              "Ficar em silêncio para ouvir", "Usar uma oração escrita ou um salmo", "Não costumo orar"] },
            { t: "S", q: "Na maioria das vezes, minha oração é mais parecida com:", opcoes: [
              "Uma lista de pedidos", "Uma conversa, como com um amigo", "Uma obrigação que cumpro",
              "Algo que só faço em momentos de aperto", "Varia muito"],
              mapa: "SDT: tipo de oração indica a motivação." }
          ]},
          { id: "ora-dific", titulo: "Quando é difícil e orar com outros", itens: [
            { t: "M", q: "O que mais me atrapalha de orar é:", opcoes: [
              "Distração (celular, pensamentos)", "Sono ou cansaço", "Não saber o que dizer", "Achar que não adianta",
              "Não sinto vontade", "Vergonha ou culpa", "Falta de tempo ou de lugar tranquilo", "Não sinto dificuldade"],
              mapa: "SDT: 'não sei o que dizer' = competência; 'não adianta' = valor percebido." },
            { t: "F", q: "Oro em voz alta com alguém (amigo, família, grupo)." },
            { t: "C", q: "Tenho facilidade de pedir oração a alguém quando preciso." }
          ]}
        ]
      },
      {
        id: "palavra", titulo: "Estudo da Palavra e obediência",
        subareas: [
          { id: "pal-contato", titulo: "Contato com a Palavra", itens: [
            { t: "S", q: "Na maioria das semanas, meu contato com a Bíblia é:", opcoes: [
              "Só nos encontros da igreja ou do GAEB", "Leio por conta própria, de vez em quando",
              "Leio por conta própria, várias vezes na semana", "Leio todos os dias", "Quase não tenho contato"] },
            { t: "M", q: "Meu jeito de estar na Palavra costuma ser:", opcoes: [
              "Ler um trecho da Bíblia", "Seguir um plano de leitura", "Ouvir (áudio, pregação, podcast)",
              "Estudar com algum material ou guia", "Memorizar versículos", "Conversar sobre a Palavra com alguém", "Não costumo ler"] }
          ]},
          { id: "pal-aplicar", titulo: "Entender e aplicar", itens: [
            { t: "C", q: "Quando leio a Bíblia, consigo entender o que o texto está dizendo.", guia: "O que mais dificulta?" },
            { t: "F", q: "Depois de ler ou ouvir a Palavra, penso em como aplicar aquilo na minha vida." }
          ]},
          { id: "pal-obedecer", titulo: "Obedecer", itens: [
            { t: "S", q: "Quando a Palavra me mostra algo que preciso mudar, o que mais se parece comigo é:", opcoes: [
              "Ignoro ou esqueço", "Concordo, mas não mudo", "Tento mudar sozinho, com esforço",
              "Peço ajuda a Deus e a alguém para mudar", "Nunca percebi isso acontecer"] },
            { t: "M", q: "Obedeço a Deus principalmente porque:", opcoes: [
              "Tenho medo das consequências", "Me sinto culpado se não obedecer", "Os outros esperam isso de mim",
              "Vejo que é o certo e o melhor", "Amo a Deus e quero agradá-lo", "Não costumo pensar nisso"],
              mapa: "SDT: medo/expectativa = externa; culpa = introjetada; 'é o certo' = identificada; 'amo a Deus' = integrada." }
          ]}
        ]
      },
      {
        id: "adoracao", titulo: "Adoração e beleza de Deus",
        subareas: [
          { id: "ado-encanto", titulo: "Onde eu me encanto", itens: [
            { t: "M", q: "Nas últimas semanas, me senti muito bem, encantado ou tocado por:", opcoes: [
              "A natureza (céu, mar, montanha, animais)", "Uma música", "Um momento com pessoas que amo",
              "Uma verdade da Bíblia que me tocou", "Algo que alguém fez de bom", "Nada em especial"] },
            { t: "C", q: "Quando vejo algo bonito, às vezes penso que isso vem de Deus.", guia: "O que foi?" }
          ]},
          { id: "ado-adorar", titulo: "Adorar a Deus", itens: [
            { t: "S", q: "Quando estou cantando no louvor (na igreja ou no GAEB), o que mais se parece comigo é:", opcoes: [
              "Canto sem pensar muito no que a letra diz",
              "Canto porque é o momento de cantar, mas minha cabeça está longe",
              "Presto atenção na letra e concordo com ela",
              "Sinto que estou falando com Deus",
              "Prefiro ficar em silêncio ou não cantar"] },
            { t: "F", q: "Adoro a Deus fora dos encontros (ouvindo música, orando, agradecendo, em silêncio)." },
            { t: "M", q: "Me sinto mais perto de Deus quando:", opcoes: [
              "Canto", "Ouço louvor", "Estou em silêncio", "Leio a Palavra", "Estou na natureza",
              "Estou com outras pessoas adorando juntas", "Não sei dizer"] },
            { t: "C", q: "Eu reconheço o amor e a misericórdia de Deus e, por isso, agradeço e adoro a Deus, e não só peço." }
          ]}
        ]
      },
      {
        id: "relacao", titulo: "Relacionamento com Deus",
        subareas: [
          { id: "rel-sinto", titulo: "Como me sinto diante de Deus", itens: [
            { t: "S", q: "Quando penso em como Deus me vê, o que mais se parece comigo é:", opcoes: [
              "Acho que ele está decepcionado comigo", "Acho que ele me aceita só quando me comporto bem",
              "Sei que ele me ama mesmo quando falho", "Sinto que ele está distante", "Não sei dizer"],
              mapa: "Quem marcar 'decepcionado' precisa ser acolhido, não corrigido." },
            { t: "C", q: "Sinto que posso ser sincero com Deus sobre o que realmente sinto, inclusive medo, raiva ou dúvida." }
          ]},
          { id: "rel-confianca", titulo: "Confiança, graça e identidade", itens: [
            { t: "C", q: "Posso afirmar com confiança que Deus sempre age para o meu bem, mesmo quando eu não entendo." },
            { t: "S", q: "Quando passo por uma dificuldade, ou quando algo sai errado e quebra minha expectativa, o que mais se parece comigo é:", opcoes: [
              "Me afasto de Deus", "Continuo por obrigação, sem vontade", "Converso com Deus, mesmo confuso",
              "Busco ajuda de alguém para me aproximar de Deus", "Nunca passei por algo assim"] },
            { t: "S", q: "Quando erro e sei que desagradei a Deus, o que mais se parece comigo é:", opcoes: [
              "Me escondo ou me afasto dele", "Tento compensar sendo melhor", "Finjo que nada aconteceu",
              "Peço perdão e sigo confiando que ele me perdoa"] }
          ]}
        ]
      },
      {
        id: "esperanca", titulo: "Esperança na vida eterna",
        subareas: [
          { id: "esp-eternidade", titulo: "Como penso na eternidade", itens: [
            { t: "S", q: "Quando penso na vida depois da morte, o que mais se parece comigo é:", opcoes: [
              "Não penso nisso", "Tenho medo ou aflição", "Tenho dúvida se é verdade",
              "Sei que é verdade, mas parece distante", "Espero com alegria"],
              mapa: "Quem marcar medo ou dúvida: combinar como acolher." },
            { t: "C", q: "Tenho segurança de que, por causa de Jesus, vou viver para sempre com Deus.", guia: "O que te dá ou tira essa segurança?" }
          ]},
          { id: "esp-hoje", titulo: "Esperança que muda o hoje", itens: [
            { t: "C", q: "A esperança de viver para sempre com Deus me ajuda a enfrentar as dificuldades de hoje." },
            { t: "M", q: "Quando penso no futuro com Deus, o que mais me anima é:", opcoes: [
              "Estar com Deus", "Reencontrar pessoas queridas que são de Cristo", "O fim da dor, do sofrimento e da injustiça",
              "Um mundo restaurado, tudo novo", "Ser livre do pecado", "Não penso nisso"] }
          ]}
        ]
      }
    ]
  },

  // ===================== CARÁTER =====================
  // Os nomes dos aspectos do fruto do Espírito NÃO aparecem no formulário.
  // Mapa interno: 1 Amor · 2 Alegria · 3 Paz · 4 Paciência · 5 Benignidade ·
  //               6 Bondade · 7 Fidelidade · 8 Mansidão · 9 Domínio próprio
  {
    id: "carater", titulo: "Caráter",
    intro: "Pense em situações reais dos últimos meses. Não existe resposta certa. O fruto do Espírito cresce com o tempo, e aqui queremos ver onde Deus tem trabalhado em você e onde você ainda precisa dele.",
    temas: [
      {
        id: "carater-tema", titulo: "Situações da vida real",
        subareas: [
          { id: "car-1", titulo: "Pessoas e dias difíceis", itens: [
            { t: "S", mapa: "1 Amor", q: "Quando alguém do grupo é difícil de gostar, o que mais se parece comigo é:", opcoes: [
              "Evito essa pessoa", "Sou educado, mas mantenho distância", "Converso normalmente, mesmo sem afinidade",
              "Procuro fazer o bem a ela, mesmo sem vontade", "Não tenho ninguém assim"] },
            { t: "F", mapa: "2 Alegria", q: "Mesmo em dias ruins, encontro motivos para agradecer a Deus." },
            { t: "S", mapa: "3 Paz", q: "Quando algo me preocupa (prova, família, futuro), o que mais se parece comigo é:", opcoes: [
              "Fico remoendo e não consigo parar", "Tento resolver tudo sozinho", "Converso com alguém de confiança",
              "Entrego a Deus, mas a preocupação volta", "Entrego a Deus e consigo me acalmar"] }
          ]},
          { id: "car-2", titulo: "Com os outros", itens: [
            { t: "S", mapa: "4 Paciência", q: "Quando alguém me irrita ou demora a entender, o que mais se parece comigo é:", opcoes: [
              "Explodo ou respondo mal", "Seguro por fora, mas fico irritado por dentro",
              "Respiro e espero, mesmo com esforço", "Consigo esperar sem me irritar"] },
            { t: "F", mapa: "5 Benignidade", q: "Trato com gentileza até quem não é meu amigo próximo." },
            { t: "S", mapa: "6 Bondade", q: "Quando vejo alguém precisando de ajuda, o que mais se parece comigo é:", opcoes: [
              "Nem costumo notar", "Noto, mas não faço nada", "Ajudo se a pessoa pedir",
              "Ajudo quando é alguém que conheço", "Ajudo mesmo sem ninguém pedir"] }
          ]},
          { id: "car-3", titulo: "Compromisso e controle", itens: [
            { t: "F", mapa: "7 Fidelidade", q: "Cumpro o que combinei, mesmo quando ninguém está cobrando." },
            { t: "S", mapa: "8 Mansidão", q: "Quando sou corrigido ou discordo de alguém, o que mais se parece comigo é:", opcoes: [
              "Me defendo e quero provar que estou certo", "Fico quieto, mas guardo mágoa",
              "Ouço, mas fico na defensiva", "Respondo com calma e considero o que foi dito"] },
            { t: "M", mapa: "9 Domínio próprio", q: "Em quais áreas tenho mais dificuldade de parar quando percebo que estou exagerando?", opcoes: [
              "Celular e redes sociais", "Jogos", "Comida", "Palavras (xingar, fofocar, falar sem pensar)",
              "Dinheiro ou compras", "Sono", "Nenhuma"] }
          ]}
        ]
      }
    ]
  },

  // ===================== EXTERIOR =====================
  {
    id: "exterior", titulo: "Exterior",
    temas: [
      {
        id: "servico", titulo: "Serviço",
        subareas: [
          { id: "ser-casa", titulo: "Em casa", itens: [
            { t: "M", q: "Em casa, costumo ajudar com:", opcoes: [
              "Louça e limpeza", "Cuidar de irmãos ou familiares", "Cozinhar",
              "Tarefas fora de casa (compras, quintal, animais)", "Apoiar alguém que está doente ou triste",
              "Só ajudo quando pedem", "Não costumo ajudar"] },
            { t: "S", q: "Quando preciso ajudar em casa, o que mais se parece comigo é:", opcoes: [
              "Reclamo ou enrolo", "Faço porque mandaram", "Faço sem reclamar, mas sem vontade",
              "Ajudo sem precisar que peçam", "Vejo isso como um jeito de servir a Deus e à minha família"],
              mapa: "SDT: motivação do serviço." }
          ]},
          { id: "ser-fora", titulo: "Ao outro, fora do meu círculo", itens: [
            { t: "M", q: "Nos últimos meses, eu:", opcoes: [
              "Ajudei um colega com a escola ou o trabalho", "Escutei o problema de um amigo",
              "Fiz companhia a alguém que estava sozinho", "Dei comida, roupa ou dinheiro a quem precisava",
              "Ajudei com algo prático (carregar, consertar, dar carona)", "Orei por alguém que me pediu", "Não ajudei ninguém"] },
            { t: "C", q: "Entendo que servir os outros é uma forma de adorar a Deus." },
            { t: "C", q: "Sinto que tenho algo útil para oferecer (um dom, uma habilidade) para servir.",
              mapa: "SDT: quem discordar pode ter dificuldade de competência, não de vontade." }
          ]}
        ]
      },
      {
        id: "evangelismo", titulo: "Evangelismo",
        subareas: [
          { id: "eva-faco", titulo: "Quem me conhece e o que eu faço", itens: [
            { t: "S", q: "Quando estou com pessoas que não são cristãs, o que mais se parece comigo é:", opcoes: [
              "Evito mostrar que sou cristão", "Não escondo, mas também não falo", "Falo quando alguém pergunta",
              "Procuro oportunidades naturais de falar"] },
            { t: "M", q: "Nos últimos meses, eu:", opcoes: [
              "Conversei sobre Jesus com um amigo ou colega", "Conversei sobre minha fé com alguém da família",
              "Convidei alguém para o GAEB ou a igreja", "Respondi a uma pergunta sobre minha fé",
              "Contei como Deus agiu na minha vida", "Compartilhei algo da minha fé nas redes", "Não fiz nada disso"] },
            { t: "F", q: "Oro por pessoas específicas que ainda não conhecem Jesus." }
          ]},
          { id: "eva-move", titulo: "O que me move e o que me impede", itens: [
            { t: "M", q: "O que mais me atrapalha de falar de Jesus é:", opcoes: [
              "Medo de ser julgado ou zoado", "Não saber o que dizer", "Não saber responder às perguntas que podem surgir",
              "Achar que as pessoas não querem ouvir", "Achar que não é o meu papel", "Não ter oportunidade", "Não sinto dificuldade"],
              mapa: "SDT: 'não saber' = competência; 'não é meu papel' = valor; 'medo de ser julgado' = pertencimento." },
            { t: "S", q: "Quando penso em falar de Jesus para alguém, o que mais se parece comigo é:", opcoes: [
              "Sinto que é uma obrigação", "Sinto culpa por não falar", "Sinto indiferença",
              "Sinto vontade, porque quero compartilhar as coisas boas da minha vida",
              "Sinto vontade, porque quero que a pessoa conheça a Jesus"],
              mapa: "SDT: obrigação/culpa = controlada; vontade = autônoma." },
            { t: "C", q: "Sei explicar com minhas palavras quem é Jesus e o que ele fez por mim." },
            { t: "C", q: "Entendo que é Deus quem convence o coração das pessoas, e que meu papel é testemunhar." }
          ]}
        ]
      },
      {
        id: "geral", titulo: "Relacionamentos gerais",
        subareas: [
          { id: "ger-casa", titulo: "Em casa e com amigos", itens: [
            { t: "S", q: "Meu relacionamento com meus pais ou responsáveis, na maior parte do tempo, é:", opcoes: [
              "Distante, quase não conversamos", "Com muito conflito", "Tranquilo, mas sem conversas profundas",
              "Próximo, consigo conversar sobre o que sinto", "Varia muito"],
              mapa: "Pode revelar situações familiares delicadas: combinar acolhimento." },
            { t: "C", q: "Tenho pelo menos um amigo com quem posso ser eu mesmo." },
            { t: "S", q: "Quando estou com meus amigos da escola ou de fora da igreja, o que mais se parece comigo é:", opcoes: [
              "Sou uma pessoa diferente da que sou na igreja", "Mudo um pouco para me encaixar",
              "Sou o mesmo, mas evito alguns assuntos", "Sou o mesmo em qualquer lugar"],
              mapa: "Pertencimento fora da igreja e fé integrada à identidade." }
          ]},
          { id: "ger-conflito", titulo: "Internet e conflito", itens: [
            { t: "F", q: "Na internet (redes, jogos, grupos), trato as pessoas como trataria pessoalmente." },
            { t: "S", q: "Quando brigo ou me desentendo com alguém, o que mais se parece comigo é:", opcoes: [
              "Corto a pessoa ou me afasto", "Espero o outro vir falar comigo", "Finjo que nada aconteceu",
              "Procuro a pessoa para resolver"] }
          ]}
        ]
      },
      {
        id: "profundos", titulo: "Relacionamentos profundos cristãos",
        subareas: [
          { id: "pro-fe", titulo: "Amizades de fé", itens: [
            { t: "C", q: "Tenho pelo menos um amigo cristão com quem converso de verdade sobre Deus e sobre a vida." },
            { t: "S", q: "Minhas conversas com os amigos da igreja, na maior parte, são:", opcoes: [
              "Só sobre o dia a dia (escola, jogos, memes)", "Às vezes falamos de Deus, quando o assunto surge",
              "Falamos com frequência sobre a fé e o que estamos vivendo", "Quase não converso com ninguém da igreja"] }
          ]},
          { id: "pro-abrir", titulo: "Abrir a vida", itens: [
            { t: "S", q: "Quando estou enfrentando uma luta ou um pecado, o que mais se parece comigo é:", opcoes: [
              "Guardo só para mim", "Conto para Deus, mas para mais ninguém", "Conto para um amigo",
              "Conto para um líder ou adulto de confiança"],
              mapa: "Pergunta com quem a pessoa se abre, nunca qual é a luta." },
            { t: "M", q: "O que mais me impede de me abrir com alguém da igreja é:", opcoes: [
              "Medo de ser julgado", "Medo de que contem para outras pessoas", "Medo de que contem para os meus pais",
              "Vergonha", "Não ter alguém de confiança", "Não vejo necessidade", "Não sinto dificuldade"],
              mapa: "Se muitos marcarem 'medo de que contem', o problema é confiança no ambiente." },
          ]},
          { id: "pro-crescer", titulo: "Crescer juntos", itens: [
            { t: "C", q: "Tenho alguém mais maduro na fé (líder, mentor, adulto) que me acompanha e a quem posso recorrer." },
            { t: "C", q: "Tenho amigos que me dizem a verdade, mesmo quando não é o que eu quero ouvir." },
            { t: "F", q: "Incentivo algum amigo a seguir Jesus (pergunto como ele está, encorajo, convido para orar)." }
          ]}
        ]
      }
    ]
  },

  // ===================== GAEB =====================
  {
    id: "gaeb", titulo: "GAEB",
    intro: "Agora queremos ouvir você sobre o GAEB. Seja sincero: críticas nos ajudam a melhorar.",
    temas: [
      {
        id: "gaeb-tema", titulo: "O GAEB",
        subareas: [
          { id: "gaeb-prog", titulo: "A programação", itens: [
            { t: "M", max: 3, q: "Os formatos que mais me ajudam a crescer na fé são (marque até 3):", opcoes: [
              "Fala GAEB", "Cine GAEB", "Ensino GAEB", "EBI GAEB", "Estudinho GAEB", "Pausa Guiada",
              "Convidados GAEB", "GAEB Games", "Cantina GAEB", "Nenhum"] },
            { t: "M", q: "Os momentos do encontro que mais valem para mim são:", opcoes: [
              "Oração em círculo", "Louvor", "Janta", "Atividade de ensino", "Discussões em grupos pequenos",
              "Tempo livre", "Conversas individuais"],
              guia: "O que você mudaria ou acrescentaria no GAEB?" },
            { t: "M", q: "Temas em que tenho mais dúvidas sobre o que a fé cristã diz:", opcoes: [
              "Ciência e criação", "Namoro e sexualidade", "Sofrimento e maldade no mundo", "Outras religiões",
              "Política e justiça", "Dinheiro e sucesso", "Saúde mental", "Não tenho dúvidas"],
              mapa: "Mostra quais temas ensinar em 2027." }
          ]},
          { id: "gaeb-venho", titulo: "Por que eu venho", itens: [
            { t: "M", q: "Venho ao GAEB porque:", opcoes: [
              "Meus pais mandam ou ficariam bravos se eu não viesse", "Eu me sentiria culpado se não viesse",
              "Meus amigos estão aqui", "Gosto das atividades e da comida", "Acho importante para a minha fé",
              "Quero aprender mais de Deus", "Não sei bem por que venho"],
              mapa: "SDT: espectro de motivação (externa, introjetada, identificada, intrínseca)." },
            { t: "S", q: "Se dependesse só de mim, eu:", outra: false, opcoes: [
              "Não viria", "Viria de vez em quando", "Viria quase sempre", "Viria sempre"],
              mapa: "SDT: confere a resposta anterior." }
          ]},
          { id: "gaeb-sinto", titulo: "Como me sinto no GAEB", itens: [
            { t: "S", q: "No GAEB, eu me sinto:", opcoes: [
              "De fora, como visitante", "Conhecido, mas sem amigos próximos", "Parte de um grupinho",
              "Em casa, parte do grupo todo"],
              mapa: "SDT: pertencimento." },
            { t: "C", q: "No GAEB, sinto que minha opinião conta e que posso escolher como participar.", mapa: "SDT: autonomia." },
            { t: "C", q: "Consigo acompanhar e participar das atividades (entendo os estudos e sei contribuir).", mapa: "SDT: competência." }
          ]}
        ]
      }
    ]
  }
];

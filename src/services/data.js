const projects = [
  {
    id: 1,
    title: 'RocketShoes', 
    description: 'Essa aplicação consome uma API sintética e permite adições ao carrinho, adição e exclusão de itens dentro do carrinho e controle de estoque',
    url: 'https://github.com/ReFerreira/loja_virtual',
    img: 'https://gustavomaciel.me/wp-content/uploads/2019/09/Captura-de-Tela-2019-09-28-a%CC%80s-14.05.14.png'

  },
  {
    id: 2,
    title: 'GitHub Repositories', 
    description: 'Uma simples aplicação para listar repositórios do Github e consultar suas issues.',
    url: '',
    img: 'data:image/png;base64,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'
  },
  {
    id: 3,
    title: 'GoBarber', 
    description: 'Uma aplicação para prestadores de serviço, como Barbeiros, controlarem agendamentos de clientes, recebidos via aplicação Mobile.',    
    url: 'https://github.com/ReFerreira/goBarber',
    img: 'https://media-exp1.licdn.com/dms/image/C4E22AQGT-jXpI82Sgg/feedshare-shrink_800/0?e=1590019200&v=beta&t=_ZBDEk5HgEK6QvPSLTAVqQe4ff5dKxm1qIfY_ozXwmo'
  }
]

export default projects;
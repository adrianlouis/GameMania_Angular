function openMenu(){document.getElementById("mySidenav").style.width="250px",document.getElementById("menuHeader").style.opacity=0}function closeBtn(){document.getElementById("mySidenav").style.width="0",document.getElementById("menuHeader").style.opacity=1}function search(){document.querySelector("#iconLupa").style.opacity=0,document.querySelector("#iconCart").style.opacity=0,document.querySelector("#iconUser").style.opacity=0,document.querySelector("#iconLupa").style.transition=".5s .1s",document.querySelector("#iconCart").style.transition=".5s .1s",document.querySelector("#iconUser").style.transition=".5s .1s",document.getElementById("idFindBar").style.visibility="visible",document.getElementById("idFindBar").style.opacity=1,document.getElementById("idFindBar").style.transition=".5s .5s"}function searchclose(){document.querySelector("#iconLupa").style.opacity=1,document.querySelector("#iconLupa").style.transition=".5s .5s",document.querySelector("#iconCart").style.opacity=1,document.querySelector("#iconCart").style.transition=".5s .5s",document.querySelector("#iconUser").style.opacity=1,document.querySelector("#iconUser").style.transition=".5s .5s",document.getElementById("idFindBar").style.visibility="hidden",document.getElementById("idFindBar").style.opacity=0,document.getElementById("idFindBar").style.transition=".5s .1s"}var slideIndex=0;function showSlides(){var e,a=document.getElementsByClassName("mySlide"),o=document.getElementsByClassName("dot");for(e=0;e<a.length;e++)a[e].style.display="none";for(++slideIndex>a.length&&(slideIndex=1),e=0;e<o.length;e++)o[e].className=o[e].className.replace(" active","");a[slideIndex-1].style.display="block",o[slideIndex-1].className+=" active",setTimeout(showSlides,5e3)}showSlides();var slideGIndex=1;function plusSlidesG(e){showSlidesG(slideGIndex+=e)}function currentSlideG(e){showSlidesG(slideGIndex=e)}function showSlidesG(e){var a,o=document.getElementsByClassName("mySlidesG"),i=document.getElementsByClassName("demo"),c=document.getElementById("caption");for(e>o.length&&(slideGIndex=1),e<1&&(slideGIndex=o.length),a=0;a<o.length;a++)o[a].style.display="none";for(a=0;a<i.length;a++)i[a].className=i[a].className.replace(" active","");o[slideGIndex-1].style.display="block",i[slideGIndex-1].className+=" active",c.innerHTML=i[slideGIndex-1].alt}showSlidesG(slideGIndex);let promo=[{marca:"",edicao:"padr\xe3o",titulo:"Far Cry 6",preco:"R$170,00",parcel:"34,00",imagem:"img/capas/farcry6.jpg",desconto:"",semdesc:""},{marca:"",edicao:"padr\xe3o",titulo:"Quantum Break",preco:"R$40,00",parcel:"16,00",imagem:"img/capas/qbreak.jpg",desconto:"",semdesc:""},{marca:"",edicao:"lend\xe1ria",titulo:"Grand Theft Auto V",semdesc:"R$ 130,00",preco:"R$110,50",parcel:"26,00",imagem:"img/capas/gtaV.jpg",desconto:'<i class="fas fa-arrow-down"></i> 15%'},{marca:"",edicao:"deluxe",titulo:"Horizon Zero Dawn",semdesc:"R$ 299,",preco:"R$284,00",parcel:"59,80",imagem:"newImg/horizon.png",desconto:'<i class="fas fa-arrow-down"></i> 5%'},{marca:"",edicao:"deluxe",titulo:"Zelda Breath of the Wild",semdesc:"R$ 299,",preco:"R$284,00",parcel:"59,80",imagem:"newImg/zelda.png",desconto:'<i class="fas fa-arrow-down"></i> 5%'},{marca:"",edicao:"padr\xe3o",titulo:"Forza Horizon 4",semdesc:"",preco:"R$100,00",parcel:"20,00",imagem:"newImg/fh4.jpg",desconto:""}];function lancamentos(){let e=document.querySelector(".contNov21"),a=document.querySelector(".contSet21"),o=document.querySelector(".contOut21"),i=document.querySelector(".contAgo21");lanNov21=[[{capa:"justdance22.jpg",nome:"Just Dance 2022",data:"04.11.21"},{capa:"codVanguard.jpg",nome:"Call of Duty Vanguard",data:"05.11.21"},{capa:"ForzaH5.jpg",nome:"Forza Horizon 5",data:"09.11.21"},{capa:"bf2042.jpg",nome:"Battlefield 2042",data:"19.11.21"},{capa:"ffXIVEndWalker.png",nome:"Final Fantasy XIV End Walker",data:"19.11.21"},{capa:"brilliantDiamond.webp",nome:"Pokemon Brilliant Diamond",data:"19.11.21"},{capa:"farmingSimulator22.jpg",nome:"Farming Simulator 22",data:"22.11.21"}],[{capa:"farcry6.jpg",nome:"Far Cry 6",data:"07.10.21"},{capa:"back4blood.jpg",nome:"Back 4 Blood",data:"12.10.21"},{capa:"demonSlayer.jpg",nome:"Demon Slayer - The Hinokami Chronicles",data:"13.10.21"},{capa:"guardians.jpg",nome:"Guardi\xf5es da Gal\xe1xia da Marvel",data:"13.10.21"},{capa:"nascar21.jpg",nome:"Nascar 21 Ignition",data:"27.10.21"},{capa:"fatalFrameMaiden.jpg",nome:"Fatal Frame: Maiden of Black Water",data:"27.10.21"}],[{capa:"deathloop.jpg",nome:"Deathloop",data:"14.09.21"},{capa:"diablo2.jpg",nome:"Diablo 2 Resurrected",data:"23.09.21"},{capa:"deathStrandingDirectors.webp",nome:"Death Stranding Director's Cut",data:"24.09.21"},{capa:"fifa22.jpg",nome:"FIFA 22",data:"27.09.21"}],[{capa:"hades.jpg",nome:"Hades",data:"13.08.21"},{capa:"twelveMinutes.jpg",nome:"Twelve Minutes",data:"19.08.21"},{capa:"ghostTsushimaDirector.jpg",nome:"Ghost of Tsushima Director's Cut",data:"20.08.21"},{capa:"aliensFireteam.jpg",nome:"Aliens: Fireteam Elite",data:"24.08.21"}]];let c="",t="",s="",d="";for(let n=0;n<lanNov21[1].length;n++){const r=lanNov21[1][n];t+=`\n        <div class="grid-item">\n        <img src="img/capas/${r.capa}">\n        <span>${r.nome}</span>\n        <span>${r.data}</span>\n    </div>`}o.innerHTML=t;for(let n=0;n<lanNov21[0].length;n++){const r=lanNov21[0][n];c+=`\n        <div class="grid-item">\n        <img src="img/capas/${r.capa}">\n        <span>${r.nome}</span>\n        <span>${r.data}</span>\n    </div>`}e.innerHTML=c;for(let n=0;n<lanNov21[2].length;n++){const r=lanNov21[2][n];s+=`\n        <div class="grid-item">\n        <img src="img/capas/${r.capa}">\n        <span>${r.nome}</span>\n        <span>${r.data}</span>\n        </div>`}a.innerHTML=s;for(let n=0;n<lanNov21[3].length;n++){const r=lanNov21[3][n];d+=`\n        <div class="grid-item">\n        <img src="img/capas/${r.capa}">\n        <span>${r.nome}</span>\n        <span>${r.data}</span>\n        </div>\n        `}i.innerHTML=d}function tempCard(){let e=document.getElementById("destaque"),a=document.getElementById("destaqueMaisVendidos"),o=[{code:0,marca:"ms",edicao:"padr\xe3o",titulo:"Halo Infinite",preco:"R$250,00",parcel:"50,00",imagem:"newImg/halo infinite.jpg",desconto:'<i class="fas fa-arrow-down"></i> 10%',semdesc:""},{code:1,marca:"nint",edicao:"padr\xe3o",titulo:"The King of Fighters XV",preco:"R$125,00",parcel:"25,00",imagem:"img/capas/kof.jpg",desconto:'<i class="fas fa-arrow-down"></i> 20%',semdesc:""},{code:2,marca:"ms",edicao:"lend\xe1ria",titulo:"Grand Theft Auto V",semdesc:"R$130,00",preco:"R$110,50",parcel:"26,00",imagem:"img/capas/gtaV.jpg",desconto:'<i class="fas fa-arrow-down"></i> 10%'},{code:3,marca:"psx",edicao:"deluxe",titulo:"Need For Speed Heat",semdesc:"R$ 299,",preco:"R$284,00",parcel:"59,80",imagem:"img/capas/nfsHeat.jpg",desconto:'<i class="fas fa-arrow-down"></i> 10%'},{code:4,marca:"ninti",edicao:"deluxe",titulo:"Zelda Breath of the Wild",semdesc:"R$ 299,",preco:"R$284,00",parcel:"59,80",imagem:"newImg/zelda.png",desconto:'<i class="fas fa-arrow-down"></i> 5%'}],i="";for(let t=0;t<o.length;t++){const s=o[t];i+=`\n         <div id="card${t}" class="card">\n            <div class="img">\n                <a href="novoDetalhe.html?code=${t}">\n                    <img id="idCardImagem" src="${s.imagem}">\n                </a>\n            </div>\n        <div class="cardTexto">\n            <span id="product" class="nomeDoProduto">${s.titulo}</span>\n                <div class="promoPreco">\n                    <span class="promo">${s.desconto}</span>\n                    <span class="precoDoProduto">${s.preco}</span>\n                </div>\n            <span class="parcelas"><i class="fab fa-cc-mastercard"></i>  3x sem juros</span>\n            <a id="btnBuy" href="novoDetalhe.html?arr=0&code=${t}" class="btnBuy">Comprar</a>\n        </div>\n       \n\n     </div>`}e.innerHTML=i;let c="";for(let t=0;t<promo.length;t++){const s=promo[t];c+=` <div id="card" class="card">\n        <div class="img">\n            <img src="${s.imagem}">\n        </div>\n        <div class="cardTexto">\n            <span class="nomeDoProduto">${s.titulo}</span>\n            <div class="promoPreco">\n            <span class="promo">${s.desconto}</span>\n            <span class="precoDoProduto">${s.preco}</span>\n            </div>\n            <span class="parcelas"><i class="fab fa-cc-mastercard"></i>  3x sem juros</span>\n            <a id="idCardBtn" href="novoDetalhe.html?arr=1&code=${t}" class="btnBuy">Comprar</a>\n        </div>\n    </div>`}a.innerHTML=c}function detailsCards(){const e=document.querySelector("#contDetalhes");document.querySelector(".screenshots");const i=new URLSearchParams(window.location.search),c=i.get("arr"),t=i.get("code"),s=[[{code:0,marca:"ms",edicao:"padr\xe3o",titulo:"Halo Infinite",preco:"250,<small>00</small>",parcel:"50,00",imagem:"haloinfinite.jpg",desconto:'<i class="fas fa-arrow-down"></i> 10%',semdesc:"",descricao:"Halo Infinite oferece uma experi\xeancia incr\xedvel no Xbox One e na fam\xedlia de consoles mais recentes, bem como no PC com gr\xe1ficos 4K impressionantes e jogabilidade multiplataforma de qualidade internacional. E no Xbox Series X, bem como nos PCs com suporte, desfrute de recursos aprimorados como at\xe9 120 FPS e tempos de carregamento muito reduzidos, criando uma jogabilidade perfeita que inaugura a pr\xf3xima gera\xe7\xe3o de jogos",ss1:"haloinfiniteSS1.jpg",ss2:"haloinfiniteSS2.jpg",ss3:"haloinfiniteSS3.jpg"},{code:1,marca:"nint",edicao:"padr\xe3o",titulo:"The King of Fighters XV",preco:"125,<small>00</small>",parcel:"25,00",imagem:"kof.jpg",desconto:'<i class="fas fa-arrow-down"></i> 20%',semdesc:"",descricao:"Desde a estreia em 1994, a s\xe9rie de jogos de luta KOF tem oferecido emo\xe7\xf5es pelo mundo com personagens cativantes e um sistema de jogo incompar\xe1vel. Seis anos depois do \xfaltimo t\xedtulo da s\xe9rie, KOF XV supera todos os antecessores em termos de gr\xe1ficos, sistemas e experi\xeancia online!",ss1:"kofxvss1.jpg",ss2:"kofxvss2.jpg",ss3:"kofxvss3.jpg"},{code:2,marca:"ms",edicao:"lend\xe1ria",titulo:"Grand Theft Auto V",semdesc:"R$130,00",preco:"110,<small>50</small>",parcel:"26,00",imagem:"gtav.jpg",desconto:'<i class="fas fa-arrow-down"></i> 10%',descricao:"Quando um jovem traficante, um assaltante de bancos aposentado e um psicopata aterrorizante envolvem-se com alguns dos elementos mais assustadores e desequilibrados do submundo do crime, o governo dos EUA e a ind\xfastria do entretenimento, eles devem realizar golpes ousados para sobreviver nessa cidade implac\xe1vel onde n\xe3o podem confiar em ningu\xe9m, nem mesmo um no outro.",ss1:"gtavss1.jpg",ss2:"gtavss2.jpg",ss3:"gtavss3.jpg"},{code:3,marca:"psx",edicao:"deluxe",titulo:"Need For Speed Heat",semdesc:"R$ 299,",preco:"285,<small>00</small>",parcel:"59,80",imagem:"nfsHeat.jpg",desconto:'<i class="fas fa-arrow-down"></i> 10%',descricao:"Trabalhe de dia e arrisque tudo \xe0 noite no Need for Speed\u2122 Heat, um jogo de corrida emocionante que coloca voc\xea lado a lado contra a pol\xedcia corrupta da cidade.",ss1:"nfsheatss1.jpg",ss2:"nfsheatss2.jpg",ss3:"nfsheatss3.jpg"},{code:4,marca:"ninti",edicao:"deluxe",titulo:"Zelda Breath of the Wild",semdesc:"R$ 299,",preco:"284,<small>00</small>",parcel:"59,80",imagem:"zelda2.png",desconto:'<i class="fas fa-arrow-down"></i> 5%',descricao:"Esque\xe7a tudo que voc\xea sabe sobre os jogos da s\xe9rie The Legend of Zelda. Entre em um mundo de descobertas, explora\xe7\xe3o e aventura em The Legend of Zelda: Breath of the Wild, o novo jogo da famosa s\xe9rie que veio para romper barreiras. Viaje pelos vastos campos, florestas e montanhas enquanto descobre o que aconteceu com o reino de Hyrule nesta deslumbrante aventura a c\xe9u aberto. E agora no Nintendo Switch, a sua jornada tem mais liberdade do que nunca. Leve o seu console para qualquer lugar e viva aventuras na pele de Link da maneira que quiser."},{code:5,marca:"ms",edicao:"padr\xe3o",titulo:"Forza Horizon 4",semdesc:"",preco:"100,<small>00</small>",parcel:"20,00",imagem:"forzaHorizon4.jpg",desconto:'<i class="fas fa-arrow-down"></i> 5%',descricao:"As temporadas din\xe2micas mudam tudo no maior festival automotivo do mundo. V\xe1 sozinho ou junte-se a outros para explorar a bela e hist\xf3rica Gr\xe3-Bretanha em um mundo aberto compartilhado. Colecione, modifique e dirija mais de 450 carros. Corra, fa\xe7a acrobacias, crie e explore \u2013 escolha o seu pr\xf3prio caminho para se tornar um Horizon Superstar."}],[{imagem:"farcry6.jpg",titulo:"Far Cry 6",descricao:"Bem-vindo a Yara, um para\xedso tropical parado no tempo. Far Cry\xae 6 leva os jogadores ao mundo cheio de adrenalina de uma revolu\xe7\xe3o moderna de guerrilha. Como ditador de Yara, Ant\xf3n Castillo est\xe1 empenhado em restaurar sua na\xe7\xe3o de volta \xe0 sua antiga gl\xf3ria por qualquer meio, com seu filho, Diego, obedientemente ao seu lado. Torne-se um guerrilheiro e destrua o regime deles.",preco:"170,00"},{imagem:"qbreak.jpg",titulo:"Quantum Break",descricao:"Da Remedy Entertainment, os mestres de jogos de a\xe7\xe3o cinem\xe1tica como Max Payne e Alan Wake, chega Quantum Break, um jogo emocionante de suspense amplificado pelo tempo. A experi\xeancia Quantum Break \xe9 parte jogo, parte seriado de a\xe7\xe3o ao vivo, onde as decis\xf5es de um afetam dramaticamente o outro. Voc\xea \xe9 Jack Joyce, lutando contra a nefasta Monarch Corporation para impedir o fim do tempo. Momentos \xe9picos de destrui\xe7\xe3o, congelados em lapsos temporais ca\xf3ticos, se tornam o pano de fundo para o combate intenso. Com um elenco de atores de X-Men, Game of Thrones, The Wire e mais, a hist\xf3ria amplificada pelo tempo de Quantum Break \xe9 uma experi\xeancia de entretenimento \xfanica e inovadora.",preco:"40,00"},{imagem:"gtaV.jpg",titulo:"Grand Theft Auto V",descricao:"Quando um jovem traficante, um assaltante de bancos aposentado e um psicopata aterrorizante envolvem-se com alguns dos elementos mais assustadores e desequilibrados do submundo do crime, o governo dos EUA e a ind\xfastria do entretenimento, eles devem realizar golpes ousados para sobreviver nessa cidade implac\xe1vel onde n\xe3o podem confiar em ningu\xe9m, nem mesmo um no outro. ",preco:"110,50"},{imagem:"horizon.png",titulo:"Horizon Zero Dawn",descricao:"Em uma era na qual m\xe1quinas vagam livremente e a humanidade deixou de ser a esp\xe9cie dominante, uma jovem ca\xe7adora chamada Aloy inicia uma jornada na qual desvendar\xe1 o seu destino. Em um mundo p\xf3s-apocal\xedptico exuberante, onde a natureza retomou as ru\xednas de uma civiliza\xe7\xe3o esquecida, pequenos grupos de pessoas vivem em tribos primitivas de ca\xe7adores e coletores. O dom\xednio delas sobre esse novo ambiente selvagem foi usurpado pelas m\xe1quinas, terr\xedveis criaturas mec\xe2nicas de origem desconhecida.",preco:"284,00"}]][c][t];let d="";d+=`\n    <div class="imagemDetail">\n    <img class="fotoCapaDetalhes" src="img/capas/${s.imagem}">\n    </div>\n\n    <div class="descricao">\n        <span class="nomeDoProdutoDet" id="nomeDoProdutoDet">${s.titulo}</span>\n\n        <span id="detalheDoProduto" class="precoDoProd">${s.descricao}\n        </span>\n        <span class="valor">Pre\xe7o: R$ ${s.preco}</span> </span>\n        <div class="precoBotao">\n        <a href="cart.html"><button class="btnComprar" type="button">Comprar</button></a>\n            <button class="btnComprar" type="button">Adicionar</button>\n        </div>\n\n    </div>\n    `,e.innerHTML=d}function scrollEsquerda(){let e=document.documentElement.clientWidth;document.getElementById("topSeller").scrollLeft+=e}function scrollDireita(){let e=document.documentElement.clientWidth;document.getElementById("topSeller").scrollLeft-=e}
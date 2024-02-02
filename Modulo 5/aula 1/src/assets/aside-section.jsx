import React from "react";

const AsideSection = () => {
  return (
    <div class="right-block">
      <div class="header-small-news">
        Mundo Música
        <div class="line"></div>
      </div>
      <article class="blocks">
        <section class="news-right">
          <article class="card-right">
            <div class="photo_news-right">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Ck9qBTK1sSn0waUhHFUE67KdtV_BpJcGtmgYIdOhQhkR96fUEHx0IltSsIB9d_4_dFk&usqp=CAU"
                alt="imagem da notícia"
              />
            </div>
            <div>
              <time class="card-date-right" datetime="Fevereiro 2, 2024">
                Fevereiro 2, 2024
              </time>
              <h4 class="card-name-right">O cantor Lenine completa 65 anos</h4>
            </div>
          </article>

          <article class="card-right">
            <div class="photo_news-right">
              <img
                src="https://pbs.twimg.com/profile_images/355279359/chico-science-rosto_400x400.jpg"
                alt="imagem da notícia"
              />
            </div>
            <div class="card-info-right">
              <time class="card-date-right" datetime="Fevereiro 2, 2024">
                Fevereiro 2, 2024
              </time>
              <h4 class="card-name-right"> Há 27 anos (em 1997) morria Chico Science</h4>
            </div>
          </article>

          <article class="card-right">
            <div class="photo_news-right">
              <img
                src="https://m.media-amazon.com/images/I/91kny7EUh5L._UF1000,1000_QL80_.jpg"
                alt="imagem da notícia"
              />
            </div>
            <div class="card-info-right">
              <time class="card-date-right" datetime="Fevereiro 2, 2024">
                Fevereiro 2, 2024
              </time>
              <h4 class="card-name-right">30 anos do lançamento do álbum Dookie do Green Day</h4>
            </div>
          </article>

          <article class="card-right">
            <div class="photo_news-right">
              <img
                src="https://dicionariompb.com.br/wp-content/uploads/2021/04/emicida.jpeg"
                alt="imagem da notícia"
              />
            </div>
            <div class="card-info-right">
              <time class="card-date-right" datetime="Fevereiro 2, 2024">
                Fevereiro 2, 2024
              </time>
              <h4 class="card-name-right">Emicida anuncia 2ª etapa da turnê AmarElo</h4>
            </div>
          </article>

          <article class="card-right">
            <div class="photo_news-right">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-1Xaxsq89qCXRgs4SKn-oNT93o9mGmTX5nA&usqp=CAU"
                alt="imagem da notícia"
              />
            </div>
            <div class="card-info-right">
              <time class="card-date-right" datetime="Fevereiro 2, 2024">
                Fevereiro 2, 2024
              </time>
              <h4 class="card-name-right">Adele apresenta nova turnê em Munique</h4>
            </div>
          </article>
        </section>
      </article>
    </div>
  );
};

export default AsideSection;

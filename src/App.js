import React from 'react';
import logoGame from './images/logo-game.png';
import logoHome from './images/logo-home.png';
import imgDota from './images/dota.png';
import meProfile from './images/me.png';
import imgIg from './images/logo-ig.png';
import imgSanbercode from './images/logo.png';
import './App.css';

function App() {
  return (
    <div class="container">
      <header class="flex-column">
        <div class="flex-row flex-header color-gradient">
            <div class="box-header header-left">
              <div class="header-content">
                <h1>H-fiz Games Collection</h1>
                <p>Web ini adalah tempat share informasi game seru yang
                  dapat di download gratis untuk menemani karantina di rumah
                  bagi para gamers</p>
              </div>
            </div>
            <div class="box-header header-right">
              <img class="img-size" src={logoGame} alt="logo"/>
            </div> 
        </div>

        <div class="flex-row">
          <div class="box-nav">
            <nav>
              <ul class="box-shadow">
                <li><a href="#"><img class="img-icon" src={logoHome} alt="icon"/></a></li>
                <li><a href="#dota2">Article</a></li>
                <li><a href="#me">About me</a></li>
              </ul>
            </nav>
          </div>
        </div>    
      </header>

      <main class="flex-row">
        <div class="flex-column double box-shadow">
          <div class="main-box">
            <article>
            <h2 id="dota2">Dota 2</h2>
            <img src={imgDota} alt=""/>
            <p> Dota 2 adalah sebuah permainan Arena pertarungan daring multipemain, dan merupakan sekuel dari 
              Defense of the Ancients mod pada Warcraft 3: Reign of Chaos dan Warcraft 3: The Frozen Throne. 
              DotA 2 dikembangkan oleh Valve Corporation, terbit juli 2013 dota 2 dapat dimainkan secara gratis 
              pada sistem operasi Microsoft Windows, OS X and Linux. Dota 2 dapat dimainkan secara eksklusif melalui distributor resmi valve, Steam.
              <span id="more1">.....</span>
            </p>
            <p><span id="artikel1"> Dota 2 dimainkan oleh 2 tim yang beranggota 5 orang pemain, setiap tim memiliki markas yang berada dipojok peta, setiap markas memiliki
              satu bangunan bernama "Ancient", Di mana tim harus berusaha menghancurkan "Ancient" tim lawan agar dapat memenangkan pertandingan.
              Setiap pemain hanya dapat mengontrol satu karakter "Hero" yang berfokus pada menaikan level, mengumpulkan gold, membeli item dan melawan tim lawan untuk menang.
              <br/><br/>
              Perjalanan akuisisi Valve atas nama DOTA memang bukan perkara mudah. Sempat mengalami konflik dengan Blizzard sebagai pemilik Warcraft III, perseteruan ini untungnya
              berakhir damai. Valve berkesempatan untuk terus melanjutkan terus proyek ambisius ini, menawarkan berbagai modifikasi di sisi visual dan tentu saja mekanik gameplay
              yang lebih seimbang. Memasuki proses beta dan berhasil menjaring ratusan ribu gamer selama proses ini, Valve akhirnya siap untuk keluar dari fase yang satu ini. 
              <br/><br/>
              Setahun sejak rilis betanya, Valve akhirnya secara resmi merilis DOTA 2 secara bebas kepada publik. Sembari memastikan proses peralihan ini tidak akan mengganggu
              pengalaman mereka yang sudah masuk ke dalam masa beta, DOTA 2 akhirnya terbuka bagi setiap gamer lewat sistem F2P yang ia usung.
              Mengingat masa beta yang sudah berakhir dan eksistensinya sebagai sebuah game resmi yang terbuka secara komersil, ini menjadi momen yang tepat bagi JagatPlay
              untuk melemparkan beberapa impresi yang sempat kami tangkap, tentu saja – selama setahun terakhir ini. Apa saja yang berubah? Menjadi lebih baik atau lebih buruk? 
              Atau ia masih belum mampu menundukkan popularitas DOTA pertama?
            </span>
            </p>

            <p> Dota 2 dimainkan oleh 2 tim yang beranggota 5 orang pemain, setiap tim memiliki markas yang berada dipojok peta, setiap markas memiliki
              satu bangunan bernama "Ancient", Di mana tim harus berusaha menghancurkan "Ancient" tim lawan agar dapat memenangkan pertandingan.
              Setiap pemain hanya dapat mengontrol satu karakter "Hero" yang berfokus pada menaikan level, mengumpulkan gold, membeli item dan melawan tim lawan untuk menang.
              <br/><br/>
              Perjalanan akuisisi Valve atas nama DOTA memang bukan perkara mudah. Sempat mengalami konflik dengan Blizzard sebagai pemilik Warcraft III, perseteruan ini untungnya
              berakhir damai. Valve berkesempatan untuk terus melanjutkan terus proyek ambisius ini, menawarkan berbagai modifikasi di sisi visual dan tentu saja mekanik gameplay
              yang lebih seimbang. Memasuki proses beta dan berhasil menjaring ratusan ribu gamer selama proses ini, Valve akhirnya siap untuk keluar dari fase yang satu ini. 
              <br/><br/>
              Setahun sejak rilis betanya, Valve akhirnya secara resmi merilis DOTA 2 secara bebas kepada publik. Sembari memastikan proses peralihan ini tidak akan mengganggu
              pengalaman mereka yang sudah masuk ke dalam masa beta, DOTA 2 akhirnya terbuka bagi setiap gamer lewat sistem F2P yang ia usung.
              Mengingat masa beta yang sudah berakhir dan eksistensinya sebagai sebuah game resmi yang terbuka secara komersil, ini menjadi momen yang tepat bagi JagatPlay
              untuk melemparkan beberapa impresi yang sempat kami tangkap, tentu saja – selama setahun terakhir ini. Apa saja yang berubah? Menjadi lebih baik atau lebih buruk? 
              Atau ia masih belum mampu menundukkan popularitas DOTA pertama?
            </p>
            </article>
          </div>
        </div>
        <aside class="flex-column single">
          <div class="aside-box box-shadow">
            <article style={{width: '90%' , margin:0 + 'auto'}} >
              <header>
                <h2 id="me">About Me</h2>
                <figure><img class="img-profile" src={meProfile} alt=""/></figure>
                <figcaption>H-fiz</figcaption>
                <section>
                  <h3>Bio</h3>
                  <table>
                    <tr>
                      <th>Nama</th>
                      <td>Fahad Hafizudin Dayana</td>
                    </tr>
                    <tr>
                      <th>Tmpt/Tgl lahir</th>
                      <td>Mojokerto, 13-Mei-1998</td>
                    </tr>
                    <tr>
                      <th>Pendidikan</th>
                      <td>Mahasiswa</td>
                    </tr>
                    <tr>
                      <th>Kegelisahan</th>
                      <td style={{fontStyle: 'italic'}}>"Puncak tertinggi dari rasa sayang adalah ikhlas"
                      </td>
                    </tr>
                    <tr>
                      <td><img style={{height: 50 + 'px', width: 50 +'px'}} src={imgIg} alt=""/></td>
                      <td><a target="_blank" href="https://www.instagram.com/hafizudin.d/">@hafizudin.d</a></td>
                    </tr>
                  </table>
                </section>
              </header>
            </article>
          </div>
        </aside>
      </main>

      <footer class="flex-column">
        <div class="footer-box color-gradient">
          <h5>template by Fahad Hafizudin Dayana Production</h5>
        </div>
        <div class="box-sponsor">
          <div class="flex-row">
            <div class="footer-box">
              <p>Pelatihan ini didukung oleh :</p>
            </div>
          </div>
          <div class="footer-row">
            <div class="footer-box">
              <img src={imgSanbercode} alt=""/>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;

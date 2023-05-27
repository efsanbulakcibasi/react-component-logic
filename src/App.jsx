import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import Kompleweb from "./images/kompleweb.jpg";
function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                img={Angular}
                title="Angular"
                description="Angular Google'daki Angular Ekibi, bireyler ve şirketler topluluğu tarafından yönetilen TypeScript
      tabanlı özgür ve açık kaynaklı bir web uygulaması çerçevesidir. Angular, AngularJS'yi oluşturan aynı ekibin eksiksiz
      (veya AngularJS) ve Node.js çalışma ortamından oluşan MEAN yığınının ön ucu olarak kullanılır."
              />
            </div>
            <div className="column">
              <Course
                img={Bootstrap}
                title="Bootstrap"
                description="Twitter Bootstrap açık kaynak kodlu, web sayfaları veya uygulamaları geliştirmek için 
                kullanılabilecek araçlar bütünü ve önyüz çatısı. Bootstrap, web sayfaları veya uygulamalarında kullanılabilecek,
                 HTML ve CSS tabanlı tasarım şablonlarını içerir.Web sayfaları veya uygulamaları için kullabılabilir. "
              />
            </div>
            <div className="column">
              <Course
                img={Ccsharp}
                title="Ccsharp"
                description="C#; Microsoft tarafından .NET Teknolojisi için geliştirilen modern bir programlama dilidir. 
                Sözdizimi C-like bir deneyim sunar. Microsoft tarafından geliştirilmiş olsa da ECMA ve ISO standartları altına 
                alınmıştır. C programlama dilinde bir tam sayı değişkeni 1 artırmak için değişkenden sonra kullanılabilir. "
              />
            </div>
            <div className="column">
              <Course
                img={Kompleweb}
                title="Kompleweb"
                description=" İnternet üzerinde yayınlanan birbirleriyle bağlantılı hiper-metin dokümanlarından oluşan bir bilgi
                 sistemidir. Bu dokümanların her birine Web sayfası adı verilir ve Web sayfalarına İnternet kullanıcısının bilgisayarında
                  çalışan Web tarayıcısı adı verilen bilgisayar programları aracılığıyla erişilmesi sağlanır."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

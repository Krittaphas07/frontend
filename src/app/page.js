import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Sodaft</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Service
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">contact</a>
        </li>
      </ul>
      <form className="d-flex" role="Sign">
        <button className="btn btn-outline-success" type="submit">sign in</button>
        <button className="btn btn-outline-success" type="submit">sign up</button>
      </form>
    </div>
    </div>
</nav>

<div className="row">
  <div id="carouselExampleFade" className="carousel slide carousel-fade">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://fastcdn.hoyoverse.com/mi18n/nap_global/m20240603hy38zhr2tc/upload/c7cfeee81741202ec4534c7905ed0ffc_7062804356028171249.png" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://www.playstation.com/th-th/games/nba-2k/" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://www.playstation.com/th-th/games/the-first-descendant/" className="d-block w-100" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
<br></br>
<div className="row text-center">
  <div className="col-4 text-center">
  <div className="card" style={{width: '39rem'}}>
  <img src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-game-carousel-spider-man-3-15jan24?$800px--t$" className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">
    Marvel's Spider-Man 2
    เหล่าสไปเดอร์แมน ปีเตอร์ ปาร์กเกอร์และไมลส์ โมราเลสกลับมาเพื่อการผจญภัยครั้งใหม่อันน่าตื่นเต้นในแฟรนไชส์ Marvel’s Spider-Man สำหรับ PS5 ที่ได้รับคำชมอย่างล้นหลาม</p>
  </div>
  </div>
  </div>

  <div className="col-4 text-center">
  <div className="card" style={{width: '39rem'}}>
  <img src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-got-image-block-01-en-01nov21?$800px--t$" className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">
    Ghost of Tsushima
    เผยความมหัศจรรย์ที่ซ่อนอยู่ของสึชิมะในเกมแอคชั่นผจญภัยแบบโอเพ่นเวิลด์จาก Sucker Punch Productions และ PlayStation Studios สำหรับ PS5 และ PS4</p>
  </div>
  </div>
  </div>

  <div className="col-4 text-center">
  <div className="card" style={{width: '39rem'}}>
  <img src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-gt7-hub-image-block-01-en-10mar22?$800px--t$" className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">
    Horizon Forbidden West™ Complete Edition
    การนำโหมดในตำนานอย่าง GT Simulation Mode กลับมาอีกครั้งทำให้คุณสามารถซื้อ ปรับแต่ง และแข่งขันได้ตลอดโหมดเนื้อเรื่องเล่นคนเดียวอีก</p>
  </div>
  </div>
  </div>
 
  <div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Service</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Contact</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
    <p class="text-center text-body-secondary">© 2024 Sodaft Company, Inc</p>
  </footer>
</div>

</div>
</>

);
}

import Header from "@/components/header/Header";

export default function Home() {
  return (
    <>
      {/* <main className="content">
        <section className="categories">
          <div className="categories-title">
            <h1>Професійний ремонт техніки в Житомирі</h1>
          </div>

          <div id="coffe" className="card">
            <Image
              src="/categories/kavova_machina.jpg"
              alt="Ремонт кавомашин Житомир"
              loading="lazy"
              width={1000}
              height={400}
            />
            <div className="card-content">
              <h2 className="card-title">Ремонт кавомашин</h2>
              <ul className="card-description">
                <li>Діагностика у разі ремонту безкоштовна</li>
                <li>Чистка / обслуговування</li>
                <li>Ремонт (вартість визначається після діагностики)</li>
              </ul>
            </div>
          </div>

          <div id="tv" className="card">
            <Image
              src="/categories/televisor.jpg"
              alt="Ремонт телевізорів Житомир"
              loading="lazy"
              width={1000}
              height={400}
            />
            <div className="card-content">
              <h2 className="card-title">Ремонт телевізорів</h2>
              <ul className="card-description">
                <li>Діагностика у разі ремонту безкоштовна</li>
                <li>Заміна / відновлення матриці</li>
                <li>Заміна підсвітки</li>
                <li>Робота по платі</li>
                <li>Прошивка</li>
                <li>Ремонт (вартість визначається після діагностики)</li>
              </ul>
            </div>
          </div>

          <div id="laptop" className="card">
            <Image
              src="/categories/laptop.jpg"
              alt="Ремонт ноутбуків Житомир"
              loading="lazy"
              width={1000}
              height={400}
            />
            <div className="card-content">
              <h2 className="card-title">Ремонт ноутбуків / комп'ютерів</h2>
              <ul className="card-description">
                <li>Діагностика у разі ремонту безкоштовна</li>
                <li>Обслуговування / чистка</li>
                <li>Встановлення / перевстановлення Windows та драйверів</li>
                <li>Встановлення доступу / даних</li>
                <li>Ремонт після пошкодження водою</li>
                <li>Заміна клавіатури</li>
                <li>Модульна заміна / upgrade</li>
                <li>Ремонт (вартість визначається після діагностики)</li>
              </ul>
            </div>
          </div>

          <div id="mobile" className="card">
            <Image
              src="/categories/telefon.jpg"
              alt="Ремонт телефонів Житомир"
              loading="lazy"
              width={1000}
              height={400}
            />
            <div className="card-content">
              <h2 className="card-title">Ремонт телефонів / планшетів</h2>
              <ul className="card-description">
                <li>Діагностика у разі ремонту безкоштовна</li>
                <li>Заміна екрану</li>
                <li>Перепрошивка</li>
                <li>Зйом блокування</li>
                <li>Ремонт (вартість визначається після діагностики)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="map-block" id="map-block">
          <h2 className="question">Шукаєте сервісний центр у місті Житомир?</h2>

          <div className="map-wrapper">
            <h3 className="map-title">вул. Лесі Українки 59</h3>
            <div className="map">
              <iframe
                width="100%"
                height="300"
                loading="lazy"
                allowFullScreen={false}
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.404798999175!2d28.661106376546353!3d50.26569987155753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c65c10e32dde1%3A0x8f3b51b299ce848d!2sUniversal%20Service!5e0!3m2!1suk!2sua!4v1741732384064!5m2!1suk!2sua"
              ></iframe>
            </div>
          </div>

          <div className="map-wrapper">
            <h3 className="map-title">вул. Леха Качинського 6</h3>
            <div className="map">
              <iframe
                width="100%"
                height="300"
                loading="lazy"
                allowFullScreen={false}
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d637.7727630937693!2d28.65782664675399!3d50.25288369636765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c655460ed36cf%3A0xb3a6f344da82eee4!2z0KDQtdC80L7QvdGCINC90L7Rg9GC0LHRg9C60ZbQsiwg0YDQtdC80L7QvdGCINC60L7QvNC_J9GO0YLQtdGA0ZbQsiwg0YDQtdC80L7QvdGCINGC0LXQu9C10LLRltC30L7RgNGW0LI!5e0!3m2!1suk!2sua!4v1742395481198!5m2!1suk!2sua"
              ></iframe>
            </div>
          </div>
        </section>
      </main> */}

      {/* <footer id="footer" className="footer">
        <div className="footer-container">
          <div className="footer-info">
            <div className="item">
              <i className="fa-solid fa-mobile-screen"></i>
              <a href="tel:+380969729277">+380969729277</a>
            </div>
            <div className="item">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:universalservice.ua@gmail.com">universalservice.ua@gmail.com</a>
            </div>
          </div>

          <div className="footer-social">
            <a
              href="https://www.instagram.com/universal_service.ua?igsh=b3k2d3NzMDI2bmJm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i> Instagram
            </a>
            <a
              href="https://www.tiktok.com/@universal_service.ua?_t=ZM-8uok1iCW1lV&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-tiktok"></i> TikTok
            </a>
            <a
              href="https://t.me/universalservice_ua"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-telegram"></i> Telegram
            </a>
          </div>
        </div>
      </footer> */}
    </>
  );
}

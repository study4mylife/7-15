class Header extends HTMLElement{
  connectedCallback(){
      this.innerHTML = 
      `<header>
      <div class="topBtn" >
          <button onclick="topBtn()"><i class="fa-solid fa-arrow-up fa-2x" style="color: #fefefe;"></i></button>
      </div>
          <nav class="navbar navbar-light navbar-expand-md fixed-top bg-white">
              <div class="container bg-white">
                  <a class="navbar-brand steinluxLogo" href="index.html"></a>
                  <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-3">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div id="navcol-3" class="collapse navbar-collapse">
                      <ul class="navbar-nav">
                      <li class="nav-item dropdown">
                          <a class="dropdown-toggle nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">碳淨零顧問</a>
                          <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="../html/emissionCompliance.html">排碳合規顧問</a></li>
                          <li><a class="dropdown-item" href="../html/netZeroPath.html">淨零路徑規劃</a></li>
                          </ul>
                      </li>
                      
                      <li class="nav-item dropdown" >
                          <a class="dropdown-toggle nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">淨零解決方案</a>
                          <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="../html/gasInventories.html">溫室氣體盤查</a></li>
                          <li><a class="dropdown-item" href="../html/carbonFootprint.html">碳足跡盤查</a></li>
                          <li><a class="dropdown-item" href="../html/CarbonTrade.html">碳權專案/交易</a></li>
                          <li><a class="dropdown-item" href="../html/greenElectricity.html">綠電申請/交易</a></li>
                          </ul>
                      </li>
                          
                      
                      <li class="nav-item dropdown">
                          <a class="dropdown-toggle nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">永續服務</a>
                          <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="../html/solarEnergy.html">太陽能建置</a></li>
                          <li><a class="dropdown-item" href="../html/carbonCalculator.html">碳足跡計算機</a></li>
                          <li><a class="dropdown-item" href="../html/carbonNeutrality.html">碳中和平台</a></li>
                          </ul>
                      </li>
                          
                      
                      <li class="nav-item dropdown">
                          <a class="dropdown-toggle nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">INSIGHT</a>
                          <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="../html/media.html">媒體專區</a></li>
                          <li><a class="dropdown-item" href="../html/research.html">研究報告</a></li>
                          </ul>
                      </li>
                          
                      <li class="nav-item dropdown">
                          <a class="dropdown-toggle nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">關於我們</a>
                          <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="../html/vision.html">願景與承諾</a></li>
                          <li><a class="dropdown-item" href="../html/feedback.html">意見與回饋</a></li>
                          </ul>
                      </li>
                      </ul>
                  </div>
              </div>
          </nav>
  </header>`;
  }
}

class Footer extends HTMLElement{
  connectedCallback(){
      this.innerHTML = ` 
      <footer>
        <div class="footerContainer">
            <div>
                <h4>碳淨零顧問</h4>
                <ul>
                    <li><a href="../html/emissionCompliance.html">CBAM合規顧問</a></li>
                    <li><a href="../html/netZeroPath.html">淨零路徑規劃</a></li>
                </ul>
                <h4>永續服務</h4>
                <ul>
                    <li><a href="../html/solarEnergy.html">太陽能規劃/建置</a></li>
                    <li><a href="../html/carbonCalculator.html">碳足跡計算機</a></li>
                    <li><a href="../html/carbonNeutrality.html">碳中和平台</a></li>
                </ul>
            </div>
            <div>
                <h4>淨零解決方案</h4>
                <ul>
                    <li><a href="../html/gasInventories.html">溫室氣體盤查ISO 14064-1</a></li>
                    <li><a href="../html/carbonFootprint.html">產品碳足跡盤查ISO 14067</a></li>
                    <li><a href="../html/greenElectricity.html">再生能源憑證申請/交易</a></li>
                    <li><a href="../html/CarbonTrade.html">碳權專案申請/交易</a></li>
                </ul>
            </div>
            <div>
                <h4>企業採購</h4>
                <ul>
                    <li><a href="">碳中和產品</a></li>
                    <li><a href="">抵銷碳足跡</a></li>
                </ul>
                <h4>聯絡我們</h4>
                <ul>
                    <li><a href="">shih@steinlux.com.tw</a></li>
                    <li><a href="">品牌合作</a></li>
                </ul>
            </div>
            <div>
                <h4>INSIGHT</h4>
                <ul>
                    <li><a href="../html/media.html">媒體專區</a></li>
                    <li><a href="../html/research.html">研究報告</a></li>
                </ul>
                <h4>關於我們</h4>
                <ul>
                    <li><a href="../html/vision.html">楒騄願景與承諾</a></li>
                    <li><a href="../html/feedback.html">意見與回饋</a></li>
                </ul>
            </div>
        </div>
        <p>- Steinlux Green Capital -</p>
        <hr>
        <div class="footerCopyright">
            <p>Copyright © 2023. All rights reserved</p>
            <span>
                <h4>Privacy Policy</h4>
                <h4>Terms of Use</h4>
                <h4>Legal</h4>
                <h4>License</h4>
            </span>
        </div>

    </footer>`
  }
}

customElements.define('index-header', Header);
customElements.define('index-footer', Footer);

function topBtn(){
    window.scrollTo(0,0)
}

function toggleDropdown(element, show) {
  const dropdownToggle = element.querySelector('.dropdown-toggle');
  const dropdownMenu = element.querySelector('.dropdown-menu');
  
  if (show) {
    dropdownToggle.classList.add('show');
    dropdownMenu.classList.add('show');
  } 
  else {
    dropdownToggle.classList.remove('show');
    dropdownMenu.classList.remove('show');
  }
}

document.querySelectorAll('.nav-item.dropdown').forEach(item => {
  item.addEventListener('mouseover', () => toggleDropdown(item, true));
  item.addEventListener('mouseout', () => toggleDropdown(item, false));
});


// script.js
document.addEventListener('DOMContentLoaded', function() {
  const hiddenElements = document.querySelectorAll('.hidden-element');

  function checkScroll() {
      const triggerPoint = window.innerHeight / 5 * 3; // 視窗高度的80%

      hiddenElements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;

          if (elementTop < triggerPoint) {
              element.classList.add('visible');
            }
      });
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // 初始化檢查
});




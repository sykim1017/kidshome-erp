/* ========================================
   키즈홈 - 메인 JavaScript
   ======================================== */

// ========================================
// 데이터 정의
// ========================================
const menuData = [
  { name: '회계관리와 필수정산', icon: '📊', color: 'sky', items: ['아주쉬운 회계정리', '필요경비정산', '누리과정정산', '시간제보육정산'] },
  { name: '특별한기능', icon: '⭐', color: 'purple', items: ['지자체연동서비스', '영수증등록서비스', '쇼핑몰영수증자동수집', 'CMS스쿨뱅킹'] },
  { name: '직원관리', icon: '👥', color: 'green', items: ['급여관리서비스', '4대보험신고', '4대보험료 자동조회', '고용·산재 보수총액 신고', '근로자통합사이트'] },
  { name: '세무관리', icon: '📋', color: 'orange', items: ['원천세업무', '연말정산'] },
  { name: '커뮤니티', icon: '💬', color: 'pink', items: ['어린이집 신규 문의', '유치원 신규 문의', 'SONO 이용신청', '행정처분상담', '노무분쟁상담', '원격지원 바로가기'] },
  { name: '이용가이드', icon: '📖', color: 'amber', items: ['메인화면', '회계입력', '예산결산', '회계통합 및 정산서와 장부출력', '노무컨설팅', '급여세무컨설팅', '입퇴사관리'], isGuide: true }
];

const tabs = { 1: menuData[0].items, 2: menuData[1].items, 3: menuData[2].items, 4: menuData[3].items, 5: menuData[4].items };
const guideSubTabs = { main: ['매인화면'], accounting: [], budget: [], integration: [], labor: [], payroll: [], hr: [] };
const guideIdMap = { '메인화면': 'main', '회계입력': 'accounting', '예산결산': 'budget', '회계통합 및 정산서와 장부출력': 'integration', '노무컨설팅': 'labor', '급여세무컨설팅': 'payroll', '입퇴사관리': 'hr' };

// 탭 콘텐츠 데이터
const tabContents = {
  '아주쉬운 회계정리': Array.from({length:5}, (_,i)=>`https://github.com/heung-D/kids-home/blob/main/%ED%9A%8C%EA%B3%84%EA%B4%80%EB%A6%AC%EC%99%80%ED%95%84%EC%88%98%EC%A0%95%EC%82%B0/%EC%95%84%EC%A3%BC%EC%89%AC%EC%9A%B4%20%ED%9A%8C%EA%B3%84%EC%A0%95%EB%A6%AC/%EC%95%84%EC%89%AC%EC%9A%B4%ED%9A%8C%EA%B3%84%EC%A0%95%EB%A6%AC-${i+1}.png?raw=true`),
  '필요경비정산': { type: 'custom', images: ['https://github.com/heung-D/kids-home/blob/main/%ED%95%84%EC%9A%94%EA%B2%BD%EB%B9%84%EA%B2%BD%EC%82%B0/%ED%95%84%EC%9A%94%EA%B2%BD%EB%B9%84%EC%A0%95%EC%82%B0%EC%9D%B4%EB%AF%B8%EC%A7%80.png?raw=true','https://github.com/heung-D/kids-home/blob/main/%ED%95%84%EC%9A%94%EA%B2%BD%EB%B9%84%EA%B2%BD%EC%82%B0/%ED%95%84%EC%9A%94%EA%B2%BD%EB%B9%84%EC%A0%95%EC%82%B02.png?raw=true'], features: ['필요경비는 반기별로 정산을 하셔야 됩니다.','키즈홈에서 회계 정리만으로 자동으로 필요경비 정산이 됩니다.','정산서 출력까지 알아서 척척','상반기 / 하반기 / 전체 출력까지 자동으로','14% 일반관리비 사용내용 까지 입력하실 수 있습니다.','인천 지역 아동별 필요경비 정산까지도 알아서 척척 ^^','중요한건 1:1 담당 매니저가 도와 주실꺼에요 ^^'] },
  '누리과정정산': { type: 'nuriImageFirst', images: ['https://github.com/heung-D/kids-home/blob/main/%EB%88%84%EB%A6%AC%EA%B3%BC%EC%A0%95%EC%A0%95%EC%82%B0/%EB%88%84%EB%A6%AC%EA%B3%BC%EC%A0%95%EC%A0%95%EC%82%B01.png?raw=true'], features: ['누리과정 정산서도 척척','정산서 출력까지도 자동으로 출력','회계연도 (3월 ~ 2월)과 년도별 (1월 ~12월) 2가지 자동 출력됩니다.'], table: { title: '1. 사용항목: 8개 항목', items: [['1) 보조교사 인건비(원칙)','5) 환경안전관리기준 준수에 따른 개선비용'],['2) 교사 대상 학습공동체 활동','6) 누리과정 운영 도우미 인건비'],['3) 교재/교구비 및 교육기자재 구입비','7) 아동안전과 관련된 물품 구입 및 설치/유지비용'],['4) 급간식비','8) 담당교사 처우개선을 위한 제수당']], note: '2. 보조교사 인건비에 우선 활용' } },
  '시간제보육정산': { type: 'featureFirst', images: ['https://github.com/heung-D/kids-home/blob/main/%EC%8B%9C%EA%B0%84%EB%B3%B4%EC%9C%A1%EC%A0%9C%EC%A0%95%EC%82%B0/1.png?raw=true','https://github.com/heung-D/kids-home/blob/main/%EC%8B%9C%EA%B0%84%EB%B3%B4%EC%9C%A1%EC%A0%9C%EC%A0%95%EC%82%B0/2.png?raw=true'], features: ['시간제 보육 정산까지 자동으로 척척'] },
  '지자체연동서비스': ['https://github.com/heung-D/kids-home/blob/main/%ED%8A%B9%EB%B3%84%ED%95%9C%EA%B8%B0%EB%8A%A5%EC%A7%80%EC%9E%90%EC%B2%B4%EC%84%9C%EB%B9%84%EC%8A%A4/2.1%EC%A7%80%EC%9E%90%EC%B2%B4%EC%84%9C%EB%B9%84%EC%8A%A4.jpg?raw=true'],
  '영수증등록서비스': ['https://github.com/heung-D/kids-home/blob/main/%ED%8A%B9%EB%B3%84%ED%95%9C%EA%B8%B0%EB%8A%A5%EC%A7%80%EC%9E%90%EC%B2%B4%EC%84%9C%EB%B9%84%EC%8A%A4/2.2%EC%98%81%EC%88%98%EC%A6%9D%EB%93%B1%EB%A1%9D%EC%84%9C%EB%B9%84%EC%8A%A4.jpg?raw=true'],
  '쇼핑몰영수증자동수집': { type: 'mixed', sections: [{features:['키즈홈은 쇼핑몰 영수증을 자동으로 가져 옵니다.'],image:'https://github.com/heung-D/kids-home/blob/main/%ED%8A%B9%EB%B3%84%ED%95%9C%EA%B8%B0%EB%8A%A5%EC%A7%80%EC%9E%90%EC%B2%B4%EC%84%9C%EB%B9%84%EC%8A%A4/2.3%EC%87%BC%ED%95%91%EB%AA%B0%EC%98%81%EC%88%98%EC%A6%9D%EC%9E%90%EB%8F%99%EC%88%98%EC%A7%91.png?raw=true'},{features:['자동으로 쇼핑몰 거래명세표가 자동으로 출력'],image:'https://github.com/heung-D/kids-home/blob/main/%ED%8A%B9%EB%B3%84%ED%95%9C%EA%B8%B0%EB%8A%A5%EC%A7%80%EC%9E%90%EC%B2%B4%EC%84%9C%EB%B9%84%EC%8A%A4/2.3%EC%87%BC%ED%95%91%EB%AA%B0%EC%98%81%EC%88%98%EC%A6%9D%EC%9E%90%EB%8F%99%EC%88%98%EC%A7%912.png?raw=true'}] },
  'CMS스쿨뱅킹': ['https://github.com/heung-D/kids-home/blob/main/%ED%8A%B9%EB%B3%84%ED%95%9C%EA%B8%B0%EB%8A%A5%EC%A7%80%EC%9E%90%EC%B2%B4%EC%84%9C%EB%B9%84%EC%8A%A4/2.4%EC%8A%A4%EC%BF%A8%EB%B1%85%ED%82%B9.jpg?raw=true'],
  '급여관리서비스': ['https://github.com/heung-D/kids-home/blob/main/0%EC%A7%81%EC%9B%90%EA%B4%80%EB%A6%AC/3-1%20%EA%B8%89%EC%97%AC%EA%B4%80%EB%A6%AC%EC%84%9C%EB%B9%84%EC%8A%A4.jpg?raw=true'],
  '4대보험신고': ['https://github.com/heung-D/kids-home/blob/main/0%EC%A7%81%EC%9B%90%EA%B4%80%EB%A6%AC/3-2%204%EB%8C%80%EB%B3%B4%ED%97%98%EA%B4%80%EB%A6%AC.jpg?raw=true'],
  '4대보험료 자동조회': ['https://github.com/heung-D/kids-home/blob/main/0%EC%A7%81%EC%9B%90%EA%B4%80%EB%A6%AC/3-3%204%EB%8C%80%EB%B3%B4%ED%97%98%EB%A3%8C%EC%9E%90%EB%8F%99%EC%A1%B0%ED%9A%8C.jpg?raw=true'],
  '고용·산재 보수총액 신고': ['https://github.com/heung-D/kids-home/blob/main/0%EC%A7%81%EC%9B%90%EA%B4%80%EB%A6%AC/3-4%20%EA%B3%A0%EC%9A%A9%EA%B1%B4%EA%B0%95%EB%B3%B4%EC%88%98%EC%95%A1.jpg?raw=true'],
  '근로자통합사이트': ['https://github.com/heung-D/kids-home/blob/main/0%EC%A7%81%EC%9B%90%EA%B4%80%EB%A6%AC/3-5%20%EA%B7%BC%EB%A1%9C%EC%9E%90%EC%9A%A9%ED%86%B5%ED%95%A9%EC%82%AC%EC%9D%B4%ED%8A%B8.jpg?raw=true'],
  '원천세업무': ['https://github.com/heung-D/kids-home/blob/main/4%EC%84%B8%EB%AC%B4%EA%B4%80%EB%A6%AC/4-1%20%EC%9B%90%EC%B2%9C%EC%84%B8%EC%97%85%EB%AC%B4.jpg?raw=true'],
  '연말정산': ['https://github.com/heung-D/kids-home/blob/main/4%EC%84%B8%EB%AC%B4%EA%B4%80%EB%A6%AC/4-2%20%EC%97%B0%EB%A7%90%EC%A0%95%EC%82%B0.jpg?raw=true'],
  '어린이집 신규 문의': ['https://github.com/heung-D/kids-home/blob/main/5%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0/5-1%20%EC%96%B4%EB%A6%B0%EC%9D%B4%EC%A7%91%EC%8B%A0%EA%B7%9C%EB%AC%B8%EC%9D%98.png?raw=true'],
  '유치원 신규 문의': ['https://github.com/heung-D/kids-home/blob/main/5%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0/5-2%20%EC%9C%A0%EC%B9%98%EC%9B%90%EC%8B%A0%EA%B7%9C%EB%AC%B8%EC%9D%98.png?raw=true'],
  'SONO 이용신청': ['https://github.com/heung-D/kids-home/blob/main/5%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0/5-3%20sono%20%EC%9D%B4%EC%9A%A9%EC%8B%A0%EC%B2%AD.png?raw=true'],
  '행정처분상담': ['https://github.com/heung-D/kids-home/blob/main/5%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0/5-4%20%ED%96%89%EC%A0%95%EC%B2%98%EB%B6%84%EC%83%81%EB%8B%B4.jpg?raw=true'],
  '노무분쟁상담': ['https://github.com/sykim1017/kids-home/blob/main/%E1%84%82%E1%85%A9%E1%84%86%E1%85%AE%E1%84%87%E1%85%AE%E1%86%AB%E1%84%8C%E1%85%A2%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A1%E1%86%B7%E1%84%89%E1%85%A5%E1%84%87%E1%85%B5%E1%84%89%E1%85%B3.png?raw=true'],
  '예산결산': { type: 'scrollTabs', tabs: [{name:'세입예산입력',page:1},{name:'세출예산입력',page:4},{name:'추가경정예산입력',page:5},{name:'과목전용조서',page:8},{name:'결산서출력',page:9},{name:'예산서출력',page:10},{name:'예산엑셀업로드',page:11},{name:'정부보조금명세서',page:12}], images: Array.from({length:12},(_,i)=>`https://github.com/heung-D/kids-home/blob/main/%EC%9D%B4%EC%9A%A9%EA%B0%80%EC%9D%B4%EB%93%9C-%EC%98%88%EC%82%B0%EA%B2%B0%EC%82%B0/budget_guide-${String(i+1).padStart(2,'0')}.jpg?raw=true`) },
  '회계입력': { type: 'scrollTabs', tabs: [{name:'회계입력 가이드',page:1},{name:'장부입력',page:10},{name:'증빙등록',page:20},{name:'마감처리',page:30},{name:'기타기능',page:40}], images: Array.from({length:44},(_,i)=>`https://github.com/heung-D/kids-home/blob/main/accounting_pages/page-${String(i+1).padStart(2,'0')}.jpg?raw=true`) },
  '매인화면': ['https://github.com/heung-D/kids-home/blob/main/1.%EC%9D%B4%EC%9A%A9%EA%B0%80%EC%9D%B4%EB%93%9C-%EB%A9%94%EC%9D%B8%ED%99%94%EB%A9%B4.png?raw=true'],
  '회계통합 및 정산서와 장부출력': { type: 'scrollTabs', tabs: [{name:'회계통합',page:1},{name:'정산서출력',page:5},{name:'장부출력',page:9}], images: Array.from({length:13},(_,i)=>`https://github.com/heung-D/kids-home/blob/main/integration_pages/page-${String(i+1).padStart(2,'0')}.jpg?raw=true`) },
  '노무컨설팅': { type: 'scrollTabs', tabs: [{name:'노무컨설팅 개요',page:1},{name:'근로계약',page:10},{name:'취업규칙',page:20},{name:'기타',page:28}], images: Array.from({length:31},(_,i)=>`https://github.com/heung-D/kids-home/blob/main/labor_pages/page-${String(i+1).padStart(2,'0')}.jpg?raw=true`) },
  '급여세무컨설팅': { type: 'scrollTabs', tabs: [{name:'급여세무 개요',page:1},{name:'급여계산',page:10},{name:'세무신고',page:18},{name:'연말정산',page:24}], images: Array.from({length:28},(_,i)=>`https://github.com/heung-D/kids-home/blob/main/payroll_pages/page-${String(i+1).padStart(2,'0')}.jpg?raw=true`) },
  '입퇴사관리': { type: 'scrollTabs', tabs: [{name:'입퇴사관리 개요',page:1},{name:'입사처리',page:5},{name:'퇴사처리',page:9}], images: Array.from({length:13},(_,i)=>`https://github.com/heung-D/kids-home/blob/main/hr_pages/page-${String(i+1).padStart(2,'0')}.jpg?raw=true`) }
};

// ========================================
// 전역 변수
// ========================================
let isMobileMenuOpen = false;
let guideMenuTimer;
let menuDropdownTimers = {};
let isLoggedIn = false; // 로그인 상태 (테스트용: test/test)

// ========================================
// 초기화
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  renderMobileMenu();
  document.getElementById('floatingTocToggle').onclick = () => document.getElementById('floatingTocPopup').classList.toggle('hidden');
  document.addEventListener('click', e => {
    const popup = document.getElementById('floatingTocPopup'), toggle = document.getElementById('floatingTocToggle'), toc = document.getElementById('globalFloatingToc');
    if (!toc.classList.contains('hidden') && !popup.contains(e.target) && !toggle.contains(e.target)) popup.classList.add('hidden');
  });
});

// ========================================
// 모바일 메뉴
// ========================================
function renderMobileMenu() {
  document.getElementById('mobileNav').innerHTML = menuData.map((m,i) => `
    <div>
      <button onclick="toggleMobileSubmenu(${i+1})" class="w-full flex items-center justify-between px-5 py-4 text-left text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
        <span class="flex items-center gap-3"><span class="w-8 h-8 flex items-center justify-center bg-${m.color}-100 text-${m.color}-500 rounded-lg text-sm">${m.icon}</span>${m.name}</span>
        <svg id="mobileArrow${i+1}" class="w-5 h-5 text-gray-400 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div id="mobileSubmenu${i+1}" class="bg-gray-50 max-h-0 overflow-hidden transition-all duration-300">
        ${m.items.map((item,j) => item === '원격지원 바로가기' ? `<a href="https://939.co.kr/7779/" target="_blank" class="block w-full text-left pl-16 pr-5 py-3 text-sm text-sky-600 hover:text-sky-700 hover:bg-sky-50 transition-colors font-semibold">${item}</a>` : `<button onclick="${m.isGuide ? `handleMobileGuideClick('${guideIdMap[item]||'main'}','${item}')` : `handleMobileMenuClick('${m.name}',${i+1},${j})`}" class="w-full text-left pl-16 pr-5 py-3 text-sm text-gray-600 hover:text-sky-500 hover:bg-sky-50 transition-colors">${item}</button>`).join('')}
      </div>
    </div>
  `).join('');
}

function toggleMobileMenu() {
  isMobileMenuOpen = !isMobileMenuOpen;
  document.getElementById('mobileMenu').classList.toggle('-translate-x-full', !isMobileMenuOpen);
  document.getElementById('menuOverlay').classList.toggle('opacity-0', !isMobileMenuOpen);
  document.getElementById('menuOverlay').classList.toggle('invisible', !isMobileMenuOpen);
  document.getElementById('hamburgerBtn').classList.toggle('hamburger-active', isMobileMenuOpen);
  document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
}

function closeMobileMenu() {
  if (isMobileMenuOpen) toggleMobileMenu();
}

function toggleMobileSubmenu(id) {
  for (let i = 1; i <= 6; i++) if (i !== id) { const s = document.getElementById('mobileSubmenu'+i); if(s) s.style.maxHeight = '0'; document.getElementById('mobileArrow'+i)?.classList.remove('rotate-180'); }
  const submenu = document.getElementById('mobileSubmenu'+id), arrow = document.getElementById('mobileArrow'+id);
  const isOpen = submenu.style.maxHeight && submenu.style.maxHeight !== '0px';
  submenu.style.maxHeight = isOpen ? '0' : submenu.scrollHeight + 'px';
  arrow.classList.toggle('rotate-180', !isOpen);
}

function handleMobileMenuClick(n,i,t) {
  closeMobileMenu();
  handleMenuClickWithTab(n,i,t);
}

function handleMobileGuideClick(id,name) {
  closeMobileMenu();
  handleGuideClick(id,name);
}

// ========================================
// 드롭다운 메뉴
// ========================================
function showMenuDropdown(id) {
  clearTimeout(menuDropdownTimers[id]);
  document.getElementById('menuDropdown'+id).classList.remove('hidden');
}

function hideMenuDropdown(id) {
  menuDropdownTimers[id] = setTimeout(() => document.getElementById('menuDropdown'+id).classList.add('hidden'), 200);
}

function showGuideMenu() {
  clearTimeout(guideMenuTimer);
  document.getElementById('guideDropdown').classList.remove('hidden');
}

function hideGuideMenu() {
  guideMenuTimer = setTimeout(() => document.getElementById('guideDropdown').classList.add('hidden'), 200);
}

// ========================================
// 플로팅 목차
// ========================================
function showFloatingToc(content) {
  document.getElementById('floatingTocList').innerHTML = content.tabs.map((t,i) => `<button data-page="${t.page}" onclick="scrollToPageFromToc(${t.page})" class="toc-item w-full text-left px-4 py-2.5 text-xs sm:text-sm border-b border-gray-100 hover:bg-sky-50 hover:text-sky-600 transition-colors flex items-center gap-2 ${i===0?'bg-sky-50 text-sky-600':'text-gray-700'}"><span class="w-5 h-5 rounded-full bg-gray-200 text-gray-600 text-xs flex items-center justify-center shrink-0">${i+1}</span>${t.name}</button>`).join('');
  document.getElementById('globalFloatingToc').classList.remove('hidden');
}

function hideFloatingToc() {
  document.getElementById('globalFloatingToc').classList.add('hidden');
  document.getElementById('floatingTocPopup').classList.add('hidden');
}

window.scrollToPageFromToc = p => {
  scrollToPage(p);
  document.getElementById('floatingTocPopup').classList.add('hidden');
};

window.scrollToPage = p => {
  const t = document.getElementById('page-'+p);
  if(t) {
    window.scrollTo({top: t.offsetTop - 130, behavior:'smooth'});
    updateActiveTab(p);
  }
};

function updateActiveTab(p) {
  document.querySelectorAll('.scroll-tab-btn').forEach(b => b.className = `scroll-tab-btn px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all ${parseInt(b.dataset.page)===p?'bg-sky-500 text-white':'bg-gray-100 text-gray-600 hover:bg-sky-100 hover:text-sky-600'}`);
  document.querySelectorAll('.toc-item').forEach(b => { const a = parseInt(b.dataset.page)===p; b.classList.toggle('bg-sky-50',a); b.classList.toggle('text-sky-600',a); b.classList.toggle('text-gray-700',!a); });
}

// ========================================
// 페이지 이동
// ========================================
function goToMain() {
  hideFloatingToc();
  document.getElementById('mainContent').classList.remove('hidden');
  document.getElementById('detailPage').classList.add('hidden');
  document.getElementById('guidePage').classList.add('hidden');
  document.getElementById('autoJoinPage').classList.add('hidden');
  document.getElementById('sonoConsultPage').classList.add('hidden');
  document.getElementById('sonoMemberFormPage').classList.add('hidden');
  document.getElementById('loginPage').classList.add('hidden');
  document.getElementById('findAccountPage').classList.add('hidden');
}

function handleMenuClick(n,id) {
  hideFloatingToc();
  showPage('detail',n);
  renderTabs(id,0);
  loadTabContent(tabs[id][0]);
}

function handleMenuClickWithTab(n,id,t) {
  hideFloatingToc();
  showPage('detail',n);
  renderTabs(id,t);
  loadTabContent(tabs[id][t]);
  hideMenuDropdown(id);
}

function showPage(type,title) {
  document.getElementById('mainContent').classList.add('hidden');
  document.getElementById('autoJoinPage').classList.add('hidden');
  document.getElementById('sonoConsultPage').classList.add('hidden');
  document.getElementById('sonoMemberFormPage').classList.add('hidden');
  document.getElementById('loginPage').classList.add('hidden');
  document.getElementById('findAccountPage').classList.add('hidden');
  document.getElementById('detailPage').classList.toggle('hidden',type!=='detail');
  document.getElementById('guidePage').classList.toggle('hidden',type!=='guide');
  document.getElementById(type+'Title').textContent = title;
}

function renderTabs(id,active) {
  document.getElementById('tabsContainer').innerHTML = tabs[id].map((t,i) => t === '원격지원 바로가기' ? `<a href="https://939.co.kr/7779/" target="_blank" class="py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all bg-white text-gray-600 hover:bg-gray-100 shrink-0">${t}</a>` : `<button onclick="selectTab(this,${id})" class="py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all shrink-0 ${i===active?'bg-sky-400 text-white shadow-md':'bg-white text-gray-600 hover:bg-gray-100'}">${t}</button>`).join('');
}

function selectTab(btn,id) {
  btn.parentElement.querySelectorAll('button').forEach(b=>b.className='py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all shrink-0 bg-white text-gray-600 hover:bg-gray-100');
  btn.className='py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all shrink-0 bg-sky-400 text-white shadow-md';
  loadTabContent(btn.textContent);
}

// ========================================
// 탭 콘텐츠 로드
// ========================================
function loadTabContent(name) {
  const c = document.getElementById('detailContent'), content = tabContents[name];
  if (!content) return c.innerHTML = '<p class="text-gray-500 text-center py-12">준비 중입니다.</p>';

  // SONO 이용신청 특별 처리
  if (name === 'SONO 이용신청') {
    c.innerHTML = renderSonoPage();
    return;
  }

  // 어린이집 신규 문의 특별 처리
  if (name === '어린이집 신규 문의') {
    c.innerHTML = renderConsultForm('daycare');
    return;
  }

  // 유치원 신규 문의 특별 처리
  if (name === '유치원 신규 문의') {
    c.innerHTML = renderConsultForm('kindergarten');
    return;
  }

  if (Array.isArray(content)) return c.innerHTML = content.map((img,i)=>`<img src="${img}" alt="${name} ${i+1}" class="w-full ${i<content.length-1?'mb-6':''} rounded-lg shadow-md" loading="lazy">`).join('');
  let html = '';
  if (content.type==='featureFirst') html = renderFeatures(content.features) + renderImages(content.images,name);
  else if (content.type==='custom') html = renderImages(content.images,name) + renderFeatures(content.features);
  else if (content.type==='nuriImageFirst') html = renderImages(content.images,name) + renderFeatures(content.features) + (content.table?renderTable(content.table):'');
  else if (content.type==='mixed') html = content.sections.map((s,i)=>renderFeatures(s.features,true)+(s.image?`<img src="${s.image}" class="w-full mb-6 rounded-lg shadow-md" loading="lazy">`:'')).join('');
  c.innerHTML = html;
}

// ========================================
// 렌더링 헬퍼 함수
// ========================================
function renderFeatures(f,compact=false) {
  return f?.length ? `<div class="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-5 sm:p-6 ${compact?'mb-4':'mb-6'}">${compact?'':'<h3 class="text-lg font-bold text-sky-600 mb-4 flex items-center gap-2"><span class="w-8 h-8 bg-sky-400 text-white rounded-full flex items-center justify-center text-sm">✓</span>주요 특징</h3>'}<ul class="space-y-2 sm:space-y-3">${f.map(x=>`<li class="flex items-start gap-3"><span class="shrink-0 w-6 h-6 bg-sky-400 text-white rounded-full flex items-center justify-center text-xs mt-0.5">★</span><span class="text-sm sm:text-base text-gray-700">${x}</span></li>`).join('')}</ul></div>` : '';
}

function renderImages(imgs,name) {
  return imgs?.map((img,i)=>`<img src="${img}" alt="${name} ${i+1}" class="w-full mb-6 rounded-lg shadow-md" loading="lazy">`).join('') || '';
}

function renderTable(t) {
  return `<div class="border-2 border-gray-200 rounded-2xl overflow-hidden"><div class="bg-gray-100 px-4 py-3 border-b border-gray-200"><h4 class="text-sm font-bold text-gray-800">${t.title}</h4></div><table class="w-full"><tbody>${t.items.map((r,i)=>`<tr class="${i%2?'bg-gray-50':'bg-white'}"><td class="px-4 py-3 text-xs sm:text-sm text-gray-700 border-r border-gray-200 w-1/2">${r[0]}</td><td class="px-4 py-3 text-xs sm:text-sm text-gray-700 w-1/2">${r[1]}</td></tr>`).join('')}</tbody></table><div class="bg-amber-50 px-4 py-3 border-t border-gray-200"><p class="text-xs sm:text-sm text-amber-700 font-medium">${t.note}</p></div></div>`;
}

// ========================================
// 상담 폼 렌더링
// ========================================
function renderConsultForm(type) {
  const isDaycare = type === 'daycare';
  const gradientFrom = isDaycare ? 'from-orange-400' : 'from-sky-400';
  const gradientTo = isDaycare ? 'to-orange-500' : 'to-sky-500';
  const hoverGradientFrom = isDaycare ? 'hover:from-orange-500' : 'hover:from-sky-500';
  const hoverGradientTo = isDaycare ? 'hover:to-orange-600' : 'hover:to-sky-600';
  const borderColor = isDaycare ? 'border-orange-200' : 'border-sky-200';
  const textColor = isDaycare ? 'text-orange-600' : 'text-sky-600';
  const ringColor = isDaycare ? 'focus:ring-orange-200 focus:border-orange-400' : 'focus:ring-sky-200 focus:border-sky-400';
  const checkBorder = isDaycare ? 'border-orange-400' : 'border-sky-400';
  const checkBg = isDaycare ? 'bg-orange-400' : 'bg-sky-400';

  return `
    <div>
      <div class="flex items-center gap-3 mb-6">
        <svg class="w-7 h-7 sm:w-8 sm:h-8 ${textColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
        </svg>
        <h3 class="text-xl sm:text-2xl font-bold ${textColor}">키즈홈 상담 신청하기</h3>
      </div>

      <div class="bg-white rounded-2xl shadow-lg p-5 sm:p-6 border ${borderColor}">
        <div class="mb-5">
          <label class="block text-sm font-semibold text-gray-700 mb-3">서비스 종류</label>
          <div class="flex gap-6">
            <label class="flex items-center gap-2 cursor-pointer select-none" onclick="toggleCustomCheck('consultDaycare')">
              <div id="consultDaycare" class="w-5 h-5 border-2 ${isDaycare ? checkBorder + ' ' + checkBg : 'border-gray-300 bg-white'} rounded flex items-center justify-center transition-all">
                ${isDaycare ? '<svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>' : ''}
              </div>
              <span class="text-sm text-gray-700">키즈홈 어린이집</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer select-none" onclick="toggleCustomCheck('consultKindergarten')">
              <div id="consultKindergarten" class="w-5 h-5 border-2 ${!isDaycare ? checkBorder + ' ' + checkBg : 'border-gray-300 bg-white'} rounded flex items-center justify-center transition-all">
                ${!isDaycare ? '<svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>' : ''}
              </div>
              <span class="text-sm text-gray-700">키즈홈 유치원</span>
            </label>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">시설명</label>
            <input type="text" id="consultFacility" placeholder="시설명을 입력하세요" class="w-full py-3 px-4 border border-gray-300 rounded-xl text-sm ${ringColor} focus:ring-2 focus:outline-none transition-all">
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">이 름</label>
            <input type="text" id="consultName" placeholder="이름을 입력하세요" class="w-full py-3 px-4 border border-gray-300 rounded-xl text-sm ${ringColor} focus:ring-2 focus:outline-none transition-all">
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">핸드폰</label>
            <div class="flex items-center gap-2">
              <select id="consultMobile1" class="w-20 py-3 px-2 border border-gray-300 rounded-xl text-sm ${ringColor} focus:outline-none">
                <option>선택</option>
                <option>010</option>
                <option>011</option>
                <option>016</option>
                <option>017</option>
                <option>018</option>
                <option>019</option>
              </select>
              <span class="text-gray-400">-</span>
              <input type="text" id="consultMobile2" maxlength="4" placeholder="0000" class="flex-1 py-3 px-2 border border-gray-300 rounded-xl text-sm text-center ${ringColor} focus:outline-none" oninput="this.value=this.value.replace(/[^0-9]/g,'')">
              <span class="text-gray-400">-</span>
              <input type="text" id="consultMobile3" maxlength="4" placeholder="0000" class="flex-1 py-3 px-2 border border-gray-300 rounded-xl text-sm text-center ${ringColor} focus:outline-none" oninput="this.value=this.value.replace(/[^0-9]/g,'')">
            </div>
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">전화번호</label>
            <div class="flex items-center gap-2">
              <select id="consultTel1" class="w-20 py-3 px-2 border border-gray-300 rounded-xl text-sm ${ringColor} focus:outline-none">
                <option>선택</option>
                <option>02</option>
                <option>031</option>
                <option>032</option>
                <option>033</option>
                <option>041</option>
                <option>042</option>
                <option>043</option>
                <option>044</option>
                <option>051</option>
                <option>052</option>
                <option>053</option>
                <option>054</option>
                <option>055</option>
                <option>061</option>
                <option>062</option>
                <option>063</option>
                <option>064</option>
              </select>
              <span class="text-gray-400">-</span>
              <input type="text" id="consultTel2" maxlength="4" placeholder="0000" class="flex-1 py-3 px-2 border border-gray-300 rounded-xl text-sm text-center ${ringColor} focus:outline-none" oninput="this.value=this.value.replace(/[^0-9]/g,'')">
              <span class="text-gray-400">-</span>
              <input type="text" id="consultTel3" maxlength="4" placeholder="0000" class="flex-1 py-3 px-2 border border-gray-300 rounded-xl text-sm text-center ${ringColor} focus:outline-none" oninput="this.value=this.value.replace(/[^0-9]/g,'')">
            </div>
          </div>
        </div>

        <div class="mb-4">
          <label class="block text-sm font-semibold text-gray-700 mb-2">상담요청내용</label>
          <textarea id="consultContent" rows="5" placeholder="상담 요청 내용을 입력하세요" class="w-full py-3 px-4 border border-gray-300 rounded-xl text-sm ${ringColor} focus:ring-2 focus:outline-none transition-all resize-none"></textarea>
        </div>
      </div>

      <div class="mt-5">
        <div class="border border-gray-300 rounded-xl overflow-hidden">
          <div class="h-[200px] overflow-y-auto p-4 bg-gray-50 text-sm text-gray-600 leading-relaxed">
            <p class="font-bold mb-2">■ 개인 정보 수집 동의</p>
            <p class="mb-3">키즈홈통합지원센터에서는 고객 관리, 계약서 작성 등 서비스 제공을 위해 아래와 같은 최소한의 개인정보를 수집하고 있습니다.</p>
            <p class="font-bold mb-1">1. 수집하는 개인정보의 항목</p>
            <p class="mb-3">이름, 연락처</p>
            <p class="font-bold mb-1">2. 개인정보 수집 방법</p>
            <p class="mb-1">키즈홈통합지원센터는 다음과 같은 방법으로 개인정보를 수집합니다.</p>
            <p class="mb-3">-키즈홈통합지원센터 홈페이지 (https://www.ikidshome.co.kr)에서 고객이 직접 입력한 값을 수집</p>
            <p class="font-bold mb-1">3. 개인정보의 수집 및 이용 목적</p>
            <p class="mb-1">개인정보의 수집은 아래와 같은 목적을 위하여 수집하며 이외의 목적으로는 사용되지 않습니다.</p>
            <p class="mb-3">- 고객과의 유선 통화</p>
            <p class="font-bold mb-1">4. 개인정보의 보유 및 이용기간</p>
            <p class="mb-4">저장된 개인정보는 수집 및 이용목적이 달성되면 파기합니다.</p>
            <p class="font-bold mb-2">■ 개인 정보 제 3자 제공 안내</p>
            <p>키즈홈통합지원센터에서는 수집된 정보를 제3자에게 제공하지 않습니다.</p>
          </div>
        </div>
      </div>

      <div class="mt-4 flex justify-center">
        <label class="flex items-center gap-2 cursor-pointer select-none" onclick="toggleCustomCheck('consultAgree')">
          <div id="consultAgree" class="w-5 h-5 border-2 border-gray-300 bg-white rounded flex items-center justify-center transition-all"></div>
          <span class="text-sm sm:text-base text-gray-700">위의 개인정보 수집.이용 동의서 에 동의합니다.</span>
        </label>
      </div>

      <div class="mt-6 flex justify-center">
        <button onclick="submitConsultForm('${type}')" class="px-12 sm:px-16 py-4 bg-gradient-to-r ${gradientFrom} ${gradientTo} ${hoverGradientFrom} ${hoverGradientTo} text-white rounded-full text-lg sm:text-xl font-bold shadow-lg transition-all transform hover:scale-105">
          상담신청하기
        </button>
      </div>
    </div>
  `;
}

// ========================================
// SONO 페이지 렌더링
// ========================================
function renderSonoPage() {
  const tabButtons = `
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      <button onclick="handleSonoMemberConsult()" class="flex items-center justify-center gap-2 py-4 sm:py-5 px-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-sm sm:text-base transition-colors shadow-lg">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>
        현재 키즈홈을 이용 중인 분들 상담 접수
      </button>
      <button onclick="openSonoConsult()" class="flex items-center justify-center gap-2 py-4 sm:py-5 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold text-sm sm:text-base transition-colors shadow-lg">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>
        일반고객 상담접수
      </button>
    </div>
  `;

  return `
    <div class="space-y-6">
      ${tabButtons}
      <img src="https://github.com/sykim1017/kids-home/blob/main/s_08.jpg?raw=true" alt="SONO 이용신청" class="w-full rounded-lg shadow-md">
      <a href="https://www.sonohotelsresorts.com/" target="_blank" class="block">
        <img src="https://github.com/sykim1017/kids-home/blob/main/s_08_2_up.jpg?raw=true" alt="소노호텔&리조트 홈페이지 바로가기" class="w-full rounded-lg shadow-md hover:opacity-90 transition-opacity cursor-pointer">
      </a>
      ${tabButtons}
    </div>
  `;
}

// ========================================
// 체크박스 토글
// ========================================
function toggleCustomCheck(id) {
  const el = document.getElementById(id);
  const isChecked = el.classList.contains('bg-sky-400') || el.classList.contains('bg-orange-400');

  if (isChecked) {
    el.classList.remove('border-sky-400', 'border-orange-400', 'bg-sky-400', 'bg-orange-400');
    el.classList.add('border-gray-300', 'bg-white');
    el.innerHTML = '';
  } else {
    el.classList.remove('border-gray-300', 'bg-white');
    el.classList.add('border-sky-400', 'bg-sky-400');
    el.innerHTML = '<svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>';
  }
}

// ========================================
// 상담신청 폼 제출
// ========================================
function submitConsultForm(type) {
  const facility = document.getElementById('consultFacility').value;
  const name = document.getElementById('consultName').value;
  const agreeEl = document.getElementById('consultAgree');
  const agree = agreeEl.classList.contains('bg-sky-400') || agreeEl.classList.contains('bg-orange-400');

  if (!facility) { alert('시설명을 입력해주세요.'); return; }
  if (!name) { alert('이름을 입력해주세요.'); return; }
  if (!agree) { alert('개인정보 수집·이용에 동의해주세요.'); return; }

  const typeName = type === 'daycare' ? '어린이집' : '유치원';
  alert(`${typeName} 상담신청이 완료되었습니다.\n담당자가 빠른 시일 내에 연락드리겠습니다.`);
}

// ========================================
// SONO 관련 함수
// ========================================
function handleSonoMemberConsult() {
  if (isLoggedIn) {
    openSonoMemberForm();
  } else {
    openLogin();
  }
}

function openSonoMemberForm() {
  hideFloatingToc();
  document.getElementById('mainContent').classList.add('hidden');
  document.getElementById('detailPage').classList.add('hidden');
  document.getElementById('guidePage').classList.add('hidden');
  document.getElementById('autoJoinPage').classList.add('hidden');
  document.getElementById('sonoConsultPage').classList.add('hidden');
  document.getElementById('loginPage').classList.add('hidden');
  document.getElementById('findAccountPage').classList.add('hidden');
  document.getElementById('sonoMemberFormPage').classList.remove('hidden');
}

function openSonoConsult() {
  hideFloatingToc();
  document.getElementById('mainContent').classList.add('hidden');
  document.getElementById('detailPage').classList.add('hidden');
  document.getElementById('guidePage').classList.add('hidden');
  document.getElementById('autoJoinPage').classList.add('hidden');
  document.getElementById('sonoMemberFormPage').classList.add('hidden');
  document.getElementById('loginPage').classList.add('hidden');
  document.getElementById('findAccountPage').classList.add('hidden');
  document.getElementById('sonoConsultPage').classList.remove('hidden');
}

function goBackToSono() {
  document.getElementById('sonoConsultPage').classList.add('hidden');
  document.getElementById('detailPage').classList.remove('hidden');
  handleMenuClickWithTab('커뮤니티', 5, 2);
}

function goBackToSonoFromMember() {
  document.getElementById('sonoMemberFormPage').classList.add('hidden');
  document.getElementById('detailPage').classList.remove('hidden');
  handleMenuClickWithTab('커뮤니티', 5, 2);
}

function submitSonoConsult() {
  const orgName = document.getElementById('sonoOrgName').value;
  const phone = document.getElementById('sonoPhone').value;
  const request = document.getElementById('sonoRequest').value;
  const agree = document.getElementById('sonoAgree').checked;

  if (!orgName) { alert('원 명을 입력해주세요.'); return; }
  if (!phone) { alert('연락처를 입력해주세요.'); return; }
  if (!request) { alert('기타 요청사항을 입력해주세요.'); return; }
  if (!agree) { alert('개인정보 수집·이용에 동의해주세요.'); return; }

  alert('상담신청이 완료되었습니다.\n담당자가 빠른 시일 내에 연락드리겠습니다.');
  document.getElementById('sonoOrgName').value = '';
  document.getElementById('sonoPhone').value = '';
  document.getElementById('sonoRequest').value = '';
  document.getElementById('sonoAgree').checked = false;
  goBackToSono();
}

// ========================================
// 이용가이드
// ========================================
function handleGuideClick(id,name) {
  hideFloatingToc();
  showPage('guide',name);
  document.querySelector('.guide-btn').className='guide-btn px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors bg-orange-100 text-orange-500';
  const subs = guideSubTabs[id]||[];
  document.getElementById('guideSubTabsContainer').innerHTML = subs.length ? subs.map((t,i)=>`<button onclick="selectGuideSubTab(this)" class="py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all shrink-0 ${i===0?'bg-sky-400 text-white shadow-md':'bg-white text-gray-600 hover:bg-gray-100'}">${t}</button>`).join('') : '';
  loadGuideContent(subs.length?subs[0]:name);
  hideGuideMenu();
}

function selectGuideSubTab(btn) {
  btn.parentElement.querySelectorAll('button').forEach(b=>b.className='py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all shrink-0 bg-white text-gray-600 hover:bg-gray-100');
  btn.className='py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all shrink-0 bg-sky-400 text-white shadow-md';
  loadGuideContent(btn.textContent);
}

function loadGuideContent(name) {
  const c = document.getElementById('guideContent'), box = document.getElementById('guideContentBox'), content = tabContents[name];
  if (content?.type==='scrollTabs') {
    box.className = 'bg-white rounded-2xl shadow-lg mt-4 sm:mt-6 md:mt-8 mb-10';
    c.innerHTML = `<div class="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm py-3 overflow-x-auto scrollbar-hide rounded-t-2xl -mx-4 sm:-mx-6 -mt-4 sm:-mt-6 px-4 sm:px-6"><div class="flex gap-1 sm:gap-2 min-w-max">${content.tabs.map((t,i)=>`<button data-page="${t.page}" onclick="scrollToPage(${t.page})" class="scroll-tab-btn px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all shrink-0 ${i===0?'bg-sky-500 text-white':'bg-gray-100 text-gray-600 hover:bg-sky-100 hover:text-sky-600'}">${t.name}</button>`).join('')}</div></div><div class="p-4 sm:p-6 space-y-4">${content.images.map((img,i)=>`<img id="page-${i+1}" src="${img}" alt="페이지 ${i+1}" class="w-full rounded-lg shadow-md" loading="lazy">`).join('')}</div>`;
    showFloatingToc(content);
    let ticking = false;
    window.onscroll = () => { if (!ticking) { requestAnimationFrame(() => { let p = 1; for (let i = content.images.length; i >= 1; i--) { const el = document.getElementById('page-'+i); if (el && el.getBoundingClientRect().top <= 150) { for (let j = content.tabs.length-1; j >= 0; j--) if (content.tabs[j].page <= i) { p = content.tabs[j].page; break; } break; } } updateActiveTab(p); ticking = false; }); ticking = true; } };
  } else if (Array.isArray(content)) {
    hideFloatingToc();
    box.className='bg-white rounded-2xl p-4 sm:p-6 shadow-lg mt-4 sm:mt-6 md:mt-8 mb-10 min-h-[300px]';
    c.innerHTML=content.map((img,i)=>`<img src="${img}" alt="${name} ${i+1}" class="w-full ${i<content.length-1?'mb-6':''} rounded-lg shadow-md" loading="lazy">`).join('');
  } else {
    hideFloatingToc();
    box.className='bg-white rounded-2xl p-4 sm:p-6 shadow-lg mt-4 sm:mt-6 md:mt-8 mb-10 min-h-[300px]';
    c.innerHTML='<p class="text-gray-500 text-center py-12">준비 중입니다.</p>';
  }
}

// ========================================
// 로그인 관련
// ========================================
function openLogin() {
  hideFloatingToc();
  document.getElementById('mainContent').classList.add('hidden');
  document.getElementById('detailPage').classList.add('hidden');
  document.getElementById('guidePage').classList.add('hidden');
  document.getElementById('autoJoinPage').classList.add('hidden');
  document.getElementById('sonoConsultPage').classList.add('hidden');
  document.getElementById('sonoMemberFormPage').classList.add('hidden');
  document.getElementById('findAccountPage').classList.add('hidden');
  document.getElementById('loginPage').classList.remove('hidden');
}

function openAutoJoin() {
  hideFloatingToc();
  document.getElementById('mainContent').classList.add('hidden');
  document.getElementById('detailPage').classList.add('hidden');
  document.getElementById('guidePage').classList.add('hidden');
  document.getElementById('sonoConsultPage').classList.add('hidden');
  document.getElementById('sonoMemberFormPage').classList.add('hidden');
  document.getElementById('loginPage').classList.add('hidden');
  document.getElementById('findAccountPage').classList.add('hidden');
  document.getElementById('autoJoinPage').classList.remove('hidden');
}

function openFindAccount() {
  hideFloatingToc();
  document.getElementById('mainContent').classList.add('hidden');
  document.getElementById('detailPage').classList.add('hidden');
  document.getElementById('guidePage').classList.add('hidden');
  document.getElementById('autoJoinPage').classList.add('hidden');
  document.getElementById('sonoConsultPage').classList.add('hidden');
  document.getElementById('sonoMemberFormPage').classList.add('hidden');
  document.getElementById('loginPage').classList.add('hidden');
  document.getElementById('findAccountPage').classList.remove('hidden');
}

function selectLoginType(type) {
  const radios = {
    daycare: document.getElementById('loginRadioDaycare'),
    kindergarten: document.getElementById('loginRadioKindergarten'),
    business: document.getElementById('loginRadioBusiness')
  };

  Object.keys(radios).forEach(t => {
    const el = radios[t];
    if (!el) return;

    if (t === type) {
      el.classList.remove('border-gray-300');
      el.classList.add('border-sky-400');
      el.innerHTML = '<div class="w-3 h-3 rounded-full bg-sky-400"></div>';
    } else {
      el.classList.remove('border-sky-400');
      el.classList.add('border-gray-300');
      el.innerHTML = '';
    }
  });

  document.getElementById('selectedLoginType').value = type;
}

function doLogin() {
  const userId = document.querySelector('#loginPage input[type="text"]').value;
  const userPw = document.querySelector('#loginPage input[type="password"]').value;

  if (userId === 'test' && userPw === 'test') {
    isLoggedIn = true;
    document.getElementById('headerLoginBtn').classList.add('hidden');
    document.getElementById('headerErpBtn').classList.remove('hidden');
    goToMain();
  } else {
    alert('아이디 또는 비밀번호가 올바르지 않습니다.\n(테스트 계정: test / test)');
  }
}

function startErp() {
  alert('회계ERP를 시작합니다.');
}

// ========================================
// 모달
// ========================================
function openTerms() {
  document.getElementById('termsModal').classList.remove('hidden');
  document.body.style.overflow='hidden';
}

function closeTerms() {
  document.getElementById('termsModal').classList.add('hidden');
  document.body.style.overflow='';
}

function openPrivacy() {
  document.getElementById('privacyModal').classList.remove('hidden');
  document.body.style.overflow='hidden';
}

function closePrivacy() {
  document.getElementById('privacyModal').classList.add('hidden');
  document.body.style.overflow='';
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', e => {
  if(e.key==='Escape') {
    closeTerms();
    closePrivacy();
    closeMobileMenu();
  }
});

const companies = [
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/v/i/2338p00pgpgqjleefarwq2_4120aeiarwqcdzbghus43pa.gif?p=y&hash=c&upddt=20241212144600",
    "name": "(주)비바리퍼블리카",
    "description": "[토스] Ads Sales Specialist (광고영업)"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/l/a/2976l00lswzvv2_2320p6apnyfiolp.gif?p=y&hash=c&upddt=20241209105700",
    "name": "램리서치",
    "description": "램리서치 코리아테크놀로지 센터 [신입/경력] Process Engineer 채용"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/a/p/2338w00wqqjghymdi_3120l9dlearfcar2wl.gif?p=y&hash=c&upddt=20241211151200",
    "name": "메디큐브",
    "description": "[신입/경력] 메디큐브 일본 마케팅 집중 채용"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/i/k/2459i00iaacfylqnw2_3320faefynwgxac05if.gif?p=y&hash=c&upddt=20241209131600",
    "name": "이케아",
    "description": "[이케아 강동점] 스토어코워커 채용"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/m/o/2293u00uwjcello_2020g7bgkrimj2ug.gif?p=y&hash=c&upddt=20241209182800",
    "name": "MONCLER / STONE ISLAND",
    "description": "[MONCLER / STONE ISLAND] 전국 스토어 채용"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/s/t/2976x00xxpnvvcjzwsu60602_4320vgkvvolaitppnja3695xv.gif?p=y&hash=c&upddt=20241210103800",
    "name": "(주)스타팅웨이브",
    "description": "(주)스타팅웨이브 해외사업 부문별 채용"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/v/i/2338p00pgpgqjleefarwq2_4120aeiarwqcdzbghus43pa.gif?p=y&hash=c&upddt=20241211182500",
    "name": "(주)비바리퍼블리카",
    "description": "[토스플레이스]Sales Specialist"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/m/a/2459z00ztjdgxlqxf2_3320naenwqjhegxaczn.gif?p=y&hash=c&upddt=20241209130500",
    "name": "만도브로제(주)",
    "description": "만도브로제(주) 부문별 채용"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/l/v/2615h00hebokhwg2_3720g8cgirdkhijhg.gif?p=y&hash=c&upddt=20241209105600",
    "name": "LOUIS VUITTON",
    "description": "LOUIS VUITTON 인천공항 T2면세스토어 전 직군 대규모 채용"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/c/o/2459o00oueznwpbsg2_3320gaegxtljdouxfog.gif?p=y&hash=c&upddt=20241209103300",
    "name": "쿠팡CLS",
    "description": "[입사보너스150만/월최대410만가능]쿠팡CLS물류관리자채용(현장운영관리)"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/c/o/2338u00uszbwqbvfc_3120x9dxwledigh2ux.gif?p=y&hash=c&upddt=20241209103300",
    "name": "쿠팡플렉스",
    "description": "[입사보너스 150]쿠팡플렉스 어시스턴트(현장운영/관리/초보환영)"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/k/n/2615m00mvsr36592_3720i8cijwg7401mi.gif?p=y&hash=c&upddt=20241209174800",
    "name": "경농",
    "description": "경농 및 계열사 2025년 신입사원 모집"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/k/p/2976y00yfiovv2_2320b6abtiodqyb.gif?p=y&hash=c&upddt=20241209135100",
    "name": "한국생산성본부",
    "description": "2024년 제2차 한국생산성본부 정규직 채용공고"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/h/e/2338v00vausxwdixw_3120c9dcdskardi2vc.gif?p=y&hash=c&upddt=20241209105000",
    "name": "헥토이노베이션",
    "description": "헥토이노베이션 직군별 채용 (서비스기획,정보보안,영업,영업지원,광고기획)"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/h/a/2338v00vadifctojz_3120w9dwqfccdqj2vw.gif?p=y&hash=c&upddt=20241209105100",
    "name": "한샘",
    "description": "한샘 홈 인테리어 디자이너(영업직) 공개채용"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/g/e/2976t00tpyfolpn7429_3320jbfjakgja36362tj.gif?p=y&hash=c&upddt=20241209113900",
    "name": "제주신화월드",
    "description": "제주신화월드 랜딩카지노 신입 및 경력 사원 모집"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/b/t/2293a00amri6270_2020h7bhv53622ah.gif?p=y&hash=c&upddt=20241209133600",
    "name": "빗썸",
    "description": "2024 빗썸 전직군 채용"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/y/i/2293k00kuvygktb_2020d7bdarilo2kd.gif?p=y&hash=c&upddt=20241210114500",
    "name": "㈜와이씨",
    "description": "YC-EXICON-SEMCNS GROUP 2024년도 하반기 신입사원 공개채용"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/w/o/2615t00twwgrd852_3720w8cwgou8536tw.gif?p=y&hash=c&upddt=20241209105700",
    "name": "우미건설㈜",
    "description": "우미그룹 2025년 상반기 대졸신입사원 채용"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/a/m/2338w00wqym2_2120t48toqjwt.gif?p=y&hash=c&upddt=20241211182000",
    "name": "앰코테크놀로지코리아㈜",
    "description": "2024년 하반기 신입/경력사원 공채 (인천/광주광역시)"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/c/i/2338u00usskusdisk_3120a9darolxwfc2ua.gif?p=y&hash=c&upddt=20241210111300",
    "name": "㈜시티건설",
    "description": "[시티건설] 개발사업부 신입 및 경력직 채용"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/k/i/2976y00yfwzyf2_2320a6aaixxukya.gif?p=y&hash=c&upddt=20241209105100",
    "name": "㈜세스코",
    "description": "[세스코] 2025년 전문영업직 신입 대규모 채용 (전국)"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/k/o/2615m00mvetsrsr2_3720w8cwgwgkh36mw.gif?p=y&hash=c&upddt=20241212155500",
    "name": "한국폴리텍대학분당융합기술교육원",
    "description": "IT(AI·SW) 개발자/ 품질관리전문가(바이오·이화학) 취업실무교육생 모집"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/s/y/2976x00xx29742_2320u6auk8229xu.gif?p=y&hash=c&upddt=20241209105500",
    "name": "삼양식품㈜",
    "description": "삼양식품 MKT/Sales 담당자경력직 공개 채용"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/f/a/2615x00xfouheaz2_3720q8cqqrdlkjlxq.gif?p=y&hash=c&upddt=20241209143900",
    "name": "㈜비지에프리테일",
    "description": "2025년 상반기 BGF그룹 공개채용"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/w/o/2615t00twwgqqqq2_3720w8cwgtwazijtw.gif?p=y&hash=c&upddt=20241209105200",
    "name": "(주)우아한형제들",
    "description": "각 부문별 경력/신입 인재영입"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/a/g/2338w00wqxwwq9877_3120b9dbvjz59432wb.gif?p=y&hash=c&upddt=20241209105200",
    "name": "아고다",
    "description": "[2025 상반기 대규모 채용] 아고다 CS Specialist 정규직 (재택근무병행)"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/k/o/2459f00fylqnwlq692_3320gaegxacjdac69fg.gif?p=y&hash=c&upddt=20241212091900",
    "name": "코리안리재보험㈜",
    "description": "코리안리재보험㈜ 2025 상반기 경력직 채용"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/h/u/2338v00vatodius59_3120z9dzbwqcd982vz.gif?p=y&hash=c&upddt=20241210111100",
    "name": "휴먼교육센터",
    "description": "[국비무료/기숙사무료] 파이썬/데이터분석/인공지능/풀스택(무료숙식제공)"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/c/o/2293r00rigkuwhv_2020g7bgktbvy2rg.gif?p=y&hash=c&upddt=20241209133700",
    "name": "쿠프마케팅",
    "description": "쿠프마케팅그룹 부분별 채용"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/o/l/2615w00wgrddmij2_3720h8chegirdsrwh.gif?p=y&hash=c&upddt=20241211183700",
    "name": "㈜올리브인터내셔널",
    "description": "[올리브인터내셔널] 성분에디터 글로벌 뷰티 마케팅/MD/영업"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/l/o/2615h00hekhdmqq2_3720w8cwgkhsrijhw.gif?p=y&hash=c&upddt=20241209131900",
    "name": "캐논코리아(주)",
    "description": "2024년 12월 캐논코리아 정기신입사원(채용연계형인턴)모집"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/e/d/2293m00mjofpdri_2020p7bpdznmj2mp.gif?p=y&hash=c&upddt=20241211182900",
    "name": "현대건설㈜",
    "description": "[현대건설] 취업완성 아카데미 교육생 모집"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/s/i/2976x00xxwzkgxx3629_3320abfaiwzcj51482xa.gif?p=y&hash=c&upddt=20241209151400",
    "name": "㈜시몬스",
    "description": "2024년 하반기 부문별 채용공고(신입/경력)"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/c/j/2976i00ionmnm2_2320r6ardioolir.gif?p=y&hash=c&upddt=20241211182900",
    "name": "HK inno.N㈜",
    "description": "[HK이노엔] 25년 생산직 신입사원 모집"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/s/k/2338f00fcdi2_2120y48ym59fy.gif?p=y&hash=c&upddt=20241209135100",
    "name": "자화전자㈜",
    "description": "자화전자(주) 신입/경력 수시채용"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/l/g/2976l00lswzol2_2320t6atppnvvlt.gif?p=y&hash=c&upddt=20241209134200",
    "name": "GS리테일",
    "description": "[GS리테일]경영지원본부 별도결산담당(경력) 및 자금담당(신입) 수시채용"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/i/m/2293D00DAQPVYHV_2020U7bUWLOMJ2DU.gif?p=y&hash=c&upddt=20241212220003",
    "name": "㈜아이마켓코리아",
    "description": "인프라 운영 및 구축 담당 채용"
  },
  {
    "logo": "https://imgs.jobkorea.co.kr/Images/Logo/180/s/e/2615c00cnwgwgaz2_3720d8cdmlkijjlcd.gif?p=y&hash=c&upddt=20241212220003",
    "name": "㈜서연",
    "description": "최고경영진 신입비서 채용 공고"
  }
]
const container = document.getElementById('companyContainer');

companies.forEach(company => {
    const companyBox = document.createElement('div');
    companyBox.className = 'companyBox';
    companyBox.addEventListener('click', () => {
        window.location.href = `details.html?company=${encodeURIComponent(company.name)}`;
    });

    const logo = document.createElement('img');
    logo.src = company.logo;
    logo.alt = '';
    logo.className = 'companylogo';

    const companyInfo = document.createElement('div');
    companyInfo.className = 'companyInfo';

    const companyName = document.createElement('p');
    companyName.className = 'companyName';
    companyName.textContent = company.name;

    const companyDescription = document.createElement('p');
    companyDescription.className = 'companyDescription';
    companyDescription.textContent = company.description;

    companyInfo.appendChild(companyName);
    companyInfo.appendChild(companyDescription);
    companyBox.appendChild(logo);
    companyBox.appendChild(companyInfo);
    container.appendChild(companyBox);
});
const QUESTIONS=[
  {key:'fear_rejection',label:'ترس از طرد شدن'},
  {key:'avoid_people',label:'اجتناب از جمع'},
  {key:'impulsivity',label:'تکانش‌گری'},
  {key:'unstable_relationships',label:'روابط ناپایدار'},
  {key:'perfectionism',label:'کمال‌گرایی'},
  {key:'order_sensitive',label:'حساسیت به نظم'},
  {key:'low_empathy',label:'همدلی کم'},
  {key:'risk_taking',label:'رفتار پرخطر'}
];

const RULES=[
  {id:'Avoidant',name:'الگوی اجتنابی',condition:f=>f.fear_rejection>=2&&f.avoid_people>=2,explain:'ترس از طرد شدن و اجتناب از جمع'},
  {id:'Borderline',name:'الگوی مرزی',condition:f=>f.unstable_relationships>=2||f.impulsivity>=2,explain:'روابط ناپایدار یا تکانش‌گری'},
  {id:'OCPD',name:'الگوی وسواسی',condition:f=>f.perfectionism>=2&&f.order_sensitive>=2,explain:'کمال‌گرایی و حساسیت به نظم'},
  {id:'Antisocial',name:'الگوی ضد اجتماعی',condition:f=>f.low_empathy>=2&&f.risk_taking>=2,explain:'همدلی کم و رفتار پرخطر'}
];

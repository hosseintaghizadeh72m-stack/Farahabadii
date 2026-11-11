// اطلاعات تماس مالک - درخواست رزرو به این شماره‌ها فرستاده می‌شود
// شماره را با فرمت بین‌المللی و بدون + و صفر اول بنویسید: 989121234567
const OWNER = { phone: "989033462221", telegram: "farahabadir" };
// اطلاعات ویلاها - برای افزودن ویلای جدید، یک بلوک مشابه کپی کنید.
// عکس‌ها فعلا نمونه‌اند؛ بعدا آدرس عکس واقعی را در "images" می‌گذاریم.
// ویدیو (اختیاری): فایل را در پوشه videos بگذارید و به ویلا اضافه کنید، مثلا:
//   videos: ["videos/v8-1.mp4"]
//   videos: [{ src: "videos/v8-1.mp4", poster: "videos/v8-1.webp", title: "نمای استخر" }]
//   ویدیوی آپارات: videos: [{ embed: "لینک embed آپارات", title: "..." }]
// فرمت پیشنهادی: MP4 (H.264)، حداکثر 720p و کمتر از ۱۵ مگابایت برای بارگذاری سریع در موبایل.
const VILLAS = [
  {
    id: 8, title: "ویلای ساحلی استخر جکوزی در فرح آباد", city: "فرح‌آباد", type: "ویلا",
    rooms: 2, capacity: 10, rating: 5, reviews: 0,
    amenities: ["استخر", "جکوزی", "پارکینگ", "اسپیکر", "فوتبال دستی", "باربیکیو", "توالت فرنگی", "توالت ایرانی"],
    img: "jacuzzi1.webp", gallery: ["jacuzzi1.webp","jac-IMG_20260908_153659_071.webp","jac-IMG_20260908_153652_166.webp","jac-IMG_20260908_153701_780.webp","jac-IMG_20260908_153705_614.webp","jac-IMG_20260908_153708_239.webp","jac-IMG_20260908_153646_323.webp"], emoji: "🛁", color: "#2a6f7f",
    desc: "یک باب ویلا استخردار دربست واقع در فرح آباد\n۲۰۰ متر زمین، ۱۸۰ متر بنا\nاستخر و جکوزی دارای تصفیه آب آنی\n۱۸۰ متر بنا ، نیم پیلوت ، پارکینگ ، درب ریموت\nفوتبال دستی، جکوزی، اسپیکر و کلیه امکانات رفاهی"
  },
  {
    id: 6, title: "ویلای ساحلی استخردار در جاده پلاژ", lat: 36.789102, lng: 53.053757, city: "فرح‌آباد", type: "ویلا",
    rooms: 2, capacity: 10, rating: 5, reviews: 0,
    amenities: ["استخر", "پارکینگ", "فوتبال دستی", "بیلیارد", "باربیکیو", "توالت ایرانی"],
    blocked: ["2026-10-27","2026-10-28","2026-10-29","2026-11-04","2026-11-05","2026-11-12"],
    img: "villa1.webp", gallery: ["villa1.webp","gal-IMG_20260908_WA0017.webp","gal-IMG_20260908_WA0019.webp","gal-IMG_20260908_WA0021.webp","gal-IMG_20260908_WA0023.webp","gal-IMG_20260909_185859.webp"], emoji: "🏊", color: "#2c4a5a",
    desc: "یک باب ویلا استخردار دربست واقع در جاده پلاژ\nاستخر دارای تصفیه آب آنی\n۱۸۰ متر بنا ، حیاط دار ، درب ریموت ، دوبلکس\nفوتبال دستی، بیلیارد ، نزدیک دریا با کلیه امکانات رفاهی"
  },
  {
    id: 7, title: "سوئیت ساحلی در فرح آباد ۱", lat: 36.798711, lng: 53.107229, city: "فرح‌آباد", type: "ویلا",
    priceText: "شبی ۱,۲۰۰,۰۰۰ تومان", rooms: 1, capacity: 6, rating: 5, reviews: 0,
    amenities: ["توالت ایرانی"],
    img: "suite-6.webp", gallery: ["suite-6.webp", "suite1.webp", "suite-1.webp", "suite-2.webp", "suite-3.webp", "suite-4.webp", "suite-5.webp"], emoji: "🏖️", color: "#4a6fa5",
    desc: "یک باب سوئیت ساحلی واقع در فرح آباد\n۷۰ متر بنا ، کوچه اختصاصی\nفاصله تا دریا : ۸۰۰ متر\nدارای کلیه امکانات رفاهی"
  },
  {
    id: 9, title: "سوئیت ساحلی در جاده پلاژ ۱", lat: 36.8016482, lng: 53.09596249999999, city: "فرح‌آباد", type: "ویلا",
    priceText: "شبی ۲,۰۰۰,۰۰۰ تومان", rooms: 1, capacity: 4, rating: 5, reviews: 0,
    amenities: ["پارکینگ", "آلاچیق", "توالت فرنگی", "توالت ایرانی"],
    img: "sn-WA0003.webp", gallery: ["sn-WA0003.webp", "sn-WA0001.webp", "sn-WA0002.webp", "sn-WA0004.webp", "sn-WA0005.webp", "sn-WA0006.webp", "sn-WA0007.webp", "sn-WA0008.webp", "sn-WA0010.webp", "sn-WA0011.webp"], emoji: "🏖️", color: "#4a6fa5",
    desc: "یک باب سوئیت نزدیک دریا واقع در فرح آباد\n۸۰ متر بنا، با کلیه امکانات رفاهی\nویو باغ ، ویو دریا از آلاچیق\nفاصله پیاده روی تا دریا ۵ تا ۷ دقیقه\nفقط مناسب خانواده"
  },
  {
    id: 10, title: "ویلای ساحلی استخردار در جاده پلاژ ۲", city: "فرح‌آباد", type: "ویلا",
    rooms: 2, capacity: 8, rating: 5, reviews: 0,
    amenities: ["استخر", "پارکینگ", "توالت فرنگی", "توالت ایرانی"],
    img: "pl-WA0001.webp", gallery: ["pl-WA0001.webp", "pl-WA0000.webp", "pl-WA0002.webp", "pl-WA0004.webp", "pl-WA0005.webp", "pl-WA0006.webp", "pl-WA0007.webp", "pl-WA0008.webp"], emoji: "🏊", color: "#3d6b6b",
    desc: "یک باب ویلا استخردار دربست واقع در جاده پلاژ\nاستخر دارای تصفیه آب آنی\nدوبلکس، دو خواب با پارکینگ\nنوساز با نور پردازی و طراحی زیبا"
  },
  {
    id: 11, title: "ویلای استخردار در فرح آباد", city: "فرح‌آباد", type: "ویلا",
    rooms: 3, capacity: 12, rating: 5, reviews: 0,
    amenities: ["استخر", "پارکینگ", "فوتبال دستی", "توالت فرنگی", "توالت ایرانی"],
    img: "fh-WA0022.webp", gallery: ["fh-WA0022.webp", "fh-WA0018.webp", "fh-WA0020.webp", "fh-WA0024.webp", "fh-WA0026.webp", "fh-WA0028.webp", "fh-WA0030.webp", "fh-WA0032.webp", "fh-WA0034.webp", "fh-WA0035.webp", "fh-WA0016.webp", "fh-WA0012.webp", "fh-WA0010.webp", "fh-WA0008.webp", "fh-WA0004.webp", "fh-WA0002.webp", "fh-WA0036.webp", "fh-WA0037.webp", "fh-WA0025.webp", "fh-WA0021.webp"], emoji: "🏊", color: "#2f5d62",
    desc: "یک باب ویلا استخردار دربست واقع در فرح آباد\n۲۵۰ متر زمین، ۲۰۰ متر بنا\nاستخر دارای تصفیه آب آنی\n۳ خواب ، با ویو رودخانه تجن\nمحیط دنج"
  },
  {
    id: 12, title: "ویلای ساحلی استخردار در فرح آباد ۲", city: "فرح‌آباد", type: "ویلا",
    rooms: 2, hideSpec: true, rating: 5, reviews: 0,
    amenities: ["استخر", "پارکینگ", "اسپیکر", "توالت ایرانی", "توالت فرنگی"],
    img: "fh2-WA0031.webp", gallery: ["fh2-WA0031.webp", "fh2-WA0030.webp", "fh2-WA0029.webp", "fh2-WA0028.webp", "fh2-WA0027.webp", "fh2-WA0025.webp", "fh2-WA0024.webp", "fh2-WA0023.webp", "fh2-WA0022.webp", "fh2-WA0021.webp", "fh2-WA0020.webp", "fh2-WA0019.webp", "fh2-WA0018.webp", "fh2-WA0017.webp", "fh2-WA0016.webp", "fh2-WA0015.webp", "fh2-WA0014.webp", "fh2-WA0013.webp", "fh2-WA0012.webp", "fh2-WA0011.webp"], emoji: "🏊", color: "#2f5d7c",
    desc: "یک باب ویلای استخردار دربست واقع در فرح آباد\nفوق العاده شیک و نوساز ، ۲۲۰ متر زمین ، ۱۶۰ متر بنا\nنزدیک دریا ، با کلیه امکانات رفاهی\n<small>۲ خواب</small>"
  }
];

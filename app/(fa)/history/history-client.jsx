"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsBuilding } from "react-icons/bs";
///////////////////////////////////////////////////
import TopEng from "@/components/topeng";

const historyContent = [
  [
    "1920",
    [
      {
        date: "1921",
        title: "اخبار شرکت",
        item: "",
        text: " در محله تاکینوگاوا شهر توکیو، آقای یوساکو اوسه شرکت تولیدی ماشین‌های خیاطی پاین را همراه با آقایان شیگِرو کامِماتسو و شویچی توبیماتسو تأسیس کرد. ",
      },
      {
        date: "1921",
        title: "معرفی محصول",
        item: "مدل 53",
        text: "ساخت یک چرخ خیاطی دستی کوچک که گفته می شود اولین چرخ خیاطی تولید داخل است.",
      },
    ],
    [
      {
        date: "1929",
        title: "معرفی محصول",
        item: "مدل 30",
        text: " ساخت اولین چرخ خیاطی استاندارد داخلی برای مصارف خانگی. یک چرخ خیاطی عمودی نیمه چرخشی با مکانیسم بوبین که به طور چشمگیری راندمان کار را بهبود می بخشید. ",
      },
    ],
  ],
  [
    "1930",
    [
      {
        date: "1935",
        title: "اخبار شرکت",
        item: "",
        text: " نام تجاری به شرکت 'چرخ خیاطی امپریال' تغییر کرد.	شرکت 'چرخ خیاطی ژانومه' به عنوان علامت تجاری به ثبت رسید.",
      },
    ],
    [
      {
        date: "1936",
        title: "اخبار شرکت",
        item: "",
        text: " کارخانه کوگانی ( Koganei Factory )، اولین کارخانه تولید انبوه چرخ خیاطی تولید داخل، تکمیل شد. ",
      },
    ],
  ],
  [
    "1940",
    [
      {
        date: "1948",
        title: "معرفی محصول",
        item: "مدل  HA-1 102 ",
        text: " به درخواست ماسوزو مائدا که نماینده شرکت چرخ خیاطی امپریال (شرکت مادر) بود، ابعاد استاندارد چرخ خیاطی های خانگی داخلی یکسان شد و اولین نوع این چرخ خیاطی '  HA-1 102 ' نام گرفت. ",
      },
    ],
  ],
  [
    "1950",
    [
      {
        date: "1954",
        title: "معرفی محصول",
        item: "مدل  320 ",
        text: " نمای مدرن بیرونی توسط طراح صنعتی Jiro Kosugi طراحی شد و به عنوان بهترین طراحی در دومین مسابقه طراحی صنعتی Mainichi  انتخاب شد و این آغازی شد برای دوران سبقت شرکت‌ها در طراحی چرخ خیاطی. ",
      },
      {
        date: "1954",
        title: "اخبار شرکت",
        item: "",
        text: " نام تجاری شرکت به Janome Sewing Industry Co., Ltd تغییر یافت.  ",
      },
    ],
  ],
  [
    "1960",
    [
      {
        date: "1961",
        title: "معرفی محصول",
        item: "مدل  560 ",
        text: "معرفی چرخ خیاطی زیگزاگ تمام اتوماتیک. چرخ خیاطی که به جای حرکت دادن اهرم و صفحه آن با دست، امکان دوخت الگوها با استفاده از بخشی به نام بادامک فراهم شده است.",
      },
    ],
    [
      {
        date: "1963",
        title: "اخبار شرکت",
        item: "",
        text: " وارد شدن در بورس اوراق بهادار توکیو / اوزاکا. ",
      },
    ],
    [
      {
        date: "1964",
        title: "معرفی محصول",
        item: "مدل  670 ",
        text: " این چرخ خیاطی به مناسبت المپیک توکیو به بازار معرفی شد. 	برای اولین بار در تولید صنعتی داخلی از آلیاژ سبک ساخته شده که نصف وزن معمولی را داشت.",
      },
      {
        date: "1964",
        title: "اخبار شرکت",
        item: "",
        text: " موسسه تحقیقات فنی در هاچیوجی توکیو تکمیل شد. ",
      },
    ],
    [
      {
        date: "1965",
        title: "اخبار شرکت",
        item: "",
        text: " ساختمان دفتر مرکزی در کیوباشی، چو-کو، توکیو تکمیل شد. ما جدیدترین سبک معماری آن زمان به نام  ‘سیستم هسته خط H ‘ را استفاده کردیم. ",
      },
    ],
    [
      {
        date: "1969",
        title: "اخبار شرکت",
        item: "",
        text: " تاسیس شرکت ژانومه در تایوان ",
      },
    ],
  ],

  [
    "1970",
    [
      {
        date: "1971",
        title: "معرفی محصول",
        item: "مدل  801 ",
        text: " بهترین چرخ خیاطی زیگزاگ که به مناسبت پنجاهمین سالگرد تاسیس شرکت ژانومه ساخته شد، دارای ‘ نوع چرخش کامل ‘ که مجهزترین فناوری پیشرفته در آن زمان بود. ",
      },
      {
        date: "1971",
        title: "معرفی محصول",
        item: " چاپگر ",
        text: " اولین دستگاه چاپگر تولید داخل عرضه شد. دستگاهی است که اطلاعات کارت اعتباری برجسته را روی برگه ها حک می کند و همچنین برای کارتهای مشاوره بیمارستان استفاده می شود. ",
      },
    ],
    [
      {
        date: "1976",
        title: "معرفی محصول",
        item: "مدل  813 ",
        text: " عرضه اولین مدل داخلی Janome است که از نوع بادامک داخلی و بازوی آزاد استفاده می کند. ",
      },
    ],
    [
      {
        date: "1979",
        title: "معرفی محصول",
        item: "مدل  5001 ",
        text: " اولین چرخ خیاطی کامپیوتری ژاپن. حرکت سوزن و کارپیش‌بر که توسط صفحه و اهرم تنظیم می شود توسط کامپیوتر کنترل می شود. حرکت سوزن آزاد شده است. دوران ورود چرخ خیاطی به تحول بزرگ. ",
      },
      {
        date: "1979",
        title: "معرفی محصول",
        item: " موتور مرحله‌ای چند منظوره ",
        text: " دارای سابقه استفاده در طیف گسترده ای از زمینه ها، با تمرکز بر تجهیزات OA / FA. ",
      },
    ],
  ],
  [
    "1980",
    [
      {
        date: "1980",
        title: "معرفی محصول",
        item: "دستگاه ریخته گری خلاء",
        text: " دستگاهی که از ساخت قالب گرفته تا تکثیر با یک مدل، می تواند آن را با هزینه کم و در مدت زمان کوتاه انجام دهد. با این مکانیزم هزینه های توسعه و زمان بسیار کاهش می‌یابد. ",
      },
    ],
    [
      {
        date: "1983",
        title: "معرفی محصول",
        item: "مدل 6000  Memory Craft ",
        text: " این چرخ خیاطی با عملکردهای کامپیوتری بهبود یافته است. هم در داخل و هم در خارج از کشور با استقبال خوبی روبرو شد. ",
      },
    ],
    [
      {
        date: "1984",
        title: "معرفی محصول",
        item: " الکتروپرس (Servo Press) JP-20 ",
        text: " اولین پرس الکتریکی کوچک در این صنعت که با منبع درایو موتور سروو DC کار میکند. ",
      },
    ],
    [
      {
        date: "1986",
        title: "معرفی محصول",
        item: " DX2000 ",
        text: " چرخ خیاطی با عملکرد دوخت مستقیم / زیگزاگ و Overlock که به بازار عرضه شد. ",
      },
    ],
  ],
  [
    "1990",
    [
      {
        date: "1990",
        title: "معرفی محصول",
        item: " Hot Water Master (Yu Meijin) ",
        text: " یک حمام 24 ساعته با پخش موزیک که به شما امکان میدهد یک حمام راحت در 24 ساعت روز داشته باشید. این حمام به یک محصول موفق تبدیل شد و محبوبیت یافت. ",
      },
    ],
    [
      {
        date: "1991",
        title: "معرفی محصول",
        item: " مدل 8100 ",
        text: " این چرخ خیاطی به مناسبت 70 سالگی شرکت ژانومه به بازار عرضه شد. این چرخ خیاطی  به پنل لمسی با توانایی گلدوزی در مقیاس کامل با حداکثر 80 میلی متر در سمت چپ و راست مجهز است. ",
      },
    ],
    [
      {
        date: "1993",
        title: "معرفی محصول",
        item: "  ربات JR500 ",
        text: " این ربات برای رفع نیازهای اتوماسیون خطوط مونتاژ ساخته شد.	از آن برای سفت کردن پیچ و قرار دادن موقت پیچ‌ها استفاده میشود. به دلیل کنترل کیفیت و عملکرد خوب آن مورد استقبال قرار گرفته است.",
      },
      {
        date: "1993",
        title: "اخبار شرکت",
        item: " Takao Factory ",
        text: " کارخانه تاکائو (کارخانه فعلی توکیو) در این سال تکمیل شد. ",
      },
    ],
    [
      {
        date: "1997",
        title: "معرفی محصول",
        item: " Yu Master Super Z ",
        text: " عرضه دستگاه استریل با سه روش به بازار: استریل مستمر ازون و اشعه ماوراء بنفش. تمیز کردن حرارتی خودکار در 70 درجه سانتیگراد. فیلتر مواد آنتی باکتریال ",
      },
    ],
  ],
  [
    "2000",
    [
      {
        date: "2001",
        title: "معرفی محصول",
        item: " مدل 9500 ",
        text: " عرضه اولین چرخ خیاطی کامپیوتری پیشرفته گلدوزی دنیا دارای نخ‌کن خودکار. ",
      },
    ],
    [
      {
        date: "2003",
        title: "معرفی محصول",
        item: " روبات اسگارا SCARA ",
        text: " عرضه ربات اسکارا با عملکردهای پیچ کردن، لحیم کاری و با قابلیت جابجا کردن اجسام. ",
      },
    ],
    [
      {
        date: "2004",
        title: "معرفی محصول",
        item: " روبات JR2000N ",
        text: " این ربات مجهز است به «آموزش آسان» که کار تنظیم برنامه را تسهیل می کند، «زبان ربات» که به ربات اجازه می دهد سیگنال های کنترلی را برای کارکردن سیستم ارسال کند، و «عملکرد سفارشی سازی» که به شما امکان می دهد نرم افزار اختصاصی خود را ایجاد کنید. ",
      },
      {
        date: "2004",
        title: "معرفی محصول",
        item: " Bus Ace 600 ",
        text: " یک حمام تجاری 24 ساعته بسیار مناسب در مقیاس کوچک برای مسافرخانه ها، پانسیون ها، بیمارستان ها و خوابگاه ها. ",
      },
    ],
    [
      {
        date: "2006",
        title: "معرفی محصول",
        item: " مدل 11000 ",
        text: " این چرخ خیاطی بازار با تغییر طراحی مجدد بیرونی به بازارعرضه شد و دارای اولین LCD بزرگ در این صنعت با مکانیزم تنظیم حالت‌های مختلف به عنوان چرخ خیاطی خانگی بود با قابلیت اتصال مستقیم به کامپیوتر شخصی می باشد. ",
      },
    ],
    [
      {
        date: "2009",
        title: "اخبار شرکت",
        item: "  ",
        text: " دفتر مرکزی از کیوباشی، چو-کو، توکیو به شهر هاچیوجی منتقل شد. ",
      },
    ],
  ],
  [
    "2010",
    [
      {
        date: "2010",
        title: "معرفی محصول",
        item: "مدل 7700 Memory Craft",
        text: " این چرخ خیاطی با فضای خیاطی 280 میلی متری برای دوخت کارهای بزرگ به بازار عرضه شد. در سراسر جهان از محبوب ترین چرخ های بین مبتدی تا کاربران سنگین شد. ",
      },
      {
        date: "2010",
        title: "معرفی محصول",
        item: " پرس Servo اJP-S ",
        text: " این دستگاه پرس از موتور AC استفاده می کند. تمیز و ساکت است. کوچکی و کاهش وزن این دستگاه پرس آن را ایده آل برای نصب در خط تولید کرده. ",
      },
    ],
    [
      {
        date: "2011",
        title: "معرفی محصول",
        item: "مدل 12000 Memory Craft",
        text: " این چرخ خیاطی برای بازار بین‌المللی تولید شد با امکانات جدید بسیار برای علاقه مندان به لحاف دوزی. با قابلیت اتصال به کامپیوتر شخصی و انجام پردازش‌های پیشرفته از طرف کامپیوتر. ",
      },
    ],
    [
      {
        date: "2012",
        title: "معرفی محصول",
        item: " مدل DC6030 ",
        text: " این چرخ خیاطی دارای یک دکمه انتخاب مستقیم بزرگ است که در جلو قرار گرفته است و طراحی آن با فضای داخلی ترکیب می شود. مفهوم این چرخ خیاطی «دید آسان»، «عملیات آسان» و «پایان زیبا» است که در سال 2012 جایزه «طراحی خوب بهترین 100» را دریافت کرد. ",
      },
    ],
    [
      {
        date: "2013",
        title: "معرفی محصول",
        item: "مدل 15000 Memory Craft ",
        text: " تولید اولین چرخ خیاطی کامپیوتری جهان با قابلیت Wi-Fi و مجهز به رزوه زنی جدید خودکار. ",
      },
    ],
    [
      {
        date: "2014",
        title: "معرفی محصول",
        item: "  ربات رومیزی JR3000",
        text: " تولید اولین چرخ خیاطی کامپیوتری جهان با قابلیت Wi-Fi و مجهز به رزوه زنی جدید خودکار. ",
      },
      {
        date: "2014",
        title: " اخبار شرکت ",
        item: " ",
        text: " افتتاح  پارک خیاطی Janome  در شهر ناگائوکا، استان نیگاتا. ",
      },
    ],
    [
      {
        date: "2015",
        title: "معرفی محصول",
        item: " مدل 14000 ",
        text: " عرضه بهترین چرخ خیاطی گلدوزی کامپیوتری با بالاترین درجه راحتی ، کارایی و عملکرد دوخت‌های مختلف به بازار. ",
      },
    ],
    [
      {
        date: "2016",
        title: "معرفی محصول",
        item: " دستگاه پرس سرو JP series 5 ",
        text: " دستگاه پرس با سرعت بالا در این صنعت که دارای پشتیبانی شبکه می‌باشد. با کوتاه کردن زمان چرخه در تولید، کیفیت تولید را بهبود بخشیده است. ",
      },
    ],
    [
      {
        date: "2018",
        title: "معرفی محصول",
        item: "مدل IJ521 ",
        text: " اولین چرخ خیاطی گلدوزی جهان که از تلفن هوشمند یا تبلت به عنوان پایانه عملیات استفاده می کند. ",
      },
      {
        date: "2018",
        title: "معرفی محصول",
        item: " مدل 2000D  ",
        text: " مجهز به قابلیت جدید نخ‌زنی بر اساس قدرت هوا که سادگی و ایمنی را فراهم می‌کند. ",
      },
    ],
    [
      {
        date: "2019",
        title: "معرفی محصول",
        item: " مدل 9450QCP Memory Craft ",
        text: " این مدل سطح بالایی دارد و دارای دوخت با کیفیت و سهولت استفاده است. این چرخ خیاطی به روش جدید «حالت کار خط کش» برای روکش کردن با حرکت آزاد مجهز شده. ",
      },
      {
        date: "2019",
        title: "معرفی محصول",
        item: " مدل M7 ",
        text: " چرخ لحاف دوزی برنده جایزه برتر. دارای بدنه بیرونی هیبریدی مستحکم با ناحیه دوخت بزرگ (13.5 اینچ/343 میلی‌متر) که  خیاط را قادر می‌سازد تا طیف وسیعی از گزینه‌های جدید را خلق کند. ",
      },
    ],
    [
      {
        date: "2020",
        title: "معرفی محصول",
        item: " مدلهای  311PG / 1522PG / 3160PG / 792PG / 793PG ",
        text: " مدل های تولید شده بمناسبت 100 سالگی شرکت ژانومه در رنگ های صورتی و طلایی. طراحی های جذاب و مدرن که بیانگر 100 سال تاریخ و همچنین آینده ای روشن است. ",
      },
    ],
    [
      {
        date: "2021",
        title: "معرفی محصول",
        item: " مدل 3000",
        text: " اولین دستگاه دوخت روکش بالا، قادر به کار با پارچه های کششی، دارای کیفیت و دوام دوخت بهینه شده. ",
      },
      {
        date: "2021",
        title: "معرفی محصول",
        item: " Servo press JP series 5 ",
        text: " تولید دستگاه پرس با دو بازوی عملیاتی که نیاز به سنسورهای محیط و ایمنی‌های اضافی را حذف کرده، فضای کار را بیشتر و هزینه را کم میکند. گواهی شده برای استفاده در ژاپن و دیگر کشورها. ",
      },
      {
        date: "2021",
        title: "اخبار شرکت",
        item: "  ",
        text: " تغییر نام شرکت ژانمه به Janome Corporation ",
      },
      {
        date: "2021",
        title: "اخبار شرکت",
        item: "  ",
        text: " سالگرد 100 سالگی شرکت ژانومه ",
      },
    ],
  ],
];

const random = 10;
const seconds = 2.8;
const delay = 1500;

const history = historyContent;

function History() {
  const [rotations, setRotations] = useState({ a: -3, b: 3, c: -3, d: 3 });

  const handleClickHistory = () => {
    window.open("https://www.janome.co.jp/100th/en/", "_blank");
    return;
  };

  useEffect(() => {
    const timer_id = setInterval(() => {
      let a = Math.floor(Math.random() * random);
      let b = Math.floor(Math.random() * random);
      let c = Math.floor(Math.random() * random);
      let d = Math.floor(Math.random() * random);

      a = a < random / a ? a : -1 * a;
      b = b < random / b ? b : -1 * b;
      c = c < random / c ? c : -1 * c;
      d = d < random / d ? d : -1 * d;

      // setRotations({ a, b, c, d });
    }, delay);
    return () => clearInterval(timer_id);
  }, []);

  const handleJanomeHistory = () => {
    window.location = "https://www.janome.co.jp/100th/en/";
  };

  return (
    <>
      {/* <div
				id="history"
				className="green h3-shadow w-100 p-0 m-0 d-flex align-items-center"
			>
				<BsBuilding size="2.0rem" className="mx-2" />
				<h1 className=" w-100 m-0 p-2">تاریخ شرکت ژانومه</h1>
			</div> */}

      <TopEng pagetitle="تاریخ شرکت ژانومه">
        <BsBuilding size="2.0rem" className="mx-2" />
      </TopEng>
      {/* table  */}
      <div className="main-backcolor m-0 py-5">
        <div
          className="d-flex justify-content-around flex-wrap p-0 m-0 justify-content-center mb-5 py-3 px-5 border"
          style={{
            background: "rgb(243,246,249)",
          }}
        >
          <img
            width={246}
            height={239}
            className="border border-2"
            src="/images/background/1921_model_53_pine_500_type.jpg"
            alt="model 53 pine 500"
            style={{
              transform: "rotate(" + rotations.a + "deg)",
              transition: "all " + seconds + "s ease-in-out",
              transformOrigin: "center top",
            }}
          />
          <img
            width={246}
            height={239}
            className="border border-2"
            src="/images/background/1929_model_30_pine_100_type.jpg"
            alt="model 30 pine 100"
            style={{
              transform: "rotate(" + rotations.b + "deg)",
              transition: "all " + seconds + "s ease-in-out",
              transformOrigin: "center top",
            }}
          />
          <img
            width={246}
            height={239}
            className="border border-2"
            src="/images/background/1948_model-102.jpg"
            alt="model 102"
            style={{
              transform: "rotate(" + rotations.c + "deg)",
              transition: "all " + seconds + "s ease-in-out",
              transformOrigin: "center top",
            }}
          />
          <img
            width={246}
            height={239}
            className="border border-2"
            src="/images/background/1954_model_320.jpg"
            alt="model 320"
            style={{
              transform: "rotate(" + rotations.d + "deg)",
              transition: "all " + seconds + "s ease-in-out",
              transformOrigin: "center top",
            }}
          />
        </div>

        <div
          className="container row   main-backcolor d-flex justify-content-center flex-wrap training-extra m-0 py-4"
          style={{
            fontSize: "1.3rem",
            lineHeight: "2.2rem",
          }}
        >
          <p className="mt-4 px-5">
            شرکت ژانومه تولید کننده چرخ خیاطی، دستگاه پرس، ربات صنعتی و دیگر
            لوازم صنعتی میباشد که در سال ۱۹۲۱ میلادی در توکیو کشور ژاپن تأسیس
            گردید. دفتر مرکزی این شرکت در هاچی‌اوجی، توکیو، ژاپن قرار دارد و
            همچنین کارخانه‌های تولیدی آن در کشورهای ژاپن، تایوان و تایلند مستقر
            است.
          </p>
          <p className="mt-4 px-5">
            تقویم فعالیت شرکت ژانومه در صد سال اخیر و دهه‌های مختلف در ذیل
            خدمتتان ارائه میگردد:
          </p>
        </div>

        <div className="row p-0 m-0 px-5 pb-5">
          {history.map((decades) => (
            <div className="col-11 rounded m-2 p-2" key={uuidv4()}>
              <div className="history-decade">{decades[0]}</div>
              <div className="history-item">
                {decades.slice(1).map((years) => {
                  return (
                    <div
                      className="decade-wrapper d-flex align-items-center mb-2 w-100"
                      key={uuidv4()}
                    >
                      <div className="history-date mx-5 my-3">
                        {years[0].date}
                      </div>
                      <div className="w-100 position-relative">
                        <div
                          className="history-years row p-3 "
                          style={{
                            background: "rgb(243,246,249)",
                          }}
                        >
                          {years.map((year, index) => {
                            let thumbnail = `/images/history/${year.date}_0${index + 1
                              }.png`;
                            return (
                              <div className="history-text col" key={uuidv4()}>
                                <section className="d-flex justify-content-start history">
                                  <div className="px-2">
                                    <img
                                      src={thumbnail}
                                      width={100}
                                      height={100}
                                      alt={thumbnail}
                                    />
                                  </div>
                                  <div>
                                    <div>
                                      <h6
                                        className="fs-6 bg-light p-1 text-center"
                                        style={{
                                          border: "1px solid #999",
                                          width: "120px",
                                        }}
                                      >
                                        {year.title}
                                      </h6>
                                      <h4
                                        style={{
                                          color: "red",
                                        }}
                                      >
                                        {year.item}
                                      </h4>
                                      <p>{year.text}</p>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="px-5 py-5 justify-content-center"
        style={{
          background: "rgb(243,246,249)",
          fontSize: "1.3rem",
          lineHeight: "2.2rem",
          wordSpacing: "0.3rem",
        }}
      >
        <div>
          نام ژانومه یک نام شناخنه شده در دنیاست که در بازار 100 کشور فعالیت
          میکند. فروش و پخش محصولات ژانومه توسط کانالهای خرده فروشی انجام
          میگیرد. اطلاعات در مورد مراکز فروش چرخ خیاطی های ژانومه را در سایت
          اصلی ژانومه جستجو کنید. کاربران چرخ خیاطی ژانومه برای قطعات، لوازم و
          راهنمای استفاده از مدل چرخ خیاطی خود با نمایندگی رسمی ژانومه در محل
          خود تماس بگیرند.
        </div>

        <div>
          {/* japan factory */}
          <div className="row w-100 px-3 mt-5 justify-content-center">
            <div className="col-md-4 col-sx-12 align-items-start">
              <div>
                <h4 className="text-shadow">کارخانه توکیو ژانومه</h4>
                <h5 className="company-title text-muted border-bottom pt-2">
                  Tokyo Janome Factory
                </h5>
              </div>
              <div className="p-3">
                <p>
                  کارخانه توکیو ژانومه کارخانه‌ی اصلی شرکت ژانومه در دنیاست. در
                  این کارخانه چرخ خیاطی های کامپیوتری ( دیجیتالی ) که دارای
                  پیشرفته‌ترین گلدورزهای روز دنیاست مثل مدل{" "}
                  <span className="eng-text">MC10001</span> ، تولید میشود.
                </p>
                <p>
                  همچنین در این کارخانه دستگاههای پیشرفته الکترو پرس{" "}
                  <span className="eng-text">(Elctro press units)</span> ،
                  ربات‌های صنعتی و تجهیزات پس‌زنی فالب تولید میشود.
                </p>
                <p>
                  با استفاده از فناوری ساخت بسیار دقیق ، کارخانه توکیو قادر به
                  تولید قطعات و ابزار با دقت بالا برای استفاده در صنایع مختلف
                  میباشد.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sx-12 d-flex justify-content-center align-items-start py-0 px-2">
              <div className="w-100 border border-2 p-1">
                <img
                  src="/images/factory/janome-tokyo-factory.jpg"
                  width={100}
                  height={100}
                  // style={{ width: "100%", height: "100%" }}
                  layout="responsive"
                  // objectFit="contain"
                  style={{ objectFit: "contain" }}

                  alt="کارخانه توکیو ژانومه"
                />
              </div>
            </div>
          </div>
        </div>
        {/* taiwan factory */}
        <div className="row w-100 px-3 mt-5 justify-content-center">
          <div className="col-md-4 col-sx-12 align-items-start">
            <div>
              <h4 className="text-shadow">کارخانه تایوان ژانومه</h4>
              <h5 className="company-title text-muted border-bottom pt-2">
                Taiwan Janome Factory
              </h5>
            </div>

            <div className="p-3">
              <p>
                تاسیس شده در سال 1969 میلادی، کارخانه تایوان ژانومه بیشترین
                تولید چرخ خیاطی را با گنجایش تولید 100 هزار دستگاه در ماه دارد.
              </p>
              <p>
                داشتن کارخانه ژانومه تایلند بعنوان یک مرکز تولید با قابلیت بسیار
                فنی، کمک شایانی در استراژدی فروش شرکت ژانومه کرده است.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sx-12 d-flex justify-content-center align-items-start py-0 px-2">
            <div className="w-100 border border-2 p-1">
              <img
                src="/images/factory/janome-taiwan-factory.jpg"
                // style={{ width: "100%", height: "100%" }}
                width={100}
                height={100}
                layout="responsive"
                style={{ objectFit: "contain" }}

                // objectFit="contain"
                alt="کارخانه تایوان ژانومه"
              />
            </div>
          </div>
        </div>
        {/* thailand factory */}
        <div className="row w-100 px-3 mt-5 justify-content-center">
          <div className="col-md-4 col-sx-12 align-items-start">
            <div>
              <h4 className="text-shadow">کارخانه تایلند ژانومه</h4>
              <h5 className="company-title text-muted border-bottom pt-2">
                Thailand Janome Factory
              </h5>
            </div>

            <div className="p-3">
              <p>
                کارخانه‌ی ژانومه نایلند در سال 1988 میلادی در راستای جوابگویی به
                تغییر ناگهانی بازار دنیا بعنوان یک مرکز تولید دیگر در شرق آسیا
                تاسیس شد..
              </p>
              <p>این کارخانه همچنان در حال رشد پایدار است.</p>
            </div>
          </div>
          <div className="col-md-4 col-sx-12 d-flex justify-content-center align-items-start py-0 px-2">
            <div className="w-100 border border-2 p-1">
              <img
                src="/images/factory/janome-thailand-factory.jpg"
                // style={{ width: "100%", height: "100%" }}
                width={100}
                height={100}
                layout="responsive"
                // objectFit="contain"
                style={{ objectFit: "contain" }}

                alt="کارخانه تایلند ژانومه"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;

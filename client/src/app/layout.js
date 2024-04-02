"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import "./globals.css";
import Nav from "./components/home-components/Nav";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/home-components/Footer";
import { usePathname } from "next/navigation";
import Head from "next/head"; // استيراد Head من next/head
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  useEffect(() => {
    document.title = " مؤسسة السيد علاء لتصنيع ماكينات الرخام والجرانيت والأوناش";

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
"مؤسسة السيد علاء , السيد علاء , ماكينات الرخام , ماكينات الجرانيت  , ماكينات الرخام , أحدث ماكينات الرخام , مكن رخام , تقطيع رخام , جلاية رخام , منشار رخام, ماكينات رخام ,اسعار ماكينات جلى الرخام,اسعار ماكينة جلي الرخام , اماكن بيع ماكينات الرخام,الات قص الرخام, تصنيع ماكينات الرخام,تصنيع ماكينات الرخام والجرانيت ,ماكينات تقطيع رخام , ماكينة حلية رخام, ماكينة قص رخام, مكن رخام, ماكينة تلميع الرخام للبيع, مكن رخام مستعمل للبيع, تصنيع ماكينات رخام, اسعار منشار رخام ايطالي , جلي رخام , marble machines , marble and granite , marble , granite , أوناش عنبر , أوناش , فرايز , تقطيع جرانيت , تقطيع حجر صناعي , رخام , حجر صناعي "

    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, [pathname]);

  return (
    <html lang="en">
      <Head>
        <title>مؤسسة السيد علاء</title>
      </Head>
      <body
        className={`position-relative ${
          pathname.split("/")[1] === "admin" ? "admin" : "client"
        }`}
      >
        {pathname.split("/")[1] !== "admin" && <Nav />}
        {pathname.split("/")[1] !== "admin" && (
          <div
            className="blue position-absolute"
            style={{
              width: "556px",
              height: "556px",
              borderRadius: "50%",
              backgroundColor: "rgb(168, 200, 253)",
              right: "-50%",
              transform: "translateX(-100%)",
              top: "250px",
              zIndex: "9",
              filter: "blur(200px)",
            }}
          ></div>
        )}

        <div
          style={{ zIndex: 99, minHeight: "100vh" }}
          className="position-relative"
          id="root"
        >
          {children}
        </div>
        {pathname.split("/")[1] !== "admin" && (
          <div
            className="blue position-absolute"
            style={{
              width: "556px",
              height: "556px",
              borderRadius: "50%",
              backgroundColor: "rgba(245, 245, 245, 1)",
              left: "-50%",
              transform: "translateX(100%)",
              top: "100px",
              zIndex: "9",
              filter: "blur(120px)",
            }}
          ></div>
        )}
        {pathname.split("/")[1] !== "admin" && <Footer />}
      </body>
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-2XYQVKSP6Q"></Script>
<Script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2XYQVKSP6Q');
</Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
        integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
        crossorigin="anonymous"
      ></Script>
    </html>
  );
}

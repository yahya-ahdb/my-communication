import React from 'react'
import "./about.css"
import { Link } from 'react-router-dom'

function About() {
  return (
    <div data-aos="fade">
        <section className='about-academy' >
        <div className="home-shadow"></div>            
        <div className="container pt-5" style={{position :"relative" , zIndex :5}} >
            <h1 className='text-white fw-bold' >عن الأكاديمية</h1>
        </div>
        </section>
        <section className='container py-5 my-5 d-flex justify-content-between align-items-center flex-wrap' >
            <div className='video' >
                <iframe src="https://player.vimeo.com/video/797927230?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1&h=446cde8754#t="></iframe>
            </div>
            <div style={{maxWidth: "500px"}} >
                <small className='text-warning fs-4' >تعرَّف علينا</small>
                <h3 className='fw-bold mt-2 ' >ما هي أكاديمية My Communication؟</h3>
                <p className='mt-5' >أول أكاديمية في الشرق الأوسط تهتم بتدريب مهندس الاتصالات العربي وفق أعلى معايير التميز والجودة.</p>
                <p className='mt-2' >وذلك لما يتمتع به فريق عملنا من خبرة عريقة في مجال هندسة الاتصالات وكفاءة عالية الأداء في إيصال الأفكار العملية والنظرية للمتدربين.</p>
                <p className='mt-2' >بما يتماشى مع أساليب التدريب المعاصرة والتطورات التقنية الحديثة.</p>
                <div>
                <Link to={"/courses"} >
                    <div className="btn btn-warning text-white p-2 fs-5 ">تعرف على دوراتنا</div>
                </Link>
                </div>
            </div>
        </section>
        <section className='py-5 my-5' >
            <div className="container cards-about">
                <div data-aos="fade" className="card-about">
                    <h1>01</h1>
                    <h2>هدفنا</h2>
                    <p className='mt-4' >منذ انطلاقتنا الأولى وضعنا نصب أعيننا هدف تسخير كامل طاقاتنا وإمكاناتنا لخدمة مهندسي الاتصالات حول العالم.</p>
                    <p className="mt-3">لذا نأمل أن نكون دومًا شريككم الموثوق في تطوير خبراتكم وتحقيق أهدافكم.</p>
                    <p className="mt-4">سواء من خلال دوراتنا التخصصية أو عبر ما تطلعكم عليه صفحات <span className='text-warning'>My-Communication</span> عبر مواقع التواصل الاجتماعي من معلومات تقنية.</p>
                </div>
                <div data-aos="fade" data-aos-delay="500" className="card-about">
                    <h1>02</h1>
                    <h2>مهمتنا</h2>
                    <p className='mt-4' >إننا من الأكاديميات القليلة التي تجمع أساليب التدريب تحت مظلة واحدة ومن ثَم تتحمل مسؤولية تجارب متدربيها من بدايتها إلى نهايتها.</p>
                    <p className="mt-3">لذلك تتلخص مهمتنا في إيصال متدربينا لمستوى التخصص والاحتراف.</p>
                    <p className="mt-4">إذ ركزنا جهودنا على تقديم خدمات تدريبية ذات أثر ملموس ونتائج تفوق توقعات متدربينا.</p>
                </div>
                <div data-aos="fade" data-aos-delay="900" className="card-about">
                    <h1>03</h1>
                    <h2>رؤيتنا</h2>
                    <p className='mt-4' >إن أكاديميتنا تتبنى رؤية عملية واحترافية تليق باسمها وتتلخص في إعداد قادة من المهندسين عبر اعتماد أحدث أساليب المناقشة التطويرية.</p>
                    <p className="mt-3">والتي تُعنى بتوسيع مدارك المتدربين وإثراء معلوماتهم النظرية والعملية ومهاراتهم الفعلية عبر العديد من الدورات التخصصية.</p>
                    <p className="mt-4">نتطلع بذلك إلى استحقاق لقب الخيار الأول في عالم التدريب لـ هندسة الاتصالات.</p>
                </div>
            </div>
        </section>
        <section className='count-courses my-5 d-flex justify-content-center align-items-center flex-wrap ' >
        <div className="home-shadow"></div>            
            <div className='d-flex justify-content-between align-items-center container' style={{position:"relative",zIndex:3}} >
                <div className='text-center' >
                    <h1 className='text-white fw-bold count' >+2790</h1>
                    <p className="mt-3 text-white fw-bold">متدرب</p>
                </div>
                <div className='text-center' >
                    <h1 className='text-white fw-bold count' >+1079</h1>
                    <p className="mt-3 text-white fw-bold">درس بالدورات</p>
                </div>
                <div className='text-center' >
                    <h1 className='text-white fw-bold count' >+512</h1>
                    <p className="mt-3 text-white fw-bold">وحدات تدريبية</p>
                </div>
                <div className='text-center' >
                    <h1 className='text-white fw-bold count' >+200</h1>
                    <p className="mt-3 text-white fw-bold">ساعة تدريبية</p>
                </div>
            </div>
        </section>
        <section className='container py-5 my-5' >
            <div className="cards-mang">
                <div className="card-mang">
                <div>
                    <img src="/about-academy/mang-1.png" alt="" />
                </div>
                    <h6 className='mt-3 fs-5 text-center' >إبراهيم إبراهيم</h6>
                    <h6 className='text-center py-2' >المؤسس والمدير العام لأكاديمية اتصالاتي​</h6>
                </div>
                <div className="card-mang">
                <div>
                    <img src="/about-academy/mang-2.png" alt="" />
                </div>
                    <h6 className='mt-3 fs-5 text-center' >هبة نبيل</h6>
                    <h6 className='text-center py-2' >المدير الإداري</h6>
                </div>
                <div className="card-mang">
                <div>
                    <img src="/about-academy/mang-3.png" alt="" />
                </div>
                    <h6 className='mt-3 fs-5 text-center' >أشرف الحرازي</h6>
                    <h6 className='text-center py-2' >المدير التنفيذي</h6>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About
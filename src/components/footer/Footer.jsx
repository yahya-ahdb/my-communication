import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='py-5'>
        <div className='d-flex align-items-center justify-content-between container'style={{flexWrap:"wrap"}} >
            <div style={{maxWidth :"300px"}}>
                <div>
                    <img src="/logo.svg" width={200} alt="" />
                </div>
                <p className='text-white fs-5 mt-3 text-end' >
                نحن نعملُ على تطوير مهندس الاتصالات العربي ليتمكن من النهوض ببلده في المجال التكنولوجي. إذ يكفي أن تمتلك العزيمة والإصرار على التعلم، لأننا سنؤمن لك بيئة تدريبية مرنة تساعدك على التطور.
                </p>
            </div>
            <div>
                <h5 className='text-white fw-bold' >الرئيسية</h5>
                <ul className='links' >
                    <li><Link to={"/about-academy"} className='text-white' >عن الأكاديمية</Link></li>
                    <li><Link to={"/courses"} className='text-white' >الدورات</Link></li>
                    <li><Link to={"/Achievements"} className='text-white' >إنجازات الاكاديمية</Link></li>
                    <li><Link to={"/Articles"} className='text-white' >المقالات</Link></li>
                    <li><Link to={"/workshop"} className='text-white' >الورشات</Link></li>
                    <li><Link to={"/certificates"} className='text-white' >الشهادات</Link></li>
                    <li><Link to={"/contact"} className='text-white' >تواصل</Link></li>
                </ul>
            </div>
            <div>
                <h5 className='text-white fw-bold' >انضم الينا</h5>
                <ul className='links' >
                    <li><Link to={"/joinUs"} className='text-white' >التسجيل كمدرب</Link></li>
                </ul>
                <h5 className='text-white fw-bold' >روابط سريعة</h5>
                <ul className='links' >
                    <li><Link className='text-white' >إنجازات الاكاديمية</Link></li>
                    <li><Link className='text-white' >الاسئلة الشائعة</Link></li>
                    <li><Link className='text-white' >سياسة الخصوصية</Link></li>
                    <li><Link className='text-white' >خريطة الموقع</Link></li>
                </ul>
            </div>
            <div style={{maxWidth :"300px"}} >
                <h5 className='text-white fw-bold' >تواصل معنا</h5>
                <p className='text-white pt-3' >عمان- العبدلي – خلف مبنى المخابرات القديم- عمارة المساحون العرب – الطابق الثاني – مكتب 201</p>
                <div className='text-white' ><i className='fa fa-phone mt-2  fs-5' ></i> <span>00962797087455</span></div>
                <div><Link className='text-white'    to={"mailto:admin@my-communication.com"}><i className='fa fa-envelope mt-3  fs-5' ></i> <span>admin@my-communication.com</span></Link></div>
                <div className='text-white' ><i className='fa fa-globe mt-3 fs-5' ></i> <span>www.my-communication.com</span></div>
                <div className='pt-3' >
                    <Link target='_blank' to={"https://www.facebook.com/mycommunication2021"} ><i className='fab fa-facebook text-white me-3 fs-3 ' ></i></Link>
                    <Link target='_blank' to={"https://www.linkedin.com/company/mycommunicationacademy/"} ><i className='fab fa-linkedin text-white me-3 fs-3 ' ></i></Link>
                    <Link target='_blank' to={"https://t.me/MycommunicationAcademy"} ><i className='fab fa-telegram text-white me-3 fs-3 ' ></i></Link>
                    <Link target='_blank' to={"https://www.instagram.com/mycommunication2021/"} ><i className='fab fa-instagram text-white me-3 fs-3 ' ></i></Link>
                    <Link target='_blank' to={"https://www.youtube.com/channel/UCEj22q9t0-hqs1lePKeZ9FA"} ><i className='fab fa-youtube text-white me-3 fs-3 ' ></i></Link>
                    <Link target='_blank' to={"https://twitter.com/MyCommunicatio3?t=vfyWvlT9YmzJMQxy0VOcXQ&s=09"} ><i className='fab fa-twitter text-white me-3 fs-3 ' ></i></Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
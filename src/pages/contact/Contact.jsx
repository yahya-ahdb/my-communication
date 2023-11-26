import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { apiUrl } from "../../constans/url";
import { LinearProgress } from "@mui/material";

function Contact() {
  const [ name, setName ] = useState( "" )
  const [ email, setEmail ] = useState( "" )
  const [ phone, setPhon ] = useState( "" )
  const [ message, setMessage ] = useState( "" )
  const [ loadingQuestion, setLoadingQuestion ] = useState( false );

  const onQuestionSubmite = async () => {
    setLoadingQuestion( true )
    const formData = new FormData()
    if ( !name || !email || !phone || !message ) {
      toast.error( "الرجاء إكمال جميع البيانات" )
      setLoadingQuestion( false )
      return
    }


    if ( message.toString().length > 65500 ) {
      toast.error( "رسالتك طويلة جداً الرجاء اختصار استفسارك " )
      setLoadingQuestion( false )
      return
    }


    formData.append( "name", name )
    formData.append( "email", email )
    formData.append( "phone", phone )
    formData.append( "message", message )

    await axios.post( apiUrl + "createQuestion", formData ).then( () => {
      toast.success( `تم ارسال رسالتك للمشرفين سوف يتم التواصل معك في اقرب وقت ممكن` )
      setName( "" ); setEmail( "" ); setPhon( "" ); setMessage( "" )
      setLoadingQuestion( false )
    } ).catch( ( err ) =>
      toast.error( err.response.data.message
      )
    )
    setLoadingQuestion( false )
  }
  return (
    <div>
      <section className="about-academy">
        <div className="home-shadow"></div>
        <div
          className="container pt-5"
          style={{ position: "relative", zIndex: 5 }}
        >
          <h1 className="text-white fw-bold">تواصل معنا</h1>
        </div>
      </section>
      <section className="py-5 bg-secondary bg-opacity-25">
        <div className="container">
          <div className="py-5 bg-white d-flex justify-content-between align-items-center  container" style={{flexWrap:"wrap"}}>
            <div className="contact">
              <h5 className="text-warning">لأي استفسارات</h5>
              <h4>لنبقى على تواصل</h4>
              <div
            className="mt-5"
            style={ {
              padding: "15px",
              boxShadow: "1px 1px 10px #ccc",
              borderRadius: "8px",
            } }>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                الاسم
              </label>
              <input disabled={ loadingQuestion } value={ name } onChange={ ( e ) => setName( e.target.value ) } type="text" className="form-control" id="name" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                البريد الالكتروني *
              </label>
              <input disabled={ loadingQuestion } value={ email } onChange={ ( e ) => setEmail( e.target.value ) } type="text" className="form-control" id="email" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                الرقم
              </label>
              <input disabled={ loadingQuestion } value={ phone } onChange={ ( e ) => setPhon( e.target.value ) } type="text" className="form-control" id="phone" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <textarea disabled={ loadingQuestion } value={ message } onChange={ ( e ) => setMessage( e.target.value ) } placeholder="رسالتك" className="form-control" id="exampleFormControlTextarea1" style={ { minHeight: "180px" } }></textarea>
            </div>
            <button disabled={ loadingQuestion } onClick={ onQuestionSubmite } className="btn btn-warning py-3 px-4 text-white">
              إرسال استفسارك
            </button>
          </div>
          { loadingQuestion ? <LinearProgress /> : <div></div> }
            </div>
            <div className="container " style={{ minWidth:"260px" , maxWidth : "350px"}} >
            <div className="d-flex align-items-center mt-3" >
                <div style={{border :"1px solid #000" , borderRadius :"50%", padding :"15px" }} >
                  <i className="fas fa-home" style={{width :"1rem", height:"1rem", display:"block", position:"relative"}} ></i>
                </div>
                <p className="me-2 mt-2" >
                المخابرات القديم- عمارة المساحون العرب - الطابق الثاني - مكتب 201
                </p>
            </div>
            <div className="d-flex align-items-center mt-3" >
                <div style={{border :"1px solid #000" , borderRadius :"50%", padding :"15px" }} >
                  <i className="fa fa-phone" style={{width :"1rem", height:"1rem", display:"block", position:"relative"}} ></i>
                </div>
                <p className="me-2 mt-3" >
                00962797087455
                </p>
            </div>
            <div className="d-flex align-items-center mt-3" >
                <div style={{border :"1px solid #000" , borderRadius :"50%", padding :"15px" }} >
                  <i className="far fa-envelope-open" style={{width :"1rem", height:"1rem", display:"block", position:"relative"}} ></i>
                </div>
                <p className="me-2 mt-3" >
                admin@my-communication.com
                </p>
            </div>
            <div className="d-flex align-items-center mt-3" >
                <div style={{border :"1px solid #000" , borderRadius :"50%", padding :"15px" }} >
                  <i className="fa fa-globe" style={{width :"1rem", height:"1rem", display:"block", position:"relative"}} ></i>
                </div>
                <p className="me-2 mt-3" >
                www.my-communication.com
                </p>
            </div>
            <div className="mt-5" >
              <iframe className="map" src="https://maps.google.com/maps?q=My%20Communication%20Academy&t=m&z=12&output=embed&iwloc=near" ></iframe>
            </div>
            </div>
          </div>
      <section className="py-5">
            <h3 className="pt-5 text-center fw-bold" >انضم لأكثر من 5000 مهندس اتصالات مشتركون بالنشرة البريدية</h3>
            <p className="mt-5 text-center fs-5">نشرة بريدية أسبوعية تحتوي على أهم التحديثات من أكاديمية اتصالاتي في عالم هندسة الاتصالات وتقنية المعلومات</p>
      </section>
        </div>
      </section>
    </div>
  );
}

export default Contact;

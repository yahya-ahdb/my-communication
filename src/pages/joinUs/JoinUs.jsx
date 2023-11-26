import axios from 'axios';
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import { apiUrl } from '../../constans/url';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const notify =()=>toast.success("تم ارسال طلبك تفقد الايميل الخاص بك")

function JoinUs() {
    const [data, setData] = useState()
      const [text, setText] = useState();
      const [image, setImage] = useState("/person.png");
      const handleSetData = (e)=>{
        setData({...data , [e.target.name]: e.target.value  })
    }
    // const messga = `
    // <div style="boxShadow :1px 1px 10px #ccc;padding :20px; position:relative" >
    //         <div className='display:flex; align-items:center;' >
    //               <img width={100} style="position:absolute; left: 10px; top :5" src={"/logo.svg"} />
    //               <img width={100} src=${image} />
    //               <div className='margin:0px 10px' >
    //                 <h3>${data?.name}</h3>
    //                 <h6>${data?.email}</h6>
    //                 <h6>${data?.phoen}</h6>
    //                 <h6>${data?.linkedIn}</h6>
    //               </div>
    //         </div>
    //         <div>
    //         ${text}
    //         </div>
    // </div>
    // `
    const handleImageUpload = (e) => {
        var render = new FileReader();
        render.readAsDataURL(e.target.files[0]);
        render.onload = () => {
          setImage(render.result);
        };
        render.onerror = (error) => {
          console.log("Error= " + error);
        };
      };
      const navigate = useNavigate()
      const handleUpload = async()=>{
        const formData = new FormData()
        formData.append("image", image)
        formData.append("name",data?.name)
        formData.append("email",data?.email)
        formData.append("phone",data?.phone)
        formData.append("linkedIn",data?.linkedIn)
        formData.append("about", text)
        try {
            await axios.post(apiUrl +"joinus" , formData)
            .then(()=>{navigate("/"); notify()})
        } catch (error) {
            console.log(error);
        }
      }
  return (
    <div className='container' >
    <div className='d-flex justify-content-center image flex-wrap' >
        <input accept='image/*' type='FILE' onChange={handleImageUpload} hidden id='image' />
        <label htmlFor='image'>
            <img src={image} />
        </label>
    </div>
    <div className='d-flex justify-content-around flex-wrap' >
     <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            الاسم الثلاثي
          </label>
          <input
            type="text"
            name="name"
            onChange={handleSetData}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
     <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            البريد الالكتروني *
          </label>
          <input
            type="email"
            name="email"
            onChange={handleSetData}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
    </div>
    <div className='d-flex justify-content-around flex-wrap' >
     <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
          رقم الهاتف
          </label>
          <input
            type="number"
            name="phone"
            onChange={handleSetData}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
     <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            اللينكداين
          </label>
          <input
            type="url"
            name="linkedIn"
            onChange={handleSetData}
            className="form-control"
            id="exampleInputEmail1"
            dir='ltr'
            placeholder='www.username.com'
            aria-describedby="emailHelp"
          />
        </div>
    </div>
    <div className='my-5' >
    <small>اخبرنا عنك بالتفصيل </small>
    <div className="mt-4" style={{ direction: "rtl" }}>
                <ReactQuill
                  value={text}
                  onChange={(html) => setText(html)}
                  theme="snow"
                  dir="rtl"
                  modules={{
                    toolbar: [
                      [
                        { font: [] },
                        { header: [1, 2, 3, false] },
                        { color: [] },
                        { background: [] },
                      ],
                      ["bold", "italic", "underline", "strike"],
                      [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                      ],
                      ["link"],
                      [{ align: [] }],
                      ["clean"],
                    ],
                  }}
                  formats={[
                    "header",
                    "font",
                    "size",
                    "bold",
                    "italic",
                    "underline",
                    "strike",
                    "blockquote",
                    "list",
                    "bullet",
                    "indent",
                    "link",
                    "image",
                  ]}
                />
              </div>
    </div>
    <div>
        <button className='btn btn-warning fs-4 text-white my-3' onClick={handleUpload} >ارسال</button>
    </div>
    </div>
  )
}

export default JoinUs
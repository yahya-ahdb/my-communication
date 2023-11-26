import React, { useState } from "react";
import LayoutAdmin from "../../components/LayoutAdmin";
import axios from "axios";
import { apiUrl } from "../../../../constans/url";
import { useHeaders } from "../../../../hooks/useHeaders";
import { toast } from "react-toastify";

const notify = ()=> toast.success("تم ارسال ارسالة")
const notifyWarning = ()=> toast.warning("يرجى التاكد من الحقل")
function SendMessageAll() {
  const [text, setText] = useState("");
  const headers = useHeaders()
  const handleSendMessage = async ()=>{
    try {
        await axios.post(apiUrl + "mailToAllStudent", {message :text} ,{headers:headers})
        .then(()=>{notify(); setText("")})
    } catch (error) {
        notifyWarning()
        console.log(error);
    }
  }
  return (
    <LayoutAdmin
      pages={
        <div className="container">
          <h3>ارسال رسالة لجميع الطلبة</h3>
          <section>
            <small className="text-secondary">يرجى ادخال نص الرسالة</small>
            <div>
              <textarea
                style={{ width: "100%" }}
                placeholder="اكتب الرسالة"
                className="p-3"
                value={text}
                onChange={(e) => setText(e.target.value)}
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="btn btn-warning text-white px-4 fw-bold fs-5" onClick={handleSendMessage} >ارسال</div>
          </section>
        </div>
      }
    />
  );
}

export default SendMessageAll;

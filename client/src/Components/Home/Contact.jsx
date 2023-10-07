import React from 'react'

const Contact = () => {
  return (
    <div >


    <form style={{maxWidth:"500px",  boxShadow: "1px 1px 3px black", padding: "1rem 2rem", margin: "auto", fontSize: "1.1rem", fontWeight: "700", color: "rgb(67, 52, 52)" }} className='mt-5'>
    <div className="mb-1">
        <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Name</label>
        <input type="text" name="name" className="form-control" id="exampleFormControlInput1"  required />
      </div>
      <div className="mb-1">
        <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Email</label>
        <input type="email" name="email" className="form-control" id="exampleFormControlInput2"  required />
      </div>
      
      <div className="mb-1">
        <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Phone Number</label>
        <input type="number" name="phone" className="form-control" id="exampleFormControlInput3"  required />
      </div>
      <div class="form-group mb-1">
    <label for="exampleFormControlTextarea1">Enter Your Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Any Message'></textarea>
  </div>
        <input type="submit" value="Send" className='btn btn-primary mt-3 col-sm-5' />
    </form>
  </div>
  )
}

export default Contact
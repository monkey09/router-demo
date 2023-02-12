import { Form, useActionData } from "react-router-dom"

const Contact = () => {
  const data = useActionData()
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
          {data && data.error && <p style={{color: 'red'}}>{data.error}</p>}
        </label>
        <button>Submit</button>
      </Form>
    </div>
  )
}

export default Contact
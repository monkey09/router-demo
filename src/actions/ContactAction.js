import { redirect } from "react-router-dom"

const ContactAction = async ({ request }) => {
  const data = await request.formData()
  const submission = {
    email: data.get('email'),
    message: data.get('message')
  }
  console.log(submission)
  if (submission.message.length < 5) {
    return {error: 'message should be more than 5 chars'}
  }
  return redirect('/')
}

export default ContactAction
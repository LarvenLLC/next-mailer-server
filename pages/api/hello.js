// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mailer from "../../helper/mailer"

export default async function handler(req, res) {
  // This API route handles something else but can be used to send mails without invoking some other API
  await mailer({
    receivers: 'user@larven.io',
    sender: "Noreply Larven",
    subject: 'Account Deletion',
    text: "Your account was deleted successfully"
  });
  res.status(200).json({ name: 'John Doe' })
}

"use server"

import { Resend } from "resend"

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const propertyType = formData.get("propertyType") as string
    const message = formData.get("message") as string

    // Basic validation
    if (!name || !email || !phone) {
      return { success: false, error: "Please fill out all required fields" }
    }

    // Log the submission for debugging
    console.log(`Contact form submission: ${name}, ${email}, ${phone}, ${propertyType}`)

    // Initialize Resend only if API key exists
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey)

        // Send notification to business
        await resend.emails.send({
          from: "Alenley Website <noreply@resend.dev>",
          to: "info@alenley.com",
          subject: "New Contact Form Submission",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background-color: #1e3a8a; padding: 20px; text-align: center; color: white;">
                <h1>New Contact Form Submission</h1>
              </div>
              <div style="padding: 20px; background-color: #f9fafb;">
                <h2>Contact Details:</h2>
                <ul style="list-style-type: none; padding: 0;">
                  <li style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</li>
                  <li style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</li>
                  <li style="margin-bottom: 10px;"><strong>Phone:</strong> ${phone}</li>
                  <li style="margin-bottom: 10px;"><strong>Property Type:</strong> ${propertyType}</li>
                  <li style="margin-bottom: 10px;"><strong>Message:</strong> ${message}</li>
                  <li style="margin-bottom: 10px;"><strong>Date:</strong> ${new Date().toLocaleString()}</li>
                </ul>
                <div style="background-color: #dbeafe; padding: 15px; border-radius: 5px; margin: 15px 0;">
                  <strong>Next Steps:</strong>
                  <p>1. Contact this lead within 2 hours</p>
                  <p>2. Mention the Summer Special offer (2 months free)</p>
                  <p>3. Schedule a property evaluation</p>
                </div>
                <div style="text-align: center; margin-top: 20px;">
                  <a href="tel:${phone}" style="background-color: #1e3a8a; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-right: 10px;">Call Now</a>
                  <a href="mailto:${email}" style="background-color: #1e3a8a; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Send Email</a>
                </div>
              </div>
            </div>
          `,
        })

        // Send confirmation to customer
        await resend.emails.send({
          from: "Alenley Property Management <noreply@resend.dev>",
          to: email,
          subject: "Thank you for contacting Alenley Property Management",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background-color: #1e3a8a; padding: 20px; text-align: center; color: white;">
                <h1>Thank You for Contacting Us!</h1>
              </div>
              <div style="padding: 20px; background-color: #f9fafb;">
                <p>Dear ${name},</p>
                <p>Thank you for reaching out to Alenley Property Management. We've received your inquiry about ${propertyType} management services.</p>
                <p>A member of our team will contact you within the next 2 hours to discuss how we can help with your property management needs.</p>
                
                <div style="background-color: #dbeafe; padding: 15px; border-radius: 5px; margin: 15px 0;">
                  <h2 style="margin-top: 0;">🌞 Summer Special Offer</h2>
                  <p>We're currently offering <strong>2 months of FREE property management</strong> for new clients! This offer is limited to the first 25 properties.</p>
                </div>
                
                <h3>Our Services Include:</h3>
                <ul>
                  <li>Tenant screening and placement</li>
                  <li>Rent collection and disbursement</li>
                  <li>24/7 maintenance coordination</li>
                  <li>Regular property inspections</li>
                  <li>Detailed financial reporting</li>
                  <li>Legal compliance management</li>
                </ul>
                
                <p>If you need immediate assistance, please don't hesitate to call us at (305) 699-3437.</p>
                
                <div style="text-align: center; margin-top: 20px;">
                  <a href="https://alenley.com/services" style="background-color: #1e3a8a; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Explore Our Services</a>
                </div>
              </div>
              <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
                <p>© ${new Date().getFullYear()} Alenley Property Management. All rights reserved.</p>
                <p>14261 SW 120th St, Ste 108-694, Miami, FL 33186</p>
              </div>
            </div>
          `,
        })
      } catch (emailError) {
        console.error("Error sending email:", emailError)
      }
    } else {
      console.log("RESEND_API_KEY not configured - emails will not be sent")
    }

    return { success: true }
  } catch (error) {
    console.error("Contact form error:", error)
    return { success: false, error: "Something went wrong. Please try again." }
  }
}

export async function submitQuickContactForm(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string

    // Basic validation
    if (!name || !phone) {
      return { success: false, error: "Please fill out all required fields" }
    }

    // Log the submission for debugging
    console.log(`Quick contact form submission: ${name}, ${phone}`)

    // Initialize Resend only if API key exists
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey)

        // Send urgent notification to business
        await resend.emails.send({
          from: "Alenley Website <noreply@resend.dev>",
          to: "info@alenley.com",
          subject: "🔥 HOT LEAD: Quick Contact Form Submission",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background-color: #dc2626; padding: 20px; text-align: center; color: white;">
                <h1>🔥 HOT LEAD: Quick Contact Request</h1>
              </div>
              <div style="padding: 20px; background-color: #f9fafb;">
                <h2>Contact Details:</h2>
                <ul style="list-style-type: none; padding: 0;">
                  <li style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</li>
                  <li style="margin-bottom: 10px;"><strong>Phone:</strong> ${phone}</li>
                  <li style="margin-bottom: 10px;"><strong>Date:</strong> ${new Date().toLocaleString()}</li>
                </ul>
                <div style="background-color: #fee2e2; padding: 15px; border-radius: 5px; margin: 15px 0;">
                  <strong>URGENT: This lead has requested immediate contact!</strong>
                  <p>Call this lead ASAP - they used the quick contact form and are likely ready to move forward.</p>
                  <p>Remember to mention the Summer Special offer (2 months free).</p>
                </div>
                <div style="text-align: center; margin-top: 20px;">
                  <a href="tel:${phone}" style="background-color: #dc2626; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Call Now</a>
                </div>
              </div>
            </div>
          `,
        })
      } catch (emailError) {
        console.error("Error sending email:", emailError)
      }
    } else {
      console.log("RESEND_API_KEY not configured - emails will not be sent")
    }

    return { success: true }
  } catch (error) {
    console.error("Quick contact form error:", error)
    return { success: false, error: "Something went wrong. Please try again." }
  }
}

// Export alias for compatibility
export const submitQuickContact = submitQuickContactForm

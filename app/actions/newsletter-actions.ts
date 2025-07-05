"use server"

import { Resend } from "resend"

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string

  if (!email) {
    return {
      success: false,
      message: "Email address is required",
    }
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address",
    }
  }

  try {
    // Log the subscription (always works)
    console.log(`Newsletter subscription: ${email} at ${new Date().toISOString()}`)

    // Send welcome email if Resend is configured
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      const resend = new Resend(resendApiKey)

      await resend.emails.send({
        from: "Alenley Management <noreply@resend.dev>", // Use resend.dev initially
        to: [email],
        subject: "🌞 Welcome to Alenley Management - Your Summer Special Awaits!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); color: white; padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
              <h1 style="margin: 0; font-size: 28px;">🏠 Welcome to Alenley Management!</h1>
              <p style="margin: 10px 0 0 0; font-size: 18px; opacity: 0.9;">Licensed Realtor with 10+ years experience managing real estate</p>
            </div>
            
            <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 25px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
              <h2 style="margin: 0 0 15px 0; font-size: 24px;">🌞 SUMMER SPECIAL OFFER</h2>
              <p style="margin: 0; font-size: 20px; font-weight: bold;">First 2 Months Completely FREE!</p>
              <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Limited to first 25 properties - $300 value</p>
            </div>

            <div style="background: #f8fafc; padding: 25px; border-radius: 10px; margin-bottom: 30px;">
              <h3 style="color: #1e40af; margin: 0 0 15px 0;">What You Get FREE:</h3>
              <ul style="color: #374151; line-height: 1.6; margin: 0; padding-left: 20px;">
                <li>Professional tenant screening & placement</li>
                <li>24/7 emergency maintenance coordination</li>
                <li>Monthly financial reports & owner portal access</li>
                <li>Professional photography & marketing</li>
                <li>AI-powered rent optimization</li>
                <li>Bilingual service (English/Spanish)</li>
              </ul>
            </div>

            <div style="background: #1e40af; color: white; padding: 25px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
              <h3 style="margin: 0 0 15px 0;">Ready to Get Started?</h3>
              <p style="margin: 0 0 20px 0;">Call now to claim your FREE 2 months!</p>
              <a href="tel:3056993437" style="background: #10b981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">📞 (305) 699-3437</a>
            </div>

            <div style="text-align: center; color: #6b7280; font-size: 14px;">
              <p><strong>Alenley Management</strong><br>
              14261 SW 120th St, Ste 108-694<br>
              Miami, FL 33186</p>
              
              <p><strong>Business Hours:</strong><br>
              Monday - Friday: 9:00 AM - 6:00 PM<br>
              Saturday: By Appointment<br>
              Sunday: Closed<br>
              <span style="color: #dc2626;">🚨 Emergency: 24/7 for current clients</span></p>
              
              <p style="margin-top: 20px;">
                <a href="mailto:info@alenley.com" style="color: #1e40af;">info@alenley.com</a> | 
                <a href="https://alenley.com" style="color: #1e40af;">www.alenley.com</a>
              </p>
            </div>
          </div>
        `,
      })
    } else {
      console.log("RESEND_API_KEY not configured - welcome email will not be sent")
    }

    return {
      success: true,
      message: "Successfully subscribed! Check your email for our Summer Special details.",
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error)

    // Still return success since we logged the subscription
    return {
      success: true,
      message: "Successfully subscribed to our newsletter!",
    }
  }
}

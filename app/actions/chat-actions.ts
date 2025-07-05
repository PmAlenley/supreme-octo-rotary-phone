"use server"

import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function submitChatMessage(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const message = formData.get("message") as string
  const source = (formData.get("source") as string) || "AI Chat Widget"

  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  console.log("Chat message submitted:", {
    name,
    email,
    phone,
    message,
    source,
    timestamp: new Date().toISOString(),
  })

  if (!message) {
    return { success: false, error: "Message is required" }
  }

  try {
    if (resend && email) {
      // Send notification to business owner
      await resend.emails.send({
        from: "Alenley Management <noreply@alenley.com>",
        to: ["info@alenley.com"],
        subject: "🚨 New Lead from AI Chat Widget",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
            <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #2563eb; margin: 0; font-size: 28px;">🎉 New Lead Alert!</h1>
                <p style="color: #6b7280; margin: 10px 0 0 0; font-size: 16px;">Someone is interested in your property management services</p>
              </div>
              
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h2 style="color: #374151; margin: 0 0 15px 0; font-size: 20px;">Contact Information</h2>
                <p style="margin: 8px 0; color: #4b5563;"><strong>Name:</strong> ${name || "Not provided"}</p>
                <p style="margin: 8px 0; color: #4b5563;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 8px 0; color: #4b5563;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
                <p style="margin: 8px 0; color: #4b5563;"><strong>Source:</strong> ${source}</p>
              </div>
              
              <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; margin-bottom: 25px;">
                <h2 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px;">💬 Their Message</h2>
                <p style="color: #1e3a8a; margin: 0; font-size: 16px; line-height: 1.6; font-style: italic;">"${message}"</p>
              </div>
              
              <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #16a34a; margin-bottom: 25px;">
                <h2 style="color: #15803d; margin: 0 0 15px 0; font-size: 18px;">🎯 Next Steps</h2>
                <ul style="color: #166534; margin: 0; padding-left: 20px; line-height: 1.8;">
                  <li>Respond within 1 hour for best conversion rates</li>
                  <li>Mention the <strong>FREE 2 months offer</strong> (limited to 25 properties)</li>
                  <li>Schedule a property evaluation call</li>
                  <li>Send them the property management agreement</li>
                </ul>
              </div>
              
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}" style="background-color: #2563eb; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Reply to Lead</a>
              </div>
              
              <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; margin: 0; font-size: 14px;">
                  This lead came from your AI chat widget on alenley.com<br>
                  Time: ${new Date().toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        `,
      })

      // Send confirmation to user if they provided email
      if (email) {
        await resend.emails.send({
          from: "Alenley Management <noreply@alenley.com>",
          to: [email],
          subject: "Thanks for your interest in Alenley Management! 🏠",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
              <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <div style="text-align: center; margin-bottom: 30px;">
                  <h1 style="color: #2563eb; margin: 0; font-size: 28px;">Thanks for Reaching Out!</h1>
                  <p style="color: #6b7280; margin: 10px 0 0 0; font-size: 16px;">We'll get back to you within 24 hours</p>
                </div>
                
                <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #16a34a; margin-bottom: 25px;">
                  <h2 style="color: #15803d; margin: 0 0 15px 0; font-size: 20px;">🎉 Special Launch Offer</h2>
                  <p style="color: #166534; margin: 0; font-size: 16px; line-height: 1.6;">
                    <strong>First 2 Months Completely FREE!</strong><br>
                    We're offering the first 25 property owners 2 months of professional property management at no cost. 
                    That's a $300 value - just for trying our service!
                  </p>
                </div>
                
                <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                  <h2 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px;">What You Get FREE:</h2>
                  <ul style="color: #1e3a8a; margin: 0; padding-left: 20px; line-height: 1.8;">
                    <li>Professional tenant screening & placement</li>
                    <li>24/7 maintenance coordination</li>
                    <li>Monthly financial reports</li>
                    <li>Online owner portal access</li>
                    <li>AI-powered rent optimization</li>
                    <li>Professional photography & marketing</li>
                  </ul>
                </div>
                
                <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; margin-bottom: 25px;">
                  <h2 style="color: #92400e; margin: 0 0 15px 0; font-size: 18px;">⚡ Why Choose Alenley Management?</h2>
                  <ul style="color: #78350f; margin: 0; padding-left: 20px; line-height: 1.8;">
                    <li><strong>Licensed Realtor</strong> with 15+ years experience</li>
                    <li><strong>Transparent pricing</strong> - $150/month flat fee</li>
                    <li><strong>Personal service</strong> - direct access to me</li>
                    <li><strong>Advanced technology</strong> - AI pricing & virtual tours</li>
                  </ul>
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                  <p style="color: #374151; margin: 0 0 20px 0; font-size: 16px;">
                    <strong>Ready to get started?</strong><br>
                    Call or text me directly:
                  </p>
                  <a href="tel:+13056993437" style="background-color: #16a34a; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block; margin: 0 10px 10px 0;">📞 (305) 699-3437</a>
                  <a href="mailto:info@alenley.com" style="background-color: #2563eb; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">✉️ Email Me</a>
                </div>
                
                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                  <p style="color: #6b7280; margin: 0; font-size: 14px;">
                    <strong>Alenley Management</strong><br>
                    Licensed Property Management & Real Estate<br>
                    Miami-Dade & Broward Counties<br>
                    <a href="https://alenley.com" style="color: #2563eb;">www.alenley.com</a>
                  </p>
                </div>
              </div>
            </div>
          `,
        })
      }
    }

    return {
      success: true,
      message: resend
        ? "Thank you for your interest! We'll contact you within 24 hours about claiming your FREE 2 months."
        : "Thank you for your interest! We'll contact you soon about claiming your FREE 2 months.",
    }
  } catch (error) {
    console.error("Error sending chat message:", error)
    return {
      success: true,
      message: "Thank you for your interest! We'll contact you soon about claiming your FREE 2 months.",
    }
  }
}

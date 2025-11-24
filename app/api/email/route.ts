import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json()

    // Validate required fields
    const requiredFields = [
      'fullName', 'email', 'phone', 'age', 'city', 'height', 
      'weight', 'education', 'profession', 'talents', 'whyParticipate'
    ]
    
    for (const field of requiredFields) {
      if (!formData[field] || !formData[field].toString().trim()) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Age validation
    const age = parseInt(formData.age)
    if (age < 18 || age > 30) {
      return NextResponse.json(
        { error: 'Age must be between 18 and 30' },
        { status: 400 }
      )
    }

    // Create HTML email template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Application - P&C Face of West Bengal</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f8f9fa; }
          .container { max-width: 800px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 28px; font-weight: bold; }
          .content { padding: 30px; }
          .section { margin-bottom: 30px; }
          .section-title { font-size: 20px; font-weight: bold; color: #667eea; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 2px solid #f0f0f0; }
          .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
          .info-item { background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #667eea; }
          .info-label { font-weight: bold; color: #555; margin-bottom: 5px; }
          .info-value { color: #333; }
          .full-width { grid-column: 1 / -1; }
          .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 14px; }
          .highlight { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 2px 8px; border-radius: 4px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 New Application Received</h1>
            <p>P&C Face of West Bengal - Season 6</p>
          </div>
          
          <div class="content">
            <div class="section">
              <div class="section-title">📋 Personal Information</div>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Full Name</div>
                  <div class="info-value">${formData.fullName}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Email</div>
                  <div class="info-value">${formData.email}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Phone</div>
                  <div class="info-value">${formData.phone}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Age</div>
                  <div class="info-value"><span class="highlight">${formData.age} years</span></div>
                </div>
                <div class="info-item">
                  <div class="info-label">City</div>
                  <div class="info-value">${formData.city}</div>
                </div>
              </div>
            </div>

            <div class="section">
              <div class="section-title">📐 Physical Attributes</div>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Height</div>
                  <div class="info-value">${formData.height} cm</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Weight</div>
                  <div class="info-value">${formData.weight} kg</div>
                </div>
              </div>
            </div>

            <div class="section">
              <div class="section-title">🎓 Background Information</div>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Education</div>
                  <div class="info-value">${formData.education}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Profession</div>
                  <div class="info-value">${formData.profession}</div>
                </div>
                ${formData.experience ? `
                <div class="info-item full-width">
                  <div class="info-label">Previous Experience</div>
                  <div class="info-value">${formData.experience}</div>
                </div>
                ` : ''}
              </div>
            </div>

            <div class="section">
              <div class="section-title">✨ Talents & Motivation</div>
              <div class="info-grid">
                <div class="info-item full-width">
                  <div class="info-label">Special Talents</div>
                  <div class="info-value">${formData.talents}</div>
                </div>
                <div class="info-item full-width">
                  <div class="info-label">Why P&C Face of West Bengal?</div>
                  <div class="info-value">${formData.whyParticipate}</div>
                </div>
                ${formData.socialMedia ? `
                <div class="info-item">
                  <div class="info-label">Social Media</div>
                  <div class="info-value">${formData.socialMedia}</div>
                </div>
                ` : ''}
              </div>
            </div>
          </div>

          <div class="footer">
            <p><strong>P&C Face of West Bengal - Season 6</strong></p>
            <p>Application received on ${new Date().toLocaleDateString('en-IN', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              timeZone: 'Asia/Kolkata'
            })} at ${new Date().toLocaleTimeString('en-IN', {
              hour: '2-digit',
              minute: '2-digit',
              timeZone: 'Asia/Kolkata'
            })} IST</p>
          </div>
        </div>
      </body>
      </html>
    `



    // Send confirmation email to applicant
    const confirmationHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Application Confirmation - P&C Face of West Bengal</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f8f9fa; }
          .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
          .content { padding: 30px; }
          .highlight { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0; }
          .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Application Received!</h1>
            <p>Thank you for applying to P&C Face of West Bengal</p>
          </div>
          
          <div class="content">
            <p>Dear <strong>${formData.fullName}</strong>,</p>
            
            <p>Congratulations! Your application for <strong>P&C Face of West Bengal - Season 6</strong> has been successfully submitted.</p>
            
            <div class="highlight">
              <h3>What's Next?</h3>
              <p>Our team will review your application and contact you within <strong>7-10 business days</strong> with updates on the selection process.</p>
            </div>
            
            <p>We were impressed by your application and look forward to potentially having you as part of this prestigious pageant.</p>
            
            <p><strong>Important:</strong> Please keep this email for your records. If you have any questions, feel free to reach out to our team.</p>
            
            <p>Best of luck!</p>
            
            <p>Warm regards,<br>
            <strong>The P&C Face of West Bengal Team</strong></p>
          </div>
          
          <div class="footer">
            <p>P&C Face of West Bengal - Season 6</p>
            <p>The most prestigious pageant in West Bengal</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Send confirmation email to the user
    const { data, error } = await resend.emails.send({
      from: 'P&C Face of West Bengal <noreply@faceofwestbengal.co.in>',
      to: [formData.email],
      subject: '🌟 Application Confirmation - P&C Face of West Bengal Season 6',
      html: confirmationHtml,
      text: `
Dear ${formData.fullName},

Congratulations! Your application for P&C Face of West Bengal - Season 6 has been successfully submitted.

What's Next?
Our team will review your application and contact you within 7-10 business days with updates on the selection process.

We were impressed by your application and look forward to potentially having you as part of this prestigious pageant.

Important: Please keep this email for your records. If you have any questions, feel free to reach out to our team.

Best of luck!

Warm regards,
The P&C Face of West Bengal Team
      `,
    })

    if (error) {
      console.error('Confirmation email error:', error)
      return NextResponse.json(
        { error: 'Failed to send confirmation email', details: error.message || error },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: 'Application submitted successfully!',
      emailId: data?.id,
      sentTo: formData.email
    })

  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}

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

    // Create detailed HTML email template for personal Gmail
    const personalEmailTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New P&C Face Application - ${formData.fullName}</title>
        <style>
          body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            margin: 0; 
            padding: 0; 
            background-color: #f8f9fa; 
          }
          .container { 
            max-width: 900px; 
            margin: 0 auto; 
            background: white; 
            border-radius: 15px; 
            overflow: hidden; 
            box-shadow: 0 8px 30px rgba(0,0,0,0.12); 
          }
          .header { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            color: white; 
            padding: 40px; 
            text-align: center; 
          }
          .header h1 { 
            margin: 0; 
            font-size: 32px; 
            font-weight: bold; 
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          }
          .header p { 
            margin: 10px 0 0 0; 
            font-size: 18px; 
            opacity: 0.9; 
          }
          .content { 
            padding: 40px; 
          }
          .applicant-name {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            margin-bottom: 30px;
          }
          .applicant-name h2 {
            margin: 0;
            font-size: 28px;
          }
          .section { 
            margin-bottom: 35px; 
            background: #f8f9fa;
            border-radius: 12px;
            padding: 25px;
            border-left: 5px solid #667eea;
          }
          .section-title { 
            font-size: 22px; 
            font-weight: bold; 
            color: #667eea; 
            margin-bottom: 20px; 
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .info-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
            gap: 20px; 
          }
          .info-item { 
            background: white; 
            padding: 18px; 
            border-radius: 10px; 
            border: 1px solid #e9ecef;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          }
          .info-label { 
            font-weight: bold; 
            color: #495057; 
            margin-bottom: 8px; 
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .info-value { 
            color: #212529; 
            font-size: 16px;
            font-weight: 500;
          }
          .full-width { 
            grid-column: 1 / -1; 
          }
          .highlight-badge { 
            background: linear-gradient(135deg, #667eea, #764ba2); 
            color: white; 
            padding: 6px 12px; 
            border-radius: 20px; 
            font-weight: bold;
            display: inline-block;
          }
          .contact-info {
            background: linear-gradient(135deg, #28a745, #20c997);
            color: white;
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
          }
          .footer { 
            background: #343a40; 
            color: white;
            padding: 25px; 
            text-align: center; 
          }
          .timestamp {
            background: #e9ecef;
            padding: 15px;
            border-radius: 8px;
            font-size: 14px;
            color: #6c757d;
            text-align: center;
            margin-top: 20px;
          }
          .social-badge {
            background: #17a2b8;
            color: white;
            padding: 8px 15px;
            border-radius: 25px;
            display: inline-block;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🌟 New Application Received</h1>
            <p>P&C Face of West Bengal - Season 6</p>
          </div>
          
          <div class="content">
            <div class="applicant-name">
              <h2>${formData.fullName}</h2>
              <p>New Applicant for Season 6</p>
            </div>

            <div class="section">
              <div class="section-title">👤 Personal Information</div>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Full Name</div>
                  <div class="info-value">${formData.fullName}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Age</div>
                  <div class="info-value"><span class="highlight-badge">${formData.age} years</span></div>
                </div>
                <div class="info-item">
                  <div class="info-label">City</div>
                  <div class="info-value">${formData.city}</div>
                </div>
              </div>
            </div>

            <div class="contact-info">
              <h3 style="margin: 0 0 15px 0;">📞 Contact Information</h3>
              <div class="info-grid">
                <div>
                  <strong>Email:</strong> <a href="mailto:${formData.email}" style="color: white; text-decoration: underline;">${formData.email}</a>
                </div>
                <div>
                  <strong>Phone:</strong> <a href="tel:${formData.phone}" style="color: white; text-decoration: underline;">${formData.phone}</a>
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
              <div class="section-title">🎓 Educational & Professional Background</div>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Highest Education</div>
                  <div class="info-value">${formData.education}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Current Profession</div>
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
              <div class="section-title">✨ Talents & Special Skills</div>
              <div class="info-grid">
                <div class="info-item full-width">
                  <div class="info-label">Special Talents</div>
                  <div class="info-value">${formData.talents}</div>
                </div>
              </div>
            </div>

            <div class="section">
              <div class="section-title">💭 Motivation & Goals</div>
              <div class="info-grid">
                <div class="info-item full-width">
                  <div class="info-label">Why P&C Face of West Bengal?</div>
                  <div class="info-value">${formData.whyParticipate}</div>
                </div>
              </div>
            </div>

            ${formData.socialMedia ? `
            <div class="section">
              <div class="section-title">📱 Social Media Presence</div>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Social Media Handle</div>
                  <div class="info-value">
                    <span class="social-badge">${formData.socialMedia}</span>
                  </div>
                </div>
              </div>
            </div>
            ` : ''}

            <div class="timestamp">
              <strong>Application Submitted:</strong> ${new Date().toLocaleDateString('en-IN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                timeZone: 'Asia/Kolkata'
              })} at ${new Date().toLocaleTimeString('en-IN', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZone: 'Asia/Kolkata'
              })} IST
            </div>
          </div>

          <div class="footer">
            <h3>P&C Face of West Bengal - Season 6</h3>
            <p>Application Management System</p>
            <p style="font-size: 12px; opacity: 0.8;">This email was automatically generated from the application form submission.</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Send detailed notification to admin
    const { data, error } = await resend.emails.send({
      from: 'P&C Face Applications <applications@faceofwestbengal.co.in>',
      to: [process.env.ADMIN_EMAIL || 'vedantkhanna809@gmail.com'],
      subject: `🌟 NEW APPLICATION: ${formData.fullName} (Age: ${formData.age}) - P&C Face Season 6`,
      html: personalEmailTemplate,
      text: `
NEW APPLICATION RECEIVED - P&C Face of West Bengal Season 6

APPLICANT: ${formData.fullName}
===============================================

PERSONAL INFORMATION:
- Full Name: ${formData.fullName}
- Age: ${formData.age} years
- City: ${formData.city}

CONTACT DETAILS:
- Email: ${formData.email}
- Phone: ${formData.phone}

PHYSICAL ATTRIBUTES:
- Height: ${formData.height} cm
- Weight: ${formData.weight} kg

BACKGROUND:
- Education: ${formData.education}
- Profession: ${formData.profession}
${formData.experience ? `- Previous Experience: ${formData.experience}` : '- No previous experience mentioned'}

TALENTS & SKILLS:
${formData.talents}

MOTIVATION:
${formData.whyParticipate}

${formData.socialMedia ? `SOCIAL MEDIA: ${formData.socialMedia}` : 'No social media provided'}

===============================================
Application submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST

This is an automated notification from the P&C Face of West Bengal application system.
      `,
      // Add reply-to for easy response
      replyTo: formData.email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send notification email', details: error.message || error },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: 'Application submitted successfully! Admin notification sent.',
      emailId: data?.id,
      applicant: formData.fullName,
      adminEmail: process.env.ADMIN_EMAIL || 'vedantkhanna809@gmail.com',
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export function Privacy() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="h1 mb-4">Privacy Policy</h1>
            <p className="text-text-muted mb-8">Effective Date: July 18, 2026</p>

            <div className="space-y-10 text-[15px]">
              <section>
                <p className="text-text-secondary leading-relaxed">
                  RollFleet, LLC ("RollFleet," "we," "us," or "our") is committed to protecting your privacy. This 
                  Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use 
                  the RollFleet transportation management platform (the "Service").
                </p>
                <p className="text-text-secondary leading-relaxed mt-4">
                  By using our Service, you consent to the data practices described in this policy. If you do not agree, 
                  please discontinue use of the Service.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">1. Data Controller</h2>
                <p className="text-text-secondary leading-relaxed">
                  For the purposes of applicable data protection laws, RollFleet, LLC is the data controller responsible 
                  for your personal data. For data processing inquiries, contact us at{' '}
                  <a href="mailto:privacy@rollfleet.com" className="text-accent hover:underline">privacy@rollfleet.com</a>.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">2. Information We Collect</h2>
                
                <h3 className="font-semibold text-text-primary mt-6 mb-3">2.1 Information You Provide</h3>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li><strong className="text-text-primary">Account Information:</strong> Name, email address, phone number, company name, and password when you register</li>
                  <li><strong className="text-text-primary">Business Information:</strong> MC number, DOT number, USDOT information, EIN, and business address</li>
                  <li><strong className="text-text-primary">Driver Information:</strong> Driver names, license numbers, contact information, and pay rates</li>
                  <li><strong className="text-text-primary">Vehicle Information:</strong> Truck and trailer details, VIN numbers, and equipment records</li>
                  <li><strong className="text-text-primary">Load Data:</strong> Shipment details, rates, pickup/delivery addresses, broker information</li>
                  <li><strong className="text-text-primary">Documents:</strong> Rate confirmations, bills of lading, invoices, and other uploaded files</li>
                  <li><strong className="text-text-primary">Financial Information:</strong> Bank account details for settlements, billing information</li>
                  <li><strong className="text-text-primary">Communications:</strong> Support tickets, feedback, and correspondence with us</li>
                </ul>

                <h3 className="font-semibold text-text-primary mt-6 mb-3">2.2 Information Collected Automatically</h3>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li><strong className="text-text-primary">Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                  <li><strong className="text-text-primary">Usage Data:</strong> Pages visited, features used, clicks, time spent, and navigation patterns</li>
                  <li><strong className="text-text-primary">Log Data:</strong> Access times, error logs, and diagnostic information</li>
                  <li><strong className="text-text-primary">Cookies:</strong> Session cookies, authentication tokens, and preference cookies (see Section 9)</li>
                </ul>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">3. How We Use Your Information</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We use your information for the following purposes and legal bases:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-text-secondary border border-border rounded-lg overflow-hidden">
                    <thead className="bg-bg-elevated">
                      <tr>
                        <th className="text-left p-3 font-semibold text-text-primary border-b border-border">Purpose</th>
                        <th className="text-left p-3 font-semibold text-text-primary border-b border-border">Legal Basis (GDPR)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-3">Provide and maintain the Service</td>
                        <td className="p-3">Contract performance</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3">Process transactions and settlements</td>
                        <td className="p-3">Contract performance</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3">Send service-related communications</td>
                        <td className="p-3">Contract performance / Legitimate interest</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3">Provide customer support</td>
                        <td className="p-3">Contract performance</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3">Improve and personalize the Service</td>
                        <td className="p-3">Legitimate interest</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3">Analyze usage and optimize features</td>
                        <td className="p-3">Legitimate interest</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3">Detect and prevent fraud or abuse</td>
                        <td className="p-3">Legitimate interest / Legal obligation</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3">Comply with legal obligations</td>
                        <td className="p-3">Legal obligation</td>
                      </tr>
                      <tr>
                        <td className="p-3">Send marketing communications (with consent)</td>
                        <td className="p-3">Consent</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">4. AI-Powered Features</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Our Service uses artificial intelligence to parse rate confirmations and extract load details. 
                  When you upload documents:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li>Documents are processed by AI systems to extract structured data (broker info, addresses, rates, dates)</li>
                  <li><strong className="text-text-primary">We do not use your data to train AI models.</strong> Your documents are processed solely to provide the Service</li>
                  <li>AI processing may involve third-party services (e.g., OpenAI) under strict data processing agreements</li>
                  <li>Third-party AI providers do not retain your data after processing</li>
                  <li>Extracted data is stored in your account and subject to this Privacy Policy</li>
                </ul>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">5. Information Sharing and Disclosure</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information with:
                </p>
                
                <h3 className="font-semibold text-text-primary mt-6 mb-3">5.1 Service Providers (Sub-processors)</h3>
                <p className="text-text-secondary leading-relaxed mb-3">
                  We engage trusted third parties to help operate our Service:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-text-secondary border border-border rounded-lg overflow-hidden">
                    <thead className="bg-bg-elevated">
                      <tr>
                        <th className="text-left p-3 font-semibold text-text-primary border-b border-border">Provider</th>
                        <th className="text-left p-3 font-semibold text-text-primary border-b border-border">Purpose</th>
                        <th className="text-left p-3 font-semibold text-text-primary border-b border-border">Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-3">Microsoft Azure</td>
                        <td className="p-3">Cloud hosting, data storage</td>
                        <td className="p-3">United States</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3">Clerk</td>
                        <td className="p-3">Authentication services</td>
                        <td className="p-3">United States</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3">OpenAI</td>
                        <td className="p-3">AI document processing</td>
                        <td className="p-3">United States</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3">Stripe</td>
                        <td className="p-3">Payment processing</td>
                        <td className="p-3">United States</td>
                      </tr>
                      <tr>
                        <td className="p-3">Cloudflare</td>
                        <td className="p-3">CDN, security</td>
                        <td className="p-3">Global</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="font-semibold text-text-primary mt-6 mb-3">5.2 Business Partners</h3>
                <p className="text-text-secondary leading-relaxed">
                  With your authorization, we may share invoice data with factoring companies you designate for 
                  payment processing.
                </p>

                <h3 className="font-semibold text-text-primary mt-6 mb-3">5.3 Legal Requirements</h3>
                <p className="text-text-secondary leading-relaxed">
                  We may disclose information when required by law, subpoena, court order, or to protect our rights, 
                  safety, or property.
                </p>

                <h3 className="font-semibold text-text-primary mt-6 mb-3">5.4 Business Transfers</h3>
                <p className="text-text-secondary leading-relaxed">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred 
                  as part of the transaction with prior notice.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">6. International Data Transfers</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Your data is primarily stored in the United States. If you access the Service from outside the U.S., 
                  your information will be transferred to the United States.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  For transfers from the European Economic Area (EEA), United Kingdom, or Switzerland, we rely on 
                  Standard Contractual Clauses (SCCs) approved by the European Commission to ensure adequate protection. 
                  You may request a copy of our SCCs by contacting us.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">7. Data Retention</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We retain your data as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li><strong className="text-text-primary">Account Data:</strong> Retained while your account is active and for 90 days after deletion</li>
                  <li><strong className="text-text-primary">Load and Transaction Data:</strong> Retained for 7 years for tax and compliance purposes</li>
                  <li><strong className="text-text-primary">Uploaded Documents:</strong> Retained while your account is active; deleted within 90 days of account termination</li>
                  <li><strong className="text-text-primary">Usage Logs:</strong> Retained for 12 months</li>
                </ul>
                <p className="text-text-secondary leading-relaxed mt-4">
                  You may request earlier deletion of your data, subject to legal retention requirements.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">8. Data Security</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We implement robust security measures to protect your data:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li><strong className="text-text-primary">Encryption:</strong> TLS 1.3 for data in transit; AES-256 encryption for data at rest</li>
                  <li><strong className="text-text-primary">Access Controls:</strong> Role-based access, multi-factor authentication</li>
                  <li><strong className="text-text-primary">Tenant Isolation:</strong> PostgreSQL row-level security ensures data separation between customers</li>
                  <li><strong className="text-text-primary">Infrastructure:</strong> Hosted on Microsoft Azure with enterprise-grade security certifications</li>
                  <li><strong className="text-text-primary">Monitoring:</strong> 24/7 security monitoring and intrusion detection</li>
                  <li><strong className="text-text-primary">Audits:</strong> Regular security assessments and penetration testing</li>
                </ul>
                <p className="text-text-secondary leading-relaxed mt-4">
                  While we strive to protect your data, no method of transmission over the Internet is 100% secure. 
                  We cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">9. Cookies and Tracking</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We use cookies and similar technologies:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li><strong className="text-text-primary">Essential Cookies:</strong> Required for authentication, session management, and security (cannot be disabled)</li>
                  <li><strong className="text-text-primary">Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong className="text-text-primary">Analytics Cookies:</strong> Help us understand how users interact with the Service</li>
                </ul>
                <p className="text-text-secondary leading-relaxed mt-4">
                  You can control non-essential cookies through your browser settings. Disabling cookies may affect 
                  Service functionality.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">10. Your Rights</h2>
                
                <h3 className="font-semibold text-text-primary mt-6 mb-3">10.1 Rights Under GDPR (EEA, UK, Switzerland)</h3>
                <p className="text-text-secondary leading-relaxed mb-3">
                  If you are in the EEA, UK, or Switzerland, you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li><strong className="text-text-primary">Access:</strong> Request a copy of your personal data (Art. 15)</li>
                  <li><strong className="text-text-primary">Rectification:</strong> Correct inaccurate or incomplete data (Art. 16)</li>
                  <li><strong className="text-text-primary">Erasure:</strong> Request deletion of your data ("right to be forgotten") (Art. 17)</li>
                  <li><strong className="text-text-primary">Restriction:</strong> Limit how we process your data (Art. 18)</li>
                  <li><strong className="text-text-primary">Portability:</strong> Receive your data in a structured, machine-readable format (Art. 20)</li>
                  <li><strong className="text-text-primary">Objection:</strong> Object to processing based on legitimate interests (Art. 21)</li>
                  <li><strong className="text-text-primary">Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
                  <li><strong className="text-text-primary">Lodge Complaint:</strong> File a complaint with your local data protection authority</li>
                </ul>

                <h3 className="font-semibold text-text-primary mt-6 mb-3">10.2 Rights Under CCPA/CPRA (California Residents)</h3>
                <p className="text-text-secondary leading-relaxed mb-3">
                  If you are a California resident, you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li><strong className="text-text-primary">Know:</strong> Request disclosure of what personal information we collect, use, and share</li>
                  <li><strong className="text-text-primary">Delete:</strong> Request deletion of your personal information</li>
                  <li><strong className="text-text-primary">Correct:</strong> Request correction of inaccurate personal information</li>
                  <li><strong className="text-text-primary">Opt-Out:</strong> Opt out of the sale or sharing of personal information (note: we do not sell personal information)</li>
                  <li><strong className="text-text-primary">Non-Discrimination:</strong> We will not discriminate against you for exercising your rights</li>
                </ul>
                <p className="text-text-secondary leading-relaxed mt-4">
                  <strong className="text-text-primary">We do not sell or share personal information</strong> as defined under CCPA/CPRA.
                </p>

                <h3 className="font-semibold text-text-primary mt-6 mb-3">10.3 Exercising Your Rights</h3>
                <p className="text-text-secondary leading-relaxed">
                  To exercise any of these rights, contact us at{' '}
                  <a href="mailto:privacy@rollfleet.com" className="text-accent hover:underline">privacy@rollfleet.com</a>. 
                  We will respond within 30 days (GDPR) or 45 days (CCPA). We may need to verify your identity before 
                  processing your request.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">11. Children's Privacy</h2>
                <p className="text-text-secondary leading-relaxed">
                  The Service is not directed to individuals under 18 years of age. We do not knowingly collect 
                  personal information from children. If we become aware that we have collected data from a child 
                  without parental consent, we will delete it promptly.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">12. Third-Party Links</h2>
                <p className="text-text-secondary leading-relaxed">
                  The Service may contain links to third-party websites or services. We are not responsible for the 
                  privacy practices of these third parties. We encourage you to review their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">13. Changes to This Policy</h2>
                <p className="text-text-secondary leading-relaxed">
                  We may update this Privacy Policy periodically. Material changes will be communicated via email 
                  or through the Service at least 30 days before taking effect. The "Effective Date" at the top 
                  indicates when the policy was last revised. Continued use of the Service after changes constitutes 
                  acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">14. Contact Us</h2>
                <p className="text-text-secondary leading-relaxed">
                  For privacy-related questions, data requests, or concerns, contact us at:<br /><br />
                  <strong className="text-text-primary">Privacy Inquiries:</strong>{' '}
                  <a href="mailto:privacy@rollfleet.com" className="text-accent hover:underline">privacy@rollfleet.com</a><br />
                  <strong className="text-text-primary">General Support:</strong>{' '}
                  <a href="mailto:support@rollfleet.com" className="text-accent hover:underline">support@rollfleet.com</a><br />
                  <strong className="text-text-primary">Address:</strong> RollFleet, LLC, Wilmington, Delaware, USA
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

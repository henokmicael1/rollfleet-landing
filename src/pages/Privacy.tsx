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
            <p className="text-text-muted mb-8">Last updated: July 18, 2026</p>

            <div className="prose prose-slate max-w-none space-y-8">
              <section>
                <h2 className="h2 text-xl mb-4">1. Introduction</h2>
                <p className="text-text-secondary leading-relaxed">
                  RollFleet ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you use our 
                  transportation management system.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">2. Information We Collect</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We collect information you provide directly:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-4">
                  <li>Account information (name, email, company details)</li>
                  <li>Business data (MC number, DOT number, driver information)</li>
                  <li>Load and shipment details</li>
                  <li>Financial information for billing and settlements</li>
                  <li>Documents you upload (rate confirmations, BOLs)</li>
                </ul>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We automatically collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li>Device and browser information</li>
                  <li>IP address and location data</li>
                  <li>Usage patterns and feature interactions</li>
                  <li>Error logs and performance data</li>
                </ul>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">3. How We Use Your Information</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li>Provide and maintain our Service</li>
                  <li>Process transactions and settlements</li>
                  <li>Send service-related communications</li>
                  <li>Improve and personalize user experience</li>
                  <li>Analyze usage trends and optimize features</li>
                  <li>Detect and prevent fraud or abuse</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">4. AI-Powered Features</h2>
                <p className="text-text-secondary leading-relaxed">
                  Our Service uses AI to parse rate confirmations and extract load details. Documents you upload 
                  are processed by our AI systems. We do not use your business data to train AI models. 
                  Extracted information is stored securely and associated with your account.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">5. Data Sharing</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li><strong>Service providers:</strong> Cloud hosting (Microsoft Azure), authentication (Clerk), 
                  payment processing, and analytics services</li>
                  <li><strong>Business partners:</strong> Factoring companies you authorize for invoice submission</li>
                  <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
                </ul>
                <p className="text-text-secondary leading-relaxed mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">6. Data Security</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We implement robust security measures:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li>Encryption in transit (TLS) and at rest</li>
                  <li>Row-level security for tenant data isolation</li>
                  <li>Regular security audits and monitoring</li>
                  <li>Access controls and authentication via Clerk</li>
                  <li>Hosted on Microsoft Azure with enterprise-grade infrastructure</li>
                </ul>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">7. Data Retention</h2>
                <p className="text-text-secondary leading-relaxed">
                  We retain your data for as long as your account is active or as needed to provide services. 
                  After account deletion, we retain data for up to 90 days for backup purposes, then permanently 
                  delete it. Some data may be retained longer for legal or regulatory compliance.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">8. Your Rights</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your account and data</li>
                  <li>Export your data in a portable format</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">9. Cookies and Tracking</h2>
                <p className="text-text-secondary leading-relaxed">
                  We use essential cookies for authentication and session management. We may use analytics 
                  cookies to understand usage patterns. You can control cookie preferences through your browser 
                  settings.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">10. Children's Privacy</h2>
                <p className="text-text-secondary leading-relaxed">
                  Our Service is not intended for users under 18 years of age. We do not knowingly collect 
                  information from children.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">11. Changes to This Policy</h2>
                <p className="text-text-secondary leading-relaxed">
                  We may update this Privacy Policy periodically. We will notify you of material changes via 
                  email or through the Service. The "Last updated" date indicates when the policy was last revised.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">12. Contact Us</h2>
                <p className="text-text-secondary leading-relaxed">
                  For privacy-related questions or to exercise your rights, contact us at{' '}
                  <a href="mailto:privacy@rollfleet.com" className="text-accent hover:underline">
                    privacy@rollfleet.com
                  </a>
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

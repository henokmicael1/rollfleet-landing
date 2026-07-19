import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export function Terms() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="h1 mb-4">Terms of Service</h1>
            <p className="text-text-muted mb-8">Last updated: July 18, 2026</p>

            <div className="prose prose-slate max-w-none space-y-8">
              <section>
                <h2 className="h2 text-xl mb-4">1. Agreement to Terms</h2>
                <p className="text-text-secondary leading-relaxed">
                  By accessing or using RollFleet ("Service"), you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our Service.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">2. Description of Service</h2>
                <p className="text-text-secondary leading-relaxed">
                  RollFleet provides a transportation management system (TMS) designed for owner-operators and 
                  small trucking fleets. Our Service includes dispatch management, load tracking, driver settlements, 
                  invoicing, and related fleet management tools.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">3. Account Registration</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  To use our Service, you must create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Be responsible for all activities under your account</li>
                </ul>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">4. Acceptable Use</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li>Use the Service for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to any part of the Service</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Upload malicious code or content</li>
                  <li>Resell or redistribute the Service without authorization</li>
                </ul>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">5. Payment Terms</h2>
                <p className="text-text-secondary leading-relaxed">
                  Paid plans are billed monthly or annually as selected. All fees are non-refundable except as 
                  required by law. We reserve the right to change pricing with 30 days notice. Free tier users 
                  may be subject to usage limitations.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">6. Data and Privacy</h2>
                <p className="text-text-secondary leading-relaxed">
                  Your use of the Service is also governed by our Privacy Policy. You retain ownership of your 
                  data. We use your data only to provide and improve the Service. We implement industry-standard 
                  security measures to protect your information.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">7. Intellectual Property</h2>
                <p className="text-text-secondary leading-relaxed">
                  The Service and its original content, features, and functionality are owned by RollFleet and 
                  are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">8. Limitation of Liability</h2>
                <p className="text-text-secondary leading-relaxed">
                  RollFleet shall not be liable for any indirect, incidental, special, consequential, or punitive 
                  damages resulting from your use of or inability to use the Service. Our total liability shall 
                  not exceed the amount paid by you in the 12 months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">9. Termination</h2>
                <p className="text-text-secondary leading-relaxed">
                  We may terminate or suspend your account at any time for violation of these terms. You may 
                  cancel your account at any time. Upon termination, your right to use the Service ceases 
                  immediately, and you may request export of your data within 30 days.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">10. Changes to Terms</h2>
                <p className="text-text-secondary leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users of material 
                  changes via email or through the Service. Continued use after changes constitutes acceptance 
                  of the new terms.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">11. Contact Us</h2>
                <p className="text-text-secondary leading-relaxed">
                  If you have questions about these Terms, please contact us at{' '}
                  <a href="mailto:legal@rollfleet.com" className="text-accent hover:underline">
                    legal@rollfleet.com
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

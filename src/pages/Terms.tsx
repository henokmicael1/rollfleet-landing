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
            <p className="text-text-muted mb-8">Effective Date: July 18, 2026</p>

            <div className="space-y-10 text-[15px]">
              <section>
                <p className="text-text-secondary leading-relaxed">
                  These Terms of Service ("Terms" or "Agreement") constitute a legally binding agreement between 
                  you ("Customer," "you," or "your") and RollFleet, LLC ("RollFleet," "Company," "we," "us," or "our") 
                  governing your access to and use of the RollFleet transportation management system platform 
                  (the "Service" or "Platform").
                </p>
                <p className="text-text-secondary leading-relaxed mt-4">
                  <strong className="text-text-primary">BY ACCESSING OR USING THE SERVICE, YOU AGREE TO BE BOUND BY THESE TERMS.</strong> If you 
                  do not agree to all of these Terms, you may not access or use the Service. If you are using the 
                  Service on behalf of a company or other legal entity, you represent that you have the authority 
                  to bind that entity to these Terms.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">1. Definitions</h2>
                <ul className="space-y-3 text-text-secondary leading-relaxed">
                  <li><strong className="text-text-primary">"Customer Data"</strong> means all data, content, and information submitted by you to the Service, including load information, driver data, documents, and business records.</li>
                  <li><strong className="text-text-primary">"Service"</strong> means the RollFleet cloud-based transportation management platform, including all features, tools, and APIs made available by RollFleet.</li>
                  <li><strong className="text-text-primary">"Subscription"</strong> means your paid or free access to the Service under a specific plan with defined features and limitations.</li>
                  <li><strong className="text-text-primary">"User"</strong> means any individual authorized by Customer to access the Service, including employees, drivers, and contractors.</li>
                </ul>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">2. License Grant and Restrictions</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Subject to your compliance with these Terms, RollFleet grants you a <strong className="text-text-primary">limited, non-exclusive, 
                  non-transferable, revocable license</strong> to access and use the Service solely for your internal 
                  business purposes during the Subscription term.
                </p>
                <p className="text-text-secondary leading-relaxed mb-3">
                  <strong className="text-text-primary">You may not:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li>Sublicense, resell, rent, lease, or distribute the Service to any third party</li>
                  <li>Modify, adapt, reverse engineer, decompile, or disassemble any part of the Service</li>
                  <li>Copy, frame, or mirror any portion of the Service</li>
                  <li>Access the Service to build a competitive product or service</li>
                  <li>Use the Service to develop or train machine learning models without express written consent</li>
                  <li>Remove or alter any proprietary notices, labels, or marks</li>
                </ul>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">3. Account Registration</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  To use the Service, you must create an account and provide accurate, complete, and current information. 
                  You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized access or security breach</li>
                  <li>Ensuring all Users comply with these Terms</li>
                </ul>
                <p className="text-text-secondary leading-relaxed mt-4">
                  We reserve the right to suspend or terminate accounts that contain false information or violate these Terms.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">4. Subscription Plans and Billing</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  <strong className="text-text-primary">4.1 Plans.</strong> The Service is offered under various subscription plans with different 
                  features and pricing. The Free plan includes limitations on trucks, drivers, and features. Paid plans 
                  are billed monthly or annually as selected at checkout.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  <strong className="text-text-primary">4.2 Auto-Renewal.</strong> Paid subscriptions automatically renew at the end of each billing 
                  cycle unless cancelled at least 24 hours before the renewal date. You authorize us to charge your 
                  payment method on file for renewal fees.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  <strong className="text-text-primary">4.3 Price Changes.</strong> We may change subscription fees upon 30 days' prior notice. 
                  Price changes take effect at the start of your next billing cycle.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  <strong className="text-text-primary">4.4 Refunds.</strong> All fees are non-refundable except as required by applicable law. 
                  If you cancel, you retain access until the end of your current billing period.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  <strong className="text-text-primary">4.5 Taxes.</strong> Fees exclude applicable sales, use, and other taxes, which you are 
                  responsible for paying.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">5. Acceptable Use Policy</h2>
                <p className="text-text-secondary leading-relaxed mb-3">
                  You agree not to use the Service to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li>Violate any applicable law, regulation, or third-party rights</li>
                  <li>Upload or transmit viruses, malware, or other malicious code</li>
                  <li>Attempt to gain unauthorized access to the Service, other accounts, or computer systems</li>
                  <li>Interfere with or disrupt the integrity or performance of the Service</li>
                  <li>Harvest, collect, or scrape data from the Service without authorization</li>
                  <li>Use the Service to send spam, unsolicited messages, or fraudulent content</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation</li>
                  <li>Circumvent usage limits, rate limits, or access controls</li>
                  <li>Store or transmit content that is unlawful, defamatory, or infringing</li>
                </ul>
                <p className="text-text-secondary leading-relaxed mt-4">
                  Violation of this Acceptable Use Policy may result in immediate suspension or termination without notice.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">6. Customer Data and Privacy</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  <strong className="text-text-primary">6.1 Ownership.</strong> You retain all rights, title, and interest in your Customer Data. 
                  We claim no ownership over your business data, documents, or content.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  <strong className="text-text-primary">6.2 License to Process.</strong> You grant RollFleet a limited license to use, process, 
                  and store Customer Data solely to provide the Service and as described in our Privacy Policy.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  <strong className="text-text-primary">6.3 Privacy.</strong> Our collection and use of personal information is governed by our{' '}
                  <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>, which is incorporated into 
                  these Terms by reference.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  <strong className="text-text-primary">6.4 Data Security.</strong> We implement industry-standard technical and organizational 
                  security measures to protect Customer Data, including encryption in transit and at rest, access controls, 
                  and regular security audits.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">7. AI-Powered Features</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  The Service includes AI-powered features, including automated rate confirmation parsing. By using these features:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                  <li><strong className="text-text-primary">Accuracy:</strong> AI-generated outputs may contain errors. You are responsible for 
                  reviewing and verifying all extracted data before use.</li>
                  <li><strong className="text-text-primary">No Training:</strong> We do not use your Customer Data to train our AI models or 
                  third-party AI systems. Documents are processed solely to provide the Service.</li>
                  <li><strong className="text-text-primary">Third-Party AI:</strong> AI features may utilize third-party services (e.g., OpenAI). 
                  Such services are bound by data processing agreements and do not retain your data beyond processing.</li>
                  <li><strong className="text-text-primary">Human Verification:</strong> AI outputs are not a substitute for professional judgment. 
                  Always verify load details, rates, and business information.</li>
                </ul>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">8. Service Availability</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  We strive to maintain 99.9% uptime for the Service. However, the Service may be temporarily unavailable 
                  due to scheduled maintenance, emergency repairs, or circumstances beyond our control.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  We will use commercially reasonable efforts to provide advance notice of scheduled maintenance and 
                  minimize disruption. We are not liable for any damages resulting from Service unavailability.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">9. Intellectual Property</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  The Service, including its source code, features, functionality, user interface, documentation, 
                  trademarks, and all related intellectual property, is owned by RollFleet and protected by copyright, 
                  trademark, and other intellectual property laws.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  These Terms do not grant you any rights to use RollFleet's trademarks, logos, or branding without 
                  prior written consent.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">10. Disclaimer of Warranties</h2>
                <p className="text-text-secondary leading-relaxed uppercase font-medium">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS 
                  OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
                  PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE 
                  UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. YOUR USE OF 
                  THE SERVICE IS AT YOUR SOLE RISK.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">11. Limitation of Liability</h2>
                <p className="text-text-secondary leading-relaxed mb-4 uppercase font-medium">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, ROLLFLEET SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
                  SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, 
                  BUSINESS OPPORTUNITIES, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE, 
                  REGARDLESS OF WHETHER SUCH DAMAGES WERE FORESEEABLE OR WHETHER ROLLFLEET WAS ADVISED OF THE POSSIBILITY.
                </p>
                <p className="text-text-secondary leading-relaxed uppercase font-medium">
                  OUR TOTAL CUMULATIVE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICE 
                  SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNTS PAID BY YOU TO ROLLFLEET IN THE TWELVE (12) MONTHS 
                  PRECEDING THE CLAIM, OR (B) ONE HUNDRED DOLLARS ($100).
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">12. Indemnification</h2>
                <p className="text-text-secondary leading-relaxed">
                  You agree to indemnify, defend, and hold harmless RollFleet and its officers, directors, employees, 
                  agents, and affiliates from and against any and all claims, damages, losses, liabilities, costs, and 
                  expenses (including reasonable attorneys' fees) arising out of or related to: (a) your use of the Service; 
                  (b) your Customer Data; (c) your violation of these Terms; or (d) your violation of any rights of a third party.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">13. Termination</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  <strong className="text-text-primary">13.1 By You.</strong> You may cancel your subscription at any time through your account 
                  settings or by contacting support. Cancellation takes effect at the end of your current billing period.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  <strong className="text-text-primary">13.2 By Us.</strong> We may suspend or terminate your access immediately without notice 
                  if you breach these Terms, fail to pay fees, or engage in conduct that harms the Service or other users. 
                  We may also terminate for convenience with 30 days' notice.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  <strong className="text-text-primary">13.3 Effect of Termination.</strong> Upon termination, your license to use the Service 
                  ends immediately. You may request export of your Customer Data within 30 days of termination. After 30 days, 
                  we may delete your data in accordance with our data retention policies.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  <strong className="text-text-primary">13.4 Survival.</strong> Sections 6, 9, 10, 11, 12, 14, and 15 shall survive termination.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">14. Dispute Resolution</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  <strong className="text-text-primary">14.1 Governing Law.</strong> These Terms are governed by the laws of the State of Delaware, 
                  without regard to conflict of law principles.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  <strong className="text-text-primary">14.2 Arbitration.</strong> Any dispute arising out of or relating to these Terms or the 
                  Service shall be resolved by binding arbitration administered by the American Arbitration Association 
                  under its Commercial Arbitration Rules. The arbitration shall take place in Wilmington, Delaware, or 
                  remotely at your election. The arbitrator's decision shall be final and binding.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  <strong className="text-text-primary">14.3 Class Action Waiver.</strong> YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS 
                  WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  <strong className="text-text-primary">14.4 Opt-Out.</strong> You may opt out of this arbitration agreement by sending written 
                  notice to legal@rollfleet.com within 30 days of accepting these Terms.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">15. General Provisions</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  <strong className="text-text-primary">15.1 Modifications.</strong> We may modify these Terms at any time. Material changes 
                  will be communicated via email or through the Service at least 30 days before taking effect. Continued 
                  use after changes constitutes acceptance.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  <strong className="text-text-primary">15.2 Severability.</strong> If any provision is held unenforceable, the remaining provisions 
                  remain in full force and effect.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  <strong className="text-text-primary">15.3 Waiver.</strong> Our failure to enforce any right does not constitute a waiver of that right.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  <strong className="text-text-primary">15.4 Assignment.</strong> You may not assign these Terms without our consent. We may assign 
                  these Terms in connection with a merger, acquisition, or sale of assets.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  <strong className="text-text-primary">15.5 Entire Agreement.</strong> These Terms, together with the Privacy Policy, constitute 
                  the entire agreement between you and RollFleet regarding the Service.
                </p>
              </section>

              <section>
                <h2 className="h2 text-xl mb-4">16. Contact Information</h2>
                <p className="text-text-secondary leading-relaxed">
                  For questions about these Terms, please contact us at:<br />
                  <strong className="text-text-primary">Email:</strong>{' '}
                  <a href="mailto:legal@rollfleet.com" className="text-accent hover:underline">legal@rollfleet.com</a><br />
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

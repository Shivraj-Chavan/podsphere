
import { motion, AnimatePresence } from "framer-motion";

const Section = ({ title, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-white rounded-3xl p-6 md:p-10 shadow-sm"
  >
    <h3 className="text-2xl font-bold text-gray-900 mb-4">
      {title}
    </h3>
    <div className="text-gray-700 space-y-3 leading-relaxed text-sm md:text-base">
      {children}
    </div>
  </motion.div>
);

export default function TermsPrivacy() {
  return (
    <>
      

      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-20">

          {/* ================= PAGE HEADER ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-xs tracking-widest font-semibold text-pink-500 mb-3">
              PODSPHERE POLICIES
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Terms of Use & Privacy Policy
            </h1>
            <p className="mt-4 text-gray-600">
              Transparency, safety, and trust are at the heart of everything we do at Podsphere.
            </p>
          </motion.div>

          {/* ================= TERMS OF USE ================= */}
          <div className="space-y-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Terms of Use
            </h2>

            <Section title="Eligibility & Account Responsibility">
              <p>Podsphere provides learning programs for children; however, only individuals <span className="font-bold">18 years or older</span> may create an account, purchase services, or provide personal information.
                Children may use the Services <span className="font-bold">only under the active supervision of a parent or legal guardian</span>, who is responsible for their conduct, safety, and adherence to these Terms.
                </p>
              <p>All information you provide must be accurate and updated. You are responsible for securing your login details and for any activity that occurs under your account.
              </p>
            </Section>

            <Section title="Nature of Services">
              <p>Podsphere is an online learning platform offering phonics-based curriculum, live classes, digital resources, assessments, and learning tools.</p>
              <p> We may enhance, modify, limit, or discontinue any part of the Services without prior notice.
                Access to certain features may require stable internet connectivity, supported devices, or updated browsers, for which we are not responsible.
                </p>
            </Section>

            <Section title="User Conduct & Class Etiquette">
                <p>By using our platform, you agree to behave respectfully toward instructors, staff, other learners, and guardians present in live sessions. </p>
               <p>You must not:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use abusive, offensive, or disruptive language </li>
                <li>Share inappropriate content</li>
                <li>Record, screenshot, download, or distribute class sessions </li>
                <li>Share meeting links or internal materials with external parties</li>
                <li>Engage in behaviour that compromises safety or learning</li>
              </ul>
              <p>Podsphere reserves the right to mute, remove, or permanently suspend users who violate class or community guidelines.              </p>
            </Section>

            <Section title="Intellectual Property Rights">
              <p>All content on Podsphere—including videos, lesson plans, worksheets, teaching material, logos, designs, technology, and digital resources—is protected under copyright and trademark laws.              </p>
              <p>You may NOT:  </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Copy, record, reproduce, share, or distribute our content</li>
                <li>Use the content for tutoring, training, or commercial purposes </li>
                <li>Create derivative materials from our curriculum</li>
                <li>Share login access or allow multiple users on one account </li>
                <li>Engage in behaviour that compromises safety or learning</li>
              </ul>
            </Section>

            <Section title="Data We Collect & How We Use It">
              <p>Podsphere collects personal information provided directly by you—such as your name, contact details, student details, and communication history—as well as technical and usage information collected automatically through cookies, analytics tools, and third-party integrations.              </p>
              <p>This data is used for:              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Delivering and improving our Services  </li>
                <li>Providing class access and personalized learning  </li>
                <li>Sending reminders, updates and administrative messages</li>
                <li>Responding to queries and offering customer support</li>
                <li>Protecting platform safety and preventing misuse </li>
              </ul>
              <p>You may opt out of promotional communications at any time, but essential transactional messages will continue.</p>
            </Section>

            <Section title="Cookies & Tracking Technologies">
              <p>Our website uses cookies, analytics tools, and third-party services to understand usage patterns, enhance performance, and offer personalized experiences.</p>
              <p> You can manage cookie preferences through your browser settings. Some features may not work correctly if cookies are disabled.  </p>
            </Section>

            <Section title="Children’s Privacy">
              <p>Podsphere does not knowingly collect personal data from children without parental consent. If we discover that personal information of a child under 13 (or under 16 in applicable regions) has been collected without permission, we will delete it promptly.              </p>
              <p> We encourage parents to monitor and guide their child’s interaction with the platform.</p>
            </Section>

            <Section title="Payments, Cancellations & Refunds">
              <p>All fees for Podsphere programs must be paid in advance.</p>
              <p>At Podsphere, we are committed to ensuring a positive learning experience for every child. If you are not satisfied with our Services, you may request a refund at any time. Refunds will be issued strictly on a <span className="font-bold"> pro-rata basis,</span> calculated according to the unused portion of your enrolled program. Once your refund request is received, the eligible amount will be processed within <span className="font-bold"> 15 working days.</span> </p>
            <p> We are not responsible for payment failures caused by banking issues, payment gateways, or third-party providers.            </p>
           <p> Class validity and access timelines will be communicated at the time of purchase. </p>
           <p>For any refund-related queries or assistance, please contact our support team at<span>[Insert Podsphere Email].</span> </p>
            </Section>

            <Section title=" Service Availability & Technical Limitations">
              <p>While we strive to offer uninterrupted access, we do not guarantee continuous availability due to factors including:              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Internet issues </li>
                <li>Technical outages</li>
                <li>Software updates  </li>
                <li>Factors beyond our control</li>
              </ul>
              <p>Podsphere is not liable for loss of learning time or disruptions caused by such issues. </p>
            </Section>

            <Section title="Third-Party Links & External Platforms">
              <p>Our website may contain links to external websites or integrate with third-party tools.</p>
              <p> Podsphere is not responsible for the content, privacy practices, accuracy, or safety of these third-party resources. Use of such external sites is at your own risk.              </p>
            </Section>

            <Section title="Limitation of Liability">
              <p>Podsphere is not liable for: </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Academic outcomes, grade improvements, or guaranteed skill advancements</li>
                <li>Technical issues, service interruptions, malware, or system failures  </li>
                <li>Loss of data or unauthorized access outside our control  </li>
                <li>Damages arising from misuse of our Services </li>
              </ul>
              <p>To the fullest extent permitted by law, Podsphere’s total liability will not exceed the amount paid by you for the Services.              </p>
            </Section>

            <Section title=" Suspension & Termination of Access">
              <p>We may suspend or permanently terminate your account if you:  </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Violate these Terms  </li>
                <li>Engage in inappropriate behaviour during classes </li>
                <li>Misuse or illegally share learning materials </li>
                <li>Fail to complete payments </li>
                <li>Threaten platform integrity or safety </li>
              </ul>
              <p>Termination may occur without prior notice. </p>
            </Section>

            <Section title="Governing Law & Jurisdiction">
              <p>These Terms are governed by the laws of India.</p>
              <p> Any disputes shall be resolved exclusively in the courts of [Insert City/State], India.   </p>
            </Section>

            <Section title=" Changes to Terms">
              <p>Podsphere may revise or update these Terms at any time. Continued use of the website after updates constitutes acceptance of the revised Terms.</p>
            </Section>

            <Section title="Contact Information">
              <p>For questions, concerns, or support, you may reach us at:</p>
              <p className="font-bold">  Email: [Insert Email] </p>
             <p className="font-bold">Phone: [Insert Number]  </p>
             <p className="font-bold">Address: [Insert Address]  </p>
            </Section>
          </div>

          {/* ================= PRIVACY POLICY ================= */}
          <div className="space-y-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Privacy Policy
            </h2>

            <Section title="Introduction">
              <ul>
                <li>Podsphere is committed to protecting your privacy.  </li>
                <li>This Policy describes how we collect, use, store, share, and safeguard personal information.</li>
              </ul>
            </Section>

            <Section title="Information We Collect">

            {/* A. Information You Provide */}
            <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">
                A. Information You Provide
            </h4>
            <ul className="list-disc pl-6 space-y-1">
                <li>Parent/guardian name, contact details, and login information</li>
                <li>Child’s name, age, and learning level</li>
                <li>Assignment submissions, chat messages, and class interactions</li>
                <li>Feedback, enquiry forms, and support communication</li>
                <li>
                Payment details <span className="text-gray-500">(handled securely by third-party gateways)</span>
                </li>
            </ul>
            </div>

            {/* B. Information Collected Automatically */}
            <div className="space-y-2 pt-4">
            <h4 className="font-semibold text-gray-900">
                B. Information Collected Automatically
            </h4>
            <ul className="list-disc pl-6 space-y-1">
                <li>Device type, operating system, and browser type</li>
                <li>IP address and general location</li>
                <li>Time spent on platform, pages viewed, and clicks</li>
                <li>Video interaction and learning behaviour</li>
                <li>System logs and performance data</li>
            </ul>
            </div>

            {/* C. Information from Third Parties */}
            <div className="space-y-2 pt-4">
            <h4 className="font-semibold text-gray-900">
                C. Information from Third Parties
            </h4>
            <p className="text-gray-700">
                Limited information may be received when you connect Podsphere with third-party platforms such as:
            </p>
            <ul className="list-disc pl-6 space-y-1">
                <li>Google</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Other supported platforms</li>
            </ul>
            </div>

            </Section>


            <Section title="How We Use Your Information">
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide and operate learning programs  </li>
                <li>Create personalized learning experiences </li>
                <li>Process payments and send confirmations </li>
                <li>Respond to queries and offer support  </li>
                <li>Send reminders, updates and class links</li>
                <li>Improve platform functionality and teaching quality  </li>
                <li>Ensure safety and prevent platform misuse</li>
                <li>Comply with legal obligations </li>
              </ul>
            </Section>

            <Section title="Class Recordings">
            <ul className="list-disc pl-5 space-y-2">
                <li>All live sessions may be recorded for: </li>
                   <ul className="list-disc pl-5 space-y-2">
                     <li>Quality checks  </li>
                     <li>Teacher training  </li>
                     <li>Academic validation </li>
                     <li>Safety review</li>
                   </ul>
                   <li>Recordings are never shared publicly without explicit parental consent.</li>
              </ul>
            </Section>

            <Section title="Sharing of Information">
              <p>Podsphere does not sell or rent personal data.</p>
              <p>Information may be shared only with: </p>
              <ul>
                <li>Trusted service providers (hosting, analytics, payment partners)</li>
                <li>Instructors and academic teams supporting your child </li>
                <li>Authorities when required by law  </li>
                <li>Security teams to prevent fraud or misuse </li>
              </ul>
              <p>All partners follow strict confidentiality and safety standards.</p>
            </Section>

            <Section title="Data Security">
              <ul className="list-disc pl-5 space-y-2">
                <li>Podsphere uses encryption, controlled access, and secure servers.</li>
                <li>While we take strong precautions, no system is 100% secure.</li>
                <li>Please notify us immediately of any suspicious activity.</li>
              </ul>
            </Section>

            <Section title="Your Rights & Choices">
                <p>You may:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Update your personal details in your account</li>
                <li>Request correction or deletion of your data </li>
                <li>Opt out of promotional emails </li>
                <li>Control cookies and device permissions</li>
                <li>Decline sharing certain information (with possible feature limitations)</li>
              </ul>
            </Section>

            <Section title="Children’s Data Protection">
              <ul className="list-disc pl-5 space-y-2">
                <li>Podsphere accounts must be managed by parents or guardians. </li>
                <li>We do not knowingly collect data from children under 13 (or under 16 where applicable) without proper consent.</li>
                <li>If such collection occurs, we will delete the information immediately. </li>
                <li>Parents are encouraged to actively supervise online learning.</li>
              </ul>
            </Section>


            <Section title="Data Retention">
                <p>We retain data only for as long as necessary to:  </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide Services</li>
                <li>Support academic tracking  </li>
                <li>Comply with legal obligations   </li>
                <li>Resolve disputes</li>
                <li>Maintain platform integrity  </li>
              </ul>
              <p>Users may request deletion where legally permissible.  </p>
            </Section>


            <Section title="Payment Processing & External Links">
              <ul className="list-disc pl-5 space-y-2">
                <li>Payments are handled by secure third-party gateways.</li>
                <li>Podsphere does not store complete payment card details. </li>
                <li>External links on our website follow separate privacy policies; Podsphere is not responsible for them.</li>
              </ul>
            </Section>

            <Section title="Updates to This Policy">
              <ul className="list-disc pl-5 space-y-2">
                <li>Podsphere may update this Privacy Policy occasionally.</li>
                <li>Changes take effect once posted on our website.  </li>
                <li>Continued use of the platform indicates acceptance of updated policies.</li>
              </ul>
            </Section>

            <Section title="Contact Information">
                <p>For privacy concerns or data requests:  </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-bold">Email:</span> [Insert Podsphere Email]    </li>
                <li><span className="font-bold">Phone:</span> [Insert Number] </li>
                <li><span className="font-bold">Address:</span> [Insert Business Address]   </li>
              </ul>
            </Section>
          </div>

        </div>
      </section>

      
    </>
  );
}

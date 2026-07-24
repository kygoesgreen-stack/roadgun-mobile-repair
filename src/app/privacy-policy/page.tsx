import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Roadgun Mobile Repair",
  description:
    "Privacy policy for Roadgun Mobile Repair. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://roadgunrepairs.com/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white font-[family-name:var(--font-display)]">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-steel-400">
        Last updated: July 24, 2026
      </p>

      <div className="mt-8 space-y-8 text-steel-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            1. Information We Collect
          </h2>
          <p>
            When you contact Roadgun Mobile Repair through our website, phone,
            or SMS, we may collect the following personal information:
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-steel-400">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Vehicle information (make, model, year)</li>
            <li>Service location and address</li>
            <li>Description of vehicle issues</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            2. How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-steel-400">
            <li>Schedule and provide mobile auto repair services</li>
            <li>Communicate about appointments and service updates</li>
            <li>Send appointment reminders via SMS (message frequency varies)</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Improve our services and customer experience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            3. Mobile Information &mdash; Non-Sharing Statement
          </h2>
          <p className="bg-dark-700 p-4 rounded-lg border border-orange-500/30">
            <strong className="text-orange-400">Mobile Information Non-Sharing:</strong>{" "}
            Roadgun Mobile Repair does <strong className="text-white">NOT</strong> share,
            sell, rent, or trade your mobile phone number with any third parties for
            marketing purposes. Your mobile number is used solely for communication
            related to scheduling, appointment reminders, and service updates
            directly related to your auto repair services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            4. SMS Messaging &amp; Disclosure
          </h2>
          <p>
            By providing your mobile phone number, you consent to receive SMS
            messages from Roadgun Mobile Repair related to your service requests
            and appointments.
          </p>
          <div className="mt-3 p-4 bg-dark-700 rounded-lg border border-dark-600">
            <p className="text-sm text-steel-300">
              <strong className="text-white">Message Frequency:</strong> Message
              frequency varies based on your service activity. You may receive
              appointment confirmations, reminders, and follow-up messages.
            </p>
            <p className="mt-2 text-sm text-steel-300">
              <strong className="text-white">Message and data rates may apply.</strong>{" "}
              Check with your mobile carrier for details about your messaging and
              data plan.
            </p>
            <p className="mt-2 text-sm text-steel-300">
              <strong className="text-white">Opt-Out:</strong> You can opt out of
              receiving SMS messages at any time by replying STOP to any message
              or by contacting us directly.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            5. Information Sharing
          </h2>
          <p>
            We do not sell or share your personal information with third parties,
            except:
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-steel-400">
            <li>
              With service providers who assist in operating our business (e.g.,
              payment processing)
            </li>
            <li>When required by law or to protect our legal rights</li>
            <li>
              With your explicit consent for specific service-related purposes
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            6. Data Security
          </h2>
          <p>
            We implement reasonable security measures to protect your personal
            information. However, no method of transmission over the Internet or
            electronic storage is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            7. Cookies &amp; Website Analytics
          </h2>
          <p>
            Our website may use cookies and similar tracking technologies to
            enhance your browsing experience and analyze website traffic. You can
            control cookie settings through your browser preferences.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            8. Your Rights
          </h2>
          <p>You have the right to:</p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-steel-400">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            9. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by posting the new policy on this page
            with an updated &ldquo;Last updated&rdquo; date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            10. Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy, please contact us:
          </p>
          <div className="mt-3 text-steel-400">
            <p>Roadgun Mobile Repair</p>
            <p>
              Phone:{" "}
              <a
                href="tel:+19103589027"
                className="text-orange-400 hover:text-orange-500 transition-colors"
              >
                (910) 358-9027
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:roadgun.repair@gmail.com"
                className="text-orange-400 hover:text-orange-500 transition-colors"
              >
                roadgun.repair@gmail.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

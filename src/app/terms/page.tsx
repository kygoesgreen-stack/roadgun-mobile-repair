import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Roadgun Mobile Repair",
  description:
    "Terms and conditions for Roadgun Mobile Repair services. Read about our service policies, warranties, and terms.",
  alternates: { canonical: "https://roadgunrepairs.com/terms" },
};

export default function TermsAndConditions() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white font-[family-name:var(--font-display)]">
        Terms and Conditions
      </h1>
      <p className="mt-2 text-sm text-steel-400">
        Last updated: July 24, 2026
      </p>

      <div className="mt-8 space-y-8 text-steel-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By scheduling or using services from Roadgun Mobile Repair, you
            agree to these Terms and Conditions. If you do not agree with any
            part of these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            2. Services Provided
          </h2>
          <p>
            Roadgun Mobile Repair provides mobile auto repair and diagnostic
            services at your designated location within our service area. Our
            services include but are not limited to:
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-steel-400">
            <li>Mobile vehicle diagnostics</li>
            <li>Brake repair and replacement</li>
            <li>Battery testing and replacement</li>
            <li>Trailer repair and maintenance</li>
            <li>General mobile auto repair</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            3. Service Area
          </h2>
          <p>
            We currently serve Jacksonville, NC and surrounding areas including
            Onslow County, Craven County, Holly Ridge, and Jones County. Service
            outside our standard area may incur additional travel fees.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            4. Appointments and Scheduling
          </h2>
          <ul className="space-y-2">
            <li>
              Appointments can be scheduled by phone, email, or through our
              website contact form.
            </li>
            <li>
              We will confirm your appointment and provide an estimated arrival
              window.
            </li>
            <li>
              Please provide accurate location information and vehicle details
              when scheduling.
            </li>
            <li>
              If you need to cancel or reschedule, please contact us as soon as
              possible.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            5. Pricing and Payment
          </h2>
          <ul className="space-y-2">
            <li>
              Estimates are provided before work begins. Final pricing may vary
              based on parts and labor required.
            </li>
            <li>
              Payment is due upon completion of services rendered.
            </li>
            <li>We accept cash, checks, and major credit cards.</li>
            <li>
              A diagnostic fee may apply and will be communicated before services
              begin.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            6. Warranty
          </h2>
          <p>
            Roadgun Mobile Repair stands behind our work. We provide a warranty
            on parts and labor for services rendered. Warranty details will be
            discussed and documented at the time of service. Warranty does not
            cover:
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-steel-400">
            <li>Pre-existing conditions not related to our repair</li>
            <li>Normal wear and tear</li>
            <li>Damage caused by accidents, misuse, or neglect</li>
            <li>Parts not supplied by Roadgun Mobile Repair</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            7. Customer Responsibilities
          </h2>
          <p>Customers are responsible for:</p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-steel-400">
            <li>Providing accurate vehicle information</li>
            <li>
              Ensuring the vehicle is accessible at the scheduled location
            </li>
            <li>
              Informing us of any known issues or modifications to the vehicle
            </li>
            <li>
              Securing personal belongings before service begins
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            8. Limitation of Liability
          </h2>
          <p>
            Roadgun Mobile Repair shall not be liable for any indirect,
            incidental, or consequential damages arising from the use of our
            services. Our total liability shall not exceed the amount paid for
            the specific service in question.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            9. SMS and Communication Terms
          </h2>
          <p>
            By providing your phone number, you consent to receive
            service-related communications via SMS, including appointment
            confirmations and reminders.
          </p>
          <div className="mt-3 p-4 bg-dark-700 rounded-lg border border-dark-600">
            <p className="text-sm text-steel-300">
              <strong className="text-white">Message Frequency:</strong>{" "}
              Message frequency varies based on your service activity.
            </p>
            <p className="mt-2 text-sm text-steel-300">
              <strong className="text-white">
                Message and data rates may apply.
              </strong>{" "}
              Check with your mobile carrier for details.
            </p>
            <p className="mt-2 text-sm text-steel-300">
              <strong className="text-white">Opt-Out:</strong> Reply STOP to
              any message to opt out of SMS communications.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            10. Modifications to Terms
          </h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any
            time. Changes will be effective immediately upon posting to our
            website. Your continued use of our services constitutes acceptance of
            the modified terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            11. Governing Law
          </h2>
          <p>
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of the State of North Carolina.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            12. Contact Information
          </h2>
          <p>
            For questions about these Terms and Conditions, please contact us:
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

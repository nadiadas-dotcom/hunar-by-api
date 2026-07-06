import { motion } from "framer-motion"

const sections = [
  {
    title: "Information We Collect",
    content:
      "When you place an order or create an account on Hunar By Api, we collect personal information you provide such as your name, email address, phone number, shipping address, and payment details. We also automatically receive your computer's internet protocol (IP) address to help us learn about your browser and operating system.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the information we collect to process your orders, communicate with you about your purchases, send you updates about our products and promotions (with your consent), improve our store and user experience, and prevent fraudulent transactions.",
  },
  {
    title: "Data Protection",
    content:
      "We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. Your personal information is stored on secured networks and is only accessible by a limited number of persons who have special access rights to such systems.",
  },
  {
    title: "Third-Party Services",
    content:
      "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.",
  },
  {
    title: "Cookies",
    content:
      "We use cookies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings.",
  },
  {
    title: "Age of Consent",
    content:
      "By using this site, you represent that you are at least the age of majority in your province or state of residence, or that you have given us your consent to allow any of your minor dependents to use this site.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We reserve the right to modify this privacy policy at any time. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about this privacy policy, please contact us at hello@hunarbyapi.com or through our contact page.",
  },
]

export default function PrivacyPolicy() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-amber-900/10 to-cream-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block font-elegant text-amber-700 text-lg italic tracking-wider mb-3">
              Your Privacy Matters
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal-900 font-medium mb-6">
              Privacy Policy
            </h1>
            <p className="text-charcoal-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Last updated: January 2024
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-charcoal-500 leading-relaxed mb-12"
          >
            At Hunar By Api, we take your privacy seriously. This policy describes how we collect, use, and protect your
            personal information when you use our website or make a purchase.
          </motion.p>

          <div className="space-y-10">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <h2 className="font-display text-xl md:text-2xl text-charcoal-900 font-medium mb-3">
                  {section.title}
                </h2>
                <p className="text-charcoal-500 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

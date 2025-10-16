import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '49',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic analytics dashboard',
        '2 platform integrations',
        'Email support',
        'Brand voice training',
        '24-hour response time'
      ]
    },
    {
      name: 'Professional',
      price: '149',
      description: 'For growing brands',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced analytics & reports',
        'Unlimited integrations',
        'Priority support',
        'Custom brand voice',
        'A/B testing',
        'Multi-language support',
        '4-hour response time'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 phone support',
        'Advanced security features',
        'SLA guarantees',
        'On-premise deployment option',
        'Custom training & onboarding'
      ]
    }
  ];

  return (
    <div>
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Simple, Transparent
              <span className="text-blue-600"> Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Choose the plan that fits your brand's needs. Scale up or down anytime with no hidden fees.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-blue-600 text-white shadow-2xl scale-105 border-4 border-blue-200'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  {plan.price !== 'Custom' && <span className={plan.popular ? 'text-blue-100' : 'text-gray-600'}>/month</span>}
                </div>
                <button className={`w-full py-3 rounded-lg font-medium transition-all mb-6 ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}>
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-blue-600'}`} />
                      <span className={plan.popular ? 'text-blue-50' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Can I change plans at any time?',
                answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we will prorate any charges.'
              },
              {
                question: 'What happens if I exceed my conversation limit?',
                answer: 'We will notify you when you are approaching your limit. You can either upgrade your plan or purchase additional conversations for the month.'
              },
              {
                question: 'Do you offer a free trial?',
                answer: 'Yes! All paid plans come with a 14-day free trial. No credit card required to start.'
              },
              {
                question: 'What kind of support do you offer?',
                answer: 'All plans include email support. Professional plans get priority support with faster response times, and Enterprise customers get 24/7 phone support plus a dedicated account manager.'
              },
              {
                question: 'Is there a setup fee?',
                answer: 'No! There are no setup fees, hidden costs, or long-term contracts. Pay only for what you use.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Our team is here to help you find the perfect plan for your needs.
          </p>
          <Link to="/contact" className="group px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all text-lg font-medium flex items-center justify-center gap-2 mx-auto w-fit">
            Contact Sales
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

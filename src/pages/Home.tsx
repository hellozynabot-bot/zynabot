import { Bot, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered Customer Engagement
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Your Brand's Voice,
              <span className="text-blue-600"> Amplified by AI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Zynabot seamlessly integrates with your existing tools to automate customer interactions
              while maintaining your brand's unique personality and tone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-lg font-medium hover:shadow-xl hover:shadow-blue-600/30 flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-all text-lg font-medium">
                Watch Demo
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
          </div>

          <div className="mt-16 relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl p-8 border-4 border-white">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-lg px-4 py-3 inline-block">
                      <p className="text-gray-700">Hi! I'm looking for information about your return policy.</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <div className="flex-1 text-right">
                    <div className="bg-blue-600 text-white rounded-lg px-4 py-3 inline-block">
                      <p>I'd be happy to help! Our return policy allows returns within 30 days of purchase. Would you like me to process a return for you?</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to transform your customer engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Connect Your Tools',
                description: 'Integrate Zynabot with your existing platforms using our simple API or pre-built connectors.'
              },
              {
                step: '02',
                title: 'Train Your Assistant',
                description: 'Upload your brand guidelines and let our AI learn your unique voice and customer service approach.'
              },
              {
                step: '03',
                title: 'Go Live & Scale',
                description: 'Launch your AI assistant and watch it handle customer interactions while you focus on growth.'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-xl transition-shadow">
                  <div className="text-6xl font-bold text-blue-100 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of brands using Zynabot to deliver exceptional customer service at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all text-lg font-medium flex items-center justify-center gap-2">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link to="/contact" className="px-8 py-4 bg-transparent text-white rounded-lg border-2 border-white hover:bg-white/10 transition-all text-lg font-medium flex items-center justify-center">
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Bot, Zap, MessageSquare, Shield, BarChart3, Sparkles, ArrowRight, Code, Globe, Cpu } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning adapts to your brand voice and customer needs in real-time.'
    },
    {
      icon: Zap,
      title: 'Instant Integration',
      description: 'Seamlessly connects with your existing tools and platforms in minutes, not weeks.'
    },
    {
      icon: MessageSquare,
      title: 'Natural Conversations',
      description: 'Engage customers with human-like interactions that feel authentic and helpful.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance standards keep your data protected.'
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Deep insights into customer behavior and conversation patterns drive better decisions.'
    },
    {
      icon: Sparkles,
      title: 'Brand Consistency',
      description: 'Maintains your unique voice and tone across every customer interaction.'
    },
    {
      icon: Code,
      title: 'Developer Friendly',
      description: 'Comprehensive APIs and webhooks for custom integrations and workflows.'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Communicate with customers in over 100 languages automatically.'
    },
    {
      icon: Cpu,
      title: 'Continuous Learning',
      description: 'AI improves over time, learning from every interaction to serve customers better.'
    }
  ];

  return (
    <div>
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Powerful Features for
              <span className="text-blue-600"> Modern Brands</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Everything you need to deliver exceptional customer experiences at scale,
              powered by cutting-edge AI technology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-600 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Integrates With Your Favorite Tools
            </h2>
            <p className="text-xl text-gray-600">
              Connect Zynabot with the platforms you already use every day.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Slack', 'Zendesk', 'Salesforce', 'HubSpot', 'Shopify', 'Discord', 'WhatsApp', 'Telegram', 'Facebook', 'Twitter', 'Instagram', 'Email'].map((platform, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 flex items-center justify-center h-24 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-gray-700 font-semibold">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See Zynabot in Action
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Experience how our AI can transform your customer engagement.
          </p>
          <button className="group px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all text-lg font-medium flex items-center justify-center gap-2 mx-auto">
            Start Your Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}

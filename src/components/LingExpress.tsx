import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { 
  ArrowLeft, 
  Globe, 
  Wifi, 
  Shield, 
  Zap, 
  Clock, 
  DollarSign,
  Video,
  CreditCard,
  Users,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  Smartphone,
  Monitor,
  Building,
  PhoneCall,
  Mail,
  Send,
  Star,
  Award,
  TrendingUp,
  Target,
  Settings,
  Brain,
  Download,
  Upload,
  Gauge,
  Lock,
  UserCheck,
  Package,
  Truck,
  Phone
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LingExpressProps {
  onBack: () => void;
}

export default function LingExpress({ onBack }: LingExpressProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    description: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'pain-points', 'solution', 'comparison', 'use-cases', 'pricing', 'deployment', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 构建邮件内容
    const subject = encodeURIComponent('LingExpress解决方案咨询');
    const body = encodeURIComponent(`
姓名: ${formData.name}
公司: ${formData.company}
联系电话: ${formData.phone}
需求描述: ${formData.description}

此询盘来自LingExpress跨境网络解决方案页面。
    `);
    
    window.open(`mailto:sales@lingbrain.com?subject=${subject}&body=${body}`, '_blank');
  };

  const painPoints = [
    {
      title: "直播与互动",
      icon: Video,
      color: "bg-red-50 text-red-600",
      problems: [
        "直播画面马赛克、音画不同步",
        "弹幕延迟，观众互动体验差",
        "导致观众流失、转化率低"
      ]
    },
    {
      title: "支付与订单",
      icon: CreditCard,
      color: "bg-orange-50 text-orange-600",
      problems: [
        "支付页面加载缓慢、超时失败",
        "订单提交失败，客户流失",
        "现金流受损，业务受阻"
      ]
    },
    {
      title: "账号安全",
      icon: Shield,
      color: "bg-yellow-50 text-yellow-600",
      problems: [
        "多店铺IP不稳定或关联",
        "被平台风控判定异常登录",
        "面临封号风险，影响业务"
      ]
    },
    {
      title: "团队协作",
      icon: Users,
      color: "bg-purple-50 text-purple-600",
      problems: [
        "跨国会议卡顿、掉线频繁",
        "客服系统响应慢",
        "影响团队效率和客户满意度"
      ]
    }
  ];

  const solutionLayers = [
    {
      title: "网络基础层",
      subtitle: "LingExpress G102 智能网关",
      image: "https://images.unsplash.com/photo-1750710583720-8b3bdd0f658a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwaGFyZHdhcmUlMjByb3V0ZXIlMjBkZXZpY2V8ZW58MXx8fHwxNzU4MTYxNjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        { icon: Zap, title: "极致稳定", desc: "低时延30-50ms，低抖动≤20ms" },
        { icon: Shield, title: "绝对合规", desc: "工信部进网许可与CQC认证" },
        { icon: Globe, title: "独立IP", desc: "杜绝账号关联风险" },
        { icon: Settings, title: "即插即用", desc: "智能识别关键业务流量" }
      ]
    },
    {
      title: "业务加速层",
      subtitle: "灵思AI一体机与云平台",
      image: "https://images.unsplash.com/photo-1582648872106-71a64a70af6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBuZXR3b3JrJTIwZmliZXIlMjBvcHRpYyUyMGNhYmxlc3xlbnwxfHx8fDE3NTgxNjE2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        { icon: Brain, title: "AI助手", desc: "直播数据分析、智能回复" },
        { icon: TrendingUp, title: "数据整合", desc: "多店铺统一管理报表" },
        { icon: Package, title: "无缝对接", desc: "ERP/OMS稳定数据交换" },
        { icon: Smartphone, title: "移动办公", desc: "手机端AI小助手随时查询" }
      ]
    }
  ];

  const comparisonData = [
    {
      metric: "响应速度 (时延)",
      vpn: { value: "150-200ms", status: "poor", desc: "忽高忽低" },
      lingexpress: { value: "30-50ms", status: "excellent", desc: "稳定一致" },
      benefit: "响应飞快，直播互动无延迟"
    },
    {
      metric: "画面流畅度 (抖动)",
      vpn: { value: "20-30ms", status: "poor", desc: "忽快忽慢" },
      lingexpress: { value: "2-5ms", status: "excellent", desc: "稳定流畅" },
      benefit: "画面稳定不卡顿，语音清晰"
    },
    {
      metric: "合规与风控",
      vpn: { value: "高风险", status: "poor", desc: "易被封号" },
      lingexpress: { value: "合规备案", status: "excellent", desc: "独立IP" },
      benefit: "账号安全，基业长青"
    },
    {
      metric: "适用场景",
      vpn: { value: "临时使用", status: "poor", desc: "轻量浏览" },
      lingexpress: { value: "生产全链路", status: "excellent", desc: "核心业务" },
      benefit: "专业工具，全方位保障"
    }
  ];

  const useCases = [
    {
      id: "ecommerce",
      title: "电商直播带货",
      image: "https://images.unsplash.com/photo-1701318134614-adb5d5b14537?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwc3RyZWFtaW5nJTIwZWNvbW1lcmNlJTIwc2V0dXB8ZW58MXx8fHwxNzU4MTYxNjQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "保障高清流畅互动，提升用户体验与转化率",
      features: [
        "4K高清直播无卡顿",
        "实时弹幕互动",
        "快速下单支付",
        "多平台同步直播"
      ]
    },
    {
      id: "multistore",
      title: "多平台店铺运营",
      image: "https://images.unsplash.com/photo-1750768145390-f0ad18d3e65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwdmlkZW8lMjBjb25mZXJlbmNlJTIwbWVldGluZ3xlbnwxfHx8fDE3NTgxNjE2NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "独立IP安全运营，ERP/订单实时同步，避免超卖",
      features: [
        "多店铺独立IP",
        "ERP系统实时同步",
        "库存精准管理",
        "订单统一处理"
      ]
    },
    {
      id: "factory",
      title: "工厂出海转型",
      image: "https://images.unsplash.com/photo-1750768145390-f0ad18d3e65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwdmlkZW8lMjBjb25mZXJlbmNlJTIwbWVldGluZ3xlbnwxfHx8fDE3NTgxNjE2NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "保障B2B视频会议，赋能工厂直播卖货",
      features: [
        "高清视频会议",
        "远程工厂参观",
        "产品展示直播",
        "订单洽谈协作"
      ]
    }
  ];

  const pricingPlans = [
    {
      speed: "10M",
      monthlyFee: "2,888",
      setupFee: "3,000",
      features: ["1个独立IP", "基础流量保障", "7x24技术支持"]
    },
    {
      speed: "20M",
      monthlyFee: "4,888",
      setupFee: "3,000", 
      features: ["1个独立IP", "优先流量保障", "专属客户经理"],
      popular: true
    },
    {
      speed: "50M",
      monthlyFee: "9,888",
      setupFee: "5,000",
      features: ["2个独立IP", "企业级保障", "定制化服务"]
    },
    {
      speed: "100M",
      monthlyFee: "18,888",
      setupFee: "8,000",
      features: ["5个独立IP", "旗舰级保障", "专属解决方案"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                返回
              </Button>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              {[
                { id: 'pain-points', label: '业务痛点' },
                { id: 'solution', label: '解决方案' },
                { id: 'comparison', label: '为何选择我们' },
                { id: 'use-cases', label: '应用场景' },
                { id: 'pricing', label: '价格套餐' },
                { id: 'contact', label: '联系我们' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors hover:text-orange-600 ${
                    activeSection === item.id ? 'text-orange-600 font-medium' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <Button 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              onClick={() => scrollToSection('contact')}
            >
              获取专属方案
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-20 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50"
          style={{
            backgroundImage: `url(${solutionLayers[0].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full mb-8">
            <Globe className="w-4 h-4" />
            中科图灵 x 中国电信
          </div>
          <Badge variant="outline" className="px-6 py-2 text-sm bg-gradient-to-r from-orange-50 to-red-50 border-orange-200 mb-6">
            官方合规跨境专线
          </Badge>
          <h1 className="mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
            告别网络卡顿，专注跨境增长
          </h1>
          <p className="max-w-4xl mx-auto text-gray-600 mb-8">
            LingExpress跨境网络与业务增长解决方案，联合中国电信官方授权专属跨境通道，
            为跨境电商和外向型工厂提供坚如磐石的网络基础，彻底解决直播卡顿、支付失败、账号关联等核心痛点。
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
          >
            立即咨询，告别卡顿
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Pain Points */}
      <section id="pain-points" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">您的出海业务，是否正被网络拖后腿？</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              跨境电商和工厂出海过程中，网络不稳定已成为制约业务发展的关键瓶颈
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {painPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 ${point.color} rounded-xl`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-gray-800">{point.title}</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    {point.problems.map((problem, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        {problem}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-6 py-3 rounded-xl">
              <Clock className="w-5 h-5" />
              <span>时间就是金钱，每一秒的卡顿都是利润的流失</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section id="solution" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">双层架构解决方案，从根源解决问题</h2>
            <p className="max-w-4xl mx-auto text-gray-600">
              第一层解决网络基础问题，第二层用AI工具为业务增长赋能，标本兼治
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {solutionLayers.map((layer, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <Badge className={`px-4 py-2 mb-4 ${index === 0 ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                    {layer.title}
                  </Badge>
                  <h3 className="mb-2">{layer.subtitle}</h3>
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                    <ImageWithFallback
                      src={layer.image}
                      alt={layer.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {layer.features.map((feature, idx) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className={`w-12 h-12 ${index === 0 ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h4 className="mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section id="comparison" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">为什么跨境专线是您的唯一正确选择？</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              带宽大 ≠ 体验好。跨境业务的核心是低时延和低抖动，这正是专线的强项
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4">指标</th>
                    <th className="text-center py-4 px-4">普通VPN (翻墙)</th>
                    <th className="text-center py-4 px-4 bg-orange-50 rounded-t-lg">
                      <div className="flex items-center justify-center gap-2">
                        <Badge className="bg-orange-600 text-white">LingExpress 专线</Badge>
                      </div>
                    </th>
                    <th className="text-left py-4 px-4">带来的价值</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-4 px-4">{row.metric}</td>
                      <td className="text-center py-4 px-4">
                        <div className="space-y-1">
                          <div className="text-red-600">{row.vpn.value}</div>
                          <div className="text-sm text-gray-500">{row.vpn.desc}</div>
                        </div>
                      </td>
                      <td className="text-center py-4 px-4 bg-orange-50">
                        <div className="space-y-1">
                          <div className="text-green-600 font-medium">{row.lingexpress.value}</div>
                          <div className="text-sm text-gray-600">{row.lingexpress.desc}</div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-700">{row.benefit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-6 py-3 rounded-xl">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">做正经生意，用专业网络</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">满足您多样化的跨境业务场景</h2>
          </div>

          <Tabs defaultValue="ecommerce" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              {useCases.map((useCase) => (
                <TabsTrigger key={useCase.id} value={useCase.id} className="text-sm">
                  {useCase.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {useCases.map((useCase) => (
              <TabsContent key={useCase.id} value={useCase.id} className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-4">{useCase.title}</h3>
                      <p className="text-gray-600 mb-6">{useCase.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {useCase.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
                      <ImageWithFallback
                        src={useCase.image}
                        alt={useCase.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">透明定价，选择最适合您的方案</h2>
            <p className="text-gray-600">所有套餐均包含专属跨境通道，工信部合规认证</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`p-8 text-center hover:shadow-xl transition-all ${plan.popular ? 'ring-2 ring-orange-500 scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="bg-orange-600 text-white mb-4">推荐方案</Badge>
                )}
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{plan.speed}</div>
                  <div className="text-sm text-gray-500">专线带宽</div>
                </div>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-orange-600 mb-1">¥{plan.monthlyFee}</div>
                  <div className="text-sm text-gray-500">月租费</div>
                  <div className="text-sm text-gray-400 mt-2">安装费: ¥{plan.setupFee}</div>
                </div>
                
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-orange-600 hover:bg-orange-700' : 'variant-outline'}`}
                  onClick={() => scrollToSection('contact')}
                >
                  获取详细报价
                </Button>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              * 默认提供1个独立IP，增加IP月租150元 | 支持多种部署方式和定制化服务
            </p>
          </div>
        </div>
      </section>

      {/* Deployment & Trust */}
      <section id="deployment" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">我们承诺，专业护航</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Deployment Process */}
            <div>
              <h3 className="mb-8 text-center">两周上线路线图</h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "需求确认", desc: "深入了解业务需求，定制专属方案", time: "1-2天" },
                  { step: "2", title: "开通试点", desc: "快速开通试点线路，小规模验证", time: "3-5天" },
                  { step: "3", title: "效果对比", desc: "A/B对比测试，量化效果提升", time: "5-7天" },
                  { step: "4", title: "全量上线", desc: "全面切换，专业团队护航", time: "1-2天" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-full font-medium">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {item.time}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div>
              <h3 className="mb-8 text-center">权威认证与合作</h3>
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="mb-1">中国电信官方合作</h4>
                      <p className="text-gray-600 text-sm">汕头专属合规跨境通道，海底光缆直连</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="mb-1">工信部进网许可</h4>
                      <p className="text-gray-600 text-sm">G102设备获得官方认证，合规运营</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="mb-1">CQC安全认证</h4>
                      <p className="text-gray-600 text-sm">产品质量与安全双重保障</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-white">立即开始，让您的出海业务畅通无阻！</h2>
            <p className="text-orange-100">填写信息获取免费网络诊断，专业团队将在24小时内联系您</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">姓名 *</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleFormChange('name', e.target.value)}
                      placeholder="请输入您的姓名"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">联系电话 *</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleFormChange('phone', e.target.value)}
                      placeholder="请输入联系电话"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">公司名称</label>
                  <Input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleFormChange('company', e.target.value)}
                    placeholder="请输入公司名称"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">需求描述</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => handleFormChange('description', e.target.value)}
                    placeholder="请简述您的业务需求和遇到的网络问题"
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                >
                  <Send className="mr-2 w-4 h-4" />
                  提交，获取免费网络诊断
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="mb-6 text-white">其他联系方式</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium">咨询热线</div>
                      <div className="text-orange-100">sales@lingbrain.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium">商务邮箱</div>
                      <div className="text-orange-100">sales@lingbrain.com</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Highlight */}
              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="mb-4 text-white">立即行动的理由</h4>
                <ul className="space-y-3">
                  {[
                    "免费网络诊断评估",
                    "专属解决方案设计", 
                    "两周快速上线",
                    "7x24专业技术支持"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-orange-100">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <span className="text-gray-300">© 2024 汕头市中科图灵科技有限责任公司</span>
            </div>
            <div className="text-sm text-gray-400">
              LingExpress - 专业跨境网络解决方案
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
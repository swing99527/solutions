import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { 
  ArrowLeft, 
  Calendar, 
  Cpu, 
  TrendingUp, 
  Users, 
  Zap, 
  Target, 
  Clock, 
  DollarSign,
  Settings,
  Brain,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Layers,
  Shuffle,
  Star,
  Phone,
  Mail
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImage from "figma:asset/fe3c23c5ed29e662f22e6744f2cf4cdbae6fa88d.png";

interface SmartSchedulingProps {
  onBack: () => void;
}

export default function SmartScheduling({ onBack }: SmartSchedulingProps) {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'challenges', 'solution', 'features', 'benefits', 'conclusion'];
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

  const challenges = [
    {
      title: "成本黑洞",
      icon: DollarSign,
      items: [
        "原料浪费严重：残卷、大修边无法有效利用",
        "能耗居高不下：频繁启停与低速运行",
        "隐性成本高：废品、补单成本难以估量"
      ]
    },
    {
      title: "效率之困", 
      icon: Clock,
      items: [
        "排程耗时长：数小时手动规划，响应迟缓",
        "频繁换纸/换楞：缺乏全局优化，频繁停机",
        "生产瓶颈难测：无法预知组合对效率的影响"
      ]
    },
    {
      title: "经验壁垒",
      icon: Users,
      items: [
        "决策依赖个人：\"老师傅\"模式风险集中",
        "人才培养周期长：新人成长缓慢",
        "知识无法传承：宝贵经验随人员离职而流失"
      ]
    }
  ];

  const features = [
    {
      id: "sorting",
      title: "智能排序引擎：构建最优生产路径",
      description: "遵循核心生产约束、最小化切换成本、保障生产稳定性、实时量化决策",
      icon: Shuffle,
      details: [
        "AI决策核心融合生产约束、切换成本、生产稳定性三大要素",
        "实时量化决策评分和关键指标",
        "秒级响应的最优路径规划"
      ]
    },
    {
      id: "optimization",
      title: "智能合并与自动缩边", 
      description: "智能合并优化 & 自动缩边方案",
      icon: Layers,
      details: [
        "实时识别小批量订单，智能评估材质相似性",
        "自动推送\"用好料代差料\"合并方案，减少换纸频次",
        "监测小修边订单，提供经过验证的缩边方案，降低原料损耗"
      ]
    },
    {
      id: "processing",
      title: "订单级的精细化处理",
      description: "深入细节，恰到好处",
      icon: Target,
      details: [
        "智能选择大修边首单生产",
        "优化订单顺序，形成\"修边凹形\"布局保护小修边订单",
        "保持\"切长递减\"，提高堆码效率"
      ]
    }
  ];

  const benefits = [
    { title: "降低物料浪费", value: "28%", icon: TrendingUp, color: "text-green-600" },
    { title: "减少换纸次数", value: "35%", icon: Zap, color: "text-blue-600" },
    { title: "排程耗时缩短", value: "52.59%", icon: Clock, color: "text-purple-600", subtitle: "从数小时到秒级" },
    { title: "新人上手速度提升", value: "80%", icon: Users, color: "text-orange-600" }
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
                { id: 'challenges', label: '行业困境' },
                { id: 'solution', label: '解决方案' },
                { id: 'features', label: '核心功能' },
                { id: 'benefits', label: '优势效益' },
                { id: 'conclusion', label: '总结' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600 font-medium' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <Button 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => window.open('mailto:sales@lingbrain.com', '_blank')}
            >
              预约演示
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-20 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1713463374257-16790466d9af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0JTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NTgxMTI1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-8">
            <Brain className="w-4 h-4" />
            AI驱动的智能制造解决方案
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            智能排程，驱动未来
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 mb-8">
            中科图灵为您打破生产瓶颈，实现降本增效。
            融合先进AI与您的专家智慧，将少量排程样本转化为驱动全厂效率提升的智能决策引擎。
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('challenges')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            了解更多
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Industry Challenges */}
      <section id="challenges" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">您的工厂是否也面临同样的困境？</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-red-700">{challenge.title}</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    {challenge.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-xl">
              <Zap className="w-5 h-5" />
              <span>亟需智能引领：实现7x24小时在线优化、通过人机协同持续进化</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section id="solution" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">一体化智能决策：将专家经验模型化，打破个人能力壁垒</h2>
            <p className="max-w-4xl mx-auto text-gray-600">
              融合先进AI与您的专家智慧，将少量排程样本，转化为驱动全厂效率提升的、可持续进化的智能决策引擎。
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Process Flow */}
            <div className="space-y-8">
              <h3>智能决策流程</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "少量专家样本", desc: "收集专家排程经验和历史数据", icon: Users },
                  { step: "02", title: "时序大模型", desc: "AI学习并建模排程规律和约束", icon: Brain },
                  { step: "03", title: "待生产订单", desc: "输入新订单，获得最优排程方案", icon: Calendar }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl font-medium">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Core Functions Preview */}
            <div className="space-y-6">
              <h3>三大核心功能</h3>
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-md transition-shadow cursor-pointer" onClick={() => scrollToSection('features')}>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1">{feature.title.split('：')[0]}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Detail */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">核心功能详解</h2>
          </div>

          <Tabs defaultValue="sorting" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              {features.map((feature) => (
                <TabsTrigger key={feature.id} value={feature.id} className="text-sm">
                  {feature.title.split('：')[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <TabsContent key={feature.id} value={feature.id} className="space-y-8">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3>{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto">{feature.description}</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {feature.details.map((detail, index) => (
                      <Card key={index} className="p-6 text-center">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="w-6 h-6" />
                        </div>
                        <p className="text-gray-700">{detail}</p>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">可量化的效益提升</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                  <div className={`w-16 h-16 ${benefit.color.replace('text-', 'bg-').replace('-600', '-50')} ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className={`text-3xl mb-2 ${benefit.color}`}>
                    {benefit.value}
                  </div>
                  <h4 className="mb-2">{benefit.title}</h4>
                  {benefit.subtitle && (
                    <p className="text-sm text-gray-500">{benefit.subtitle}</p>
                  )}
                </Card>
              );
            })}
          </div>

          {/* Additional Benefits */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-purple-600" />
                <h3>人机协同与持续学习</h3>
              </div>
              <p className="text-gray-600">
                模型定期迭代，系统记录并学习专家经验，不断进化。
                通过人机协同的方式，确保AI决策与实际生产需求保持高度匹配。
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-green-600" />
                <h3>灵活部署与专业服务</h3>
              </div>
              <p className="text-gray-600">
                支持云端SaaS和本地化部署，数据安全不出本地。
                专业团队提供快速实施与持续服务，确保系统稳定运行。
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section id="conclusion" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-3 h-3 bg-white/30 rounded-full" />
              ))}
            </div>
          </div>
          
          <h2 className="mb-6 text-white">总结与展望</h2>
          <p className="max-w-4xl mx-auto text-blue-100 mb-8 leading-relaxed">
            AI智能排程系统是精益生产的强大工具。未来将集成更多生产数据，实现跨工厂协同排程，
            提供更精准的成本与交期预测，推动工厂迈向智慧制造新时代。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-blue-600 hover:bg-blue-50"
              onClick={() => window.open('mailto:sales@lingbrain.com', '_blank')}
            >
              <Phone className="mr-2 w-4 h-4" />
              预约演示
            </Button>
            <Button 
              size="lg" 
              className="bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700"
              onClick={() => window.open('mailto:sales@lingbrain.com', '_blank')}
            >
              <Mail className="mr-2 w-4 h-4" />
              联系我们
            </Button>
          </div>
          
          <div className="text-blue-200">
            中科图灵
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src={logoImage} 
                alt="中科图灵科技" 
                className="h-8 w-auto opacity-80"
              />
              <span className="text-gray-300">© 2024 汕头市中科图灵科技有限责任公司</span>
            </div>
            <div className="text-sm text-gray-400">
              Powered by LINGBRAIN AI Technology
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
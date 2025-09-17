import { useState } from "react";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { ArrowRight, Palette, TrendingUp, Heart, Settings } from "lucide-react";
import logoImage from "figma:asset/fe3c23c5ed29e662f22e6744f2cf4cdbae6fa88d.png";
import SmartScheduling from "./components/SmartScheduling";

// 配置对象 - 使用默认配置，在实际部署时可以通过环境变量或配置文件设置
const solutionConfig = {
  WEAVEMIND_URL: 'https://weavemind.cyber-router.com', // 织慧™智能纺织设计平台
  BAOINFO_URL: 'https://tn.cyber-router.com',          // 标讯领航员招投标平台
  PSYCHAI_URL: 'https://slidepresentation.cyber-router.com/', // AI心理健康智能副驾
  CONTACT_URL: 'mailto:sales@lingbrain.com', // 联系我们邮箱
  DEMO_URL: 'mailto:sales@lingbrain.com'     // 预约演示邮箱
};

const solutions = [
  {
    id: 'weavemind',
    title: '织慧™',
    subtitle: 'WeaveMind · 图灵智脑',
    description: 'AI驱动的智能纺织设计平台，将您的历史图案库转化为创新引擎，大幅提升生产效率',
    icon: Palette,
    color: 'bg-blue-50 text-blue-600',
    category: '创意设计',
    link: solutionConfig.WEAVEMIND_URL
  },
  {
    id: 'baoinfo',
    title: '标讯领航员',
    subtitle: 'BaoInfo Navigator · 图灵智脑',
    description: '专为能源与运营商领域打造的一体化招投标作战平台。用AI将招投标从不确定性的"赌博"，转变为有数据支撑的"科学战争"',
    icon: TrendingUp,
    color: 'bg-green-50 text-green-600',
    category: '商业决策',
    link: solutionConfig.BAOINFO_URL
  },
  {
    id: 'psychai',
    title: 'AI心理健康智能副驾',
    subtitle: 'PsychAI Assistant · 图灵智脑',
    description: 'AI驱动的心理健康智能副驾赋能临床医生，重塑心理评估与诊断的未来',
    icon: Heart,
    color: 'bg-purple-50 text-purple-600',
    category: '医疗健康',
    link: solutionConfig.PSYCHAI_URL
  },
  {
    id: 'smartscheduling',
    title: '智能排程',
    subtitle: 'Smart Scheduling · 图灵智脑',
    description: '专为纸板生产制造企业打造的AI驱动智能排程解决方案，将专家经验模型化，实现降本增效',
    icon: Settings,
    color: 'bg-orange-50 text-orange-600',
    category: '智能制造',
    link: '/smart-scheduling'
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleSolutionClick = (link: string) => {
    if (link === '/smart-scheduling') {
      // 内部路由，切换到智能排程页面
      setCurrentPage('smart-scheduling');
      return;
    }
    window.open(link, '_blank');
  };

  if (currentPage === 'smart-scheduling') {
    return <SmartScheduling onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src={logoImage} 
                alt="中科图灵科技" 
                className="h-12 w-auto"
              />
            </div>
            <Badge variant="secondary" className="px-3 py-1">
              AI Solutions Platform
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            智能科技 · 引领未来
          </div>
          <div className="mb-4">
            <Badge variant="outline" className="px-6 py-2 text-sm bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              LINGBRAIN 图灵智脑系列
            </Badge>
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            中科图灵AI解决方案矩阵
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 mb-8">
            图灵智脑系列融合前沿人工智能技术，为纺织设计、招投标决策、心理健康诊断、智能制造等垂直领域提供专业的AI驱动解决方案，
            助力企业数字化转型与智能化升级。
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <Card key={solution.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1 h-full">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl ${solution.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <Badge variant="outline" className="text-xs">
                        {solution.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700">
                        图灵智脑
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="mb-1 group-hover:text-blue-600 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {solution.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                    {solution.description}
                  </p>
                  
                  <Button 
                    onClick={() => handleSolutionClick(solution.link)}
                    className="w-full group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mt-auto"
                  >
                    了解详情
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Series Overview */}
        <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 border border-blue-100 mb-12">
          <div className="mb-6">
            <Badge className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-4">
              LINGBRAIN 图灵智脑系列
            </Badge>
            <h2 className="mb-4">四大垂直AI解决方案</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="p-4 bg-white/80 rounded-xl">
              <Palette className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="mb-1">创意设计</h4>
              <p className="text-sm text-gray-600">纺织图案智能生成</p>
            </div>
            <div className="p-4 bg-white/80 rounded-xl">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h4 className="mb-1">商业决策</h4>
              <p className="text-sm text-gray-600">招投标智能分析</p>
            </div>
            <div className="p-4 bg-white/80 rounded-xl">
              <Heart className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h4 className="mb-1">医疗健康</h4>
              <p className="text-sm text-gray-600">心理评估辅助诊断</p>
            </div>
            <div className="p-4 bg-white/80 rounded-xl">
              <Settings className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <h4 className="mb-1">智能制造</h4>
              <p className="text-sm text-gray-600">生产排程优化</p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            图灵智脑系列基于深度学习和大模型技术，为不同行业量身定制AI解决方案。
            每个产品都经过深度行业调研和实践验证，确保为企业带来实质性的效率提升和成本节约。
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-12 border border-gray-200/50">
          <h2 className="mb-4">
            开启智能化转型之旅
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            图灵智脑系列已为众多企业提供服务，通过垂直领域的AI技术助力业务增长和效率提升。
            立即联系我们，了解如何为您的企业定制专属AI解决方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => window.open(solutionConfig.CONTACT_URL, '_blank')}
            >
              联系我们
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open(solutionConfig.DEMO_URL, '_blank')}
            >
              观看演示
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200/50 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src={logoImage} 
                alt="中科图灵科技" 
                className="h-8 w-auto opacity-80"
              />
              <span className="text-gray-600">© 2024 汕头市中科图灵科技有限责任公司</span>
            </div>
            <div className="text-sm text-gray-500">
              Powered by AI Technology
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
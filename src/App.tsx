import { useState } from 'react';
import { FileSearch, Layers, GitBranch, CheckSquare, Zap, Home } from 'lucide-react';

type Page = 'home' | 'analyze' | 'simplify' | 'organize' | 'standardize' | 'automate';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navItems = [
    { id: 'home' as Page, label: 'Home', icon: Home },
    { id: 'analyze' as Page, label: 'Analyze', icon: FileSearch },
    { id: 'simplify' as Page, label: 'Simplify', icon: Layers },
    { id: 'organize' as Page, label: 'Organize', icon: GitBranch },
    { id: 'standardize' as Page, label: 'Standardize', icon: CheckSquare },
    { id: 'automate' as Page, label: 'Automate', icon: Zap },
  ];

  const steps = [
    {
      icon: FileSearch,
      title: 'Analyze',
      description: 'Observe, map, and understand what slows down your processes.',
    },
    {
      icon: Layers,
      title: 'Simplify',
      description: 'Eliminate unnecessary complexity and focus on what matters most.',
    },
    {
      icon: GitBranch,
      title: 'Organize',
      description: 'Redefine roles, workflows, and responsibilities with clarity.',
    },
    {
      icon: CheckSquare,
      title: 'Standardize',
      description: 'Create alignment and consistency across the entire team.',
    },
    {
      icon: Zap,
      title: 'Automate',
      description: 'Automate repetitive actions and empower people to create more value.',
    },
  ];

  const renderContent = () => {
    if (currentPage === 'home') {
      return (
        <>
          <section className="text-center py-16 px-4">
            <div className="max-w-5xl mx-auto">
              <div className="max-w-4xl mx-auto text-left space-y-6 mb-16">
                <p className="text-lg text-[#f0f0f0] leading-relaxed">
                  Let's face it, most "efficiency frameworks" sound great in PowerPoint but collapse the second you try them in the real world.
                  They're either too corporate, too academic, or too heavy for teams who just need to get stuff done.
                </p>

                <p className="text-lg text-[#f0f0f0] leading-relaxed">
                  <strong className="text-[#fcb900]">That's why ASOSA was born.</strong><br />
                  A no-nonsense, five-step methodology that helps teams and leaders fix messy workflows, without needing any black or purple belt in Lean Six Sigma.
                </p>

                <h2 className="text-3xl font-semibold text-[#f0f0f0] pt-8">
                  What Does ASOSA Stand For?
                </h2>

                <p className="text-lg text-[#f0f0f0] leading-relaxed">
                  ASOSA stands for:
                </p>

                <ul className="space-y-3 text-lg text-[#f0f0f0]">
                  <li><strong className="text-[#fcb900]">Analyze:</strong> Map the current way of working and identify pain points.</li>
                  <li><strong className="text-[#fcb900]">Simplify:</strong> Remove unnecessary steps, roles, tools, and approvals.</li>
                  <li><strong className="text-[#fcb900]">Organize:</strong> Rebuild the process into a clear, owned workflow.</li>
                  <li><strong className="text-[#fcb900]">Standardize:</strong> Make this the new agreed way of working across the team.</li>
                  <li><strong className="text-[#fcb900]">Automate:</strong> Systematically automate repetitive, low-value actions.</li>
                </ul>

                <p className="text-lg text-[#f0f0f0] leading-relaxed">
                  It's not theoretical, it's practical. You can apply it to sales, HR, IT, Finance, Operations… basically any team that has more meetings than results.
                </p>

                <h2 className="text-3xl font-semibold text-[#f0f0f0] pt-8">
                  Why ASOSA works when others don't (or less)
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#f0f0f0] mb-1">It's human.</h3>
                    <p className="text-lg text-[#f0f0f0] leading-relaxed">
                      You don't need consultants to understand it. You can explain it to your team in two minutes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#f0f0f0] mb-1">It's linear.</h3>
                    <p className="text-lg text-[#f0f0f0] leading-relaxed">
                      Each step logically prepares the next, no skipping ahead to "automation" before you clean the mess.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#f0f0f0] mb-1">It's scalable.</h3>
                    <p className="text-lg text-[#f0f0f0] leading-relaxed">
                      Works for one-person teams and 500-person companies. The logic doesn't change, just the tools.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#f0f0f0] mb-1">It's honest.</h3>
                    <p className="text-lg text-[#f0f0f0] leading-relaxed">
                      ASOSA acknowledges that most inefficiency is human-made: too many steps, unclear ownership, legacy habits. It fixes that first.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-semibold text-[#f0f0f0] pt-8">
                  Who Is ASOSA For?
                </h2>

                <ul className="space-y-2 text-lg text-[#f0f0f0]">
                  <li>• CEOs and founders who want a cleaner operation without micromanagement</li>
                  <li>• Business Consultants tired of buzzword frameworks</li>
                  <li>• Team leaders who want processes that actually work</li>
                  <li>• Anyone who's ever said, "Why the hell do we do it this way?"</li>
                  <li>• Or just for people who want to differentiate themselves from the others.</li>
                </ul>

                <h2 className="text-3xl font-semibold text-[#f0f0f0] pt-8">
                  The Secret Sauce: Simplicity + Accountability
                </h2>

                <p className="text-lg text-[#f0f0f0] leading-relaxed">
                  ASOSA's power isn't just the order of steps, it's the mindset shift it brings.
                  You move from "doing more" to "doing less, but better."
                  You build processes that survive vacations, sick days, and new hires.
                </p>

                <h2 className="text-3xl font-semibold text-[#f0f0f0] pt-8">
                  Alright, ready to start now?
                </h2>

                <p className="text-lg text-[#f0f0f0] leading-relaxed">
                  Start at <strong className="text-[#fcb900]">Step 1: Analyze</strong>, where we stop pretending everything's fine and actually look at what's broken.
                  From there, you'll move step-by-step toward a cleaner, calmer, and more scalable way of working.
                </p>
              </div>
            </div>
          </section>

          <section className="pb-16 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="bg-[#32373c] p-6 rounded-xl shadow-sm border border-[#000000] text-center transition-transform duration-200 hover:-translate-y-2"
                  >
                    <div className="w-20 h-20 mx-auto mb-4 bg-[#000000] rounded-lg flex items-center justify-center">
                      <Icon size={40} className="text-[#fcb900]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#fcb900] mb-2">{step.title}</h3>
                    <p className="text-[#f0f0f0] text-sm leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </>
      );
    }

    if (currentPage === 'analyze') {
      return (
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-[#32373c] rounded-xl shadow-sm border border-[#000000] p-8">
            <h2 className="text-3xl font-semibold text-[#fcb900] text-center mb-8">
              Step 1 – Analyze
            </h2>

            <div className="flex justify-center mb-8">
              <div className="w-64 h-64 bg-gradient-to-br from-[#000000] to-[#232323] rounded-lg flex items-center justify-center">
                <FileSearch size={120} className="text-[#fcb900] opacity-20" />
              </div>
            </div>

            <div className="space-y-4 text-[#f0f0f0] leading-relaxed">
              <p>
                The <strong className="text-[#fcb900]">Analyze</strong> phase is about truly understanding how work happens today.
                By observing, mapping, and interviewing key people, you uncover the pain points and inefficiencies
                that affect productivity and morale.
              </p>
              <p>
                The outcome is a shared and objective map of the current processes — a foundation for meaningful simplification.
              </p>
            </div>
          </div>
        </section>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-[#232323] flex flex-col">
      <header className="bg-[#232323] text-[#f0f0f0]">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-semibold mb-2">
            {currentPage === 'home' ? 'The ASOSA Methodology' : `ASOSA | ${navItems.find(n => n.id === currentPage)?.label}`}
          </h1>
        </div>
      </header>

      <nav className="bg-[#32373c] shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center flex-wrap gap-2 py-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-[#fcb900] text-[#000000]'
                      : 'text-[#f0f0f0] hover:bg-[#000000] hover:text-[#fcb900]'
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {renderContent()}
      </main>

      <footer className="bg-[#232323] text-[#f0f0f0] mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center">
          <p className="text-sm">© 2025 ASOSA | Transformation Framework by Fabio</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

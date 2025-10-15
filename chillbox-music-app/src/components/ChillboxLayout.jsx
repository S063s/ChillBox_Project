import Header from './Header.jsx'
import BottomNav from './BottomNav.jsx'


function ChillboxLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}

export default ChillboxLayout;
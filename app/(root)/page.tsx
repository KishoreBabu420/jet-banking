import HeaderBox from '@/components/headerBox';
import RightSidebar from '@/components/rightSidebar';
import TotalBalanceBox from '@/components/totalBalanceBox';

const Home = () => {
  const loggedIn = {
    firstName: 'Rajesh',
    lastName: 'Kumar',
    email: 'rajesh@gmail.com',
  };
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access and manage your account and transactions efficiently'
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.45}
          />
        </header>
        Recent Transactions
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 232.5 }]}
      />
    </section>
  );
};

export default Home;

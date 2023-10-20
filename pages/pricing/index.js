import Head from "next/head";
import PricingCard from "../../components/pricing/pricing-card";
import PricingNeck from "../../components/pricing/pricing-neck";
function PricingPage(props) {


  

  return (
    <div>
      <Head>
        <title>Pricing and Subscription - Miladra OneStop Solutions</title>
        <meta
          name="description"
          content="Find a lot of great courses that allow you to evolve..."
        />
      </Head>
      <PricingNeck />
      <div className="flex">
      <div className="flex-auto">
          <PricingCard 
            price={'Basic'}
            price1={'$99'}
            text200={'What’s included'}
            subtitle={'For individuals'}
            popular={'Popular'}
            text2001={'Up to 3 team members'}
            text2002={'All analytics features'}
            text2003={'Normal support'}
            text2004={'Up to 250,000 tracked visits'}
            showPopular={false}
          />
      </div>
      <div className="flex-auto">
      <PricingCard 
        price={'Pro'}
        price1={'$199'}
        text200={'What’s included'}
        subtitle={'For Startups'}
        popular={'Popular'}
        text2001={'Up to 10 team members'}
        text2002={'All analytics features'}
        text2003={'Premium support'}
        text2004={'Up to 100,000 tracked visits'}
        showPopular={true}
      />
      </div>
      <div className="flex-auto">
      <PricingCard 
        price={'Enterprise'}
        price1={'$399'}
        text200={'What’s included'}
        subtitle={'For Big Companies'}
        popular={'Popular'}
        text2001={'Up to 50 team members'}
        text2002={'All analytics features'}
        text2003= {'Dedicated Support'} 
        text2004={'Up to 500,000 tracked visits'}
        showPopular={false}
      />
      </div>
      </div>
    </div>
  );
}

export default PricingPage;
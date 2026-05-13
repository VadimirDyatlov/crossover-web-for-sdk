import { useLocation } from 'wouter';
import { AnimatedSwitch } from '@/shared/lib/mini-motion/animated-switch';
import { RouteDef } from '@/shared/lib/mini-motion/route-def';
import { Button } from '@/shared/ui';

const Home = () => {
  const navigate = useLocation()[1];
  return (
    <div className="p-8 h-full w-full bg-blue-500 text-back border-[3px] border-red-500">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <div className="absolute bottom-8 left-8 right-8 flex gap-4">
        <Button
          className="px-4 py-2 bg-green-500 text-white rounded-xl"
          onClick={() => {
            navigate('/about', {
              state: {
                animate: 'blur',
                // animate: 'slide',
              },
            });
          }}
        >
          About
        </Button>
        <Button
          className="px-4 py-2 bg-orange-500 text-white rounded-xl"
          onClick={() => {
            navigate('/settings', {
              state: {
                // animate: 'slide',
                //  animate: 'none'
              },
            });
          }}
        >
          Settings
        </Button>
        <Button
          className="px-4 py-2 bg-purple-500 text-white rounded-xl"
          onClick={() => {
            navigate('/contact', {
              state: {
                animate: 'blur',
                // animate: 'slide',
              },
            });
          }}
        >
          Contact
        </Button>
      </div>
    </div>
  );
};

const About = () => {
  const navigate = useLocation()[1];
  return (
    <div className="p-8 h-full w-full bg-green-500 text-back">
      <h1 className="text-2xl font-bold">About Page</h1>
      <div className="absolute bottom-8 left-8 right-8 flex gap-4">
        <Button
          className="px-4 py-2 bg-blue-500 text-white rounded-xl"
          onClick={() => {
            navigate('/', {
              state: {
                animate: 'slide-back',
                // animate: 'slide',
              },
            });
          }}
        >
          Home
        </Button>
        <Button
          className="px-4 py-2 bg-purple-500 text-white rounded-xl"
          onClick={() => {
            navigate('/contact', {
              state: {
                animate: 'slide',
              },
            });
          }}
        >
          Contact
        </Button>
        <Button
          className="px-4 py-2 bg-orange-500 text-white rounded-xl"
          onClick={() => {
            navigate('/settings', {
              state: {
                // animate: 'slide',
                //  animate: 'none'
              },
            });
          }}
        >
          Settings
        </Button>
      </div>
    </div>
  );
};

const Contact = () => {
  const navigate = useLocation()[1];
  return (
    <div className="p-8 h-full w-full bg-purple-500 text-back">
      <h1 className="text-2xl font-bold">Contact Page</h1>
      <div className="absolute bottom-8 left-8 right-8 flex gap-4">
        <Button
          className="px-4 py-2 bg-green-500 text-white rounded-xl"
          onClick={() => {
            navigate('/about', {
              state: {
                animate: 'blur',
                // animate: 'slide',
              },
            });
          }}
        >
          About
        </Button>
        <Button
          className="px-4 py-2 bg-orange-500 text-white rounded-xl"
          onClick={() => {
            navigate('/settings', {
              state: {
                // animate: 'none'
                animate: 'slide',
              },
            });
          }}
        >
          Settings
        </Button>
        <Button
          className="px-4 py-2 bg-blue-500 text-white rounded-xl"
          onClick={() => {
            navigate('/', {
              state: {
                animate: 'slide-back',
                // animate: 'slide',
              },
            });
          }}
        >
          Home
        </Button>
      </div>
    </div>
  );
};

const Settings = () => {
  const navigate = useLocation()[1];
  return (
    <div className="p-8 h-full w-full bg-orange-500 text-back border-[3px] border-green-500">
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="absolute bottom-8 left-8 right-8 flex gap-4">
        <Button
          className="px-4 py-2 bg-purple-500 text-white rounded-xl"
          onClick={() => {
            navigate('/contact', {
              state: {
                // animate: 'blur'
                // animate: 'slide',
                animate: 'slide-back',
              },
            });
          }}
        >
          Contact
        </Button>
        <Button
          className="px-4 py-2 bg-blue-500 text-white rounded-xl"
          onClick={() => {
            navigate('/', {
              state: {
                animate: 'slide-back',
                // animate: 'slide',
              },
            });
          }}
        >
          Home
        </Button>
        <Button
          className="px-4 py-2 bg-green-500 text-white rounded-xl"
          onClick={() => {
            navigate('/about', {
              state: {
                animate: 'blur',
                // animate: 'slide',
              },
            });
          }}
        >
          About
        </Button>
      </div>
    </div>
  );
};

export const Routing = () => {
  return (
    <AnimatedSwitch>
      <RouteDef path="/" component={Home} />
      <RouteDef path="/about" component={About} />
      <RouteDef path="/contact" component={Contact} />
      <RouteDef path="/settings" component={Settings} />

      {/* <RouteDef path="/" component={CatalogPage} />
      <RouteDef path="/cart" component={CartPage} />
      <RouteDef path="/my-orders" component={OrdersPage} />
      <RouteDef path="*" component={NotFoundPage} /> */}
    </AnimatedSwitch>
  );
};

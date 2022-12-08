import "./App.css";
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  let data = [
    {
      plan: "Free",
      price: "0",

      features: [
        {
          title: "Single User",
          condition: true,
        },
        {
          title: "5GB Storage",
          condition: true,
        },
        {
          title: "Unlimited Public Projects",
          condition: true,
        },
        {
          title: "Community Access",
          condition: true,
        },
        {
          title: "Unlimited Private Projects",
          condition: false,
        },
        {
          title: "Dedicated phone support",
          condition: false,
        },
        {
          title: "Free Subdomain",
          condition: false,
        },
        {
          title: "Monthly status reports",
          condition: false,
        },
      ],
    },
    {
      plan: "Plus",
      price: "9",
      features: [
        {
          title: <b>5 Users</b>,
          condition: true,
        },
        {
          title: "50GB Storage",
          condition: true,
        },
        {
          title: "Unlimited Public Projects",
          condition: true,
        },
        {
          title: "Community Access",
          condition: true,
        },
        {
          title: "Unlimited Private Projects",
          condition: true,
        },
        {
          title: "Dedicated phone support",
          condition: true,
        },
        {
          title: " Free Subdomain",
          condition: true,
        },
        {
          title: "Monthly status reports",
          condition: false,
        },
      ],
    },
    {
      plan: "Pro",
      price: "49",
      features: [
        {
          title: <b>Unlimited Users</b>,
          condition: true,
        },
        {
          title: "150GB Storage",
          condition: true,
        },
        {
          title: "Unlimited Public Projects",
          condition: true,
        },
        {
          title: "Community Access",
          condition: true,
        },
        {
          title: "Unlimited Private Projects",
          condition: true,
        },
        {
          title: "Dedicated phone support",
          condition: true,
        },
        {
          title: "Unlimited Free Subdomain",
          condition: true,
        },
        {
          title: "Monthly status reports",
          condition: true,
        },
      ],
    },
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {data.map((price) => {
            return <Card price={price}></Card>;
          })}
        </div>
      </div>
    </section>
  );
}

export default App;

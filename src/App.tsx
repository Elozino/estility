import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Content from './components/Content';
import { Root2 } from './type';

function App() {
  const [data, setData] = useState([])
  const [country, setCountry] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getData = async () => {
    setError('')
    setLoading(true)
    try {
      const result = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      if (!result.ok) {
        throw new Error(`Error: ${result.status} ${result.statusText}`);
      }
      const data = await result.json();
      setData(data);
    } catch (err: unknown) {
      // @ts-expect-error "Catch clause variable type annotation must be 'any' or 'unknown' if specified"
      setError(err?.message ?? "An error occurred, try again")
    } finally {
      setLoading(false)
    }
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          {loading ? (
            <h1>
              Loading Please Wait
            </h1>
          ) : error ? (
            <h1>{error}</h1>
          ) : !!data && data?.map((item: Root2, index) => (
            <div className="card_wrapper" key={index}>
              <Card>
                <Card.Image>
                  <img src={item.flags.png} alt="flag" />
                </Card.Image>
                <Card.Content>
                  <Card.Header>
                    <h3 className="card_header_title">{item?.name?.official}</h3>
                    <div className="card_header_text">{item?.region}</div>
                  </Card.Header>
                  <Content icon="🧑‍🤝‍🧑" text={item?.population} />
                  <Content icon="📢" text={item?.languages?.eng} />
                  <Content icon="💵"
                  // @ts-expect-error Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Currencies'.  No index signature with a parameter of type 'string' was found on type 'Currencies'
                    text={Object.keys(item?.currencies)[0] + ", " + item?.currencies[Object.keys(item?.currencies)[0]]?.symbol}
                  />
                </Card.Content>
              </Card>
              <Card>
                <Card.Image>
                  <img src={item?.coatOfArms?.png} alt="coat of arm" />
                </Card.Image>
                <Card.Content>
                  <Content icon="🧑‍🤝‍🧑" text={item?.capital[0]} />
                  <Content icon="📢" text={`${item?.latlng[0]} latitude, ${item?.latlng[1]} longitude`} />
                  <Content icon="🏀" text={item?.startOfWeek.toUpperCase()} />
                  <Content icon="🌉" text={item?.region} />
                  <Content icon="✔️" text="Map Link" link={item?.maps?.googleMaps} />
                </Card.Content>
              </Card>
            </div>
          ))}
        </div>

        <div className="form">
          <input type="text" className="form_input"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder='Enter a country name'
          />
          <button className="form_button"
            onClick={getData}
          >Get Details</button>
        </div>
      </div>
    </>
  )
}

export default App